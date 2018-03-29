require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

module Nerve; module Model

	class CacheItem < ActiveRecord::Base

		self.table_name = 'nerve_cache'

		serialize :lyrics, JSON
		serialize :big, JSON

		alias_attribute :title, :track

		def exists?
			Track.where('external_id=?', external_id).count > 0
		end

		def init_by data

			data['year'] = data['year'] == '' ? 0 : data['year']
			data['track'] = data['title']

			data = data.select {|x| self.class.attribute_names.index(x) }
			assign_attributes data

		end

		def get_json enhanced = false
			return {
				"cache_id" => id,
				"cache" => "hit",
				"external_id" => external_id,
				"title" => track,
				"artist" => artist,
				"album" => album,
				"explicit" => explicit,
				"genre" => genre,
				"year" => year,
				"exists" => exists?
			}.merge(enhanced ? {
				"lyrics" => lyrics,
				"big" => big
			} :{})
		end

	end

end; end
