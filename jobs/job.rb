require 'fileutils'
require 'open3'
require 'resque-status'

module Nerve; module Job
	class Job

		include Resque::Plugins::Status
		include Nerve::Database

		def initialize *args

			@systems = []
			if $config["export"]["mode"].is_a? Array
				@systems = $config["export"]["mode"].map {|a| Object.const_get(a).new }
			else
				@systems = [Object.const_get($config["export"]["mode"]).new]
			end

			super *args
		end

		def _run *args
			@systems.map {|a| a.options = options; a._run *args}
		end

		def _sync *args
			@systems.map {|a| a.options = options; a._sync *args}
		end

		def _undo *args
			@systems.map {|a| a.options = options; a._undo *args}
		end

		def _update *args
			@systems.map {|a| a.options = options; a._update *args}
		end

	end
end; end