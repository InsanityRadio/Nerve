require 'json'
require 'open-uri'
require 'tempfile'

module Nerve
	module Provider
		module Track
			module Spotify

				def self.match_metadata artist, album, track

					token = Nerve::Mixin::Spotify.connect_to_api

					title_clean = track.to_s.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').gsub(/[\(\[][a-zA-Z0-9\ \.\-]+[\)\]]/, '').split("feat.")[0].strip
					artist_clean = artist.to_s.split(/(&|ft\.|feat\.?\s)/)[0].gsub('"', '').split("feat.")[0].strip
					artist_clean_2 = artist.to_s.gsub('&', '').split(/(&|ft\.|feat\.?\s)/)[0].gsub('"', '').split("feat.")[0].strip
					http_response = RestClient.get("https://api.spotify.com/v1/search", {params: {q: 'track:"' + title_clean + '" ' + artist_clean_2, type: "track", market: "GB"}, authorization: token})
					response = JSON.parse(http_response.body) rescue nil

					if http_response.code == 429
						seconds = http_response.headers[:retry_after].to_i
						puts "Have to wait for #{seconds} "
						sleep seconds + 1
					end

					matches = response['tracks']['items'] rescue nil

					return false if !matches.length

					p 'spotify matches', matches

					track = matches[0] # data["message"]["body"]["track"]
					data = self.process_track track
					
					return data, track

				end

				def self.search_metadata artist, album, track, count = 20

					token = Nerve::Mixin::Spotify.connect_to_api

					title_clean = track.to_s.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').gsub(/[\(\[][a-zA-Z0-9\ \.\-]+[\)\]]/, '').split("feat.")[0].strip
					artist_clean = artist.to_s.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').split("feat.")[0].strip
					http_response = RestClient.get("https://api.spotify.com/v1/search", {params: {q: 'track:"' + title_clean + '" ' + artist_clean, type: "track", market: "GB"}, authorization: token})
					response = JSON.parse(http_response.body) rescue nil

					if http_response.code == 429
						seconds = http_response.headers[:retry_after].to_i
						puts "Have to wait for #{seconds} "
						sleep seconds + 1
					end

					matches = response['tracks']['items'] rescue nil

					return false if !matches.length

					tracks = matches.map{|match| self.process_track match } # data["message"]["body"]["track"]
					
					return tracks
					
				end

				private
				def self.process_track track

					genre = 34

					data = {
						"cache_id" => 0,
						"cache" => "miss",
						"external_id" => track['uri'],
						"title" => track['name'],
						"artist" => (track['artists'].map{|a|a['name']}.join(', ')),
						"album" => track['album']['name'],
						"explicit" => track["explicit"],
						"exists" => Nerve::Model::CacheItem.where(external_id: track["uri"]).count > 0,
						"genre" => genre,
						"year" => (track['album']['release_date'] || '').split('-')[0],
						"big" => track.to_json
					}

					data

				end

=begin
					# Below code loads lyrics from MusixMatch

					uri = URI.parse("http://api.musixmatch.com/ws/1.1/track.lyrics.get")

					params = {
						"apikey" => $config["search"]["musixmatch_key"],
						"track_id" => track["track_id"]
					}
					uri.query = URI::encode_www_form(params)
					lyric_data = JSON.parse(uri.open.read)

					return false if lyric_data["message"]["header"]["status_code"] != 200

					lyric = lyric_data["message"]["body"]["lyrics"]

					track["lyrics"] = lyric["lyrics_body"]
					track["lyrics_lang"] = lyric["lyrics_language"]
					track["lyrics_restricted"] = lyric["restricted"]

=end

			end
		end
	end
end
