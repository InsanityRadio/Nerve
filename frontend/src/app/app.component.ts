import {Component, OnInit} from '@angular/core';
import {DialogueService} from './dialogue.service';
import {NerveService} from './nerve.service';

import 'foundation-sites/dist/css/foundation.css';
import '../css/main.css';

declare let $: any;

@Component({
	selector: 'app',
	template: require('./app.component.html')
})

export class AppComponent implements OnInit {
	user:any = {}; // { name: 'Dummy User', admin: true, moderator: true };
	stats:any = {};

	loaded: boolean = false;

	private csrf_key:string;

	constructor (private nerveService: NerveService, private dialogueService: DialogueService) {}
	
	ngOnInit() {

		var isChromium = window['chrome'],
			winNav = window.navigator,
			vendorName = winNav.vendor,
			isOpera = winNav.userAgent.indexOf("OPR") > -1,
			isIEedge = winNav.userAgent.indexOf("Edge") > -1,
			isFirefox = winNav.userAgent.indexOf("Firefox") > -1,
			isIOSChrome = winNav.userAgent.match("CriOS");

		if (!(isChromium || isFirefox || isIEedge) || isOpera || isIOSChrome) {

			setTimeout(() => this.dialogueService.showError("Browser Error", "To use Nerve, you need to open it on Firefox or Chrome. This is because Microsoft and Apple don't support the music format we use.", "BAD-BROWSER", () => window.location.reload()), 1)
			return;
		}

		var config = this.nerveService.handshake().then(data => {

			if (!data.authorized) {
				location.href = data.redirect;
				return;
			}

			this.loaded = true;
			this.user = data.user;
			this.stats = data.stats;
			this.csrf_key = data.key;

		}).catch((error:any) => {

			this.dialogueService.showError("Fatal Error", "Could not connect to the backend.", "HANDSHAKE-FAIL", () => window.location.reload());

		});

	}

}
