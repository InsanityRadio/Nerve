require 'json'
require 'tempfile'

module Nerve
	module Services
		class Library < Sinatra::Application

			include Helpers
			include Nerve::Database

			get '/library/list/' do 

				protect_json!
				COUNT = 60; page = params['page'] || 0

				Nerve::Model::Track.where(status: 5).
					order(creation_date: :desc).
					offset(page * COUNT).limit(COUNT).map(&:get_json).to_json
			end

			get '/library/search/' do

				protect_json!
				query = params['query']
				COUNT = 60; page = params['page'] || 0

				Nerve::Model::TrackProvider.search(query, COUNT, page).map(&:get_json).to_json

			end

		end
	end
end