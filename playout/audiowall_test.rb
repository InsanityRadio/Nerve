require './audiowall'

$config = YAML::load(File.read("../config.yml"))
$genres = YAML::load(File.read("../genres.yml"))
$env = {:slave => false}

aw = Nerve::Playout::AudioWall.new

aw.load_settings


