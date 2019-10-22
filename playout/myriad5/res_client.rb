require 'uri'
require 'cgi'
require 'ws_sync_client'

module Nerve; module Playout; class Myriad5
	class RESClient < SignalR

		def initialize url

			super url, 'connectionsr'

			data = JSON.parse(open(url + '/signalr/negotiate?clientProtocol=1.5&connectionData=%5B%5D').read)

		end

		# Logs into RES and opens database_name and station_id
		def login username, password, database_name, station_id
			r = send_sync "Login", username, password

			if !r['Result']
				raise 'Login fail: ' + r['ExceptionMessage']
			end


			if !database_name
				r = send_sync "ReadDatabases"
				if r['Result'].length != 1
					raise "More than one database exists, and one was not specified. Cowardly giving up."
				end
				database_name = r['Result'][0]['DBName']
			end

			r = send_sync "OpenDatabase", database_name
			raise "Failed to open database #{database_name}" if !r['Result']

			r = send_sync "OpenStation", station_id
			raise "Failed to open station with ID #{station_id}" if !r['Result']

			true
		end

		def read_media_item item_id
			send_sync("ReadMediaItem", item_id, 'None', false)['Result']
		end

		def write_media_item item
			p item.compact
			result = send_sync("WriteMediaItem", item.compact, 'Full', 'BypassSecurity')
			p result
			result['Result']
		end

		def get_next_free_media_id
			send_sync("FindFirstAvailableMediaIdByItemType", 7, false, false)['Result'];
		end

		def close
			STDERR.puts 'logout '
			puts 'logout '
			send_sync("Logout")
			super
		end

	end
end; end; end

