require "securerandom"
require "oauth2"

module Nerve
	module Authentication
		class MSO < Cortex
			def authorize session, params, request

				# TO-DO: FIX THIS
				# raise "Integrity error" if session['csrf'] != params["state"]

				base_url = "#{request.secure? ? "https" : "http"}://#{request.env['HTTP_HOST']}/authorize"
				session[:code] = params["code"]
				token = @client.auth_code.get_token(params["code"], { :redirect_uri => base_url })
				
				me = token.get('https://graph.microsoft.com/v1.0/me/',
					headers: {'Content-Type'=>'application/json'}
				).parsed
				
				response = token.get('https://graph.microsoft.com/v1.0/me/transitiveMemberOf',
					headers: {'Content-Type'=>'application/json'}
				)

#				groups = response.parsed['value']
#				p groups

#				response = token.post('https://graph.microsoft.com/v1.0/directoryObjects/getByIds',
#					body: { ids: groups }.to_json,
#					headers: {'Content-Type'=>'application/json'}
#				)


				groups = response.parsed['value'].map{|p| p['mail']}


				p [me, groups]
				raise "Error loading stuff" if !groups 

				# raise "Account disabled" if response.parsed['user']["groups"]["8"].nil?

				session[:user] = {
					'id' => me['userPrincipalName'],
					'username' => me['userPrincipalName'],
					# 'groups' => groups
				}


				session[:token] ||= SecureRandom.hex
				session[:authenticated] = true

				user = Nerve::Model::User.find_or_create_by(username: session[:user]['username'])
				
				session[:user_id] = user.id

				user.playout_username = user.username = session[:user]["username"]
				user.name = session[:user]["name"]

#				moderator = @config["groups"]["moderator"].to_s
#				admin = @config["groups"]["admin"].to_s
#				specialist = @config["groups"]["specialist"].to_s

#				user.moderator = !session[:user]["groups"][moderator].nil?
#				user.admin = !session[:user]["groups"][admin].nil?


#				if !session[:user]["groups"][specialist].nil? or user.admin or user.moderator
#					user.permissions['override_bitrate'] = true
#					user.permissions['override_compressor'] = true
#					user.permissions['instrumental'] = true
#				else
#					user.permissions['override_bitrate'] = false
#					user.permissions['override_compressor'] = false
#				end
#				
#				session[:user]["groups"] = {}

				user.save!

#				session[:user] = user

				p ["committed session", session]
				true

			end

			# Return the User object corresponding to the given ID. Necessary for sessions to work.
			def get_user id
				return get_nil_user if id == 0
				if id.is_a? Numeric
					return Nerve::Model::User.find_by(id: id)
				else
					return Nerve::Model::User.find_by(username: id)
				end
			end

		end
	end
end
