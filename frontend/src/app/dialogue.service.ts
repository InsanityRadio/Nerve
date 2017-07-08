import {Component, Injectable, OnInit} from '@angular/core';

interface Dialogue {
	title: String;
	message: String;
	close: () => void;
	type: String;
}

export class ErrorDialogue implements Dialogue {
	title: String;
	message: String;
	close: () => void;
	code: String;
	type: String = 'ErrorDialogue';
}

export class ConfirmDialogue implements Dialogue {
	title: String;
	message: String;
	close: () => void;
	confirm: () => void;
	type: String = 'ConfirmDialogue';
}

@Injectable()
export class DialogueService {

	private static dialogue:any;

	constructor () {

	}

	setComponent (dialogue:any) {
		DialogueService.dialogue = dialogue;
	}

	showError (title: String, message: String, code: String, close?: () => void) {

		if (!close) close = this.getDefaultAction();

		var dialogue = new ErrorDialogue()
		dialogue.title = title;
		dialogue.message = message;
		dialogue.code = code;
		dialogue.close = close;

		DialogueService.dialogue.show(dialogue);

	}

	showDialogue (title: String, message: String, confirm?: () => void, cancel?: () => void) {

		if (!confirm) confirm = this.getDefaultAction();
		if (!cancel) cancel = this.getDefaultAction();

		var dialogue = new ConfirmDialogue()
		dialogue.title = title;
		dialogue.message = message;
		dialogue.confirm = confirm;
		dialogue.close = cancel;

		DialogueService.dialogue.show(dialogue);

	}

	private getDefaultAction () : () => void {
		return () => {
			DialogueService.dialogue.close();
		};
	}

}