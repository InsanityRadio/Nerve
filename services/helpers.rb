module Nerve
	module Services
		module Helpers

			def protect! api = false

				return if ENV['BYPASS_AUTH'] == '1' or (session[:authenticated] and session[:user_id] != nil)

				key = env['HTTP_X_AUTH_KEY']
				return if api and $config.dig('security', 'keys') and $config.dig('security', 'keys').include? key

				message = { authorized: false }
				throw(:halt, [403, message.to_json])
			end

			def protect_moderator!
				return if ENV['BYPASS_AUTH'] == '1' or (session[:authenticated] and session[:user_id] != nil)
				user = Nerve::Services::Login.get_service.get_user session[:user_id]
				throw(:halt, [403, { authorized: false }.to_json]) if !user.moderator
			end

			def protect_json! api = false

				content_type 'application/json'
				protect_cors! api


			end

			def protect_cors! api = false

				protect! api
				# If we have a *valid* CORS origin, let's accept it.
				return unless $config["security"]["allowed_origins"].include? env['HTTP_ORIGIN'].to_s.downcase
				resp = {
					'Access-Control-Allow-Origin' => env['HTTP_ORIGIN'],
					'Access-Control-Allow-Methods' => 'GET, POST, HEAD, OPTIONS',
					'Access-Control-Allow-Headers' => env['HTTP_ACCESS_CONTROL_ALLOW_HEADERS'],
					'Cache-Control' => 'no-cache'
				}
				headers resp

			end

		end
	end
end
