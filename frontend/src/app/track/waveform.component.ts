import {Component, Input, ViewChild, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {NerveService} from '../nerve.service';
import {FullTrack, Track} from '../struct/track';

import {AudioUtil, AudioBackend, HTMLAudio} from './audio';
import {TrackComponent} from './track.component';

const Peaks = require('peaks.js/peaks.js');

function getOptions(track : FullTrack, container : HTMLElement, audio : any, readonly : boolean) : any {

	return {
		container: container,
		mediaElement: audio,
		dataUri: { arraybuffer: track.wave_url },
		logger: console.error.bind(console),

		/** Optional config with defaults **/
		height: 200, // height of the waveform canvases in pixels
		zoomLevels: [4096], // Array of zoom levels in samples per pixel (big >> small)
		keyboard: true, // Bind keyboard controls
		nudgeIncrement: 0.01, // Keyboard nudge increment in seconds (left arrow/right arrow)
		inMarkerColor: '#a0a0a0', // Colour for the in marker of segments
		outMarkerColor: '#a0a0a0', // Colour for the out marker of segments
		zoomWaveformColor: '#7880E0', // Colour for the zoomed in waveform
		overviewWaveformColor: 'rgba(0,0,0,0.2)', // Colour for the overview waveform
		segmentColor: '#4351CF',
		randomizeSegmentColor: true,

		waveformBuilderOptions: {
			scale: 128,
			scale_adjuster: 127
		},

		segments: [{
			id: "intro",
			startTime: 0,
			endTime: 0.1,
			editable: false,
			color: "rgba(0, 200, 0, 0.5)",
			labelText: "Intro"
		},
		{
			id: "hook",
			startTime: 0,
			endTime: 0.1,
			editable: false,
			color: "rgba(0, 0, 0, 0.3)",
			labelText: "Hook"
		},
		{
			id: "extro",
			startTime: track.length - 0.1,
			endTime: track.length - 0.01,
			editable: false,
			inMarkerColor: "#ff00ff",
			color: "rgba(200, 0, 0, 0.5)",
			labelText: "Outro"
		}],

		points: [{
			id: "extro",
			time: track.length - 0.1,
			editable: !readonly,
			inMarkerColor: "#ff00ff",
			color: "rgba(200, 0, 0, 0.5)",
			labelText: "Outro"
		}]

	};
}


@Component({
	selector: 'waveform',
	template: require('./waveform.component.html')
})

export class WaveformComponent implements OnInit, OnDestroy, OnChanges {

	@Input() track:FullTrack;
	@Input() audio:AudioBackend;
	@Input() controller:TrackComponent;

	@Input() readonly:boolean;

	@ViewChild('container') container:any;

	private peaks:any;
	private types:string[] = ["intro", "hook", "extro"];

	ngOnInit () {



	}

	ngOnDestroy () {
		if (this.peaks != null) {
			this.peaks.destroy();
		}
	}

	ngOnChanges (changes:any) {

		if (changes.track || changes.audio && (this.track != null && this.audio.aud != null)) {
			console.log('changes!', changes)
			this.loadTrack(this.track)
		} else if (changes.track) {
		}

	}

	loadTrack (track:Track) {

		if (track == null) {
			return;
		}
		this.ngOnDestroy();
		var options = getOptions(this.track, this.container.nativeElement, this.audio.aud, this.readonly);

		this.peaks = Peaks.init(options);
		this.peaks.on('error', (error:any) => {

			console.error('ERROR SHOWING WAVEFORM');
/*			Errors.push("PEAKS-LOAD", "There was an error drawing the wave preview. " + 
				"If this persists, clear your cache and/or contact support.",
				false, null, "Waveform Error"); */

		});

		this.peaks.on('segments.ready', () => {

			this.fillMarkers();

		});

		this.peaks.on('segments.dragged', (segment:any) => {

			this.handleChange();

			this.set(segment.id + "_start", segment.startTime);

			// Don't set the finish for extro - it doesn't actually do anything
			if(segment.id == "extro")
				return; // this.set("extro_start", segment.endTime - segment.startTime);

			this.set(segment.id + "_end", segment.endTime);

		});

		this.peaks.on('points.dragmove', (segment:any) => {

			this.handleChange();

			this.set(segment.id + "_start", segment.time);


		});

	}

	set(key:string, value:number) {

		console.log('Setting', key, value)

		this.track[key] = value;

		var type = this.types.indexOf(key.split("_")[0]);

		if(type == -1)
			throw new Error("Can't set " + key + " as there's no such property");

		console.log(this.peaks.segments, this.peaks.segments.getSegments(), type)

		var segment:any = this.peaks.segments.getSegment(key.split("_")[0]);
		var point:any = this.peaks.points.getPoint(key.split("_")[0]);;

		if (key == 'intro_end' && value == 0) {
			value = 0.01;
		}

		segment && segment.update({ [(key.split("_")[1] + "Time")]: value });
		point && point.update({ time: value })

	}

	getCurrentTime (key:string) {

		return this.peaks.player.getCurrentTime();

	}

	private fillMarkers():void {

		var waveform = this.peaks;

		if(!waveform.waveform.originalWaveformData ||
				!waveform.segments.getSegments()[0] ||
				!waveform.waveform.originalWaveformData.adapter.data.buffer.byteLength ||
				!waveform.player.getDuration()) {
			setTimeout(() => this.fillMarkers(), 100);
			return;
		}

		for(var t = 0; t < this.types.length * 2; t++) {
			var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
			if(this.track[type] != undefined)
				this.set(type, this.track[type]);
		}

		console.log('got fill markers', waveform, this.track)

		if(this.track.extro_start == 0 || this.track.extro_start == null)
			this.calculateExtro();

	}

	calculateExtro():void {

		var waveform = this.peaks;
		var buffer = waveform.waveform.originalWaveformData.adapter.data.buffer.slice(0);
		var extroTime = AudioUtil.getExtro(buffer, waveform.player.getDuration());

		this.set("extro_start", extroTime);
		this.handleChange();

	}

	handleChange () {
		this.controller.mutate();
	}

	get loaded () : boolean {
		return false;
	}

}
