import {Component, OnInit, ViewChild} from '@angular/core';
import {Track,UploadTrack} from '../../struct/track';
import {Upload, NerveService} from '../../nerve.service';

import {AppComponent} from '../../app.component'

@Component({
    selector: 'upload-song',
    template: require('./upload-song.component.html')
})

export class UploadSongComponent implements OnInit {

	public @ViewChild('upload') upload;

	public @ViewChild('overrideBitrate') overrideBitrate;
	public @ViewChild('overrideCompressor') overrideCompressor;
	public @ViewChild('instrumental') instrumental;
	public @ViewChild('library') library;

	uploads: Upload[] = [];

	constructor(private appComponent:AppComponent, private nerveService: NerveService) {
	}

	ngOnInit () {
		setTimeout(() => {
			console.log('HELLO!!', this.appComponent.user.permissions['override_bitrate'])
		}, 1000)
	}

	select (event) {
		[].forEach.call(event.target.files, (file:File) => this.uploadFile(file));
	}

	uploadFile (file:File) {

		let trackP = UploadTrack.from(file)

		var options = this.getOptions()

		trackP.then((track:UploadTrack) => {
			
			var upload = this.nerveService.upload(track, file, options);

			this.uploads.push(upload)

			upload.update((upload) => this.update(upload))

		}) /*catch(function (error) {

		}) */


	}

	getOptions () : any {

		var options = {};

		options['override_bitrate'] = this.overrideBitrate.nativeElement.checked;
		options['override_compressor'] = this.overrideCompressor.nativeElement.checked;
		options['instrumental'] = this.instrumental.nativeElement.checked;
		options['library'] = this.library.nativeElement.checked;

		return options;

	}

	update (upload) {

		// console.log('Progres Event', upload)

	}

}
