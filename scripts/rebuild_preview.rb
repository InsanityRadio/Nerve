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

		# rebuild the track's preview and peaks. first, set up the env like we'd expect
		@track = track
		@final_path = track.local_path

		exported_path = Object.const_get($config["export"]["mode"]).find_path(track)

		preview_path = @final_path + get_preview_format[1]

		# If we already have the preview, we probably
		if File.exist?(preview_path) or !File.exist?(exported_path)
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

			_debug "Made copy of exported cart to preview from"

			@track.local_path_preview = preview([], temp_path)
			@track.save

			prev_path = resolve(@track.local_path_preview)
			raise "Conversion failed!" unless File.exists?(prev_path)

			_debug "Generating waveform"

			unless @track.local_path_waveform == nil or File.exist?(@track.local_path_waveform)

				track.local_path_waveform = @final_path + ".dat"
				wave_path = generate_waveform(resolve(@final_path), track.length.to_f)

				raise "Generating waveform failed" unless File.exists?(@track.local_path_waveform)

			end

			@track.save

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
