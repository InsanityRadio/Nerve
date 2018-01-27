module Nerve
	module Authentication
		class Simple < Authentication

			# can_cache => true allows the response to be cached for the entire user session. 
			# Might be necessary for, say, Kerberos, but it's more secure if not.
			@can_cache = false
			attr_accessor :can_cache

			# Array of Maps (of User objects and passwords) 
			user = Nerve::Model::User.find_or_create_by(id: 1)
			user.attributes = { name: 'dev', username: 'dev', playout_username: 'studio' }

			@@my_accounts = [{
				:account => user,
				:password => "e77989ed21758e78331b20e477fc5582" # MD5.
			}]
			
			# Returns either User (if successful), or false.
			def can_login username, password

				username = username.split("@")[0] # Get rid of anything after the "@" (ie. domain)

				@@my_accounts.each do | acc |

					next if acc[:account].username.downcase != username.downcase
					next if acc[:password] != Digest::MD5.hexdigest(password)

					return acc[:account]

				end

				return false

			end

			# Return the User object corresponding to the given ID. Necessary for sessions to work.
			def get_user id
				@@my_accounts.find { | acc | acc[:account].id == id }[:account]
			end

			# Returns a list of accounts. Not really mandatory, but very useful for administartion
			def get_users
				@@my_accounts.map { | acc | acc[:account] }
			end

		end
	end
end