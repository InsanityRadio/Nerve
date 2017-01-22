require 'date'
require 'rubygems'
require 'yaml'
require 'pp'

# Export to the Myriad Audio Wall. I don't know if this has been done yet, I couldn't find any FOSS reference code.

module Nerve; module Playout

	class AudioWall

		attr_accessor :audiowall_root
		attr_reader :settings

		class Cart

			attr_accessor :cart_id
			#attr_reader :track
			attr_accessor :title, :artist, :description, :hook_start, :hook_end
			attr_accessor :intro_start, :intro_end, :extro_start, :extro_end, :length, :type, :genre

			def initialize track = nil

				@type = 1 # encodes to \x01
				@genre = 0 # ????
				return unless track

				@track = track
				@title = track.title; @artist = track.artist; @description = "";
				@hook_start = track.hook_start; @hook_end = track.hook_end
				@intro_start = track.intro_start; @intro_end = track.intro_end
				@extro_start = track.outro; @extro_end = track.length
				@length = track.length

			end

			def blank!
				@title = @artist = @description = ""
				@hook_start = @hook_end = @intro_start = @intro_end = @extro_start = @extro_end = @length = @type = @genre = 0
			end

			def self.from_data id, data, audiowall

				cart = self.new
				cart.cart_id = id
				cart.title = (data[0..19].strip + data[70..99].strip).force_encoding("windows-1251").encode("UTF-8")
				cart.artist = (data[20..39].strip + data[100..29].strip).force_encoding("windows-1251").encode("UTF-8")
				cart.description = ((data[40..59] + data[130..171]).strip).force_encoding("windows-1251").encode("UTF-8")

				# then magic? 0F000080 12000080 0800 (spaces)
				# after part 2 desc 0C A6 00 00 "8E F6 8C 47"

				cart.hook_start, cart.hook_end = data[190..197].unpack "ff"
				cart.intro_start, cart.intro_end, cart.extro_start, cart.extro_end = data[262..277].unpack "ffff"

				# again, so three different lengths in total??
				cart.length, length = data[282..289].unpack "ff"

				cart.type = data[198].unpack("c")[0]
				cart.genre = data[199].unpack("c")[0]

				cart

			end

			# Create a "LST" file from the Cart and save it. 
			def to_data

				# Ugh. Ruby uses UTF-8 by default. Great until you need to handle complex binary
				#  data that "looks" like UTF-8. Then it basically craps itself. 
				data = "".b #.encode('UTF-8', 'binary', invalid: :replace, undef: :replace, replace: '')

				# Encode the formats to fake Latin-1 (Windows-1252), which Myriad uses (Windows).
				title = @title.encode('UTF-8', 'Windows-1252', invalid: :replace, undef: :replace, replace: '!').b
				artist = @artist.encode('UTF-8', 'Windows-1252', invalid: :replace, undef: :replace, replace: '!').b
				desc = @description.encode('UTF-8', 'Windows-1252', invalid: :replace, undef: :replace, replace: '!').b


				# "Short" titles that it uses in searches
				data << title[0..19].to_s.ljust(20, " ")
				data << artist[0..19].to_s.ljust(20, " ")
				data << desc[0..19].to_s.ljust(20, " ") #60

				data = data.b
				# Some weird padding that I couldn't RE
				data << "\x0F\x00\x00\x80\x12\x00\x00\x80\x00\x00".b #70

				# Extended titles, etc. used in the log. 
				data << title[20..49].to_s.ljust(30, " ")
				data << artist[20..49].to_s.ljust(30, " ")
				data << desc[20..49].to_s.ljust(30, " ")

				data = data.force_encoding("ASCII-8BIT") # Gross.

				raise "Odd encoding?? #{data.length}" if data.length != 160

				# Empty space that never seems to be filled, ever. wat?
				data << "\x20" * 12
				# More meaningless (to us) padding. \x3A and \xA6 seem to be important here because you
				#  see them in multiple cart files. All the other bytes are different every time 
				#  you save. Thought dates but Myriad doesn't let you see them if they exist/they're
				#  saved in the directory.
				data << "\x3A\xA6\x00\x00".b + ("\0" * 14).b

				data = data.b

				# AW uses LE floating points (2 bytes), so we can simply encode them here
				data << [@hook_start.to_f, @hook_end.to_f].pack("ff")
				data << [@type, @genre].pack("cc") # ugh
				data << "\x00".b * 52 # Myriad seems to accept null bytes in place of mystery data, perhaps it's something to do with audio format, idk
				data << "\x0D\x00".b * 5

				data = data.b
				# Even more decimal encoding
				data << [@intro_start, @intro_end, @extro_start, @length].map(&:to_f).pack("ffff")
				data << "\x00" * 4
				# Never did work out why it uses length twice - perhaps one is set when the file is made
				data << [@length, @length].map(&:to_f).pack("ff")

				# More mystery padding crap. Stupid damn encoding
				data << "\x00\x00\x80\xBF".b * 2
				data << "\x00" * 4
				data << "\x20" * 58

				data << "\x20" * 4
				data << "\x00\x00\x06\x20\x20\x20\x20\x20\x20\x20\x20\x20\x01\x00\x00\x00".b

				raise "LENGTH IS WRONG?! Encoding f*ck-up?? #{data.length}" if data.length != 380

				return data

			end

			def library?
				@library
			end

			def save

				# Save to both 
				return unless library?

			end

		end

		@settings = nil

		def initialize path = nil, extended = nil

			@audiowall_root = (path || $config["export"]["settings"]["path"])
			@audiowall_root_1 = (path.is_a?(String) ? @audiowall_root : @audiowall_root[1]) + "/"

			@extended_paths = extended == nil ? $config["export"]["settings"]["use_extended_path"] : extended

		end

		def load_settings

			ini = @extended_paths ? @audiowall_root["ini"] : (@audiowall_root_1 + "Audwall.ini")

			data = File.read(ini)

			@settings = {
				:individual_carts => (data.match(/UseIndividualCartListFiles=([01])/)[1] == "1" rescue 0),
				:total_carts => (data.match(/NoCarts=([0-9]+)/)[1].to_i rescue 0)
			}


		end


		# Work out where to put it. 
		def get_cart_id track

			# this is gonna be a pain. >:( RECURSIVELY CHECKING 1000S OF CARTS? NO THANKS
			# idea: database/index the AudioWall, and use it beforehand. 
			# double-check the spaces we find to ensure that they are in fact empty. 

			# could literally be a file with 1 bit per genre

			genres = $config["export"]["settings"]["genre"]
			genre = (genres[track.genre] || genres["default"]).split(/ ?- ?/)

			fill_file if !File.exist? @audiowall_root_1 + "audiowall-index.dat"

			start = genre[0].to_i
			(0..10000).each do | e |
				c_id = find_cart_index start, genre[1].to_i
				cart = load_cart(c_id)
				return c_id \
					if ["", "*DELETED CART*"].include? cart.title
				puts "Wtf #{c_id}, #{cart.title}, #{cart.length}, #{cart.description}"
				start += 1
				fill_file
			end

			raise "Full AudioWall."

		end

		def generate_empty_file 

			blocks = (@settings[:total_carts] / 16.0).ceil

			fh = File.open(@audiowall_root_1 + "audiowall-index.dat", "w+")
			(0..blocks).each do 

				fh << "\x00" * 8

			end

		end

		def find_cart_index start_cart, end_cart

			file_offset = start_cart / 8 # floor
			end_offset = (end_cart / 8.0).ceil
			initial_cart = file_offset * 8

			# read the index file
			fh = File.open(@audiowall_root_1 + "audiowall-index.dat", "r:ASCII-8BIT")
			block = 8 # bytes to read per operation. higher is probably faster to an extent

			fh.seek(file_offset)

			while !fh.eof? and fh.pos * 8 < end_cart

				position = fh.pos * 8
				# if everything is "1" then we can skip it, because it's probably full.
				next if (data = fh.read(block)) == "\xFF" * block 

				(0..block-1).each do | i |
					
					byte = data[i].ord
					(0..7).each do | j |
						return position + i * 8 + j + 1 if (byte >> (j)) & 1 == 0
					end

				end

			end

			raise "Could not find an empty space in AudioWall(??!) How the hell did you do that?"

		end

		def generate_lst track



		end

		def find_carts

			glob = []
			paths = @audiowall_root

			if @settings[:individual_carts]
				paths.each { | a, b | glob += Dir::glob(b + "/MY*.LST") }
				return glob.map { | file | file.match(/MYR?([0-9]+)\./)[1] rescue nil }.collect
			end

			found_carts = []

			paths.each { | a, b | glob += Dir::glob(b + "/Carts*.lst") }

			glob.map do | c |
				# Should be fine for most configs. TO-DO is account for custom files etc.
				cart_id = (c.match(/Carts([0-9]+)/)[1].to_i - 1) * 1000
				File.open(c, "rb") do | f |
					while (buffer = f.read(300)) do 
						cart_id += 1
						cart = Cart.from_data cart_id, buffer, self
						found_carts << cart_id if ["", "*DELETED CART*"].include? cart.title or cart.length > 0
					end
				end
			end

			return found_carts

		end

		def get_full_path cart_id
			 get_nearly_full_path(cart_id) + generate_name(cart_id)
		end

		def get_nearly_full_path cart_id

			return @audiowall_root_1 unless @extended_paths

			paths = @audiowall_root

			# If between 1 and 10,001 return the correct directories.
			return paths[[((cart_id.to_i - 1) / 1000) * 1000, 9000].min + 1] + "/" \
				if cart_id < 10001 or paths[20001] == nil

			return paths[[((cart_id.to_i - 1) / 10000) * 10000, 90000].min + 1] + "/"


		end

		def get_audio_path cart_id
			extensions = ["WAV", "OGG", "MP3"]
			extensions.each do | e | 
				eg = get_full_path(cart_id) + "." + e # TODO
				next unless File.exists? eg
				return eg
			end
			raise "wtf"
		end

		def generate_name cart_id

			return (cart_id > 99999 ? "MY" : "MYR") + cart_id.to_s.rjust(5, "0")

		end

		def load_cart id 

			if @settings[:individual_carts]
				file_name = get_full_path(id) + ".LST"
				data = File.read(file_name, :encoding => "ASCII-8BIT")
			else 
				file, offset = get_master_cart(id)

				fh = File.open(file, "r")
				i = id - 1
				fh.seek(offset)
				data = fh.read(300)
				fh.close
			end

			Cart.from_data id, data, self

		end


		def load_all_carts

			raise "Not yet supported" if @settings[:individual_carts]
			carts = []

			(1..99).each do | c | 

				start_cart = ((c - 1) * 1000) + 1

				fh = File.open(get_master_cart((c - 1) * 1000)[0], "r")
				c = 0

				while !fh.eof?
					data = fh.read(300)
					cart = Cart.from_data(start_cart + c, data, self)
					c += 1
					next if cart.title == ""
					carts << cart
				end

			end

			carts

		end

		def save cart_id, cart

			data = cart.to_data
			if @settings[:individual_carts]
				File.binwrite(@lst_path = prefix + ".LST", cart.to_data)
			else
				#file = get_nearly_full_path(id) + "/Carts#{[11, ((id - 1) / 1000) + 1].min}.LST"
				file, index = get_master_cart(cart_id)

				raise "Cart integrity error (#{data.length})" if data.length != 380
				data = data[0..299]
				puts "writing to #{file}, #{index}"
				IO.binwrite(file, data, index)

			end

		end

		# returns file, index
		def get_master_cart id

			i = id - 1
			if @extended_paths and id > 10000
				file = get_nearly_full_path(id) + "Carts" + [100, ((id - 1) / 1000) + 1].min.to_s + ".LST"
				index = 300 * (i > 99000 ? i - 99000 : (i % 1000))
				return file, index
			else
				file = get_nearly_full_path(id) + "Carts" + [11, ((id - 1) / 1000) + 1].min.to_s + ".LST"
				index = 300 * (i > 10000 ? i - 10000 : (i % 1000))
				return file, index
			end

		end


		def purge id, force = false

			blank = Cart.new
			blank.blank!

			# We shouldn't reuse carts for ~30 days. They will be replaced and may be re-scheduled

			if !force
				blank.title = "*DELETED CART*"
				blank.artist = Time.now.strftime("%Y-%m-%d")
				blank.description = "DO NOT REUSE"
			end

			raise "Bad cart" if blank.to_data.length != 380

			save id, blank

			audio_name = get_audio_path(id)
			File.unlink(audio_name)

		end

		def clean!

			carts = load_all_carts
			carts.each do | c |
				next unless c.title == "*DELETED CART*" and c.title == "DO NOT REUSE"
				begin
					date = Date.strptime(c.artist, '%Y-%m-%d')
					next unless date > Date.today - 40
					purge c.cart_id, true
				rescue; end
			end

		end

		def fill_file 

			# This is terribly slow. Still...

			generate_empty_file if !File.exist? @audiowall_root_1 + "audiowall-index.dat"

			carts = find_carts
			fh = File.open(@audiowall_root_1 + "audiowall-index.dat", "r+:ASCII-8BIT")

			#File.write("/tmp/carts", carts.map(&:to_s).join(";"))

			carts.each do | id |

				id = id.to_i - 1

				fh.seek(id / 8)
				byte = fh.read(1).ord
				block = byte | (1 << (id % 8))
				fh.seek(id / 8)
				fh.write(block.chr)

				fh.seek(id / 8)

			end

			fh.seek(0)
			fh.close()


		end

	end

end; end

=begin

$config = YAML::load(File.read("../config.yml"))
$genres = YAML::load(File.read("../genres.yml"))
$env = {:slave => false}


aw = Nerve::Playout::AudioWall.new "/tmp"
aw.load_settings

aw.fill_file

cart = aw.load_cart(ARGV[0].to_i)
puts cart.inspect

#File.write($audiowall_root + "MYR00004.LST", cart.to_data)

=end

=begin
class ATrack
	attr_reader :title, :artist, :hook_start, :hook_end, :intro_start, :intro_end, :outro, :length
	def initialize
		@title = "Test"
		@artist = "Test"
		@hook_start = 0
		@hook_end  = 0
		@intro_start = 0 
		@intro_end = 1.5
		@outro = 4.5
		@length = 5.0
	end
end

false_track = ATrack.new

cart = Nerve::Playout::AudioWall::Cart.new false_track

puts "!"

File.write("/tmp/test.lst", cart.to_data)
=end