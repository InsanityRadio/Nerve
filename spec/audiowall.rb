# these tests work on the Insanity config (sorry!)

describe Nerve::Playout::AudioWall do

	before do 

		$config = YAML::load(File.read("./config.yml"))
		$genres = YAML::load(File.read("./genres.yml"))
		$env = {:slave => false}


		@aw = Nerve::Playout::AudioWall.new
		@aw.load_settings

	end

	describe "get_full_path" do 
		it "returns the right path" do 

			@aw.get_full_path(1).should eq("/audiowall/1/MYR00001")
			@aw.get_full_path(100).should eq("/audiowall/1/MYR00100")

			@aw.get_full_path(1000).should eq("/audiowall/1/MYR01000")
			@aw.get_full_path(1001).should eq("/audiowall/1001/MYR01001")

			@aw.get_full_path(10000).should eq("/audiowall/9001/MYR10000")
			@aw.get_full_path(10001).should eq("/audiowall/10001/MYR10001")

			@aw.get_full_path(90000).should eq("/audiowall/80001/MYR90000")
			@aw.get_full_path(90001).should eq("/audiowall/90001/MYR90001")

			@aw.get_full_path(140000).should eq("/audiowall/90001/MY140000")

		end
	end

	describe "get_master_cart" do 
		it "returns the right file" do

			@aw.get_master_cart(1)[0].should eq("/audiowall/1/Carts1.LST")
			@aw.get_master_cart(100)[0].should eq("/audiowall/1/Carts1.LST")

			@aw.get_master_cart(1000)[0].should eq("/audiowall/1/Carts1.LST")
			@aw.get_master_cart(1001)[0].should eq("/audiowall/1001/Carts2.LST")

			@aw.get_master_cart(10000)[0].should eq("/audiowall/9001/Carts10.LST")
			@aw.get_master_cart(10001)[0].should eq("/audiowall/10001/Carts11.LST")

			@aw.get_master_cart(90000)[0].should eq("/audiowall/80001/Carts90.LST")
			@aw.get_master_cart(90001)[0].should eq("/audiowall/90001/Carts91.LST")

			@aw.get_master_cart(140000)[0].should eq("/audiowall/90001/Carts100.LST")

		end

		it "returns the right index" do

			@aw.get_master_cart(1)[1].should eq(0)
			@aw.get_master_cart(100)[1].should eq(29700)

			@aw.get_master_cart(1000)[1].should eq(299700)
			@aw.get_master_cart(1001)[1].should eq(0)

			@aw.get_master_cart(10000)[1].should eq(299700)
			@aw.get_master_cart(10001)[1].should eq(0)

			@aw.get_master_cart(20000)[1].should eq(299700)
			@aw.get_master_cart(20001)[1].should eq(0)

			@aw.get_master_cart(90000)[1].should eq(299700)
			@aw.get_master_cart(90001)[1].should eq(0)

			@aw.get_master_cart(140000)[1].should eq(12299700)
			@aw.get_master_cart(140001)[1].should eq(12300000)

		end

		it "reads the right data" do

			cart = @aw.load_cart(140000)
			cart.title.should eq("")

			cart = @aw.load_cart(140001)
			cart.title.should eq("Dreams")

		end

		it "writes to the right cart" do

			cart = @aw.load_cart(140001)

			@aw.save 140000, cart

			cart2 = @aw.load_cart(140000)
			cart2.title.should eq("Dreams")

		end

	end

end