class Startup < ActiveRecord::Migration
	def change

		execute <<-SQL

			alter table albums drop key `in_artist`;
			alter table albums drop key `external_id`;

			alter table artists drop key `external_id`;
			alter table artists drop key in_artist;
			alter table artists drop key index_artist;

			alter table migrate_cache drop key full;
			alter table nerve_cache drop key `external_id`, drop key `n_uuid`, drop key `n_tr`, drop key `n_td`;

			alter table tracks drop key in_artist, drop key in_album, drop key in_title, drop key index_title, drop key external_id;

			alter table users drop key external_ref;

		SQL

	end
end
