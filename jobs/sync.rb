#require 'resque'
require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job

	class Sync < Job

		private

		# This form finds the cart in the database, and updates it locally in Nerve.
		# This allows Nerve and Myriad to remain perfectly in sync! 
		def perform

			track = Nerve::Model::Track.find options["track_id"]

			begin

				raise "This track shouldn't be updated" if track.status != 5 and (track.status != 6 and !options["audio"])

				_sync track
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
