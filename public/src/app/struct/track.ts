var dateFormat = require('dateformat');

import {NerveService} from '../nerve.service';

export class Track {

	id: number;
	external_id: number;
	title: string;
	artist: string;
	album: string;

	approved: boolean;
	approved_by: number;
	genre: number;
	genre_text: string;

	length: number;
	status: number;
	upload_date: Date;

	is_library: boolean;
	is_automation: boolean;

	playout_id: string;
	end_type: number;

	// created_by: User;
	created_by: any;

	flagged: boolean;
	instrumental: boolean;

	ignore:string[] = ['big', 'genre_text', 'approved_by', 'approved', 'created_by', 'ignore', 'playout_id', 'status'];

	constructor (data: any) {

		for (var d in data) {

			switch (d) {
				case 'upload_date': data[d] = new Date(Date.parse(data[d])); break;
				// case 'upload_date': data[d] = new Date(d); break;
			}

			this[d] = data[d];

		}

	}

	serialize () {

		var keys = Object.keys(this);
		var data = {};

		for(var key in keys) {
			key = keys[key];
			if (this.ignore && this.ignore.indexOf(key) !== -1) {
				continue;
			}
			if (typeof this[key] == 'function' || typeof this[key] == 'object') {
				if (typeof this[key]['serialize'] != 'undefined')
					data[key] = this[key].serialize()
				continue;
			}
			data[key] = this[key];
		}

		return data;

	}

	getUploadDate () {
		return dateFormat(this.upload_date, "dS mmmm yyyy h:MM:ss");
	}

	get preview_url () : string {
		return '/api/audio/preview/' + this.id;
	}

	get wave_url () : string {
		return '/api/audio/waveform/' + this.id;
	}

	get audio_url () : string|boolean {
		return this.status != 6 ? '/api/audio/get/' + this.id : false;
	}

}

export class IterTrack extends Track {

	get click () : boolean {

		return this.status < 2;

	}

	get greyed () : boolean {
		return !this.click;
	}

}

export class FullTrack extends Track {

	intro_start: number;
	intro_end: number;
	hook_start: number;
	hook_end: number;
	extro_start: number;

	end_type:number;

	big: any;

}