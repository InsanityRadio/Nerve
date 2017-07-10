require 'rest-client'
require 'json'
require 'base64'

module Nerve; module Mixin

	# Spotify Mixin
	# This mixin adds extra track information that includes some advanced analysis

	class Spotify

		def self.connect_to_api

			raise "No API keys defined." if !$config['search']['spotify']['client_id'] or !$config['search']['spotify']['client_secret']

			tok = JSON.parse(RestClient.post('https://accounts.spotify.com/api/token', {grant_type: "client_credentials"}, {authorization: "Basic #{Base64.strict_encode64("#{$config['search']['spotify']['client_id']}:#{$config['search']['spotify']['client_secret']}")}"}).body)
			if tok.key?("access_token") 
				return "Bearer #{tok['access_token']}"
			else
				raise "Could not get Spotify authorization token, are your keys correct?"
			end

		end

		def self.search track, token

			title_clean = track.title.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').gsub(/[\(\[][a-zA-Z0-9\ \.\-]+[\)\]]/, '').split("feat.")[0].strip
			artist_clean = track.artist.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').split("feat.")[0].strip
			http_response = RestClient.get("https://api.spotify.com/v1/search", {params: {q: 'track:"' + title_clean + '" artist:"' + artist_clean + '"', type: "track", market: "GB"}, authorization: token})
			response = JSON.parse(http_response.body) rescue nil

			if http_response.code == 429
				seconds = http_response.headers[:retry_after].to_i
				puts "Have to wait for #{seconds} "
				sleep seconds + 1
			end

			response['tracks']['items'][0] rescue nil 

		end

		def self.created track

			# Load the track info
			token = self.connect_to_api

			# Try and find the track
			result = self.search track, token

			return if !result

			spotify_id = result['id']

			images = result['album']['images'] rescue []
			images.sort! { | a, b | b['width'] <=> a['width'] }	

			track.extra['spotify_id'] = spotify_id
			track.extra['album_art'] = images[0]['url'] if images.length and images[0]['width'] > 400
			track.save

			# Try and find the basic analysis
			http_response = RestClient.get("https://api.spotify.com/v1/audio-features/#{track.extra['spotify_id']}", {authorization: token, accept: "application/json"})
			raise "Spotify API failure" if http_response.code != 200
			response = JSON.parse(http_response.body)
			track.extra['audio_features'] = response

			track.save

			# Try and find the extended analysis
			http_response = RestClient.get("https://api.spotify.com/v1/audio-features/#{track.extra['spotify_id']}", {authorization: token, accept: "application/json"})
			raise "Spotify API failure" if http_response.code != 200
			response = JSON.parse(http_response.body)
			track.extra['audio_analysis'] = response

			# Finally, save it
			track.save

		end

		def self.saved track 

			self.created track 

		end

		def self.pre_publish track, playout

			# Add extra Myriad columns

			return if track.extra['audio_features'] == nil

			audio_features = track.extra['audio_features']

			# Our default mappings of Characteristic in Myriad to the Spotify feature
			mapping = ['danceability', 'energy', 'tempo', 'mood']

			mapping.each_with_index do | m, i |

				next if !audio_features[m]

				playout['myriad']['database']["CharacteristicStart#{i+1}"] = \
				playout['myriad']['database']["CharacteristicEnd#{i+1}"] = (audio_features[m] * 5.9).to_i + 1

			end


		end

	end

end; end