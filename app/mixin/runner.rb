module Nerve; module Mixin

	class Runner

		def self.run! type, track, extra = nil

			$config['mixins'].each do | mix |

				begin 
					handler = Object.const_get(mix)
					if extra
						handler.public_send(type, track, extra)
					else
						handler.public_send(type, track)
					end
					puts "Successfully ran #{mix}"
				rescue
					puts "Failed to run mixin #{mix}"
					p $!
					puts $!.backtrace.join("\n")
				end

			end

		end

	end

end; end