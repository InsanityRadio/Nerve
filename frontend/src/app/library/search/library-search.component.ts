import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NerveService} from '../../nerve.service';
import { Track } from '../../struct/track';

@Component({
    selector: 'library-search',
    template: require('./library-search.component.html')
})

export class LibrarySearchComponent implements OnInit {

	tracks:any = [];

    constructor (private nerveService: NerveService, private router: Router) {}

    ngOnInit() {
    }

    search (query:string) {
    	this.nerveService.librarySearch(query).then((tracks:Track[]) => {

    		this.tracks = tracks

    	});
    }

	navigate (track:any) {

		this.router.navigate(['/library', 'track', track.id])

	}

}
