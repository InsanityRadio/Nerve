#require 'resque'
require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job

	class Recall < Job

		private


		def perform

			begin

				@track_id = options["track_id"]
				track = Nerve::Model::Track.find options["track_id"]
				@original_status = track.status

				track.status = 10
				track.save

				_undo track

				track.status = 0
				track.save

			rescue Nerve::Exceptions::Reset

				# No changes should be performed

				if track != nil
					track.status = @original_status
					track.save
				end

			rescue

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
