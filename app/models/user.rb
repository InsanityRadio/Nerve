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

		serialize :permissions, JSON

		def after_initialize

			@_permissions = {
				'override_bitrate' => false,
				'override_compressor' => false,
				'upload_library' => false,
				'upload_automation' => false,
				'instrumental' => false,
				# Safety net ensures the first 3 uploads for a user are moderated. TODO
				'safety_net' => true,
			}

			permissions.each { | k, v| @_permissions[k] = v }

			if admin or moderator
				@_permissions['override_bitrate'] = true
				@_permissions['override_compressor'] = true
				@_permissions['upload_library'] = true
				@_permissions['instrumental'] = true
				@_permissions['upload_automation'] = true
				@_permissions['safety_net'] = false
			end

			permissions = @_permissions

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

		after_initialize :after_initialize
		after_load :after_initialize

	end

end; end
