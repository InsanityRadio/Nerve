require 'resque/tasks'
require 'pp'
require './app'

require "sinatra/activerecord/rake"

namespace :db do
  task :load_config do
  end
end

task :migrate do | t, args |

	require './migrate/myriad'

	myr = Nerve::Migrate::Myriad.new 
	myr.start_migration

end

task :migrate_all do | t, args |

	require './migrate/myriad'

	myr = Nerve::Migrate::Myriad.new
	myr.start_migration true

end


task :transfer, :track_id do | t, args |

	Nerve::Job::Transfer.create({
		"track_id" => args[:track_id]}) 

end

task :recall, :track_id do | t, args |

	Nerve::Job::Recall.create({
		"track_id" => args[:track_id]}) 

end

task :take_ownership, [:track_id, :user_id] do | t, args |

	song = Nerve::Model::TrackProvider.from_id args[:track_id]

	song.created_by = args[:user_id]
	song.save

	Nerve::Job::Recall.create({
		"track_id" => args[:track_id]}) 

end

task :cleanup do | t, args |

	Nerve::Job::CleanUp.create({})

end

task :dump_new_cart, :cart_id do | t, args |

	aw = Nerve::Playout::AudioWall.new $config["export"]["settings"]["path"], $config["export"]["settings"]["use_extended_path"]
	aw.load_settings
	pp aw.load_cart args[:cart_id].to_i

end

task :dump_old_cart, :cart_id do | t, args |

	
	aw = Nerve::Playout::AudioWall.new $config["migrate"]["audiowall"], $config["migrate"]["use_extended_path"]
	aw.load_settings
	pp aw.load_cart args[:cart_id].to_i

end

task :cache_migrate do | t, args |

	aw = Nerve::Playout::AudioWall.new $config["migrate"]["audiowall"], $config["migrate"]["use_extended_path"]
	aw.load_settings

	Nerve::Database.query("TRUNCATE migrate_cache;")

	carts = aw.load_all_carts

	carts.each do | c |
		Nerve::Database.query("INSERT INTO migrate_cache (cart_id, title, artist, description)
			VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=?, artist=?, description=?",
			c.cart_id, c.title, c.artist, c.description,
			c.title, c.artist, c.description)
	end
	puts "Inserted #{carts.length}"

	p carts.length

end

task :update_all do | t, args |
	
	songs = Nerve::Model::TrackProvider.where "(status = 5 OR status = 6) AND playout_id IS NOT NULL"

	songs.each do | s |
		Nerve::Job::Update.create({
			"track_id" => s.id,
			"audio" => false})
	end

end

task :update, :track_id do | t, args |

	Nerve::Job::Update.create({
		"track_id" => args[:track_id] })

end

