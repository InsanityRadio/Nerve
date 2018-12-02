class AddConfigTable < ActiveRecord::Migration
	def change
		create_table(:settings) do |t|
			t.string :setting, :null => false
			t.text :value

			t.index :setting, unique: true
		end
	end
end
