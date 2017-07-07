import {Component, OnInit} from '@angular/core';
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

    constructor (private nerveService: NerveService) {}
	
    ngOnInit() {

        var config = this.nerveService.handshake().then(data => {

            if (!data.authorized) {
                location.href = data.redirect;
                return;
            }
            this.user = data.user;
            this.stats = data.stats;

        });

        $(document).foundation();

    }

}
