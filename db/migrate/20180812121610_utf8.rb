class Utf8 < ActiveRecord::Migration
	def change
		execute 'ALTER DATABASE nerve CHARACTER SET utf8 COLLATE utf8_general_ci;'
	end
end
