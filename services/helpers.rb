module Nerve
	module Services
		module Helpers

			def protect!
				return if session[:authenticated] and session[:user_id] != nil
				redirect to('/login.html')
				throw(:halt, [403, "Please authenticate\n"])
			end

			def protect_moderator!
				return if session[:authenticated] and session[:user_id] != nil
				user = Nerve::Services::Login.get_service.get_user session[:user_id]
				throw(:halt, [403, "You are not a moderator!"]) if !user.moderator
			end

			def protect_json! 

				protect!
				content_type 'application/json'

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