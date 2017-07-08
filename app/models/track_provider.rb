module Nerve; module Model

	class TrackProvider

		def self.from_id id

			result = where("t.id = ?", id).first

			raise "No such track" if !result
			result

		end

		def self.all

			where("1=1")

		end

		def self.where where, *params

			result = Database.query("SELECT t.*, a.name AS album_name, r.name AS artist_name,
				CAST(length AS CHAR(255)) AS length
				FROM `tracks` t
				LEFT JOIN `albums` a ON a.id = t.album 
				LEFT JOIN `artists` r ON r.id = t.artist 
				WHERE #{where};", *params).to_a.map { | a | self.from a }

		end

		def self.search query, count = 10, page = 0

			result = Database.query("SELECT x.*,
				CAST(x.length AS CHAR(255)) AS length,
				(s1 + s2) AS s3 FROM
					(SELECT t.*, a.name AS album_name, r.name AS artist_name,

					MATCH (t.title)
						AGAINST (? IN NATURAL LANGUAGE MODE) AS s1,

					MATCH (r.name)
						AGAINST (? IN NATURAL LANGUAGE MODE) AS s2

					FROM `tracks` t
					LEFT JOIN `albums` a ON a.id = t.album 
					LEFT JOIN `artists` r ON r.id = t.artist 
					WHERE t.status = 5 or t.status = 6
					) x
				WHERE (s1 + s2) > 0.1
				ORDER BY s3 DESC
				LIMIT #{(page * count).to_i}, #{count};", query, query).to_a.map { | a | self.from a }

		end

		def self.count where, *params

			Database.query("SELECT COUNT(*) AS c FROM (
				SELECT t.*, a.name AS album_name, r.name AS artist_name
				FROM `tracks` t
				LEFT JOIN `albums` a ON a.id = t.album 
				LEFT JOIN `artists` r ON r.id = t.artist 
				WHERE #{where}) x;", *params).first["c"].to_i

		end

		private
		def self.from result
			Track.new result
		end

	end

end; end