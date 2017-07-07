require './app'
require 'rack-proxy'

Encoding.default_external = Encoding::UTF_8

class AppProxy < Rack::Proxy
	def rewrite_env(env)
		env['HTTP_HOST'] = 'localhost:3000'
		env
	end
end

puts "Make sure you're running your webpack server (to-do: production stuff)"

run Rack::URLMap.new(
	'/api' => Nerve::App,
	'/' => AppProxy.new
)