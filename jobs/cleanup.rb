require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job

	# Remove songs that haven't been touched in 50 days from Nerve. This saves space. 
	# It leaves previes and waveforms for later use, though.
	class CleanUp

		include Resque::Plugins::Status
		include Nerve::Database

		private

		def perform

			tracks = Nerve::Model::TrackProvider.where "DATEDIFF(NOW(), last_update) > 50"

			multiplier = tracks.length / 100.0
			i = 0
			tracks.each do | track |
				begin

					@original_status = track.status

					track.delete! track.status == 5
					i += 1
					at(i * multiplier, 100)

				rescue

					if track != nil
						track.status = @original_status
						track.save
					end

					puts "Failed to update #{track.id}"
					pp $!
					pp $?
					raise $!

				ensure
					# do clean up here
				end
			end


		end


	end

end; end
