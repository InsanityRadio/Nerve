require 'json'
require 'tempfile'
require 'fuzzystringmatch'

module Nerve
	module Services
		class Upload < Sinatra::Application

			include Helpers
			include Nerve::Database

			@@string_matcher = FuzzyStringMatch::JaroWinkler.create( :native )

			def self.get_total_uploads 

				result = Database.query("SELECT COUNT(*) AS c FROM `tracks`;")
				result.first["c"].to_i

			end

			get '/upload/list/' do 

				protect_json!
				COUNT = 50; page = params['page'] || 0

				Nerve::Model::TrackProvider.where("
					t.created_by = ?
					ORDER BY t.creation_date DESC
					LIMIT #{(page * COUNT).to_i}, #{COUNT};", session[:user_id]).to_json

			end

			get '/upload/path/' do 

				protect_json!
				raise "Slave servers/workers not yet implemented" if $config["import"]["workers"].length > 2

				{"path" => "http://" + request.host_with_port + "/upload/"}.to_json  

			end

			post '/upload/do/' do

				protect_json!

				raise "Missing metadata" if !params['file'] or params['cache_id'] == nil or \
					(params['cache_id'].to_i <= 0 and (!params['title'] or !params['artist']))


				# Do some pre-processing
				temp_file  = Dir::Tmpname.create('nerve.tmp', $config["import"]["temp"]) { |path| path }
				temp_file += ".mp3"
				data = params['file'][:tempfile].read

				File.open(temp_file, "wb") do | f |
					f.write data.force_encoding("BINARY")
				end

				login_service = Nerve::Services::Login.get_service
				@user = login_service.get_user(session[:user_id]) rescue login_service.get_nil_user

				instrumental = (params['instrumental'] == "true" and @user.permissions[:instrumental])
				data = {
					"file" => temp_file,
					"user_id" => session[:user_id],
					"cache_id" => params['cache_id'],
					"artist" => params['artist'],
					"title" => params['title'],
					"album" => params['album'],
					"override_bitrate" => (
						params['override_bitrate'] == "true" and
						@user.permissions[:override_bitrate]), # TODO: check user can do that
					"override_compressor" => params['override_compressor'] == "true",
					"upload_library" => params['upload_library'] == "true",
					"instrumental" => instrumental
				}

				data["explicit"] = (params['cache_id'] == -1 and !instrumental) ? 1 : 0

				# Allow admin users to override bitrate
				#data["overrides"] = true if @user.admin and params['override'] == "true"

				# Create the job, and sit back and relax!
				{:token => Nerve::Job::Process.create(data)}.to_json

			end

			get '/upload/migrate/path/' do 

				protect_json!
				raise "Slave servers/workers not yet implemented" if $config["import"]["workers"].length > 2

				{"path" => "http://" + request.host_with_port + "/upload/migrate/"}.to_json  

			end

			post '/upload/migrate/do/' do

				cart_id = params["cart_id"].to_i
				data = Database.query("SELECT * FROM migrate_cache WHERE cart_id=?", cart_id).to_a
				next if data.length == 0 or cart_id == 0
				cart_data = data[0]

				@@audiowall = Nerve::Playout::AudioWall.new $config["migrate"]["audiowall"], $config["migrate"]["use_extended_path"]
				@@audiowall.load_settings

				file_path = @@audiowall.get_audio_path(cart_id)

				temp_file  = Dir::Tmpname.create('nerve.tmp', $config["import"]["temp"]) { |path| path }
				temp_file += ".wav"
				fdata = File.read(file_path)

				File.open(temp_file, "wb") do | f |
					f.write fdata.force_encoding("BINARY")
				end

				meta = Nerve::Services::Metadata::match(
					cart_data['artist'],
					'',
					cart_data['title']) rescue nil

				meta = {
					'title' => cart_data['title'],
					'artist' => cart_data['artist'],
					'album' => '',
					'cache_id' => -1} if !meta

				cart = @@audiowall.load_cart(cart_id)

				puts "Cart #{cart_id}"

				raise "Unmatching title #{cart.title}, #{meta['title']} - contact Head of Computing" \
					if cart.title.downcase.gsub(/[^0-9a-z]/i, '')[0..15] != meta['title'].downcase.gsub(/[^0-9a-z]/i, '')[0..15] \
						and @@string_matcher.getDistance(cart.title, meta['title']) < 0.8

				raise "Unmatching artist #{cart.artist}, #{meta['artist']}" \
					if cart.artist.downcase.gsub(/[^0-9a-z]/i, '')[0..15] != meta['artist'].downcase.gsub(/[^0-9a-z]/i, '')[0..15] \
						and @@string_matcher.getDistance(cart.artist, meta['artist']) < 0.8

				login_service = Nerve::Services::Login.get_service
				@user = login_service.get_user(session[:user_id]) rescue login_service.get_nil_user

				data = {
					"file" => temp_file,
					"user_id" => session[:user_id],
					"cache_id" => meta['cache_id'],
					"ext_id" => "C" + cart_id.to_s,
					"artist" => meta['artist'],
					"title" => meta['title'],
					"album" => meta['album'],
					"override_bitrate" => (
						params['override_bitrate'] == "true" and
						@user.permissions[:override_bitrate]), # TODO: check user can do that
					"override_compressor" => params['override_compressor'] == "true",
					"upload_library" => params['upload_library'] == "true",
				}

				data["explicit"] = meta['cache_id'] == -1 ? 1 : 0
				{:token => Nerve::Job::Process.create(data)}.to_json

			end

			get '/upload/status/:uuid' do | uuid |

				protect_json!

				status = Resque::Plugins::Status::Hash.get(uuid)

				{
					:running => status.queued? || status.working?,
					:percent => status.pct_complete,
					:message => status.queued? ? "Queued. You can leave it and come back later if you like." : status.message
				}.to_json

			end

			get '/upload/migrate/status/:uuid' do | uuid |

				protect_json!

				status = Resque::Plugins::Status::Hash.get(uuid)

				{
					:running => status.queued? || status.working?,
					:percent => status.pct_complete,
					:message => status.queued? ? "Queued. You can leave it and come back later if you like." : status.message
				}.to_json

			end


			get '/upload/file/:id' do | id |

				protect_json!

				track = Nerve::Model::TrackProvider.from_id(id) #rescue false

				return {
					"404" => "1"
				}.to_json unless track

				track.to_json(true)

			end

			post '/upload/save/:id' do | id |

				begin

					raise "Incorrect/empty CSRF key (#{params['token']}, #{session[:token]})" \
						if session[:token].empty? || params['token'] != session[:token]

					user = Nerve::Services::Login.get_service.get_user session[:user_id]
					track = Nerve::Playout::Track.from_id id

					raise "You do not have permission to modify this track." \
						if !user.moderator and user.id != track.created_by.id

					raise "You must select an end type!" \
						unless [1, 2, 3].include? params['end_type'].to_i

					# Reject artist name changes
					raise "Artist name changing isn't supported yet (sorry)!" \
						if params['artist'] != track.artist

					if params['title'] != track.title
						track.title = params['title'] 
						track.set_unsafe
					end

					track.end_type = params['end_type'].to_i
					track.intro_start, track.intro_end = params['intro_start'].to_f, params['intro_end'].to_f
					track.hook_start, track.hook_end = params['hook_start'].to_f, params['hook_end'].to_f
					track.outro = params['extro_start'].to_f

					track.save

					return { "success" => 1, "track" => track.to_json(true) }.to_json

				rescue

					status 501
					return { "success" => 0, "message" => $!.message }.to_json

				end

			end

			post '/upload/publish/:id' do | id |

				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]


				# This method call takes no parameters as everything is saved before its published
				# Now we're certain the metadata is correct, we can do final checks to see if the
				#  track should be moderated. 

				# Check that the user has permission to do this (is the uploader, or is an admin)

				# Set EXPLICIT to 1 if any of the following are true
				# 	Check lyrics for expletives is positive
				# 	Track metadata changed by user
				# 	No lyrics
				# 	Track already has explicit flag set
				# If explicit, set track status to 3

				# If not explicit, set status to 4 and queue as a Job::Transfer.

				track = Nerve::Playout::Track.from_id id

				raise "Missing extro" if track.outro == 0 || track.outro == nil
				raise "Missing end type" if track.end_type == 0 || track.end_type == nil

				if track.is_safe

					track.status = 4
					track.approved_by = 0
					track.save
					Nerve::Job::Transfer.create({
						"track_id" => id})

					return { "success" => 1 }.to_json

				else

					reason = track.why_unsafe

					track.status = 3
					track.save
					return { "success" => 1, "message" => "The track is now pending approval by a moderator, because #{reason}" }.to_json

				end

			end

			post '/upload/delete/:id' do | id |

				raise "Incorrect/empty CSRF key" \
					if session[:token].empty? || params['token'] != session[:token]

				user = Nerve::Services::Login.get_service.get_user session[:user_id]
				track = Nerve::Playout::Track.from_id id

				raise "You do not have permission to delete this track." \
					if !user.moderator and user.id != track.created_by.id

				#raise "Track has already been uploaded to the playout system. Please ensure you remove it from there" \
				#	if track.status > 4

				track.delete!

				{ "success" => 1 }.to_json

			end

		end
	end
end