class AddTimes < ActiveRecord::Migration
	def change

		execute 'ALTER TABLE albums ALTER COLUMN creation_date SET DEFAULT NOW()'
		execute 'ALTER TABLE artists ALTER COLUMN creation_date SET DEFAULT NOW()'
		execute 'ALTER TABLE nerve_cache ALTER COLUMN creation_date SET DEFAULT NOW()'
		execute 'ALTER TABLE tracks ALTER COLUMN creation_date SET DEFAULT NOW()'

	end
end
