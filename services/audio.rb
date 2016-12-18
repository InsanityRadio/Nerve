require 'json'
require 'open-uri'
require 'tempfile'

# to-do: MusicBrainz

module Nerve
	module Services
		class Audio < Sinatra::Application

			include Helpers
			include Nerve::Database

			get '/audio/get/:id' do | id |

				path = Database.query("SELECT local_path FROM `tracks` WHERE id=?", id)
				path = $config["export"]["directory"] + "/" + path.first["local_path"]

				send_file(path, :type => "audio/flac", :disposition => 'inline')

			end

			get '/audio/preview/:id' do | id |

				path = Database.query("SELECT local_path FROM `tracks` WHERE id=?", id)
				path = $config["export"]["directory"] + "/" + path.first["local_path"] + ".ogg"

				send_file(path, :type => "audio/ogg", :disposition => 'inline')

			end

			get '/audio/waveform/:id' do | id |

				path = Database.query("SELECT local_path FROM `tracks` WHERE id=?", id)
				path = $config["export"]["directory"] + "/" + path.first["local_path"] + ".dat"

				send_file(path, :type => "application/octet-stream", :disposition => 'inline')

			end

		end
	end
end