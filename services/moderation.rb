require 'json'
require 'tempfile'

module Nerve
	module Services
		class Moderation < Sinatra::Application

			include Helpers

			def self.get_pending
				Nerve::Model::Track.where(status: 3).count
			end

			get '/moderation/pending/' do 

				protect_moderator!
				COUNT = 60; page = params['page'] || 0

				Nerve::Model::Track.where(status: 3).
					order(id: :desc).
					offset(page * COUNT).limit(COUNT).map(&:get_json).to_json

			end

			post '/moderation/approve/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				# Check for "allow in library"
				# Check for "allow during day/automation"

				# Set track status to 4
				track = Nerve::Model::Track.find(id)
				track.status = 4
				track.approved_by = Nerve::Model::User.find(session[:user_id])
				track.save!
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
				track = Nerve::Model::Track.find(id)
				track.status = 2
				track.approved_by = Nerve::Model::User.find(session[:user_id])
				track.save!

				return { "success" => 1 }.to_json

			end

			post '/moderation/flag/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				# Set status to 2
				track = Nerve::Model::Track.find(id)
				track.flagged = 1
				track.approved_by = Nerve::Model::User.find(session[:user_id])
				track.save!

				return { "success" => 1 }.to_json

			end

			post '/moderation/recall/:id' do | id |

				protect_moderator!
				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				track = Nerve::Model::Track.find(id)

				Nerve::Job::Recall.create({
					"track_id" => track.id})

				return { "success" => 1 }.to_json

			end
		end
	end
end