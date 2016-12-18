require 'mysql2'

module Nerve
	module Database

		@@connection = nil

		def self.connect!

			@@connection = Mysql2::Client.new $config["database"]["mysql2"].merge({:reconnect => true})

			@@connection.query "SELECT 1 FROM nerve_cache LIMIT 1;" rescue \
				abort("This doesn't look like a Nerve database. Install it?")

		end

		def self.query q, *params

			self.connect! if !@@connection

			query = @@connection.prepare(q)
			query.execute(*params)

		end

		def self.last_id
			@@connection.last_id
		end

	end
end