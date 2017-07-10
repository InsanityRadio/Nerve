module Nerve; module Mixin

	class Mixin

		def initialize
		end

		def self.created track
		end

		def self.saved track
		end

		def self.pre_publish track, playout
		end

		def self.post_publish track
		end

	end

end; end