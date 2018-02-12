class Startup < ActiveRecord::Migration
	def change

		begin
			execute "alter table albums drop key `in_artist`;"
		
			execute "alter table albums drop key `external_id`;"

			execute "alter table artists drop key `external_id`;"
			execute "alter table artists drop key in_artist;"
			execute "alter table artists drop key index_artist;"

			execute "alter table migrate_cache drop key full;"
			execute "alter table nerve_cache drop key `external_id`, drop key `n_uuid`, drop key `n_tr`, drop key `n_td`;"

			execute "alter table tracks drop key in_artist, drop key in_album, drop key in_title, drop key index_title;"

			execute "alter table users drop key external_ref;"
		rescue
		end

	end
end
