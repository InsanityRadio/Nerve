class AddExtraPaths < ActiveRecord::Migration
	def change

		add_column :tracks, :local_path_preview, :string
		add_column :tracks, :local_path_waveform, :string

		Nerve::Model::Track.find_each do | track |

			track.local_path_waveform = track.local_path + ".dat"
			track.local_path_preview = track.local_path + ".ogg"

			track.save!

		end

	end
end
