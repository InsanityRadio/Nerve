class UpdateTrackCols < ActiveRecord::Migration
	def change

		change_column :tracks, :explicit, :boolean
		change_column :tracks, :flagged, :boolean
		change_column :tracks, :explicit, :boolean
		change_column :tracks, :instrumental, :boolean
		change_column :tracks, :is_library, :boolean
		change_column :tracks, :explicit, :boolean
		change_column :tracks, :is_automation, :boolean

	end
end
