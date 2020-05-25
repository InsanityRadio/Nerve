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

		def update_metadata

			result = Nerve::Services::Metadata.match artist.name, (album.name rescue ''), title, true, true
			external_id = result['external_id']
			get_metadata 

		end

		def get_metadata

			result, cache_item = Nerve::Services::Metadata.match_meta(external_id, true, "external_id", true)
			_big = result["big"] rescue nil

			_lyrics = (cache_item.lyrics or JSON.parse(_big["lyrics"])[0]) rescue ""
			_lyrics = _lyrics[0] if _lyrics.is_a? Array
			_lyrics = '' if !_lyrics or _lyrics.to_s.empty? or _lyrics.to_s == '0' or _lyrics.to_s == 'false'

			if _lyrics == ''
				_lyrics = "No lyrics available."
				begin
					_lyrics = Nerve::Services::Metadata.match_lyrics(artist.name, (album.name rescue ''), title)[0] 
					if cache_item
						cache_item.lyrics = _lyrics
						cache_item.save
					end
				rescue
					_lyrics = "No lyrics available."
				end
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
			return false if !_lyrics or _lyrics.to_s.empty? or _lyrics == 0

			# TODO: make this cleaner
			_lyrics.scan(r).size == 0 && !!_lyrics && _lyrics != "" && _lyrics != "No lyrics available."

		end

		# cut point after extro is 8 seconds
		def playout_length
			[length, outro + 8.0].min
		end

		def set_unsafe
			explicit = true
		end

		def why_unsafe

			reasons = []
			reasons << "determined as risky during upload" if status == 0 # only works before submission
			reasons << "has parental advisory/explicit flag" if explicit
			_extended, _lyrics = get_metadata

			if !_lyrics.to_s.empty? && _lyrics != 0 && _lyrics != "No lyrics available."
				r = Regexp.new("\\b((#{$config["words"]["banned"].join("|")})[^\\s\\b,.\<\>]*)\\b", 7)
				s = _lyrics.scan(r)
				reasons << "it contains (at least one) expletive (#{s[0]})" if s.size > 0
			else
				reasons << "no lyrics were found"
			end

			reasons.length > 0 ? reasons : false

		end

		def delete! soft = false

			_base = $config["export"]["directory"] + "/"
			File.unlink(_base + local_path) rescue puts "Failed to delete #{id}: #{$!}"

			if soft
				self.status = 6
				self.save
			else
				File.unlink(_base + local_path_preview) rescue puts "Failed to delete #{id} preview: #{$!}"
				File.unlink(_base + local_path_waveform) rescue puts "Failed to delete #{id} form: #{$!}"
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
				"extro_start" => outro,
				"is_library" => is_library,
				"is_automation" => is_automation,
				"playout_id" => playout_id,
				"end_type" => end_type,
				"created_by" => user && user.get_json,
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
