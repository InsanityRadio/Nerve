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


		end
	end
end