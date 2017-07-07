module Nerve
	module Authentication
		class User

			attr_accessor :id, :username, :name, :playout_username, :admin, :moderator

			attr_accessor :permissions, :agree_terms

			def initialize id, username, name, playout, permissions = {}, admin = false, moderator = false, agree_terms = 0

				@id = id; @username = username; @name = name;
				@playout_username = playout; @admin = admin; @moderator = moderator

				@permissions = {
					:override_bitrate => false,
					:override_compressor => false,
					:upload_library => false,
					:upload_automation => false,
					:instrumental => false,
					# Safety net ensures the first 3 uploads for a user are moderated. TODO
					:safety_net => true,
				}

				permissions.each { | k, v| @permissions[k] = v }

				if @admin or @moderator
					@permissions[:override_bitrate] = true
					@permissions[:override_compressor] = true
					@permissions[:upload_library] = true
					@permissions[:instrumental] = true
					@permissions[:upload_automation] = true
					@permissions[:safety_net] = false
				end

			end

			def save!
				a = [@id, @agree_terms, @permissions.to_json, @admin ? 1 : 0, @username, @name, @playout_username, @moderator ? 1 : 0]
				Database.query("INSERT INTO `users`
					(id, external_ref, agree_terms, permissions, is_admin, username, name, playout, is_moderator)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE
					external_ref=?, agree_terms=?, permissions=?, is_admin=?, username=?, name=?, playout=?, is_moderator=?", *([
						@id
					] + a + a))
			end

			def tracks
				Nerve::Model::TrackProvider.where("t.created_by = ?", @id)
			end

			def to_json state = nil
				{
					"id" => @id,
					"username" => @username,
					"name" => @name,
					"moderator" => @moderator,
					"admin" => @admin
				}.to_json
			end

		end
	end
end