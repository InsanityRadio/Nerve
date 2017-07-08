import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {NerveService} from '../nerve.service';
import {DialogueService} from '../dialogue.service';
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
		private dialogue:DialogueService,
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

		var promise = new Promise<any>((resolve, reject) => {

			this.dialogue.showDialogue("Publish Track", "You are about to submit this song for addition to the playout system.\n\
\n\
By clicking 'Confirm', you agree that to the best of your knowledge this song does not contain explicit language.", () => {

				this.dialogue.close();
				resolve(this.nerveService.publishTrack(this.track).then((track:Track) => {
					this.router.navigate(['/upload', 'list'])
				}))

			}, () => {
				reject('reject')
			});


		}).catch((e) => {
			if (e == 'reject') {
				this.dialogue.close();
			} else {
				throw e;
			}
		});

		return promise;

	}

	remove () {

		var promise = new Promise<any>((resolve, reject) => {

			this.dialogue.showDialogue("Delete Track", "Do you really want to delete this track? You cannot undo this.", () => {

				this.dialogue.close();
				resolve(this.nerveService.deleteTrack(this.track).then((track:Track) => {
					this.router.navigate(['/upload', 'list'])
				}))

			}, () => {
				reject('reject')
			});


		}).catch((e) => {
			if (e == 'reject') {
				this.dialogue.close();
			} else {
				throw e;
			}
		});

		return promise;

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
