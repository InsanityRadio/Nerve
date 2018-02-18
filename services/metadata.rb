require 'json'
require 'open-uri'
require 'tempfile'

# to-do: MusicBrainz

module Nerve
	module Services
		class Metadata < Sinatra::Application

			include Helpers

			@@METADATA = Nerve::Provider::Track::MusixMatch
			@@LYRICS = Nerve::Provider::Lyrics::MetroLyrics

			def self.match artist, album, track, enhanced = false, force = false

				# Cheat to search for *slight* misspellings without overhead of backend call

				cache_item = Nerve::Model::CacheItem.
					where('track=? AND artist=? AND album=?', track, artist, album)

				if cache_item.length == 1 and !force
					row = query.first
					data = cache_item.get_json(enhanced)
					return data

				else

					data, track = @@METADATA.match_metadata(artist, album, track)
					return false if data == false or data["title"].to_s.empty?

					lyrics = self.match_lyrics(data["artist"], data["album"], data["title"])

					data["lyrics"] = lyrics

					data["cache_id"] = self.cache(data).id
					data["big"] = enhanced ? data["big"] : nil

					return data

				end

			end

			def self.search artist, album, track, enhanced = false, count = 10

				results = @@METADATA.search_metadata(artist, album, track, count) || []
				results.map { | r | r["cache_id"] = self.cache(r).id }
				return results

			end

			def self.match_lyrics artist, album, title

				@@LYRICS.match_lyrics(artist, album, title) rescue false

			end

			def self.match_meta id, enhanced = false, column = "id", raw = false 

				raise "Invalid column name specified?" if column != "id" and column != "external_id"
				
				query = Nerve::Model::CacheItem.where("#{column}=?", id)
				return false if query.count == 0 or !query.first
				item = query.first.get_json(enhanced)
				raw ? [item, query.first] : item

			end

			def self.get_genre id

				return $genres.include?(id) ? $genres[id] : false

			end

			def self.cache data 

				item = Nerve::Model::CacheItem.find_or_create_by(external_id: data['external_id'])
				item.init_by data
				item.save
				item

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
