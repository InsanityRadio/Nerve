require 'json'
require 'uri'
require 'open-uri'
require 'cgi'
require 'openssl'
require 'ws_sync_client'

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

class MyTLSSocket
	def initialize socket
		@socket = socket
	end
	def send data, l
		@socket.syswrite(data)
	end
	def close
		@socket.close
	end
	def recv max_recv
		@socket.sysread max_recv
	end
end

module Nerve; module Playout; class Myriad5
	class SignalR

		def initialize url, hub
			data = JSON.parse(open(url + '/signalr/negotiate?clientProtocol=1.5&connectionData=%5B%5D', {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}).read)
			if !data['TryWebSockets']
				raise "Server does not support WebSocket"
			end

			url = url.split('/')[0..2].join('/') + data['Url']
			@connection_id = data['ConnectionId']
			@connection_token = data['ConnectionToken']
			qs = '?transport=webSockets&clientProtocol=1.5&connectionToken=' + CGI::escape(@connection_token) + '&connectionData=%5B%5D&tid=9'


			host = URI(url).host
			port = URI(url).port
			p ['connecting to', host, port]
			sock = TCPSocket.new(host, port)
			ctx = OpenSSL::SSL::SSLContext.new
			ctx.set_params(verify_mode: OpenSSL::SSL::VERIFY_NONE)
			@socket = OpenSSL::SSL::SSLSocket.new(sock, ctx).tap do |socket|
				socket.sync_close = true
				socket.connect
			end
			
			@socket = MyTLSSocket.new(@socket)
			@ws = WsSyncClient.new (url + '/connect' + qs), raw: @socket
			data = JSON.parse(open(url + '/start' + qs, {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}).read)
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
