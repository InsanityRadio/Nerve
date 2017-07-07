var dateFormat = require('dateformat');
var mm = require('../../../musicmetadata');

import { NerveService } from '../nerve.service';

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
			if (this[key] != null && (typeof this[key] == 'function' || typeof this[key] == 'object')) {
				console.log(typeof this[key], this[key], '!')
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

	get submittable () {
		return this.id > 0 && this.end_type > 0 && this.extro_start > 0;
	}

}

export class UploadTrack extends Track {

	static from (file:File, metadata?: Object) : Promise<UploadTrack> {

		return new Promise<UploadTrack>(function(fulfil, reject) {

			if (metadata) {
				return fulfil(metadata);
			}

			let extension = file.name.split(".").pop().toLowerCase()

			// We should handle this further up in executon
			if (extension == "wav") {
				reject(['metadata']);
			}

			var t = setTimeout(() => reject(['timeout']), 5000);
			var metadata = mm(file, function (err, metadata) {
				clearTimeout(t);
				if (err) {
					console.log('argh')
					return reject(['metadata', err]);
				}
				metadata.artist = metadata.artist[0];
				fulfil(metadata)
			})

		}).then(UploadTrack.search);

	}

	private static search (metadata: Object) {
		return NerveService.getInstance().metadataMatch(metadata);
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