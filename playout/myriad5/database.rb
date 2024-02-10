require 'securerandom'
require 'fileutils'

module Nerve; module Playout; class Myriad5

	class Database

		attr_reader :current_item_number

		def self.get_connection database

			database = "Myriad4"

			database_settings = $config["export"]["settings"]["database5"]
			raise "Database settings non-existent in config.yml" if !database_settings

			@@connections ||= {}

			if true or !@@connections[database] or !@@connections[database].active?
				@connection = @@connections[database] = TinyTds::Client.new(
					username: database_settings["user"], password: database_settings["password"],
					host: database_settings["host"], port: (database_settings["port"] or 49180),
					database: (database or database_settings["name"] ))
			end
			@connection

		end

		def initialize database

			raise "Expecting a database" if !database
			@database = database
			@conn = self.class.get_connection database

		end

		def get_artist_id artist_name
			artist_id = nil
			begin

				result = @conn.execute(sprintf("SELECT * FROM Artists WHERE ArtistNAme='%s'",
					@conn.escape(artist_name)))
				artist_id = result.to_a[0]["ArtistNumber"]
				result.do
				raise unless artist_id

			rescue
			
				result = @conn.execute(sprintf("INSERT INTO Artists (ArtistName) VALUES ('%s')",
					@conn.escape(artist_name)))
				artist_id = result.insert unless artist_id

				result.do

			end
			return artist_id
		end

		def get_title_id title
			title_id = nil
			begin

				result = @conn.execute(sprintf("SELECT * FROM SongTitles WHERE ItemTitle='%s'",
					@conn.escape(title)))
				title_id = result.to_a[0]["TitleNumber"]
				result.do
				raise unless title_id

			rescue
			
				result = @conn.execute(sprintf("INSERT INTO SongTitles (ItemTitle) VALUES ('%s')",
					@conn.escape(title)))
				title_id = result.insert unless title_id

				result.do

			end
			return title_id
		end

		# This looks redundant, but it's not. The style may not exist, so we should make it.
		# This version of TDS has no INSERT IGNORE
		def get_style id, description
			style_id = nil
			begin

				result = @conn.execute(sprintf("SELECT * FROM Styles WHERE ItemNumber='%s'",
					id))
				style_id = result.to_a[0]["ItemNumber"]
				result.do
				raise unless style_id

			rescue
			
				result = @conn.execute(sprintf("INSERT INTO Styles (ItemNumber, Description) VALUES ('%s', '%s')",
					id, @conn.escape(description)))
				style_id = result.insert unless style_id

				result.do

			end

			" " * (style_id - 1) + "Y "
			#return style_id
		end

		# Round a year and make an era - otherwise return <unknown>
		def get_era year

			return 0 if !year   # 0 = unknown

			year = year.to_i
			description = "#{year - (year % 10)}s"
			era_id = nil
			begin

				result = @conn.execute(sprintf("SELECT * FROM SongEras WHERE Description='%s'",
					@conn.escape(description)))
				era_id = result.to_a[0]["ItemNumber"]
				result.do
				raise unless era_id

			rescue
			
				result = @conn.execute("SELECT TOP 1 ItemNumber FROM SongEras ORDER BY ItemNumber DESC;")
				item_number = (result.to_a[0]["ItemNumber"].to_i + 1) rescue 1
				result.do rescue nil

				result = @conn.execute(sprintf("INSERT INTO SongEras
					(ItemNumber, Description, BackColour) VALUES (%i, '%s', '%i')",
					item_number, description, ((rand * 0x666666).round * 2)))
				era_id = item_number 

				result.do

			end
			return era_id	

		end

		def insert_into_deck item_number, category_id

			result = @conn.execute("SELECT TOP 1 * FROM SongDeck
				WHERE Category=#{category_id.to_i}
				ORDER BY Position DESC;") rescue nil
			result.do rescue nil
			position = (result.to_a[0]["Position"] + 1) rescue 1

			begin
				result = @conn.execute(sprintf("INSERT INTO SongDeck (Category, CategoryIndex, Position,
					ItemNumber, CurTimesTested, AvgTimesTestedBeforeSchedule, NumTimesInAverage)

					VALUES ('%s', 1, '%s', '%s', 0, 0, 0);",

					category_id, position, item_number

				)) 

				result.do
			rescue
			end

		end

		def get_nerve_id_from_cart cart_id 
			result = @conn.execute("SELECT TOP 1 ExternalReference FROM Songs WHERE HDReference=#{cart_id.to_i};").to_a
			p result
			return result[0]['ExternalReference'].match(/Nerve_(\d+)$/)[1].to_i rescue result.length > 0 ? -1 : nil 
		end

		def add_track cart_id, track, category_id, alt_category_id = 0, options = {}

			artist_id = get_artist_id track.artist.name
			title_id = get_title_id track.title
			style_id = get_style track.genre, $genres[track.genre]

			metadata = track.get_metadata
			hour_r = "ABCDEFGHIJKLMNOPQRSTUVWX" # A = 0:00, B = 1:00, etc., remove to block in hour

			year = (metadata[2].to_s rescue '') || ''
			era_id = get_era year

			if options['ForceID']
				item_number = options['ForceID']
			else
				result = @conn.execute("SELECT TOP 1 ItemNumber FROM Songs ORDER BY ItemNumber DESC;")
				item_number = (result.to_a[0]["ItemNumber"].to_i + 1) rescue 1
				result.do rescue nil
			end

			if track.playout_id and track.playout_id === track.playout_id.to_i.to_s
				puts "Delete old row"
				@conn.execute("DELETE FROM Songs WHERE ItemNumber=#{track.playout_id.to_i};")
			end

			@current_item_number = item_number

			uploader = @conn.escape(track.created_by.username) rescue "???"

			result = @conn.execute(q = sprintf("INSERT INTO Songs (GUID, ItemSource, ExternalReference,
					TitleNumber, ArtistNumber1, ArtistNumber2, DisplayTitle, DisplayBy,
					HDReference, Category, AlternateCategory, Type, Era,
					Gender, CharacteristicStart1, CharacteristicEnd1,
					CharacteristicStart2, CharacteristicEnd2, CharacteristicStart3,
					CharacteristicEnd3, CharacteristicStart4, CharacteristicEnd4,
					CharacteristicStart5, CharacteristicEnd5,
					CollectionNumber, HourRestrictions1,
					HourRestrictions2, HourRestrictions3, HourRestrictions4,
					HourRestrictions5, HourRestrictions6, HourRestrictions7,
					StartDate, EndDate, KillDate, Year, EndingType, Styles,
					Throw, OriginallyAdded, OriginallyAddedDate, LastEditedDate,
					CategoryPlays, ItemNumber, Length, IntroStart, IntroEnd, Extro)
				VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', 
					    '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', 
					    '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s',
					    '%s', '%s', '%s', '%s', NULL, NULL, NULL, '%s', '%s', '%s', '%s',
					    '%s', GETDATE(), GETDATE(), 0, %i, '%s', '%s', '%s', '%s')",
				
					SecureRandom.uuid, nil, 'Nerve_' + track.id.to_s,
					title_id, artist_id, nil, @conn.escape(track.title), @conn.escape(track.artist.name),
					cart_id, category_id, alt_category_id, 0, era_id,
					0, (options['CharacteristicStart1'] or 0), (options['CharacteristicEnd1'] or 0),
					(options['CharacteristicStart2'] or 0), (options['CharacteristicEnd2'] or 0),
					(options['CharacteristicStart3'] or 0), (options['CharacteristicEnd3'] or 0),
					(options['CharacteristicStart4'] or 0), (options['CharacteristicEnd4'] or 0),
					(options['CharacteristicStart5'] or 0), (options['CharacteristicEnd5'] or 0), 0, hour_r,
					hour_r, hour_r, hour_r, hour_r, hour_r, hour_r,
					@conn.escape(year), 1, style_id,
					100, "Nerve User (#{uploader})", item_number,
					track.playout_length.to_f.round,
					track.intro_start.to_f.round, track.intro_end.to_f.round,
					track.outro.to_f.round

				))

			result.do

			insert_into_deck item_number, category_id

			return item_number


		end

		def update_track track, options

			artist_id = get_artist_id track.artist.name
			title_id = get_title_id track.title

			arguments = []
			query = []

			options['DisplayTitle'] = track.title
			options['DisplayBy'] = track.artist.name

			options.each { | k, v | arguments << k + " = '%s'"; query << @conn.escape(v.to_s) }

			arguments = arguments.join(", ")

			result = @conn.execute(q = sprintf("UPDATE Songs SET #{arguments}
			WHERE ItemNumber=#{track.playout_id};",
					*query
				))

			result.do

		end

		def delete_track track

			result = @conn.execute(sprintf("SELECT ItemNumber, HDReference FROM Songs WHERE ItemNumber=%i AND
				ExternalReference='%s';",
				track.playout_id.to_i, @conn.escape('Nerve_' + track.id.to_s)))

			return false if result.to_a.length != 1
			item_number = result.to_a[0]["ItemNumber"].to_i
			cart_number = result.to_a[0]["HDReference"].to_i

			@conn.execute(sprintf("DELETE FROM Songs WHERE HDReference='%i';",
				cart_number)).do

			@conn.execute(sprintf("DELETE FROM SongDeck WHERE ItemNumber='%i';",
				item_number)).do


			return cart_number

		end


		def get_cart track

			result = @conn.execute(sprintf("SELECT HDReference FROM Songs WHERE ItemNumber=%i AND
				ExternalReference='%s';",
				track.playout_id.to_i, @conn.escape('Nerve_' + track.id.to_s)))

			begin
				return result.to_a[0]["HDReference"].to_i
			rescue
				raise "Track not yet exported."
			end

		end


	end

end; end; end
