class AddTimes < ActiveRecord::Migration
	def change

		execute 'ALTER TABLE albums MODIFY COLUMN creation_date datetime DEFAULT NOW()'
		execute 'ALTER TABLE artists MODIFY COLUMN creation_date datetime DEFAULT NOW()'
		execute 'ALTER TABLE nerve_cache MODIFY COLUMN creation_date datetime DEFAULT NOW()'
		execute 'ALTER TABLE tracks MODIFY COLUMN creation_date datetime DEFAULT NOW()'

	end
end
