require 'rubygems'
require 'bundler'

require 'resque'
require 'sinatra'
require 'sinatra/reloader'
require 'yaml'

require './modules'

Bundler.require
$config = YAML::load(File.read("config.yml"))
$genres = YAML::load(File.read("genres.yml"))
$env = {:slave => false}

module Nerve

	class App < Sinatra::Application

		configure do
			disable :method_override
			enable :sessions

			set :views => File.dirname(__FILE__) 

			set :sessions,
				:httponly     => true,
				:secure       => false, #production?,
				:expire_after => 31557600, # 1 year
				:secret       => "1234" #ENV['SESSION_SECRET']
		end


		use Nerve::Services::Login
		use Nerve::Services::Metadata
		use Nerve::Services::Moderation
		use Nerve::Services::Upload

		use Nerve::Services::Audio

		use Rack::Deflater

		get '/' do

			content_type 'text/html'
			return redirect to('/login.html') \
				if !session[:authenticated] or !session[:user_id]

			begin
				@user = Nerve::Services::Login.get_service.get_user session[:user_id]
			rescue
				session.clear
				return redirect to('/login.html')
			end

			return redirect to('/login.html') \
				if !@user

			@stats = {
				:total_uploads => Nerve::Services::Upload.get_total_uploads,
				:pending_moderation => Nerve::Services::Moderation.get_pending
			}

			@key = session[:token] ||= SecureRandom.hex

			erb :"public/index.html", :locals => {:user => @user, :stats => @stats, :csrf_key => @key}

		end

		get '/dynamic/config.js' do

			cache_control :public, max_age: 0
			content_type "application/javascript;charset=utf-8"

			erb :"public/config.js", :locals => {:config => $config }

		end

	end

end