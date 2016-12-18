module Nerve
	module Authentication
		class User

			attr_reader :id, :username, :name, :playout_username, :admin

			attr_reader :permissions

			def initialize id, username, name, playout, permissions = {}, admin = false

				@id = id; @username = username; @name = name;
				@playout_username = playout; @admin = admin

				@permissions = {
					:override_bitrate => false,
					:override_compressor => false,
					:upload_library => false,
					# Safety net ensures the first 3 uploads for a user are moderated
					:safety_net => true,
				}

				permissions.each { | k, v| @permissions[k] = v }

				if @admin
					@permissions[:override_bitrate] = true
					@permissions[:override_compressor] = true
					@permissions[:upload_library] = true
					@permissions[:safety_net] = false
				end

			end

		end
	end
end