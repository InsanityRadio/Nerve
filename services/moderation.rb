require 'json'
require 'tempfile'

module Nerve
	module Services
		class Moderation < Sinatra::Application

			include Helpers
			include Nerve::Database

			def self.get_pending
				Database.query("SELECT 1 FROM `tracks` WHERE `status` = 3;").size
			end

			get '/moderation/pending/' do 

				protect_moderator!
				COUNT = 60; page = params['page'] || 0

				tracks = Nerve::Model::TrackProvider.where("
					t.status = 3
					ORDER BY t.creation_date DESC
					LIMIT #{(page * COUNT).to_i}, #{COUNT};").to_json

			end

			post '/moderation/approve/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				# Check for "allow in library"
				# Check for "allow during day/automation"

				# Set track status to 4
				track = Nerve::Model::TrackProvider.from_id(id)
				track.status = 4
				track.approved_by = session[:user_id]
				track.save
				# Queue for job

				Nerve::Job::Transfer.create({
					"track_id" => id})

				return { "success" => 1 }.to_json

			end

			post '/moderation/reject/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				# Set status to 2
				track = Nerve::Model::TrackProvider.from_id(id)
				track.status = 2
				track.approved_by = session[:user_id]
				track.save

				return { "success" => 1 }.to_json

			end

			post '/moderation/flag/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				# Set status to 2
				track = Nerve::Model::TrackProvider.from_id(id)
				track.flagged = 1
				track.approved_by = session[:user_id]
				track.save

				return { "success" => 1 }.to_json

			end

		end
	end
end