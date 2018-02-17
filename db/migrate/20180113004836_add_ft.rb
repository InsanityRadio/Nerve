class AddFt < ActiveRecord::Migration
	def change

		add_index :tracks, [:title], :type => :fulltext
		add_index :artists, [:name], :type => :fulltext

	end
end
