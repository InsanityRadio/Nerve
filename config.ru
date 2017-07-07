require './app'
require 'rack-proxy'
require 'rack/rewrite'

Encoding.default_external = Encoding::UTF_8

class AppProxy < Rack::Proxy
	def rewrite_env(env)
		env['HTTP_HOST'] = 'localhost:3000'
		env
	end
end

puts "Make sure you're running your webpack server (to-do: production stuff)"

use Rack::Rewrite do
	rewrite %r{^/authorize(\?.*)?}, '/api/authorize$1'
end

run Rack::URLMap.new(
	'/api' => Nerve::App,
	'/' => AppProxy.new
)