require 'json'
require 'rest-client'
require 'base64'

$: << '..'
require_relative '../app'

#$config = YAML::load(File.read("../config.yml"))

class Processor < Nerve::Job::Process

	include Object.const_get($config["export"]["mode"])

	def initialize; end

	def at *args; end

	def process_track track

		# rebuild the track's preview and peaks
		path = track.local_path
		prev_path = $config["export"]["directory"] + "/" + path + ".ogg"
		wave_path = $config["export"]["directory"] + "/" + path + ".dat"

		exported_path = Object.const_get($config["export"]["mode"]).find_path(track)

		# If we already have the preview, we probably
		if File.exist?(prev_path) or !File.exist?(exported_path)
			_debug "Skipping for some reason"
			return
		end


		temp = []

		begin

			_debug "Generating preview"

			temp << Tempfile.new(['nerve', '.wav'])
			temp_path = temp[0].path
			temp[0].close; temp[0].unlink

			FileUtils::copy(exported_path, temp_path)

			convert(temp_path, prev_path, "ogg", "-1")

			raise "Conversion failed!" unless File.exists? prev_path

			_debug "Generating waveform"

			generate_waveform(temp_path, track.length.to_f, wave_path)

			raise "Generating waveform failed" unless File.exists? wave_path

			_debug "Done!"
		
		ensure

			temp.map { |t| File.unlink(t) }

		end

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