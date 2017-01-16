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

				tracks = Nerve::Model::TrackProvider.where("
					t.status = 5
					ORDER BY t.creation_date DESC
					LIMIT #{(page * COUNT).to_i}, #{COUNT};").to_json

			end


			get '/migrate/search/' do

				protect_json!
				query = params['query']
				COUNT = 60; page = params['page'] || 0

				tracks = Nerve::Database.query("SELECT *, MATCH (title, artist, description)
					AGAINST (? IN NATURAL LANGUAGE MODE) AS sc 
					FROM migrate_cache
					WHERE match (title, artist, description) AGAINST (? IN NATURAL LANGUAGE MODE)
					AND cart_id >= 4000
					ORDER BY sc DESC
					LIMIT #{(page * COUNT).to_i}, #{COUNT}", query, query);

				tracks.to_a.to_json

			end

		end
	end
end