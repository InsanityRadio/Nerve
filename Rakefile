require 'resque/tasks'
require 'pp'
require './app'

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
		"track_id" => args[:track_id],
		"category_id" => 8}) 

end

task :recall, :track_id do | t, args |

	Nerve::Job::Recall.create({
		"track_id" => args[:track_id]}) 

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

task :update_cart do | t, args |

	Nerve::Job::UpdateCart.create

end