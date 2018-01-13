require 'json'
require 'rubygems'
require 'yaml'
require 'pp'

module Nerve; module Model

	class Artist < ActiveRecord::Base

		has_many :tracks

	end

end; end
