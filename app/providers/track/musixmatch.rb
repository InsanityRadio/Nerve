require 'json'
require 'open-uri'
require 'tempfile'

module Nerve
	module Provider
		module Track
			module MusixMatch

				def self.match_metadata artist, album, track

					uri = URI.parse("http://api.musixmatch.com/ws/1.1/matcher.track.get")

					params = {
						"apikey" => $config["search"]["musixmatch_key"],
						"q_track" => track,
						"q_album" => album,
						"q_artist" => artist
					}
					uri.query = URI::encode_www_form(params)

					data = uri.open.read
					data = JSON.parse(data)

					return false if data["message"]["header"]["status_code"] != 200 or \
						data["message"]["header"]["confidence"] < 700

					track = data["message"]["body"]["track"]
					data = self.process_track track
					
					return data, track

				end

				def self.search_metadata artist, album, track, count = 10

					uri = URI.parse("http://api.musixmatch.com/ws/1.1/track.search")

					params = {
						"apikey" => $config["search"]["musixmatch_key"],
						"q_track" => track,
						"q_album" => album,
						"q_artist" => artist,
						"page_size" => count
					}
					uri.query = URI::encode_www_form(params)

					data = uri.open.read
					data = JSON.parse(data)

					return false if data["message"]["body"]["track_list"].length == 0


					tracks = data["message"]["body"]["track_list"]

					tracks.map! { | t | t = self.process_track t["track"] }

					return tracks

				end

				private
				def self.process_track track

					genre = nil

					track["primary_genres"]["music_genre_list"].each do | gene |
						gid = gene["music_genre"]["music_genre_id"] 
						next unless $genres.include? gid
						genre = gid; break
					end
					if genre == nil
						track["primary_genres"]["music_genre_list"].each do | gene |
							gid = gene["music_genre"]["music_genre_parent_id"] 
							next unless $genres.include? gid
							genre = gid; break
						end
					end

					genre = 34 if genre == nil

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
						"external_id" => track["commontrack_id"],
						"title" => override_title || track["track_name"],
						"artist" => track["artist_name"],
						"album" => track["album_name"],
						"explicit" => track["explicit"],
						"exists" => Nerve::Model::CacheItem.where(external_id: track["commontrack_id"]).count > 0,
						"genre" => genre,
						"year" => (track["first_release_date"][0..3] rescue nil),
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