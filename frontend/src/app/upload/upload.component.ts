import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
    selector: 'upload',
    template: require('./upload.component.html')
})

export class UploadComponent implements OnInit {
	test: boolean = false;

	constructor (
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit () {

	}
}
