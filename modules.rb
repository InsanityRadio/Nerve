# Put any autoloads in here.

$: << File.expand_path('../', __FILE__)

module Nerve

	module Authentication

		autoload :Authentication, "auth/authentication"
		autoload :Simple, "auth/simple"

		autoload :Cortex, "auth/cortex"
		autoload :MSO, "auth/mso"

	end

	module Job

		autoload :Job, 'jobs/job'

		autoload :CleanUp, "jobs/cleanup"
		autoload :Recall, "jobs/recall"
		autoload :Process, "jobs/process"
		autoload :Transfer, "jobs/transfer"
		autoload :Update, "jobs/update"

	end

	module Migrate

		autoload :Myriad, "migrate/myriad"

	end

	module Mixin

		autoload :Mixin, "app/mixin/mixin"
		autoload :Runner, "app/mixin/runner"

		autoload :Spotify, "app/mixin/spotify"

	end

	module Playout

		autoload :AudioWall, "playout/audiowall"
		autoload :Myriad, "playout/myriad"


		class AudioWall
			autoload :Database, "playout/audiowall/database"
			autoload :Export, "playout/audiowall/export"
		end

		class Myriad5
			autoload :Database, "playout/myriad5/database"
			autoload :Export, "playout/myriad5/export"
			autoload :SignalR, "playout/myriad5/signalr"
			autoload :RESClient, "playout/myriad5/res_client"
			autoload :MediaWall, "playout/myriad5/mediawall"
		end

	end

	module Provider

		module Track

			autoload :Spotify, "app/providers/track/spotify.rb"
			autoload :MusixMatch, "app/providers/track/musixmatch.rb"
			autoload :MusicBrainz, "app/providers/track/musicbrainz.rb"
			autoload :Gracenote, 'app/providers/track/gracenote'

		end

		module Lyrics

			autoload :MetroLyrics, "app/providers/lyrics/metrolyrics.rb"
			autoload :MusixMatch, "app/providers/lyrics/musixmatch.rb"
			autoload :Genius, "app/providers/lyrics/genius.rb"

		end

	end

	module Services

		autoload :Audio, "services/audio"
		autoload :Helpers, "services/helpers"
		autoload :Library, "services/library"
		autoload :Login, "services/login"
		autoload :Metadata, "services/metadata"
		autoload :Moderation, "services/moderation"
		autoload :Upload, "services/upload"

	end

	module Model

		autoload :Album, "app/models/album"
		autoload :Artist, "app/models/artist"
		autoload :Track, "app/models/track"
		autoload :TrackProvider, "app/models/track_provider"

		autoload :CacheItem, "app/models/cache_item"

		autoload :Setting, "app/models/setting"

		autoload :User, "app/models/user"

	end


	module Exceptions

		autoload :Error, "app/exceptions/error"
		autoload :Success, "app/exceptions/success"
		autoload :Failure, "app/exceptions/failure"
		autoload :Reset, "app/exceptions/reset"

		autoload :NoSuchUser, "app/exceptions/no_such_user"

	end

end
