module Nerve; module Model

	class UserCacheProvider

		def self.from_id id

			result = where("id = ?", id).first

			raise Nerve::Exceptions::NoSuchUser.new if !result
			result

		end

		def self.all

			where("1=1")

		end

		def self.where where, *params

			result = Database.query("SELECT * FROM users
				WHERE #{where};", *params).to_a.map { | a | self.from a }

		end

		def self.count where, *params

			Database.query("SELECT COUNT(*) AS c FROM (
				SELECT * FROM users
				WHERE #{where}) x;", *params).first["c"].to_i

		end

		def self.make id
			Nerve::Authentication::User.new(id, nil, nil, nil, {}, 0, 0)
		end

		private
		def self.from result
			# id, username, name, playout, permissions = {}, admin = false, moderator = false
			Nerve::Authentication::User.new(
				result["id"],
				result["username"],
				result["name"],
				result["playout"],
				JSON.parse(result["permissions"], :symbolize_names => true),
				result["is_admin"] == 1,
				result["is_moderator"] == 1)
		end

	end

end; end