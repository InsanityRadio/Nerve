import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Track,UploadTrack} from '../../struct/track';
import {Upload, NerveService} from '../../nerve.service';

import {AppComponent} from '../../app.component'

@Component({
    selector: 'upload-song',
    template: require('./upload-song.component.html')
})

export class UploadSongComponent implements OnInit {

	@ViewChild('upload') upload:HTMLElement;

	@ViewChild('overrideBitrate') overrideBitrate:ElementRef;
	@ViewChild('overrideCompressor') overrideCompressor:ElementRef;
	@ViewChild('instrumental') instrumental:ElementRef;
	@ViewChild('library') library:ElementRef;

	uploads: Upload[] = [];

	constructor(private appComponent:AppComponent, private nerveService: NerveService) {
	}

	ngOnInit () {
	}

	select (event:any) {
		[].forEach.call(event.target.files, (file:File) => this.uploadFile(file));
	}

	uploadFile (file:File) {

		let trackP = UploadTrack.from(file)

		var options = this.getOptions()

		trackP.then((track:UploadTrack) => {
			
			var upload = this.nerveService.upload(track, file, options);

			this.uploads.push(upload)

			upload.update((upload:any) => this.update(upload))

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

	update (upload:any) {

		// console.log('Progres Event', upload)

	}

}
