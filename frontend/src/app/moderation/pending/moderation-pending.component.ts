import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NerveService} from '../../nerve.service';
import { Track } from '../../struct/track';

@Component({
    selector: 'moderation-pending',
    template: require('./moderation-pending.component.html')
})

export class ModerationPendingComponent implements OnInit {

	tracks:any = [];

    constructor (private nerveService: NerveService, private router: Router) {}

    ngOnInit() {
    	this.load()
    }

    load () {
    	this.nerveService.moderationPending().then((tracks:Track[]) => {

    		console.log(tracks)
    		this.tracks = tracks

    	});
    }

	navigate (track:any) {

        console.log('hello!')
		this.router.navigate(['/moderation', 'track', track.id])

	}

}
