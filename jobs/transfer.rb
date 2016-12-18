#require 'resque'
require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job

	class Transfer

		include Resque::Plugins::Status
		include Nerve::Database

		# Import the functions that allow us to import into the right playout system
		include Object.const_get($config["export"]["mode"])

		def status_update status
			Object.const_get(options["status_update"]) \
				.status_update(options["ext_id"], status, @track_id) if options["status_update"]
		end

		private


		# Actual method that is ran. Note the "ensure" clears up stray files etc, without
		#  losing the exception that was thrown.


		# TODO: SOMETHING HERE THAT PASSES TO "UPDATE" IF IT ALREADY EXISTS, AND VICE VERSA IN UPDATE
		def perform

			begin

				@track_id = options["track_id"]
				track = Nerve::Model::TrackProvider.from_id options["track_id"]

				track.status = 10
				track.save

				_run track

				track.status = 5
				track.save
				status_update 5

			rescue

				status_update 7

				if track != nil
					track.status = 7
					track.save
				end

				raise $!

			ensure
				# do clean up here


			end

		end


	end

end; end
