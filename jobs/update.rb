#require 'resque'
require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job

	class Update

		include Resque::Plugins::Status
		include Nerve::Database

		# Import the functions that allow us to check the playout system
		include Object.const_get($config["export"]["mode"])

		private

		# This job updates cart files that may have somehow become corrupted. All of them. 
		def perform

			track = Nerve::Model::Track.find options["track_id"]

			begin

				raise "This track shouldn't be updated" if track.status != 5 and (track.status != 6 and !options["audio"])
				@original_status = track.status

				track.status = 10
				track.save

				_update track, options["audio"]

				track.status = 5
				track.save

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

end; end
