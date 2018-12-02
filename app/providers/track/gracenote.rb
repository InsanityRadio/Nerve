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
					if user_id == nil
						Nerve::Model::Setting.create(setting: 'gn_user', value: gn.registerUser)
					end
					gn
				end

				def self.match_metadata artist, album, track

					matches = connect_to_gn.findTrack(artist, album, track)
					track = matches[0]

					data = self.process_track track
					
					return data, track

				end

				def self.search_metadata artist, album, track, count = 20


					tracks = connect_to_gn.findTrack(artist, album, track)
					return false if tracks.length == 0

					tracks.map! { | t | t = self.process_track t }

					return tracks

				end

				private
				def self.process_track track

					genre = 34

					override_title = nil
					if track["track_name_translation_list"] != nil
						translations = track["track_name_translation_list"]
						translations.each do | trans | 
							trans = trans["track_name_translation"]
							override_title = trans["translation"] if trans["language"] == "EN"
						end
					end

					data = {
						"cache_id" => 0,
						"cache" => "miss",
						"external_id" => track.track_gnid,
						"title" => track.track_title,
						"artist" => track.track_artist_name,
						"album" => track.album_title,
						"explicit" => 0,
						"exists" => Nerve::Model::CacheItem.where(external_id: track.track_gnid).count > 0,
						"genre" => genre,
						"year" => (track.album_year rescue nil),
						"big" => track.to_json
					}

					data

				end


			end
		end
	end
end
