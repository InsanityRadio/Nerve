require "securerandom"
require "oauth2"

module Nerve
	module Authentication
		class Cortex < Authentication

			# can_cache => true allows the response to be cached for the entire user session. 
			# Might be necessary for, say, Kerberos, but it's more secure if not.
			@can_cache = false
			attr_accessor :can_cache

			def initialize
				super
				@config = $config["security"]["oauth"]

				options = {
					:site => 'https://sso.cor.insanityradio.com/',
					:authorize_url => @config["authorize"],
					:token_url => @config["token"] }

				options.merge! @config["options"] rescue {}
				@client = OAuth2::Client.new(@config["id"], @config["secret"], options)

			end

			def redirect session, request
				state = session['csrf'] ||= SecureRandom.hex
				p state
				p session
				base_url = "#{request.secure? ? "https" : "http"}://#{request.env['HTTP_HOST']}/authorize"
				@client.auth_code.authorize_url(
					:redirect_uri => base_url,
					:state => state,
					:message => "Log in to get access to Nerve, the music upload system.")
			end

			def authorize session, params, request

				# TO-DO: FIX THIS
				# raise "Integrity error" if session['csrf'] != params["state"]

				base_url = "#{request.secure? ? "https" : "http"}://#{request.env['HTTP_HOST']}/authorize"
				session[:code] = params["code"]
				token = @client.auth_code.get_token(params["code"], { :redirect_uri => base_url })
				response = token.get(@config["root"] + '/verify')

				raise "Error loading stuff" if response.parsed['success'] != 1

				raise "Account disabled" if response.parsed['user']["groups"]["8"].nil?

				session[:user] = response.parsed['user']

				session[:token] ||= SecureRandom.hex
				session[:user_id] = session[:user]['id']
				session[:authenticated] = true

				user = Nerve::Model::User.find_or_create_by(id: session[:user_id])

				user.playout_username = user.username = session[:user]["username"]
				user.name = session[:user]["name"]

				moderator = @config["groups"]["moderator"].to_s
				admin = @config["groups"]["admin"].to_s
				specialist = @config["groups"]["specialist"].to_s

				user.moderator = !session[:user]["groups"][moderator].nil?
				user.admin = !session[:user]["groups"][admin].nil?


				if !session[:user]["groups"][specialist].nil? or user.admin or user.moderator
					user.permissions['override_bitrate'] = true
					user.permissions['override_compressor'] = true
					user.permissions['instrumental'] = true
				else
					user.permissions['override_bitrate'] = false
					user.permissions['override_compressor'] = false
				end

				user.save!



				true

			end

			def logout session
				'https://sso.cor.insanityradio.com/ServiceLogout?tok=' + session[:code]
			end

			# Return the User object corresponding to the given ID. Necessary for sessions to work.
			def get_user id
				return get_nil_user if id == 0
				Nerve::Model::User.find id 
			end

			# Returns a list of accounts. Not really mandatory, but very useful for administartion
			def get_users
				Nerve::Model::User.all
			end

		end
	end
end
