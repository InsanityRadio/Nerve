require 'securerandom'
require 'fileutils'

class Hash
	def compact
		delete_if { |k, v| v.nil? }
	end
end

module Nerve; module Playout; class Myriad5

	class MediaWall

		attr_reader :current_item_number

		def self.get_connection database = nil

			res_config = $config["export"]["settings"]["myriad5"]["res"]

			@client = RESClient.new "http://" + res_config["server"] + ":6947/MyriadRES5"

			response = @client.login res_config["username"], res_config["password"], res_config["database_name"], res_config["station_id"]

			if !response
				raise 'Login failed'
			end

			@client
		end

		def initialize database
			@database = database
			raise "Expecting a database" if !database
		end

		def timestamp value
			Time.at(value).utc.strftime("%H:%M:%S.%L")
		end

		def add_track media_id, track, options = {}
			@client = self.class.get_connection
			@client.write_media_item(
				Type: 7,
				Artists: [{ ArtistName: track.artist.name }],
				LastModDateTime: Time.now.iso8601,
				CreatedDateTime: Time.now.iso8601,
				Title: track.title,
				Description: '',
				MediaId: media_id,
				Ending: track.end_type,

				Intro: {
					Start: track.intro_start > 0 ? timestamp(track.intro_start) : nil,
					End: track.intro_end > 0 ? timestamp(track.intro_end) : nil
				}.compact,
				Extro: {
					Start: timestamp(track.outro),
					End: timestamp(track.length)
				}.compact, 
				Hook: {
					Start: track.hook_start > 0 ? timestamp(track.hook_start) : nil,
					End: track.hook_end > 0 ? timestamp(track.hook_end) : nil
				}.compact,

				MediaLength: {
					End: timestamp(track.length)
				},
				ActualLength: timestamp(track.length),
				TotalLength: timestamp(track.length),

				Attributes: options[:categoryID] ? [{ Type: 1, Index: 1, Number: options[:categoryID] }] : []
			)
			@client.close
		end

		def update_track track, options

			media_id = track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : track.playout_id_2

			@client = self.class.get_connection 
			@item = @client.send_async("ReadMediaItem", media_id, 'None', false)['Result']

			@item['Title'] = track.title
			@item['Artists'] = [{ ArtistName: track.artist.name }]
			@item['LastModDateTime'] = Time.now.iso8601

			r = @client.write_media_item @item
			@client.close

			r
		end

		# Given a track, return a reserved media ID
		def reserve_media_item track
			media_id = get_cart_id track
			reserve_media_id(media_id)
			media_id
		end

		def reserve_media_id media_id
			@client = self.class.get_connection
			if @client.read_media_item(media_id)['Type'] != 2
				raise 'Media ID reservation failed'
			end

			r = @client.write_media_item(
				Type: 7,
				Artists: [],
				LastModDateTime: Time.now.iso8601,
				Title: '** Nerve Reservation',
				Description: Time.now.iso8601,
				MediaId: media_id,
			)
			@client.close

			r
		end

		def delete_track track, caption = 'Deleted cart'

			media_id = track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : track.playout_id_2

			return false if media_id.to_s.length < 1

			@client = self.class.get_connection
			@client.write_media_item(
				Type: 7,
				Artists: [],
				LastModDateTime: Time.now.iso8601,
				Title: '** Deleted cart',
				Description: Time.now.iso8601,
				MediaId: media_id,
			)
			@client.close
		end


		def get_cart track
			track.playout_id[0] == "C" ? track.playout_id[1..-1].to_i : track.playout_id_2
		end

		def get_cart_id track
			@client = self.class.get_connection
			id = @client.get_next_free_media_id
			@client.close
			return id
		end

	end

end; end; end
