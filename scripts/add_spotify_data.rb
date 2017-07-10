require 'enumerator'
require 'json'
require 'rest-client'
require 'base64'

require_relative '../modules'
RestClient.log = 'stdout'

def get_data track_ids, depth = 0

	http_response = RestClient.get("https://api.spotify.com/v1/audio-features", {params: {ids: track_ids.join(",")}, authorization: @tok, accept: "application/json"})
	response = JSON.parse(http_response.body)

	sleep 1 if depth != 0
	depth += 1

	if http_response.code == 429 or response['audio_features'] == nil 

		seconds = http_response.headers[:retry_after].to_i or 5

		puts "Have to wait for #{seconds} "
		sleep seconds + 1

	end

	raise "FAIL!" if http_response.code != 200 and depth > 20
	return get_data track_ids, depth if http_response.code != 200

	response['audio_features'].each do | resp |

		track = @spotify[resp['id']]
		next if !track

		track.extra['audio_features'] = resp
		track.save

	end


end

$config = YAML::load(File.read("../config.yml"))

tok = JSON.parse(RestClient.post('https://accounts.spotify.com/api/token', {grant_type: "client_credentials"}, {authorization: "Basic #{Base64.strict_encode64("#{$config['search']['spotify']['client_id']}:#{$config['search']['spotify']['client_secret']}")}"}).body)
@tok = tok.key?("access_token") ? "Bearer #{tok['access_token']}" : ""

@spotify = {}; @ids = []

tracks = Nerve::Model::TrackProvider.all
tracks.each { | t |

	next unless t.extra and t.extra['spotify_id'] != nil
	next if t.extra['audio_features'] != nil

	@spotify[t.extra['spotify_id']] = t

	@ids << t.extra['spotify_id']

}

@ids.each_slice(80) do | ids |

	get_data(ids)

end