require 'gracenote'
require 'json'
require 'open-uri'
require 'tempfile'

module Nerve
	module Provider
		module Track
			module Gracenote

				def self.connect_to_gn
					client_id = $config['search']['gn_client_id']
					client_tag = $config['search']['gn_client_tag']
					user_id = Nerve::Model::Setting.find_by(setting: 'gn_user').value rescue nil
					
					gn = ::Gracenote.new(clientID: client_id, clientTag: client_tag, userID: user_id)
					p user_id
	
					if user_id == nil
						user_id = gn.registerUser
						p user_id
						Nerve::Model::Setting.create(setting: 'gn_user', value: user_id)
					end
					gn
				end

				def self.match_metadata artist, album, track

					begin
						matches = connect_to_gn.findTrack(artist, album, track)
					rescue
						Nerve::Model::Setting.where(setting: 'gn_user').destroy_all
						matches = connect_to_gn.findTrack(artist, album, track)
					end
					track = matches[0]

					data = self.process_track track
					
					return data, track

				end

				def self.search_metadata artist, album, track, count = 20

					begin
						tracks = connect_to_gn.findTrack(artist, album, track)
					rescue
						Nerve::Model::Setting.where(setting: 'gn_user').destroy_all
						tracks = connect_to_gn.findTrack(artist, album, track)
					end
					return false if tracks.length == 0

					tracks.map! { | t | t = self.process_track t }

					return tracks

				end

				private
				def self.process_track track

					genre = 34

					override_title = nil
					album = track
					track = album[:tracks][0]

					data = {
						"cache_id" => 0,
						"cache" => "miss",
						"external_id" => track[:track_gnid],
						"title" => track[:track_title],
						"artist" => track[:track_artist_name],
						"album" => album[:album_title],
						"explicit" => 0,
						"exists" => Nerve::Model::CacheItem.where(external_id: track[:track_gnid]).count > 0,
						"genre" => genre,
						"year" => (album[:album_year] rescue nil),
						"big" => track.to_json
					}

					data

				end


			end
		end
	end
end
