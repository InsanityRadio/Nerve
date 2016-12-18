require "digest/md5"

module Nerve
	module Authentication
		class Authentication

			# can_cache => true allows can_login to be cached for the entire user session
			# Doesn't mean get_user is cached, though. That'd be silly. 
			@can_cache = false
			attr_accessor :can_cache


			# Returns either a User object (or false) if the credentials are accepted			
			def can_login username, password

				raise "Not Implemented?"

			end

			# Returns the User object on the given ID (i.e. session user)
			def get_user id

				raise "Not Implemented?"

			end

			def get_nil_user
				Nerve::Authentication::User.new(0, "", "", "", { :safety_net => false })
			end

			# Returns a list of users
			def get_users

				[]

			end

		end
	end
end