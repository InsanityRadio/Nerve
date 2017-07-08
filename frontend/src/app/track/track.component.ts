import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
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
	private track:FullTrack;

	private sub: any;

	private changed:boolean = false;

	saved:boolean = false;

	@ViewChild('wave') wave:any;

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

		return this.nerveService.saveTrack(this.track).then((track:Track) => {
			console.log('SAVED!')
			this.saved = true;
			this.changed = false;
		})

	}

	publish () {

		return this.nerveService.publishTrack(this.track).then((track:Track) => {
			console.log('PUBLISHED!')
			// redirect back to home somehow yo 
		})

	}

	loadTrack () {

		this.nerveService.track(this.id).then((track:FullTrack) => {

			console.log(track)
			this.audio = new HTMLAudio(track.preview_url);
			this.track = track
			this.changed = false;

		});

	}

	mutate () {
		console.log('Mutation')
		this.changed = true;
	}

	get loaded () : boolean {
		return this.track != null && this.audio != null;
	}

	get savable () : boolean {
		return this.changed;
	}

	get submittable () : boolean {
		return this.track.submittable;
	}

}
