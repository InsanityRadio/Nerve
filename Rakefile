require 'resque/tasks'
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


task :update_cart do | t, args |

	Nerve::Job::UpdateCart.create

end