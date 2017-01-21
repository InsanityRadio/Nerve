require 'mysql2'
require 'timeout'

module Nerve
	module Database

		@@connection = nil
		@@query_count = 0

		def self.connect!

			(@@connection.close rescue nil) if @@connection 

			begin
				Timeout::timeout(3) { 
					@@connection = Mysql2::Client.new $config["database"]["mysql2"].merge({:reconnect => true})
				}
			rescue Timeout::Error
				puts "Failed to connect to database"
				sleep 0.1
				retry
			end

			@@connection.query "SELECT 1 FROM nerve_cache LIMIT 1;" rescue \
				abort("This doesn't look like a Nerve database. Install it?")

		end

		def self.query q, *params

			if !@@connection or @@query_count > 10000
				sleep 0.5
				puts "reconnecting"
				@@query_count = 0
				self.connect!
				puts "connected"
			end

			@@query_count += 1

			query = @@connection.prepare(q)
			result = query.execute(*params)
			result.to_a

		end

		def self.last_id
			@@connection.last_id
		end

	end
end