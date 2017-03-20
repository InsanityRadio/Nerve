# Put any autoloads in here.

$: << File.expand_path('../', __FILE__)

module Nerve

	autoload :Database, "database"

	module Authentication

		autoload :Authentication, "auth/authentication"
		autoload :Simple, "auth/simple"
		autoload :User, "auth/user"

		autoload :Cortex, "auth/cortex"

	end

	module Job

		autoload :CleanUp, "jobs/cleanup"
		autoload :Recall, "jobs/recall"
		autoload :Process, "jobs/process"
		autoload :Transfer, "jobs/transfer"
		autoload :Update, "jobs/update"

	end

	module Migrate

		autoload :Myriad, "migrate/myriad"

	end

	module Playout

		autoload :AudioWall, "playout/audiowall"
		autoload :Myriad, "playout/myriad"

		# @deprecated
		autoload :Track, "playout/track"

		class AudioWall
			autoload :Database, "playout/audiowall/database"
			autoload :Export, "playout/audiowall/export"
		end

	end

	module Provider

		module Track

			autoload :Spotify, "app/providers/track/spotify.rb"
			autoload :MusixMatch, "app/providers/track/musixmatch.rb"
			autoload :MusicBrainz, "app/providers/track/musicbrainz.rb"

		end

		module Lyrics

			autoload :MetroLyrics, "app/providers/lyrics/metrolyrics.rb"
			autoload :MusixMatch, "app/providers/lyrics/musixmatch.rb"

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

		autoload :Track, "app/models/track"
		autoload :TrackProvider, "app/models/track_provider"

		autoload :UserCacheProvider, "app/models/user_cache_provider"

	end


	module Exceptions

		autoload :Error, "app/exceptions/error"
		autoload :Success, "app/exceptions/success"
		autoload :Failure, "app/exceptions/failure"
		autoload :Reset, "app/exceptions/reset"

		autoload :NoSuchUser, "app/exceptions/no_such_user"

	end

end