import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Track,UploadTrack} from '../../struct/track';
import {Upload, NerveService} from '../../nerve.service';

import {AppComponent} from '../../app.component'

class FileWrapper {

	name: string;

	constructor (public file: File, public message: string) {
		this.name = file.name;
	}

}

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
	files: FileWrapper[] = [];

	currentSearchFile: FileWrapper;

	constructor(private appComponent:AppComponent, private nerveService: NerveService) {
	}

	ngOnInit () {
	}

	select (event:any) {
		[].forEach.call(event.target.files, (file:File) => {

			let extension = file.name.split(".").pop().toLowerCase()

			// We should handle this further up in executon
			if (extension == "wav") {
				let fw = new FileWrapper(file, 'Missing Title & Artist');
				this.files.push(fw);
				if (event.target.files.length == 1) {
					this.fix(fw);
				}
			} else {
				this.uploadFile(file)
			}

		});
	}

	uploadFile (file:File, metadata?:any, track?:Track) {

		let options = this.getOptions()
		
		if (track) {

			var upload = this.nerveService.upload(track, file, options);
			this.uploads.push(upload)
			upload.update((upload:any) => this.update(upload))

			return;

		}

		let trackP = UploadTrack.from(file, metadata)

		trackP.then((track:UploadTrack) => {
			
			var upload = this.nerveService.upload(track, file, options);
			this.uploads.push(upload)
			upload.update((upload:any) => this.update(upload))

		}).catch((error) => {

			console.log('RECEIVE SOME ERROR', error)

			if (error == 'metadata') {

				let fw = new FileWrapper(file, 'Missing Title & Artist');

				this.files.push(fw);

				if (this.files.length == 1) {
					this.fix(fw);
				}

			} else {
				throw error;
			}

		}) 


	}

	fix (file:FileWrapper) {

		this.currentSearchFile = file;

	}

	fixed (track: Track) {

		console.log('Fixed!!')

		if (track != null) {

			if (this.files.indexOf(this.currentSearchFile) != -1) {
				this.files.splice(this.files.indexOf(this.currentSearchFile), 1)
			}
			this.uploadFile(this.currentSearchFile.file, null, track)

		}

		this.currentSearchFile = null;

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
