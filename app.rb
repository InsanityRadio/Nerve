require 'rubygems'
require 'bundler'

require 'securerandom'

require 'resque'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/xsendfile'
require 'yaml'

require './modules'

Bundler.require
$config = YAML::load(File.read("config.yml"))
$genres = YAML::load(File.read("genres.yml"))
$env = {:slave => false}

require './database'

Resque::Plugins::Status::Hash.expire_in = (60 * 60) * 24

module Nerve

	class App < Sinatra::Application

		configure do
			disable :method_override
			enable :sessions

			set :views => File.dirname(__FILE__) 
			set :environment, ($config["environment"].to_sym rescue :development)

			set :sessions,
				:httponly     => true,
				:secure       => false, #production?,
				:expire_after => 31557600, # 1 year
				:secret       => ENV['SESSION_SECRET'] or SecureRandom.hex

			set :protection, :except => [:json_csrf]

		end

		configure :production do
			Sinatra::Xsendfile.replace_send_file! 
			set :xsf_header, 'X-Accel-Redirect' 
		end


		use Nerve::Services::Login
		use Nerve::Services::Metadata
		use Nerve::Services::Moderation
		use Nerve::Services::Upload
		use Nerve::Services::Library

		use Nerve::Services::Audio

		use Rack::Deflater

		get '/' do

			redirect '/'

		end

		get '/dynamic/config' do

			cache_control :public, max_age: 0
			content_type "application/json"

			service = Nerve::Services::Login.get_service
			begin
				raise "not logged in" if !session[:authenticated] or !session[:user_id]
				@user = service.get_user session[:user_id]
			rescue
				session.clear
				return {
					'authorized' => false,
					'redirect' => service.redirect(session, request) || '/login.html'
				}.to_json
			end

			stats = {
				:total_uploads => Nerve::Services::Upload.get_total_uploads,
				:pending_moderation => Nerve::Services::Moderation.get_pending
			}

			key = session[:token] ||= SecureRandom.hex

			{
				'authorized' => true,
				'stats' => stats,
				'user' => @user.get_json,
				'key' => key,
				'station_name' => $config['station_name'],
				'contact_email' => $config['contact_email'],
				'genres' => $genres,
				'banned_words' => $config['words']['banned']
			}.to_json

		end

	end

end
