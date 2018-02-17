require 'json'
require 'open-uri'
require 'tempfile'

# to-do: MusicBrainz

module Nerve
	module Services
		class Audio < Sinatra::Application

			include Helpers
			include Nerve::Database
			helpers Sinatra::Xsendfile

			get '/audio/get/:id' do | id |

				protect_cors!

				path = Nerve::Model::Track.find(id).local_path
				path = $config["export"]["directory"] + "/" + path

				ext = File.extname(path)

				send_file(path, :type => Rack::Mime::MIME_TYPES[ext] || "application/octet-data", :disposition => params[:force] == '1' ? 'attachment' : 'inline', :filename => "#{id}#{ext}")

			end

			# Retrieve audio from the playout system.
			get '/audio/export/:id' do | id |

				protect_cors!

				track = Nerve::Model::Track.find(id)

				path = Object.const_get($config["export"]["mode"]).find_path(track)
				ext = File.extname(path)

				send_file(path, :type => Rack::Mime::MIME_TYPES[ext] || "application/octet-data", :disposition => params[:force] == '1' ? 'attachment' : 'inline', :filename => "#{id}#{ext}")

			end

			get '/audio/preview/:id' do | id |

				protect_cors!

				path = Nerve::Model::Track.find(id).local_path
				path = $config["export"]["directory"] + "/" + path + ".ogg"

				send_file(path, :type => "audio/ogg", :disposition => 'inline')

			end

			get '/audio/waveform/:id' do | id |

				protect_cors!

				path = Nerve::Model::Track.find(id).local_path
				path = $config["export"]["directory"] + "/" + path + ".dat"

				send_file(path, :type => "application/octet-stream", :disposition => 'inline')

			end

		end
	end
end
