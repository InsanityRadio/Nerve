require 'securerandom'
require 'fileutils'

module Nerve; module Playout; class Myriad5

	class Export

		def options
			@@options
		end

		def options= options
			@@options = options
		end

		# If we fade the song out 0.5s after the extro point, we lose the "sustaned" song issue
		#  (basically where someone sets an extro point with like 30 seconds of extro to go)
		def fade_end(input, output, extro)

			exit    = -1
			stderr  = "(no output)"

			format = "wav"

			cut_point = extro + 8.0

			command = ["sox", "-r", "44.1k", "-S", input, "-t", format, output]
			command += ["fade", "0", cut_point.to_s, "7t"]

			p command

			Open3.popen3(*command) do | i, o, e, th |
				o.close
				last   = 0
				stderr = e.gets("\n")

				# Scary looking chunk just rips the percent from the command's output! #hacks4life
				while line = e.gets("\r")
					perc = line.match(/In:([0-9\.]+)%/)
					next if perc == nil or perc[1].to_i < last
					last = perc[1].to_f + 2
					#at(perc[1].to_i / 4, 100, "#{perc[1].to_i / 4} / 100 - converting input")
				end

				exit = th.value
				p exit
				p stderr
				return exit.success? ? true : stderr

			end	

			return "Could not run `sox`. File not found or something??"

		end

		def _run track, cart_id = nil

			@mediawall = Nerve::Playout::Myriad5::MediaWall.new $config["export"]["settings"]["database5"]["name"]
			@audiowall = Nerve::Playout::AudioWall.new 
			@audiowall.load_settings

			local_path = $config["export"]["directory"] + "/" + track.local_path

			if track.playout_id_2
				cart_id = track.playout_id_2.to_i
			end

			database_id = nil
			if track.playout_id
				if track.playout_id[0] == 'C'
					cart_id = track.playout_id[1..-1].to_i
				else
					database_id = track.playout_id.to_i
				end
			end
			
			# Run me in the root directory
			tmp_files = []
			@database = nil

			begin
				#Dir::chdir $config["export"]["settings"]["path"] do 
					
					cart_id = @mediawall.reserve_media_item(track) unless cart_id
					prefix = @audiowall.get_full_path(cart_id)

					genres = $config["export"]["settings"]["genre"]
					puts "Writing to Media ID #{cart_id}, genre #{track.genre}, #{genres[track.genre]}, #{prefix}"

					unless cart_id and File.exist?(prefix + '.WAV')
						# convert to the final wav and do the fade out ending, this is fast.
						# the fade out in the future will be based on the end type
						tmp_files << (file = local_path + ".upload.wav")
						a = fade_end(local_path, file, track.outro.to_f)

						p "b"
						raise a unless a == true

						p a
						puts "Faded"


						# upload the WAV to the Audio Wall
						FileUtils.cp(file, @final_path = prefix + ".WAV", :preserve => false)
						FileUtils.rm(file)
					else
						@final_path = prefix + '.WAV'
					end

					category_id = options["category_id"].to_i
					alt_category_id = 0

					@categories = $config["export"]["settings"]["categories"]
					category_id = @categories["library"] if category_id == 0 and track.is_library

					if track.is_automation
						if category_id == @categories["library"]
							# We want the primary ID to be "automation", not "library". 
							category_id = @categories["automation"]
							alt_category_id = @categories["library"]
						elsif category_id != 0
							alt_category_id = @categories["automation"]
						else
							category_id = @categories["automation"]
						end
					end

					# now, write the cart
					@mediawall.add_track cart_id, track, { categoryID: category_id }


					# Run any mixins we might have.
					options = {'myriad' => {'database' => {
						'CharacteristicStart1' => 0,
						'CharacteristicStart2' => 0,
						'CharacteristicStart3' => 0,
						'CharacteristicStart4' => 0,
						'CharacteristicStart5' => 0,
						'CharacteristicStart6' => 0,
						'CharacteristicEnd1' => 0,
						'CharacteristicEnd2' => 0,
						'CharacteristicEnd3' => 0,
						'CharacteristicEnd4' => 0,
						'CharacteristicEnd5' => 0,
						'ForceID' => database_id
						}}}

					Nerve::Mixin::Runner.run! "pre_publish", track, options

					@database = Nerve::Playout::Myriad5::Database.new $config["export"]["settings"]["database5"]["name"]
					@item_number = @database.add_track cart_id, track, category_id, alt_category_id, options['myriad']['database']

					track.playout_id = @item_number
					track.playout_id_2 = cart_id

					track.save

					Nerve::Mixin::Runner.run! "post_publish", track

					# update local index. N/A

					# "complete" - the only thing we can't do is generate the preview/waveforms. 
					# the format is something i haven't looked at yet!

				#end
			rescue

				@database.execute("DELETE FROM Songs WHERE ItemNumber=#{@database.current_item_number};").do rescue nil
				@mediawall.delete_track track rescue nil
				File.unlink(@final_path) rescue nil if @final_path
				File.unlink(@lst_path) rescue nil if @lst_path
				raise $!

			ensure

				tmp_files.each { | t | File.unlink(t) rescue nil }

			end

		end

		def _update track, audio = true

			# Update LST chunk for this track
			tmp_files = []
			begin

				raise "The audio was removed" if track.status == 6 and audio

				@mediawall = Nerve::Playout::Myriad5::MediaWall.new $config["export"]["settings"]["database5"]["name"]

				@audiowall = Nerve::Playout::AudioWall.new
				@audiowall.load_settings

				@database = Nerve::Playout::Myriad5::Database.new $config["export"]["settings"]["database5"]["name"]

				cart_id = track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : @database.get_cart(track)
				prefix = @audiowall.get_full_path(cart_id)
				local_path = $config["export"]["directory"] + "/" + track.local_path

				genres = $config["export"]["settings"]["genre"]
				puts "Writing to Media ID #{cart_id}, genre #{track.genre}, #{genres[track.genre]}, #{prefix}"

				# Load the existing Media Item and check it exists 
				existing = @mediawall.read_media_item(cart_id)
				raise "Cart appears to have gone from playout system." if existing['Title'] == nil or ['Title'].starts_with?('** ')

				if audio
	
					tmp_files << (file = local_path + ".upload.wav")
					a = fade_end(local_path, file, track.outro.to_f)
					raise a if a != true

					@mediawall.add_track cart_id, track, {}

					FileUtils.cp(file, @final_path = prefix + ".WAV", :preserve => false)
					FileUtils.rm(file)
			
				else
					
					@audiowall.save cart_id, cart, track
						
				end

				if track.playout_id and track.playout_id[0] != "C"

					options = {'myriad' => {'database' => {}}}
					Nerve::Mixin::Runner.run! "pre_publish", track, options

					@database.update_track track, options['myriad']['database']

				end

				#raise "You /must/ activate individual lists, writing to big files is unsupported and dangerous." \
				#	unless @audiowall.settings[:individual_carts]


			rescue 

				raise $!

			ensure

				tmp_files.each { | t | File.unlink(t) rescue nil }

			end

		end

		def _sync track

			# 1. Find database record for track
			# 2. Find cart for track. 

			# 3. On the track, update category_a to match the library's category
			# 4. On the track, update title, artist, etc. to match the library(!) entry (not the cart)
			# 5. Save the track. 

			begin

				@audiowall = Nerve::Playout::AudioWall.new
				@audiowall.load_settings

				@database = Nerve::Playout::AudioWall::Database.new $config["export"]["settings"]["database"]["name"]

				prefix = @audiowall.get_full_path(cart_id)
				local_path = $config["export"]["directory"] + "/" + track.local_path

				if track.playout_id[0] != "C"
					# has a database record
					autotrack = @database.add_method_here
					cart_id = @database.get_cart(track)

					track.category_a = autotrack.category_id
					track.title = autotrack['DisplayTitle']
					track.artist = autotrack['DisplayArtist']
				else
					# doesn't have a DB record, get cart only
					cart_id = track.playout_id[1..-1].to_i
				end

				cart = Nerve::Playout::AudioWall.load_cart cart_id

				track.intro_start = cart.intro_start
				track.intro_end = cart.intro_end
				track.hook_start = cart.hook_start
				track.hook_end = cart.hook_end
				track.extro_start = cart.extro_start
				track.extro_end = cart.extro_end

			raise
				raise $!
			end

		end

		def _undo track

			# No point changing anything if it's not there. 
			raise Nerve::Exceptions::Reset, "Track not exported" if track.playout_id == nil

			library = track.playout_id[0] == "C"
			cart_id = 0

			@mediawall = Nerve::Playout::Myriad5::MediaWall.new nil
			@audiowall = Nerve::Playout::AudioWall.new
			@audiowall.load_settings

			unless library

				@database = Nerve::Playout::Myriad5::Database.new $config["export"]["settings"]["database5"]["name"]

				cart_id = @database.delete_track track

				if cart_id == false
					raise Nerve::Exceptions::Failure, "Failed to find track in database. Already gone?" 
				end

			else 

				# remove the "C" from the top of the file (prefix C means cart)
				cart_id = track.playout_id[1..-1].to_i

			end

			@mediawall.delete_track track
			@audiowall.purge cart_id

		end

		def self.find_path track

			raise "Not exported" if track.status != 5 and track.status != 6

			@audiowall = Nerve::Playout::AudioWall.new
			@audiowall.load_settings

			@database = Nerve::Playout::AudioWall::Database.new $config["export"]["settings"]["database"]["name"]
			cart_id = track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : @database.get_cart(track)
			
			@audiowall.get_audio_path(cart_id)

		end

	end

end; end; end
