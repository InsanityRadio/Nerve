require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

module Nerve; module Model

	class User < ActiveRecord::Base

		has_many :tracks

		alias_attribute :admin, :is_admin
		alias_attribute :moderator, :is_moderator
		alias_attribute :playout_username, :playout

		attr_reader :permissions

		def after_initialize

			@permissions = {
				:override_bitrate => false,
				:override_compressor => false,
				:upload_library => false,
				:upload_automation => false,
				:instrumental => false,
				# Safety net ensures the first 3 uploads for a user are moderated. TODO
				:safety_net => true,
			}

			permissions.each { | k, v| @permissions[k] = v }

			if admin or moderator
				@permissions[:override_bitrate] = true
				@permissions[:override_compressor] = true
				@permissions[:upload_library] = true
				@permissions[:instrumental] = true
				@permissions[:upload_automation] = true
				@permissions[:safety_net] = false
			end

			permissions = @permissions

		end

		def before_create
			after_initialize
		end

		def get_json 
			after_initialize
			{
				"id" => id,
				"username" => username,
				"name" => name,
				"moderator" => moderator,
				"admin" => admin,
				"permissions" => permissions
			}
		end

		def to_json state = nil
			get_json.to_json
		end

	end

end; end