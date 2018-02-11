require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

module Nerve; module Model

	class Track < ActiveRecord::Base

		belongs_to :artist, foreign_key: 'artist'
		belongs_to :album, foreign_key: 'album'

		belongs_to :created_by, :class_name => "User", :foreign_key => 'created_by'
		belongs_to :approved_by, :class_name => "User", :foreign_key => 'approved_by'

		alias_attribute :upload_date, :creation_date
		alias_attribute :genre, :main_genre

		serialize :extra, JSON

		default_scope { includes :artist, :album }

		def approved
			!!status and status > 3
		end

		def get_metadata

			result = Nerve::Services::Metadata.match_meta(external_id, true, "external_id")
			_big = result["big"] rescue nil

			_lyrics = JSON.parse(_big["lyrics"])[0] rescue ""

			if !_lyrics or _lyrics.to_s.empty?
				_lyrics = Nerve::Services::Metadata.match_lyrics(artist.name, album.name, title)[0] \
					rescue "No lyrics available."
			end

			[result, _lyrics, (result["year"] rescue nil)]

		end

		# Unguaranteed to be absolutely safe, but it's more safe than sorry.
		def is_safe

			return false if explicit or status == 0
			_extended, _lyrics = get_metadata

			return true if instrumental

			# This nasty looking regex basically matches all words that start with nasties. 
			# that way we don't match, say, saltwater (although we might actually want to, it's gross)
			r = Regexp.new("\\b((#{$config["words"]["banned"].join("|")})[^\\s\\b,.\<\>]*)\\b", 7)

			# If the size is 0, then it's "safe" ish
			return false if !_lyrics or _lyrics.to_s.empty?

			# TODO: make this cleaner
			_lyrics.scan(r).size == 0 && !!_lyrics && _lyrics != "" && _lyrics != "No lyrics available."

		end

		def set_unsafe
			explicit = 1
		end

		def why_unsafe

			return "determined as risky during upload" if status == 0 # only works before submission
			return "has parental advisory/explicit flag" if explicit
			_extended, _lyrics = get_metadata

			r = Regexp.new("\\b((#{$config["words"]["banned"].join("|")})[^\\s\\b,.\<\>]*)\\b", 7)
			s = _lyrics.scan(r)

			return "it contains (at least one) expletive (#{s[0]})" if s.size > 0
			return "no lyrics were found" if !_lyrics or _lyrics == "No lyrics available."

			false

		end

		def delete! soft = false
			_local_path = $config["export"]["directory"] + "/" + local_path
			File.unlink(_local_path) rescue nil
			if soft
				self.status = 6
				self.save
			else
				File.unlink(_local_path + ".ogg") rescue nil
				File.unlink(_local_path + ".dat") rescue nil
				destroy
			end
		end

		def get_json extended = false

			user = created_by

			data = {
				"id" => id,
				"external_id" => external_id, 
				"title" => title,
				"artist" => artist.name,
				"album" => album.name,
				"approved" => approved,
				"approved_by" => approved_by && approved_by.get_json,
				"genre" => genre,
				"genre_text" => $genres[genre],
				"length" => length,
				"status" => status,
				"upload_date" => upload_date.iso8601,
				"is_library" => is_library,
				"is_automation" => is_automation,
				"playout_id" => playout_id,
				"end_type" => end_type,
				"created_by" => user.get_json,
				"flagged" => flagged,
				"instrumental" => instrumental,
				"extra" => extra
			}

			# Extended means lyrics and such 
			if extended == true
				extended, lyrics = get_metadata
				data.merge!({
					"intro_start" => intro_start,
					"intro_end" => intro_end,
					"hook_start" => hook_start,
					"hook_end" => hook_end,
					"extro_start" => outro	})
			else
				extended = false
			end
			
			data["big"] = extended
			data["lyrics"] = lyrics

			data

		end

		def to_json extended = true

			self.get_json(extended).to_json

		end

	end

end; end
