import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {DialogueService} from './dialogue.service';

interface Dialogue {
	title: String;
	message: String;
	close: () => void;
	type: String;
}


class DialogueStack {

	private stack:Dialogue[];

	constructor () {
		this.stack = [];
	}

	add (dialogue:Dialogue) {
		this.stack.push(dialogue)
	}

	pop () : Dialogue {
		return this.stack.pop();
	}

	length () {
		return this.stack.length;
	}

}

@Component({
    selector: 'dialogue',
    template: require('./dialogue.component.html')
})

export class DialogueComponent implements OnInit {

	private stack:DialogueStack;

	private dialogue:Dialogue = null;

	constructor (private _dialogue:DialogueService) {}

	ngOnInit () {
		this.stack = new DialogueStack();
		this._dialogue.setComponent(this)
	}

	show (dialogue:Dialogue) {

		this.stack.add(dialogue);

		if (!this.dialogue) {
			this.close();
		}

	}

	close () {

		this.dialogue = this.stack.pop();

	}

	get opacity () : number {
		var i = this.stack.length() + (this.dialogue != undefined ? 1 : 0);
		return i == 0 ? 0 : 1 - (5 / (2 * i + 4));
	}

	private getDefaultAction () : () => void {
		return () => {
			this.close();
		};
	}

}

