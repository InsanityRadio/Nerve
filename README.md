# Nerve

Nerve is a music library and importation system, inspired by it's predecessor, IRIS. Written in Ruby, Nerve has a modern and intuitive interface, and is built using modern technologies.

This software is aimed to be the last "master" you'll ever need for music metadata and processing, as it is able to mirror changes to the playout system (hopefully soon plural) under its control.  

Nerve is object-oriented and (nearly) event-ready, and is completely customisable and extendable. We mean "object oriented" in the broadcast sense - you can tie its data into systems to create immersive and future-proofed content through soon-to-be APIs (or through its database).

## Why Nerve?

Nerve has been tried and tested at Insanity Radio 103.2FM, a community radio station homed in North Surrey. Crazily, it also won the Student Radio Award for Best Technical Achievement in 2017.

## Features

* EBU-R128 loudness scanning and configurable compression, depending on station sound goals. 
* Open source, and extendable. Although it's built for Myriad, it should be easy to write a handler for other playout systems
* Looks nice, and easy to use. 
* **Nearly full Myriad (Audio Wall and AutoTrack) integration** - as far as we're aware, that's a first. As in, nobody's ever fully integrated with both. This means there's no extra peak normalisation that may make tracks quiet. 
* *Bitrate estimation* for MP3 files that have been "up-scaled". Prevents phony '320'kbps files making it anywhere near your playout system
* Upload approval - if a song could be offensive or cause issues, it will be sidelined for approval by an editor. Otherwise, allow presenters/producers to work independently to save time/resources. 
* Account integration - if you can code it, you can practically integrate it with any SSO system.
* Lyric detection and scanning (access modules are provided, but it's up to you to work out licensing/legal terms)
* *Fail-safe* mode of operation - uploads will have to manually be approved
* Duplicate checking - not fully accurate but definitely comes in handy. 
* Multiple uploads

### *Planned Feature Queue*

* *Ability to import show-specific/private content (e.g. interviews, vox-pops, etc. ), which are also normalised. *
* *Fully searchable music library with "suggest replacement" options*
* *Documented JSON API for developers and integration*
* *Multiple node support*
* *Storage of original pre-processed tracks to allow multiple station profiles*
* *Simultaneous playout system*



## Installation

I haven't had time to write an installation guide, but it's not really that straightforward, unfortunately. Some statically linked binaries are currently included in the source tree to make it easier to run some components. 

Nerve is based on Sinatra, a microframework for Ruby. It (now) uses ActiveRecord, too.

You will need to install a Redis server (the default settings work fine), and you'll need a MySQL database. 

Run a simple `bundle install` to get (hopefully) all of the dependencies. 

You'll need to create a rather large space for the "export" directory. I'll admit, this needs a re-name, as it doesn't describe its functionality very accurately. 

You'll also need to mount your playout drives on the "master" node


## The Masterplan

This project is a part of the [Insanity Tech Masterplan](https://wiki.insanityradio.com/wiki/Technical_Masterplan). 


## Docker Volumes

To mount your AudioWall in Docker, run the following command on the host. 

	sudo docker volume create --driver local --opt type=cifs --opt device=//10.32.0.222/AudioWall --opt o=username=Nerve,password=password,_netdev,uid=999,gid=999 audiowall

You'll also want to load the database schema, as this isn't done automatically. (Do this after building)

	docker-compose run --rm worker sh -c "bundle exec rake db:schema:load db:migrate"

To run database migrations, after building but before launching, run:

	docker-compose run --rm worker sh -c "bundle exec rake db:migrate"


## To-do

- Song Versions
	- Text field on interface, perhaps with pre-set versions
	- Automatically detect "Remix" in titles of uploads

## License

This code is released under the LGPL version, except where stated, and has absolutely no warranty, express or implied. I haven't had time to unit test this software, but it's certainly on the to-do list. TDD isn't yet dead!
