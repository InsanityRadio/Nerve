require 'securerandom'

module Nerve
	module Services
		class Login < Sinatra::Application

			@@service = Object.const_get($config["security"]["authentication"]).new

			def self.get_service
				@@service
			end
			
			def authorized?

				@auth ||=  Rack::Auth::Basic::Request.new(request.env)
				return false unless @auth.provided? && @auth.basic?
				@user = @@service.can_login(@auth.credentials[0], @auth.credentials[1])
				@user != false

			end

			def protect!
				unless authorized?
					response['WWW-Authenticate'] = %(Basic realm="Nerve")
					throw(:halt, [401, "Please authenticate\n"])
				end
			end

			get '/login' do

				protect2!
				
				session[:authenticated] = true
				session[:user_id] = @user.id
				status 204
				""

			end

			post '/login' do

				@user = @@service.can_login(params[:username], params[:password])
				redirect to('/login.html?fail') if @user == false

				session[:authenticated] = true
				session[:user_id] = @user.id

				redirect to('/')

			end

			get '/logout' do

				raise "Invalid token" if params[:token] != session[:token] or !defined? session[:token]

				url = (@@service.logout(session) || '/')
				session.clear

				redirect to(url)

			end

			get '/authorize' do

				success = @@service.authorize session, params

				redirect to('/')

			end

		end
	end
end