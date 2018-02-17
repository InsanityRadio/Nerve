require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

module Nerve; module Model

	class Album < ActiveRecord::Base

		has_many :tracks
		belongs_to :artist, foreign_key: 'artist'

	end

end; end
