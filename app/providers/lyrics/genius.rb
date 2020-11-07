require 'json'
require 'open-uri'
require 'tempfile'
require 'genius'
require 'nokogiri'

def traverse obj
	return obj if obj.is_a? String

	obj = obj['children'] if obj.is_a? Hash and obj['children']

	return obj.map{|t| traverse t} if obj.is_a? Array
	return "\n" if obj.is_a? Hash and obj['tag'] == 'br'
end

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

					song_result = song_search[0]

					# If the search results are weird, see if the artist more or less matches
					song_search.each do |track|
						begin
							if artist.start_with? track.primary_artist.name
								song_result = track
								break
							end
						rescue
						end
					end
			
					data = open(song_result.url).read

					html = Nokogiri::HTML(data)
		
					p 'got html', html

					matches = data.force_encoding('ASCII-8BIT').match /window.__PRELOADED_STATE__ = JSON.parse\((.*)\);\n/
					if matches != nil and matches.length
						data = JSON.parse(matches[1].gsub(/\\"/, '"')[1..-2])

						data = traverse(data['songPage']['lyricsData']['body'])
						p 'got lyr', data
						data = data.flatten.join("")
						
					else
						data = html.css('meta[itemprop]')[0]["content"]

	
						p 'step 1', data
						data = JSON.parse(data)
						p 'step 2', data
						data = data['lyrics_data']['body']['html']

						p 'step 3', data

						data = Nokogiri::HTML(data).text
					end
					p 'got ', data

					return [data]
				end

			end
		end
	end
end
