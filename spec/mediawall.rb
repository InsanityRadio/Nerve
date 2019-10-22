# these tests work on the Insanity config (sorry!)

def timestamp value
	Time.at(value).utc.strftime("%H:%M:%S.%L")
end

describe Nerve::Playout::Myriad5::RESClient do

	it 'connects' do

		@client = Nerve::Playout::Myriad5::RESClient.new 'http://10.32.0.222:6947/MyriadRES5'

		res_server = { "username" => '_Nerve', "password" => 'no' }
		p @client.login res_server["username"], res_server["password"], nil, 0

		p @client.read_media_item 15612

		#p @client.get_next_free_media_id

		@client.close

	end

end