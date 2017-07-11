#encoding: utf-8
Encoding.default_internal = Encoding::UTF_8
Encoding.default_external = Encoding::UTF_8

require 'fileutils'
require 'open3'
require 'resque-status'

ENV['PATH'] = File.expand_path(File.dirname(File.dirname(__FILE__))) + "/bin:" + ENV['PATH']

module Nerve; module Job

	class Process

		# It should be -23, but -8 is probably more appropriate for playout systems as the chance
		#  of clipping is really really really small, especially post comp.
		# Most playout systems default to this level.
		LUFS_REFERENCE = -12

		include Resque::Plugins::Status
		include Nerve::Database
		private

		@new_file = nil
		@is_filtered = false
		@track_id = nil

		# Returns [success?, stdout, stderr]
		def _sys(*command)
			stdout, stderr, status = Open3.capture3(*command)
			[status.success?, stdout.slice!(0..-(1 + $/.size)), stderr.slice!(0..-(1 + $/.size))]
		end

		def _debug(message)
			puts message
		end

		# Look at the file and work out its sample rate
		def investigate(file)

			result = _sys('sox', '--i', file)
			raise "Failed to read file information! #{result[2]}" unless result[0]

			bit_rate    = result[1].match(/Bit Rate\s+: ([0-9]+)k/)[1].to_i rescue 99999  # if it's empty, it's likely VBR. Let's give the benefit of the doubt
			sample_rate = result[1].match(/Sample Rate\s+: ([0-9]+)/)[1].to_i
			length      = result[1].match(/ ([0-9]+) samples/)[1].to_f / sample_rate

			# I couldn't find a gem that worked that does this, no point reinventing the wheel.
			# Let's use Python! 
			
			result = _sys('fakeflac', file)
			raise "Failed to run frequency analysis! #{result[2]}" unless result[0]

			true_freq = result[1].split("\n")[-1].to_i
			puts "True frequency is #{true_freq}"

			raise "File looks like a re-encoded #{true_freq}kbps MP3. Rejected" \
				if !options["override_bitrate"] and true_freq < $config["import"]["bitrate_min"]

			puts "Found #{bit_rate}k / #{sample_rate} Hz"

			raise "Bit-rate of #{bit_rate} is lower than the minimum of #{$config["import"]["bitrate_min"]}" \
				if !options["override_bitrate"] and bit_rate < $config["import"]["bitrate_min"]

			raise "Sample rate of #{sample_rate} is lower than #{$config["import"]["sample_min"]}" \
				if !options["override_bitrate"] and sample_rate < $config["import"]["sample_min"]

			raise "Upload is shorter than #{$config["import"]["length_min"]}" \
				if !options["override_bitrate"] and length < $config["import"]["length_min"]

			raise "Upload is shorter than #{$config["import"]["length_max"]}" \
				if !options["override_bitrate"] and length > $config["import"]["length_max"]



			[true_freq, sample_rate, length]

		end

		def investigate_loudness(file, full = false)

			# First, let's run the loudness scanner to get some cool useful data
			command = ['loudness', 'scan', '-l', file]
			command += ['-p', 'all'] if full

			result = _sys(*command)
			raise "Failed to run loudness scanner! #{result[2]}" unless result[1].include? "LUFS"

			lufs, lra, _, __, true_peak = result[1].split("\n")[0].split(",").map(&:to_f)

			data = { :lufs => lufs, :lra => lra, :true_peak => true_peak, :max_gain => nil }

			if full

				result = _sys('ecasound', '-i', file, '-o', 'null', '-ev') 
				raise "ecasound failed with #{result[2]}" unless result[1].include? "Max gain without clipping"

				data[:max_gain] = result[1].match(/.+Max gain without clipping: (\d+\.\d+)/)[1].to_f

			end

			_debug "#{file} has " + data.to_s

			return data

		end

		def convert(input, output, format, rate = nil)

			exit    = -1
			stderr  = "(no output)"

			rate    = format == "flac" ? "5" : "320" unless rate != nil
			command = ["sox", "-S", input, "-C", rate, "-t", format, output]
			command += ["silence", "1", "0.1t", "0.6%"] # remove silence from the start of the track
			command += ["fade", "0.005t"]

			Open3.popen3(*command) do | i, o, e, th |
				o.close
				last   = 0
				stderr = e.gets("\n")

				# Scary looking chunk just rips the percent from the command's output! #hacks4life
				while line = e.gets("\r")
					perc = line.match(/In:([0-9\.]+)%/)
					next if perc == nil or perc[1].to_i < last
					last = perc[1].to_f + 2
					at(perc[1].to_i / 4, 100, "#{perc[1].to_i / 4} / 100 - converting input")
				end

				exit = th.value
				return exit.success? ? true : stderr

			end	

			return "Could not run `sox`. File not found or something??"

		end

		def ffmpeg_convert input, output

			result = _sys('ffmpeg', 
				'-i', input,
				'-ar', '44100', # We need to convert to 44100, WAV in other sample rates is buggy
				#'-map_metadata', '0',
				output)

			raise "Failed to convert into WAV: #{result[2]}" unless result[0]

		end

		# Slightly misleading, as it also does normalisation. But hey.
		# Algorithm more or less stolen from IRIS, thanks James Harrison!
		# (https://github.com/Jamie0/iris/blob/master/app/jobs/normalize_job.rb)

		def compress(input, output, format, options) 

			gain, gain_mtp, comp_ratio = 0.0, 0.0, 1.0
			raise "options should not be empty!" if options == nil

			at(25, 100, "Calculating dynamic range (loudness)")
			ld = investigate_loudness(input)

			# Great. Now, if the LRA (dynamic range) is too much, we can gently compress the track.
			# The bigger the range, the harder the compression.

			target_lra = ($config["import"]["lra"].to_f)
			target_lra = 8 if target_lra < 3

			if ld[:lra] > target_lra + 1

				# We should be a bit generous and up the comp_ratio slightly.
				comp_ratio = 1 + (1 - target_lra / ld[:lra]) * $config["import"]["compression_strength"]
				_debug("Decreasing LRA from #{ld[:lra]} to #{target_lra}")

			elsif ld[:lra] < target_lra # A really low LRA is a sign of bad mastering.
				_debug("Cowardly refusing to 'increase' the LRA (#{ld[:lra]}). Not possible?")
			end

			if comp_ratio != 1.0 and !options["override_compressor"]

				_debug("Compressing file with a ratio of #{comp_ratio}")

				at(50, 100, "Compressing audio file to improve volume")

				result = _sys('ecasound', '-i', input, '-o', output, "-el:sc4,0.15,0,250,-30,#{comp_ratio},4,6,0,0")
				raise "ecasound failed! #{result[2]}" unless File.exists? output

				# And finally, get the new loudness data. We need it to work out gain.
				ld = investigate_loudness(output)

			end


			return true if ld[:lra] == LUFS_REFERENCE

			at(75, 100, "Adjusting volume to required volume")

			# Also, get rid of the input file. No need for it. Unless we never made one.. :-)
			File.rename(output, input) unless comp_ratio == 1.0

			# If the LUFS level isn't the reference, we need to adjust the gain.
			# LUFS is more or less how loud the track sounds to the human ear.
			gain = LUFS_REFERENCE - ld[:lufs]

			_debug("Adjusting gain from #{ld[:lufs]} by #{gain} - too " + \
				(ld[:lufs] > LUFS_REFERENCE ? "high" : "low"))

			# No point doing this - it's a sign of potentially bad mastering and isn't worth it
			#if md[:true_peak] > -1.0
			#
			#	gain_mtp = -1 - md[:true_peak]
			#	gain = gain_mtp if gain > gain_mtp
			#	_debug("Adjusted gain to #{gain} to avoid DAC clipping")
			#	
			#end

			#if gain > ld[:max_gain]

				#_debug("Adjusting gain from #{gain} to #{ld[:max_gain]} to avoid clipping.")
				#gain = ld[:max_gain]

			#end
			result = _sys('ecasound', '-i', input, '-o', output, "-eadb:#{gain}")
			_debug "Adjusted gain on #{output} by #{gain}."
			raise "ecasound failed! #{result[2]}" unless File.exists? output

			return true

		end

		def tag file, data

			result = _sys('id3v2', 
				'--artist', data["artist"], 
				'--album', data["album"], 
				'--song', data["title"], 
				'--USER', 'For Radio Playout',
				'--TSRC', data["big"] ? data["big"]["track_isrc"] : "",
				file)

			raise "Failed to run `id3v2` to tag the stored file: #{result[2]}" unless result[0]

		end



		def generate_waveform file, length

			_debug "Generating a waveform of the input - hang on"
			pps = (20000 / length).to_i
			result = _sys('audiowaveform',
				'-i', file, '-o', @wave_path = "#{file}.dat",
				'-b', '8', '--pixels-per-second', pps.to_s)


			raise "Failed to generate waveform: #{result[2]}" unless result[0]

		end

		def save options

			if options["cache_id"].to_f == -1
				data = options
			else
				data = Nerve::Services::Metadata.match_meta options["cache_id"], true
			end

			genre = data["genre"].nil? ? 34 : data["genre"] rescue 34

			ext_artist_id = data["big"] ? data["big"]["artist_id"] : nil rescue nil
			ext_album_id = data["big"] ? data["big"]["album_id"] : nil rescue nil

			explicit = (data["explicit"].to_i | (options["cache_id"] == -1 ? 1 : 0)) == 1 rescue 1
			
			# For some reason, versions of libsndfile don't like parsing files with ID3 tags(?!)
			# => we have to do it after
			#tag options["file"], data

			@is_filtered = explicit

			if ext_artist_id == nil
				Database.query("INSERT INTO `artists`
					(external_id, name, created_by) VALUES (?, ?, ?)
					ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id);",
					ext_artist_id, data["artist"], options["user_id"])

				artist_id = Database.last_id
			else
				Database.query("INSERT INTO `artists`
					(external_id, name, created_by) VALUES (NULL, ?, ?);",
					data["artist"], options["user_id"])
				artist_id = Database.last_id
			end

			Database.query("INSERT INTO `albums`
				(external_id, artist, name, created_by) VALUES (?, ?, ?, ?)
				ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id);",
				ext_album_id, artist_id, data["album"], options["user_id"])

			album_id = Database.last_id

			Database.query("INSERT INTO `tracks` 
				(external_id, title, artist, album, main_genre,
					created_by, status, explicit, bitrate, sample_rate, length, waveform,
					is_library, is_automation, ext_id, instrumental)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
				data["external_id"], options["title"], artist_id, album_id,
				genre, options["user_id"], explicit ? 0 : 1, explicit ? 1 : 0,
				options["bit_rate"], options["sample_rate"], options["length"], 
				$config["import"]["generate_waveform"] ? 1 : 0,
				options["upload_library"] ? 1 : 0,  options["automation"] | false, options["ext_id"], options["instrumental"] ? 1 : 0 )

			@track_id = track_id = Database.last_id

			final_path = generate_path(track_id).join("/") + "." + $config["import"]["transport_format"]
			_debug "Exporting to #{final_path}..."

			Database.query("UPDATE `tracks` SET local_path=? WHERE id=?",
				final_path, track_id)

			@final_path = final_path = $config["export"]["directory"] + "/" + final_path

			# As we're using a directory tree, we should probably actually make the folder
			FileUtils.mkdir_p File.dirname(final_path)
			FileUtils.mv(options["file"], final_path)

			generate_waveform final_path, options["length"] if $config["import"]["generate_waveform"]

		end

		def preview options

			@preview_path = @final_path + ".ogg"

			# Generate a low quality "preview" in ogg. Ogg is pretty good low bitrate
			convert(@final_path, @preview_path, "ogg", "-1")

		end

		def generate_path id

			id = id.to_s(16).rjust(6, "0")
			first = id[0..-5]
			second = id[-4..-3]
			third = id[-2..-1]
			[first, second, third]

		end

		# This function is basically the overview of what happens
		def _run

			@temp = []

			format = $config["import"]["transport_format"]

			_options = options.clone # Make a copy, we can't mutate the original hash
			p _options

			@temp << file = _options["file"]

			# Location of "step 2" files. First for conversion, second for compressing.
			temp = Tempfile.new('nerve')
			path = temp.path
			temp.close; temp.unlink

			@temp << new_file   = path + ".0." + format
			@temp << new_file_2 = path + ".1." + format
			@temp << new_file_3 = path + "." + ".dec.wav"

			# Create a lossless/WAV version of the input so we can check it out 
			ffmpeg_convert(file, new_file_3)

			# Check the bitrate. We need to pass a PCM (WAV) in here to ensure it doesn't screw up
			rate = investigate(new_file_3)
			_options["bit_rate"]    = rate[0]
			_options["length"]      = rate[2] # TO-DO, fix
			_options["sample_rate"] = rate[1]


			# This chops off any starting intro and adds the smallest fade in (to prevent pops)
			response = convert(new_file_3, new_file, format)
			File.unlink(file) rescue nil # We may not always want to delete it.

			unless response === true
				raise "Conversion failed: #{response}" 
			end

			# Ensure that we meet at most the target LRA (loudness)
			response = compress(new_file, new_file_2, format, _options)

			unless response === true
				raise "Compression failed: #{response}" 
			end

			_options["file"] = new_file_2

			at(90, 100, "Committing to database")

			_debug "Committing track to database."
			save _options

			at(95, 100, "Generating preview")

			preview _options

			completed("Processed. Head on over to the My Uploads page to fill in song information.")

			# Run any mixins we might have.
			Nerve::Mixin::Runner.run! "created", Nerve::Model::TrackProvider.from_id(@track_id)

			# Update an external status. 3 = IMPORTED
			Object.const_get(options["status_update"]).status_update(options["ext_id"], 3, @track_id) if options["status_update"]


			# and we're... done???! what. wow. that was easy.
			# really?
			# no kidding.

			# All the other stuff is done later

		end

		# Actual method that is ran. Note the "ensure" clears up stray files etc, without
		#  losing the exception that was thrown.
		def perform
			begin
				_run
			rescue

				# If there's an error, we should delete the track
				Database.query("DELETE FROM `tracks` WHERE id=?;", @track_id) if @track_id != nil
				File.unlink(@final_path) rescue nil if @final_path != nil 
				File.unlink(@wave_path) rescue nil if @wave_path != nil
				File.unlink(@preview_path) rescue nil if @preview_path != nil

				# Update our "listener" if we have one. 2 = FAIL

				Object.const_get(options["status_update"]).status_update(options["ext_id"], 2) if options["status_update"]

				raise $!

			ensure
				puts "Cleaning up"
				# Clean up any temp files we've made
				@temp.each { | t | File.unlink(t) rescue nil }
			end
		end

	end

end; end
