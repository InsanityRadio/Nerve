require 'mysql2'
require 'sinatra'
require 'sinatra/activerecord'

set :database, $config['database']['development']

module Nerve
	module Database

		def self.query q, *params
			raise "Module using incorrect database adapter"
		end

		def self.last_id
			raise "Deprecated database adapter dropped"
		end

	end
end