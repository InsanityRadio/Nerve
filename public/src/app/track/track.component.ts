import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {NerveService} from '../nerve.service';
import {FullTrack, Track} from '../struct/track';
import {AudioBackend, HTMLAudio} from './audio';

@Component({
	selector: 'track',
	template: require('./track.component.html')
})

export class TrackComponent implements OnInit, OnDestroy {

	private id:number;
	private track:Track;

	private sub: any;

	saved:boolean = false;

	audio: AudioBackend = null;

	constructor (
		private nerveService:NerveService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit () {

		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'] | 0;
			this.loadTrack()
		});

	}

	ngOnDestroy () {
		this.sub.unsubscribe();
	}

	save () {

		this.nerveService.saveTrack(this.track).then((track:Track) => {
			console.log('SAVED!')
			this.track = track;
			this.saved = true;
		})

	}

	loadTrack () {

		this.nerveService.track(this.id).then((track:Track) => {

			console.log(track)
			this.audio = new HTMLAudio(track.preview_url);
			this.track = track

		});

	}

	get loaded () : boolean {
		return this.track != null && this.audio != null;
	}

}
