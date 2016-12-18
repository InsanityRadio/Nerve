require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

# @deprecated
module Nerve; module Playout

	class Track < Nerve::Model::Track

		
		def self.all

			warn "[DEPRECATION] Nerve::Playout::Track is deprecated, use Nerve::Model::Track."
			super

		end

		def self.from_id id 

			warn "[DEPRECATION] Nerve::Playout::Track is deprecated, use Nerve::Model::Track."
			super id

		end

		def initialize result

			warn "[DEPRECATION] Nerve::Playout::Track is deprecated, use Nerve::Model::Track."
			super result

		end

	end

end; end