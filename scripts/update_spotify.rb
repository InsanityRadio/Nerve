require 'json'
require 'rest-client'
require 'base64'

require_relative '../app'

def process_track track

	title_clean = track.title.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').gsub(/[\(\[][a-zA-Z0-9\ \.\-]+[\)\]]/, '').split("feat.")[0].strip
	artist_clean = track.artist.name.split(/(ft\.|feat\.?\s)/)[0].gsub('"', '').split("feat.")[0].strip

	http_response = RestClient.get("https://api.spotify.com/v1/search", {params: {q: 'track:"' + title_clean + '" artist:"' + artist_clean + '"', type: "track", market: "GB"}, authorization: @tok})

	response = JSON.parse(http_response.body) rescue nil

	if http_response.code == 429

		seconds = http_response.headers[:retry_after].to_i

		puts "Have to wait for #{seconds} "
		sleep seconds + 1

		response = JSON.parse(RestClient.get("https://api.spotify.com/v1/search", {params: {q: 'track:"' + title_clean + '" artist:"' + artist_clean + '"', type: "track", market: "GB"}, authorization: @tok}).body) rescue nil

	end

	spotify_id = response['tracks']['items'][0]['id']

	images = response['tracks']['items'][0]['album']['images'] rescue []
	images.sort! { | a, b | b['width'] <=> a['width'] }	

	track.extra['spotify_id'] = spotify_id
	track.extra['album_art'] = images[0]['url'] if images.length and images[0]['width'] > 400

	track.save

end

$config = YAML::load(File.read("../config.yml"))

tok = JSON.parse(RestClient.post('https://accounts.spotify.com/api/token', {grant_type: "client_credentials"}, {authorization: "Basic #{Base64.strict_encode64("#{$config['search']['spotify']['client_id']}:#{$config['search']['spotify']['client_secret']}")}"}).body)
@tok = tok.key?("access_token") ? "Bearer #{tok['access_token']}" : ""

tracks = Nerve::Model::Track.all
tracks.each { | t |

	next if t.extra and t.extra['spotify_id'] != nil

	begin
		process_track t
	rescue
		begin
			process_track t
		rescue 
			p "Track #{t.id} failed"
			p $!
			p $!.backtrace
		end
	end
	sleep 0.2
}
