	require 'securerandom'
	require 'fileutils'

	module Nerve; module Playout; class AudioWall

		module Export

		# If we fade the song out 0.5s after the extro point, we lose the "sustaned" song issue
		#  (basically where someone sets an extro point with like 30 seconds of extro to go)
		def fade_end(input, output, extro)

			exit    = -1
			stderr  = "(no output)"

			format = "wav"

			cut_point = extro + 6.0

			command = ["sox", "-r", "44.1k", "-S", input, "-t", format, output]
			command += ["fade", "0", cut_point.to_s, "5t"]

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

			@audiowall = Nerve::Playout::AudioWall.new
			@audiowall.load_settings

			local_path = $config["export"]["directory"] + "/" + track.local_path
			
			# Run me in the root directory
			tmp_files = []
			@database = nil

			begin
				#Dir::chdir $config["export"]["settings"]["path"] do 
					
					cart_id = @audiowall.get_cart_id(track) unless cart_id
					prefix = @audiowall.get_full_path(cart_id)

					genres = $config["export"]["settings"]["genre"]
					puts "Writing to cart #{cart_id}, genre #{track.genre}, #{genres[track.genre]}, #{prefix}"


					cart = Nerve::Playout::AudioWall::Cart.new track
					#cart.length = cart.extro_end = cart.extro_start + 5.0

					#raise "You /must/ activate individual lists, writing to big files is unsupported and dangerous." \
					#	unless @audiowall.settings[:individual_carts]

					# Lock the "cart_id". Only supported on Audio Walls with individual LSTs
					# (do this by writing the LST file, prevents Myriad writing to it).
					# binwrite allows us to actually export proper binary.

					@audiowall.save cart_id, cart

					# convert to the final wav and do the fade out ending, this is fast.
					# the fade out in the future will be based on the end type
					tmp_files << (file = local_path + ".upload.wav")
					a = fade_end(local_path, file, cart.extro_start)

					p "b"
					raise a unless a == true

					p a
					puts "Faded"


					# upload the WAV to the Audio Wall
					FileUtils.cp(file, @final_path = prefix + ".WAV", :preserve => false)
					FileUtils.rm(file)

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




					@database = Nerve::Playout::AudioWall::Database.new $config["export"]["settings"]["database"]["name"]
					@item_number = @database.add_track cart_id, track, category_id, alt_category_id

					track.playout_id = @item_number

					track.save

					# update local index. N/A

					# "complete" - the only thing we can't do is generate the preview/waveforms. 
					# the format is something i haven't looked at yet!

				#end
			rescue

				@database.execute("DELETE FROM Songs WHERE ItemNumber=#{@database.current_item_number};").do rescue nil
				File.unlink(@final_path) rescue nil if @final_path
				File.unlink(@lst_path) rescue nil if @lst_path
				raise $!

			ensure

				tmp_files.each { | t | File.unlink(t) rescue nil }

			end

		end

		def _update track 

			# Update LST chunk for this track
			tmp_files = []
			begin

				@audiowall = Nerve::Playout::AudioWall.new
				@audiowall.load_settings

				@database = Nerve::Playout::AudioWall::Database.new $config["export"]["settings"]["database"]["name"]
				cart_id = track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : @database.get_cart(track)
				prefix = @audiowall.get_full_path(cart_id)
				local_path = $config["export"]["directory"] + "/" + track.local_path


				genres = $config["export"]["settings"]["genre"]
				puts "Writing to cart #{cart_id}, genre #{track.genre}, #{genres[track.genre]}, #{prefix}"

				tmp_files << (file = local_path + ".upload.wav")
				a = fade_end(local_path, file, cart.extro_start)
				raise a unless a == true
				raise "Cart appears to have gone from playout system." unless File.exist?(prefix + ".LST")

				File.binwrite(@lst_path = prefix + ".LST", cart.to_data)			

				# upload the WAV to the Audio Wall
				FileUtils.cp(file, @final_path = prefix + ".WAV", :preserve => false)
				FileUtils.rm(file)

				cart = Nerve::Playout::AudioWall::Cart.new track

				#raise "You /must/ activate individual lists, writing to big files is unsupported and dangerous." \
				#	unless @audiowall.settings[:individual_carts]

				# Lock the "cart_id". Only supported on Audio Walls with individual LSTs
				# (do this by writing the LST file, prevents Myriad writing to it).
				# binwrite allows us to actually export proper binary.


			rescue 

				raise $!

			ensure

				tmp_files.each { | t | File.unlink(t) rescue nil }

			end

		end

		def _undo track

			# No point changing anything if it's not there. 
			raise Nerve::Exceptions::Reset, "Track not exported" if track.playout_id == nil

			library = track.playout_id[0] == "C"
			cart_id = 0

			unless library

				@audiowall = Nerve::Playout::AudioWall.new
				@audiowall.load_settings

				@database = Nerve::Playout::AudioWall::Database.new $config["export"]["settings"]["database"]["name"]

				cart_id = @database.delete_track track

				if cart_id == false
					raise Nerve::Exceptions::Failure, "Failed to find track in database. Already gone?" 
				end

			else 

				# remove the "C" from the top of the file (prefix C means cart)
				cart_id = track.playout_id[1..-1].to_i

			end

			@audiowall.purge cart_id

		end

	end

end; end; end
