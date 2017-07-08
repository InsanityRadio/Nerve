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

    private csrf_key:string;

    constructor (private nerveService: NerveService, private dialogueService: DialogueService) {}
	
    ngOnInit() {

        var config = this.nerveService.handshake().then(data => {

            if (!data.authorized) {
                location.href = data.redirect;
                return;
            }

            this.user = data.user;
            this.stats = data.stats;
            this.csrf_key = data.key;

        }).catch((error:any) => {

            this.dialogueService.showError("Fatal Error", "Could not connect to the backend.", "HANDSHAKE-FAIL", () => window.location.reload());

        });

    }

}
