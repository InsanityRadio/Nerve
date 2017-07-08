import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {NerveService} from '../nerve.service';
import {FullTrack, Track} from '../struct/track';

import {AudioBackend} from './audio';
import {TrackComponent} from './track.component';

@Component({
	selector: 'audio-player',
	template: require('./audio-player.component.html')
})

export class AudioPlayerComponent implements OnInit, OnDestroy {

	@Input() track:Track;
	@Input() audio:AudioBackend;
	@Input() controller:TrackComponent;

	private listener:(e:KeyboardEvent) => boolean;

	ngOnInit () {

		document.documentElement.addEventListener("keydown", this.listener = (e:KeyboardEvent) => this.keyPressListener(e));

	}

	ngOnDestroy () {
		if (this.audio) {
			this.audio.unload();
		}

		document.documentElement.removeEventListener("keydown", this.listener)

	}

	keyPressListener(e:KeyboardEvent) : boolean {

		if(document.activeElement != document.body)
			return;

		if(e.keyCode == 32 || e.charCode == 32) {

			this.audio.playing() ? this.audio.pause() : this.audio.play();
			e.preventDefault();
			return false;

		}
	}

	get loaded () : boolean {
		return false;
	}

}
