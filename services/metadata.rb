require 'json'
require 'open-uri'
require 'tempfile'

# to-do: MusicBrainz

module Nerve
	module Services
		class Metadata < Sinatra::Application

			include Helpers
			include Nerve::Database

			@@METADATA = Nerve::Provider::Track::MusixMatch
			@@LYRICS = Nerve::Provider::Lyrics::MetroLyrics

			def self.match artist, album, track, enhanced = false, force = false

				# Cheat to search for *slight* misspellings without overhead of backend call
				query = Database.query("SELECT * FROM `nerve_cache` 
					WHERE track = ? AND artist=? AND album=?
					UNION SELECT * FROM `nerve_cache`
					WHERE track LIKE CONCAT('%', ?, '%') AND artist=? AND album=?;", 
					track, artist, album, track, artist, album )

				if query.count == 1 and !force
					row = query.first
					data = {
						"cache_id" => row["id"],
						"cache" => "hit",
						"external_id" => row["external_id"],
						"title" => row["track"],
						"artist" => row["artist"],
						"album" => row["album"],
						"explicit" => row["explicit"],
						"genre" => row["genre"],
						"year" => row["year"],
						"exists" => self.exists?(row["external_id"])
					}
					data["lyrics"] = JSON.parse(row["lyrics"]) rescue nil if enhanced
					data["big"] = JSON.parse(row["big"]) if enhanced
					return data

				else

					data, track = @@METADATA.match_metadata(artist, album, track)
					return false if data == false or data["title"].to_s.empty?

					lyrics = self.match_lyrics(data["artist"], data["album"], data["title"])

					data["lyrics"] = lyrics

					data["cache_id"] = self.cache(data)
					data["big"] = enhanced ? data["big"] : nil
					return data

				end

			end

			def self.search artist, album, track, enhanced = false, count = 10


				results = @@METADATA.search_metadata(artist, album, track, count)
				return results

			end

			def self.match_lyrics artist, album, title

				@@LYRICS.match_lyrics(artist, album, title) rescue false

			end

			def self.match_meta id, enhanced = false, column = "id"

				raise "Invalid column name specified?" if column != "id" and column != "external_id"
				query = Database.query("SELECT * FROM `nerve_cache` WHERE #{column}=?;", id)

				if query.count == 1

					row = query.first
					data = {
						"cache_id" => row["id"],
						"cache" => "duh",
						"external_id" => row["external_id"],
						"title" => row["track"],
						"artist" => row["artist"],
						"album" => row["album"],
						"explicit" => row["explicit"],
						"genre" => row["genre"],
						"year" => row["year"],
						"exists" => self.exists?(row["external_id"])
					}

					data["lyrics"] = row["lyrics"] if enhanced
					data["big"] = JSON.parse(row["big"]) if enhanced
					return data

				else
					return false
				end

			end

			def self.get_genre id

				return $genres.include?(id) ? $genres[id] : false

			end

			def self.cache data 

				Database.query("INSERT INTO `nerve_cache` 
					(external_id, track, artist, album, explicit, genre, year, big, lyrics)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), big=?;", 

					data["external_id"],
					data["title"], data["artist"], data["album"],
					data["explicit"], data["genre"], data["year"] == '' ? 0 : data["year"], data["big"],
					data["lyrics"], data["big"]	)

				Database.last_id

			end

			def self.exists? external_id

				Nerve::Model::TrackProvider.count("t.external_id = ?", external_id) > 0

			end

			get '/metadata/match/' do 

				protect_json!

				if params['id']
					data = Metadata::match_meta(params['id'], params['enhanced'] == "1")
				else
					data = Metadata::match(
						params['artist'],
						params['album'],
						params['title'],
						params['enhanced'] == "1")
				end

				return status(404) if data == false
				data.to_json

			end

			get '/metadata/search/' do 

				protect_json!

				data = Metadata::search(
					params['artist'],
					params['album'],
					params['title'],
					params['enhanced'] == "1")

				return status(404) if data == false
				data.to_json

			end

			get '/metadata/explicit_artist/' do

				protect_json!

				data = Metadata::search(params['artist'], '', '', false, 100)

				@explicit = 0

				data.each { | r | @explicit = 1 if r['explicit'] == 1 } if data != false

				{ :explicit => @explicit }.to_json

			end	

		end
	end
end