require 'shellwords'
require 'json'

module Nerve; module Model

	class TrackProvider

		def self.search query, count = 10, page = 0

			<<END
sql_q = ActiveRecord::Base.send(:sanitize_sql_array, ["SELECT x.*,
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
				LIMIT #{(page * count).to_i}, #{count};", query, query])
END


			query_string = query.to_s.shellsplit.map{|s|
				s.start_with?(/\w/) ? "+" + s : s
			}.map{|s| s.include?(" ") ? s.to_json : s + "*" }.join(" ")

			sql_q = ActiveRecord::Base.send(:sanitize_sql_array, ["SELECT t.* FROM (SELECT l.*, MATCH(title,artist) AGAINST(? IN BOOLEAN MODE) as score FROM library_view l) library INNER JOIN tracks t ON t.id = library.id WHERE score order by score desc limit 100;", query])
			#sql_q = ActiveRecord::Base.send(:sanitize_sql_array, ["SELECT t.* FROM (SELECT l.*, MATCH(title,artist) AGAINST(REGEXP_REPLACE(?, '(\\\\b[a-zA-Z\\']+\\\\b)', '+\\\\1') IN BOOLEAN MODE) as score FROM library_view l) library INNER JOIN tracks t ON t.id = library.id WHERE score order by score desc limit 100;", query.to_s + "*"])
			result = Nerve::Model::Track.find_by_sql(sql_q)

		end

		

	end

end; end
