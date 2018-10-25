require 'json'
require 'open-uri'
require 'tempfile'
require 'genius'
require 'nokogiri'

module Nerve
	module Provider
		module Lyrics
			module Genius

				def self.match_lyrics artist, album, track


					puts 'searching lyrics for ' + track + ',' + artist

					artist = artist.gsub(/\(.*\)/, ""); artist.gsub!(/[^0-9a-z ]/i, '')
					album = album.gsub(/\(.*\)/, ""); album.gsub!(/[^0-9a-z ]/i, '')

					track = track.split(/ (- |\()(.*)(Mix|Edit|Remix|Version|Remaster)/)[0]
					track = track.split("/")[0] # Remove "alt" titles as ML barely has them
					track.gsub!(/\(.*?\)/, ""); track.gsub!(/[^0-9a-z ]/i, '')

					STDERR.puts track

					::Genius.access_token = $config["search"]["genius_key"]
					song_search = ::Genius::Song.search(track + ' - ' + artist)
					return false if !song_search.length
			
					data = open(song_search[0].url).read

					html = Nokogiri::HTML(data)
		
					data = html.css('.song_body-lyrics .lyrics').text.strip
					return [data]
				end

			end
		end
	end
end
