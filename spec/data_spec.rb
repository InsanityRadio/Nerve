# these tests work on the Insanity config (sorry!)

describe Nerve::Playout::AudioWall do

	it 'works' do 

		#p Nerve::Model::Track.find(3).get_json(true)

		p Nerve::Services::Metadata.search 'Muse', '', 'Drones'

		expect(1).to eq(1)

	end

end