import {Component, Input} from '@angular/core';

@Component({
    selector: 'track-icon',
    template: require('./track-icon.component.html')
})

export class TrackIconComponent {
	@Input() status:number;
	track:any = null;
}
