import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
    selector: 'moderation',
    template: require('./moderation.component.html')
})

export class ModerationComponent implements OnInit {
	test: boolean = false;

	constructor (
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit () {

	}
}
