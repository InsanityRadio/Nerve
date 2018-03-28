require 'json'
require 'rest-client'
require 'base64'

$: << '..'
require_relative '../app'

#$config = YAML::load(File.read("../config.yml"))

class Processor < Nerve::Job::Process

	include Object.const_get($config["export"]["mode"])

	def initialize; end

	def process_track track

		# rebuild the track's preview and peaks
		path = track.local_path
		prev_path = $config["export"]["directory"] + "/" + path + ".ogg"
		wave_path = $config["export"]["directory"] + "/" + path + ".dat"

		# If we already have the preview, we probably
		if File.exist?(prev_path) or !File.exist?(track)
			_debug "Skipping for some reason"
			return
		end

		exported_path = self.find_path(track)

		_debug "Generating preview"

		convert(exported_path, prev_path, "ogg", "-1")

		raise "Conversion failed!" unless File.exists? prev_path

		_debug "Generating waveform"

		generate_waveform(prev_path, options["length"], wave_path)

		raise "Generating waveform failed" unless File.exists? 

		_debug "Done!"

	end

end


processor = Processor.new

tracks = Nerve::Model::Track.all
tracks.each { | t |

	begin
		processor.process_track t
	rescue
		begin
			processor.process_track t
		rescue 
			p "Track #{t.id} failed"
			p $!
			p $!.backtrace
		end
	end
	sleep 0.2
}