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

			def redirect session
				state = session[:state] = SecureRandom.hex
				@client.auth_code.authorize_url(
					:redirect_url => @config["host"],
					:state => state,
					:message => "Log in to get access to Nerve, the music upload system.")
			end

			def authorize session, params

				raise "Integrity error" if session[:state] != params["state"]

				session[:code] = params["code"]
				token = @client.auth_code.get_token(params["code"])
				response = token.get(@config["root"] + '/verify')

				raise "Error loading stuff" if response.parsed['success'] != 1

				raise "Account disabled" if response.parsed['user']["groups"]["8"].nil?

				session[:user] = response.parsed['user']

				session[:token] ||= SecureRandom.hex
				session[:user_id] = session[:user]['id']
				session[:authenticated] = true

				# cache me locally or something so i actually have an account

				begin
					user = Nerve::Model::UserCacheProvider.from_id session[:user_id]
				rescue Nerve::Exceptions::NoSuchUser
					user = Nerve::Model::UserCacheProvider.make session[:user_id]
				end

				user.playout_username = user.username = session[:user]["username"]
				user.name = session[:user]["name"]

				moderator = @config["groups"]["moderator"].to_s
				admin = @config["groups"]["admin"].to_s
				specialist = @config["groups"]["specialist"].to_s

				user.moderator = !session[:user]["groups"][moderator].nil?
				user.admin = !session[:user]["groups"][admin].nil?


				if !session[:user]["groups"][specialist].nil?
					user.permissions[:override_bitrate] = true
					user.permissions[:override_compressor] = true
					user.permissions[:instrumental] = true
				else
					user.permissions[:override_bitrate] = false
					user.permissions[:override_compressor] = false
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
				Nerve::Model::UserCacheProvider.from_id id 
			end

			# Returns a list of accounts. Not really mandatory, but very useful for administartion
			def get_users
				Nerve::Model::UserCacheProvider.all
			end

		end
	end
end