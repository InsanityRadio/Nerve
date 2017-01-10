require 'json'
require 'tiny_tds'
require 'pp'

module Nerve; module Migrate
	class Myriad

		def initialize

			Myriad.load_settings
			@@connections = {}
			@connection = Myriad.get_connection @@database

			@state = JSON.parse(File.read(File::dirname(__FILE__) + "/.myriad.persist.dat")) rescue nil

		end

		def self.load_settings
			@@database = $config["migrate"]["database"]

			@@audiowall = Nerve::Playout::AudioWall.new $config["migrate"]["audiowall"], $config["migrate"]["use_extended_path"]
			@@audiowall.load_settings

			@@migrate_id = $config["migrate"]["category_id"]
		end

		def self.get_connection database

			self.load_settings if !@@database
			Nerve::Playout::AudioWall::Database.get_connection database

		end

		def start_migration all = false

			puts @state

			a = all ? "" : " TOP 1"

			result = @connection.execute("SELECT#{a} s.*, t.ItemTitle, a.ArtistName
				FROM Songs AS s
				JOIN SongTitles AS t ON (t.TitleNumber = s.TitleNumber)
				JOIN Artists AS a ON (a.ArtistNumber = s.ArtistNumber1)
				WHERE (NerveStatus = null OR NerveStatus = 0) AND Category=#{@@migrate_id.to_i};").to_a

			result.each do | track |
				begin

					t = track["ItemNumber"].to_i
					puts "Queueing track #{t} (cart #{track["HDReference"]}, #{track["ItemTitle"]}, #{track["ArtistName"]})"

					cart_id = track["HDReference"].to_i
					file_path = @@audiowall.get_audio_path(cart_id)

					queue track, cart_id, file_path

					self.class.status_update t, 1
				rescue TinyTds::Error
					retry if $!.message == "Adaptive Server connection timed out"
					puts "SQL Error"
					pp $!
					pp $!.backtrace
					self.class.status_update t, 8
				rescue
					puts "Failed uploading #{t} - potentially reassigned cart?!"
					pp $!
					pp $!.backtrace
					self.class.status_update t, 8
				end

			end


			exit!(99) if result.to_a.length == 0

			result.do

			p result.to_a

		end

		def self.status_update reference, code = 0, track_id = nil

			# Re-use any connection we may have if it exists
			self.load_settings
			sql = self.get_connection @@database

			sql.execute("UPDATE Songs SET NerveStatus = #{code.to_i} WHERE ItemNumber=#{reference.to_i};").do

			# 0 - retry, 1 - in progress, 2 - ?, 3 - imported to Nerve, 5 - exported to playout, 7 - fail, 8 - check cart

			if code == 3

				Myriad.set_metadata reference, track_id

				# If the "trust" config key is set, we're fine to flat out upload it
				track = Nerve::Playout::Track.from_id track_id
				track.status = 3
				track.save
				return unless $config["import"]["auto_import_trust"] or track.is_safe

				track.is_library = true
				track.is_automation = $config["migrate"]["automation"]
				track.status = 4
				track.save
				Nerve::Job::Transfer.create({
					"track_id" => track_id,
					"status_update" => "Nerve::Migrate::Myriad",
					"category_id" => $config["migrate"]["target_category_id"]}) 

			end

		end

		# Import the intro/extro points from our LST files - that's very useful for us. 
		def self.set_metadata myriad_id, nerve_id

			sql = self.get_connection @@database
			myriad_id = myriad_id.to_i

			puts "Called set_metadata with #{myriad_id}, #{nerve_id}"

			res = sql.execute("SELECT HDReference FROM Songs WHERE ItemNumber=#{myriad_id};").to_a

			raise "Track gone??" if (res[0]["HDReference"] rescue nil) == nil

			cart = @@audiowall.load_cart(res[0]["HDReference"].to_i)

			track = Nerve::Playout::Track.from_id nerve_id

			raise "Could not find audio cart" if !track

			track.intro_start = cart.intro_start
			track.intro_end = cart.intro_end
			track.hook_start = cart.hook_start
			track.hook_end = cart.hook_end
			track.outro = cart.extro_start # Confusing names huh? It's on my to-do list..

			track.save

		end

		def queue track, cart_id, aw_file

			meta = Nerve::Services::Metadata::match(
				track['ArtistName'],
				'',
				track['ItemTitle']) rescue nil

			meta = {
				'title' => track['ItemTitle'],
				'artist' => track['ArtistName'],
				'album' => '',
				'cache_id' => -1} if !meta

			cart = @@audiowall.load_cart(cart_id)

			raise "Unmatching title #{cart.title}, #{track['ItemTitle']}" \
				if cart.title.downcase.strip != track['ItemTitle'].downcase.strip

			raise "Unmatching artist #{cart.artist}, #{track['AritstName']}" \
				if cart.artist.downcase.strip != track['ArtistName'].downcase.strip

			data = {
				"file" => aw_file,
				"user_id" => 0,
				"cache_id" => meta['cache_id'],
				"ext_id" => track['ItemNumber'].to_i,
				"artist" => meta['artist'],
				"title" => meta['title'],
				"album" => meta['album'],
				"override_bitrate" => false, # TODO: check user can do that
				"override_compressor" => false,
				"upload_library" => true,
				"automation" => true,
				"status_update" => "Nerve::Migrate::Myriad"
			}

			data["explicit"] = meta['cache_id'] == -1 ? 1 : 0

			# Create the job, and sit back and relax!
			{:token => Nerve::Job::Process.create(data)}

		end

	end
end; end


if __FILE__ == $0

	myr = Nerve::Migrate::Myriad.new
	myr.start_migration

end