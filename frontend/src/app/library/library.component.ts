import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
    selector: 'library',
    template: require('./library.component.html')
})

export class LibraryComponent implements OnInit {
	test: boolean = false;

	constructor (
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit () {

	}
}
