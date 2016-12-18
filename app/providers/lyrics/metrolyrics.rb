require 'json'
require 'open-uri'
require 'tempfile'

module Nerve
	module Provider
		module Lyrics
			module MetroLyrics

				def self.match_lyrics artist, album, track

					artist = artist.gsub(/\(.*\)/, ""); artist.gsub!(/[^0-9a-z ]/i, '')
					album = album.gsub(/\(.*\)/, ""); album.gsub!(/[^0-9a-z ]/i, '')

					track = track.split(/ (- |\()(.*)(Mix|Edit|Remix|Version|Remaster)/)[0]
					track = track.split("/")[0] # Remove "alt" titles as ML barely has them
					track.gsub!(/\(.*?\)/, ""); track.gsub!(/[^0-9a-z ]/i, '')


					STDERR.puts track


					uri = "http://api.metrolyrics.com/v1/get/fullbody/artist/"
					uri += URI.escape(artist)
					uri += "/title/"
					uri += URI.escape(track)

					uri += "/deviceid/chrome_extension/format/json/X-API-KEY/"
					uri += $config["search"]["metrolyrics_key"] + "/"

					p uri

					uri = URI.parse(uri)

					data = JSON.parse(uri.open.read)

					p data

					return false if data["error"] != nil
					return [data["song"]]

				end

			end
		end
	end
end