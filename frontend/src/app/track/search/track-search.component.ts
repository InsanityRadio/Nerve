import {Component, Input, Output, OnInit, ElementRef, ViewChild, OnDestroy, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {DialogueService} from '../../dialogue.service';
import {NerveService} from '../../nerve.service';
import {IterTrack, UploadTrack, Track} from '../../struct/track';

@Component({
	selector: 'track-search',
	template: require('./track-search.component.html')
})

export class TrackSearchComponent implements OnInit, OnDestroy {

	@Input() title:string;

	@Output() complete: EventEmitter<Track> = new EventEmitter<Track>();

	selection: boolean = false;
	mode: boolean = false;

	results: IterTrack[];
	selected: IterTrack;

	@ViewChild('title') newTitle:ElementRef;
	@ViewChild('artist') newArtist:ElementRef;

	constructor (private dialogue:DialogueService, private nerveService:NerveService) {
	}

	close () {
		this.complete.emit(null);
	}

	completed () {
		this.complete.emit(this.mode ?
			new UploadTrack({ title: this.newTitle.nativeElement.value, artist: this.newArtist.nativeElement.value }) :
			this.selected);
	}

	search (title:string, artist:string) {

		this.results = [];
		this.nerveService.search(title, artist)
			.then((results:IterTrack[]) => this.results = results)
			.catch((e:any) => this.results = [])

	}

	select (result: IterTrack) {
		this.selected = result;
	}

	ngOnInit () {
	}

	ngOnDestroy () {
	}

}
