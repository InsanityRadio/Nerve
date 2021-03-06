import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NerveService} from '../../nerve.service';
import { Track } from '../../struct/track';

@Component({
    selector: 'my-uploads',
    template: require('./my-uploads.component.html')
})

export class MyUploadsComponent implements OnInit {

	tracksNeedingInput:any = [];
	tracks:any = [];

    constructor (private nerveService: NerveService, private router: Router) {}

    ngOnInit() {
    	this.load()
    }

    load () {
        console.log('loading....')
    	this.nerveService.myUploads().then((tracks:Track[]) => {

    		console.log(tracks)
    		this.tracks = tracks
    		this.tracksNeedingInput = tracks.filter((a:Track) => a.status < 2);

    	});
    }

	navigate (track:any) {

		if (!track.click) {
			if (track.status == 5 || track.status == 6) {
				this.router.navigate(['/library', 'track', track.id]);
			}
			return;
		}

		this.router.navigate(['/upload', 'track', track.id])

	}

}
