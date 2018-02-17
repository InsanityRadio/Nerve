class ColAb < ActiveRecord::Migration
	def change

		add_column :tracks, :category_a, :integer
		add_column :tracks, :category_b, :integer

	end
end
