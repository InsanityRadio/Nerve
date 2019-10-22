require 'uri'
require 'cgi'
require 'ws_sync_client'

module Nerve; module Playout; class Myriad5
	class SignalR

		def initialize url, hub
			data = JSON.parse(open(url + '/signalr/negotiate?clientProtocol=1.5&connectionData=%5B%5D').read)
			if !data['TryWebSockets']
				raise "Server does not support WebSocket"
			end

			url = url.split('/')[0..2].join('/') + data['Url']
			@connection_id = data['ConnectionId']
			@connection_token = data['ConnectionToken']
			qs = '?transport=webSockets&clientProtocol=1.5&connectionToken=' + CGI::escape(@connection_token) + '&connectionData=%5B%5D&tid=9'

			@ws = WsSyncClient.new (url + '/connect' + qs)
			data = JSON.parse(open(url + '/start' + qs).read)
			if data['Response'] != 'started'
				raise 'SignalR refused the connection!'
			end
			@hub_name = hub
			@counter = 0
		end

		def send_sync method, *args

			my_count = @counter.to_s
			@ws.send_frame(d = {
				H: @hub_name,
				A: args,
				I: my_count,
				M: method
			}.to_json)

			@counter += 1

			loop do
				data = JSON.parse(@ws.recv_frame)
				return data['R'] if data['I'] == my_count
			end
		end

		def close
			@ws.close
		end

	end
end; end; end