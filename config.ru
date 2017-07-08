require './app'
require 'rack-proxy'
require 'rack/rewrite'

Encoding.default_external = Encoding::UTF_8

puts "Make sure you're running your webpack server (to-do: production stuff)"

module Rack
	class DirDef < Rack::Directory
		def entity_not_found a = nil
			puts "AAH"
			return [200, {CONTENT_TYPE => "text/html"}, [::File.read("frontend/dist/index.html")]]
		end
	end
end

use Rack::Rewrite do
	rewrite %r{^/authorize(\?.*)?}, '/api/authorize$1'
	rewrite '/', '/index.html'
end

run Rack::URLMap.new(
	'/api' => Nerve::App,
	'/' => Rack::DirDef.new("frontend/dist")
)

