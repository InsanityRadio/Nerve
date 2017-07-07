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

	ngOnInit () {

	}

	ngOnDestroy () {
	}

	loadTrack () {

	}

	get loaded () : boolean {
		return false;
	}

}
