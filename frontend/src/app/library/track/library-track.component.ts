import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {AppComponent} from '../../app.component';

import {DialogueService} from '../../dialogue.service';
import {NerveService} from '../../nerve.service';
import {FullTrack, Track} from '../../struct/track';
import {AudioBackend, HTMLAudio} from '../../track/audio';

@Component({
	selector: 'library-track',
	template: require('./library-track.component.html')
})

export class LibraryTrackComponent implements OnInit, OnDestroy {

	private id:number;
	private track:FullTrack;

	private sub: any;
	private changed:boolean = false;

	saved:boolean = false;
	type:string = 'library';

	@ViewChild('wave') wave:any;

	audio: AudioBackend = null;

	constructor (
		private appComponent:AppComponent,
		private dialogue:DialogueService,
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

	get shouldHideControls () : boolean {

		return this.appComponent.user.moderator != true;

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

	remove () {

		var promise = new Promise<any>((resolve, reject) => {

			this.dialogue.showDialogue("Recall Track", "Do you really want to recall this track? This will delete it if it is scheduled.", () => {

				this.dialogue.close();
				resolve(this.nerveService.recallTrack(this.track).then((track:Track) => {
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

}
