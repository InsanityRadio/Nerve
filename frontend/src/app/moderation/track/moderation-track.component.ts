import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {NerveService} from '../../nerve.service';
import {FullTrack, Track} from '../../struct/track';
import {AudioBackend, HTMLAudio} from '../../track/audio';

@Component({
	selector: 'moderation-track',
	template: require('./moderation-track.component.html')
})

export class ModerationTrackComponent implements OnInit, OnDestroy {

	private id:number;
	private track:Track;

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

	edit () {
		this.router.navigate(['/upload', 'track', this.track.id])
	}

	flag () {
		return this.nerveService.flag(this.track).then(() => {
			this.router.navigate(['/moderation', 'pending'])
		})
	}

	reject () {
		return this.nerveService.reject(this.track).then(() => {
			this.router.navigate(['/moderation', 'pending'])
		})
	}

	approve () {
		return this.nerveService.approve(this.track).then(() => {
			this.router.navigate(['/moderation', 'pending'])
		})
	}

	loadTrack () {

		this.nerveService.track(this.id).then((track:Track) => {

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
