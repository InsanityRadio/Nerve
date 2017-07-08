import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {DialogueService} from '../dialogue.service';
import {NerveService} from '../nerve.service';
import {FullTrack, Track} from '../struct/track';

import {AudioBackend} from './audio';
import {TrackComponent} from './track.component';

@Component({
	selector: 'edit-controls',
	template: require('./edit-controls.component.html')
})

export class EditControlsComponent implements OnInit, OnDestroy {

	@Input() track:Track;
	@Input() audio:AudioBackend;
	@Input() controller:TrackComponent;

	_errorMessage : String;

	constructor (private dialogue:DialogueService) {
	}

	ngOnInit () {
	}

	ngOnDestroy () {
	}

	loadTrack () {

	}

	get loaded () : boolean {
		return false;
	}

	set (type:String) {

		this.controller.wave.set(type, this.controller.wave.getCurrentTime());
		this.controller.mutate();

	}

	defocus (event:any) {
		var element = event.target || event.srcElement || event.currentTarget;
		element ? element.blur() : null;
	}

	save () {
		this.controller.save().catch((e:string) => this.dialogue.showError("Error Saving", e, "save-fail"));
	}

	publish () {
		this.controller.publish().catch((e:string) => this.dialogue.showError("Error Publishing", e, "pub-fail"));
	}

}
