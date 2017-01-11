// Sue me for the name, it's not a registered trademark. 

interface AudioBackend {

	constructor(track:Track);
	play();
	pause();
	seek(time:number);
	time():number;
	unload();

	onPlay(callback:() => void);
	onPause(callback:() => void);
	onEnd(callback:() => void);
	onSeek(callback:() => void);

}

class HTMLAudio implements AudioBackend {

	public aud:Audio;
	
	constructor(track) {
		this.aud = new Audio(track.path);
		this.aud.preload = "auto";
	}

	public playing() {
		if(!this.aud)
			return false;
		return !this.aud.paused;
	}

	public play(callback:() => void) {
		if(!this.aud)
			return;
		this.aud.play();
		callback();
	}

	public pause(callback:() => void) {
		if(!this.aud)
			return;
		this.aud.pause();
		callback();
	}

	public seek(time:number) {
		if(!this.aud)
			return;
		this.aud.currentTime = time;
		
	}

	public unload() {
		if(!this.aud)
			return;
		this.aud.pause();
		this.aud.src = "";
		delete this.aud;
	}

	public onPlay(callback:() => void) {
		this.aud.onplaying = callback;
	}
	public onPause(callback:() => void) {
		this.aud.onpause = callback;
	}
	public onSeek(callback:() => void) {
		this.aud.onseeked = callback;
	}
	public onEnd(callback:() => void) {
		this.aud.onended = callback;
	}

	public time() {
		return this.aud.currentTime;
	}

}

class Deck {
	track:Track = null;
	playhead:number = 0;
	wave:Waveform = null;
	timer:any;
	timer2:any;
	vol:HTMLElement;
	slider:Slider;
	state:string = "UNLOAD";
	source:AudioBackend = null;

	start:number = 0;

	private iter:number = 0;

	constructor(public element:HTMLElement, public id:number){

		element.querySelector(".play").addEventListener("click", (e) => this.play());
		element.querySelector(".pause").addEventListener("click", (e) => this.pause());
		element.querySelector(".reset").addEventListener("click", (e) => this.reset());
		element.querySelector(".eject").addEventListener("click", (e) => this.eject());

		this.vol = <HTMLElement> element.querySelector(".bit");
		this.iter = 0;

		// null wave

		this.source = null;

		this.wave = null;

		this.label();

	}

	load(track:Track, notify?:boolean, readonly?:boolean){

		this.clear();

		this.track = track;

		console.log("RO", readonly);
		this.source = new HTMLAudio(track);
		this.source.onPlay(() => this.handlePlay());
		this.source.onPause(() => this.handlePause());
		this.source.onEnd(() => this.handleEnd());
		this.source.onSeek((a) => this.handleSeek(a));

		this.label();
		if(this.wave && this.wave.die)
			this.wave.die();

		var options = {

			container: this.element.querySelector(".spect"),
			mediaElement: this.source.aud,
			dataUri: { arraybuffer: this.track.waveform },
			logger: console.error.bind(console),

			/** Optional config with defaults **/
			height: 200, // height of the waveform canvases in pixels
			zoomLevels: [4096], // Array of zoom levels in samples per pixel (big >> small)
			keyboard: false, // Bind keyboard controls
			nudgeIncrement: 0.01, // Keyboard nudge increment in seconds (left arrow/right arrow)
			inMarkerColor: '#a0a0a0', // Colour for the in marker of segments
			outMarkerColor: '#a0a0a0', // Colour for the out marker of segments
			zoomWaveformColor: '#7880E0', // Colour for the zoomed in waveform
			overviewWaveformColor: 'rgba(0,0,0,0.2)', // Colour for the overview waveform
			segmentColor: '#4351CF', // Colour for segments on the waveform
			randomizeSegmentColor: true, // Random colour per segment (overrides segmentColor)

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
				endTime: track.length,
				editable: !readonly,
				inMarkerColor: "#ff00ff",
				color: "rgba(200, 0, 0, 0.5)",
				labelText: "Outro"
			}]

		};

		var Peaks = peaks.js;

		setTimeout(() => {
			this.waveform = Peaks.init(options);

			this.waveform.on('error', (error) => {

				Errors.push("PEAKS-LOAD", "There was an error drawing the wave preview. " + 
					"If this persists, clear your cache and/or contact support.",
					false, null, "Waveform Error");

			});

		}, 1);


	}

	play() {

		this.source.play(() => this.handlePlay());

	}
	handlePlay() {

		this.clear();
		this.element.querySelector(".play").className = "play active";
		this.element.querySelector(".pause").className = "pause";
		this.timer = setInterval((e) => this.changeVol(e), 50, 0.050);
		this.start = new Date().getTime() - this.playhead;
	}

	handleEnd() {

		this.element.querySelector(".pause").className = "pause";
		this.clear();
		this.setPlayhead(this.track.length);

	}

	clear() {

		this.element.querySelector(".play").className = "play";
		clearInterval(this.timer);
		clearInterval(this.timer2);
		this.timer = this.timer2 = null;

	}

	pause() {

		this.source.pause(() => this.handlePause());

	}
	handlePause() {

		this.clear();
		this.element.querySelector(".pause").className = "pause active";

	}

	reset() {

		this.source.seek(0, );

	}

	handleReset() {

		this.element.querySelector(".pause").className = "pause";
		this.clear();
		this.timer = null;
		this.playhead = 0;

		this.label();

	}

	eject() {

		this.clear();
		this.playhead = 0;
		this.source.unload();
		delete this.waveform;
		this.unloadLabel();

	}

	seek(time:number){

		this.source.seek(time, (a) => this.handleSeek(a));

	}

	handleSeek(time:number){

		this.beep = new Date().getTime();

		if(!this.track)
			this.playhead = 0;
		else
			this.playhead = Math.min(time, this.track.length);

		this.label();
		//this.wave.drawWaveform();

	}


	changeVol(time:number){

		if(!this.wave)
			return;

		this.iter = (this.iter + 1) % 4;
		var beep = new Date().getTime();

		if(this.iter == 0)
			this.setPlayhead(this.playhead + (beep - this.beep) / 1000);
		else
			this.playhead += (beep - this.beep) / 1000;

		this.beep = beep;

		var volume = this.wave.getVolume();

		if(this.slider != null)
			volume *= this.slider.mute ? 0 : this.slider.gain / 100 | 0;

		this.vol.style.height = volume + "%";

	}

	setPlayhead() {

		//this.wave.drawWaveform();		

	}

	label(){

		if(!this.track)
			return this.unloadLabel();

		this.element.className = "deck";

		this.element.querySelector(".meta tr:first-child td:first-child").textContent = this.track.title;
		this.element.querySelector(".meta tr:nth-child(2) td:first-child").textContent = this.track.artist;

		this.element.querySelector(".meta tr:first-child td:nth-child(2)").textContent = Utilities.Date.formatTime(this.playhead || 0);
		this.element.querySelector(".meta tr:nth-child(2) td:nth-child(2)").textContent = "-" + Utilities.Date.formatTime(this.track.length - (this.playhead | 0));

	}

	unloadLabel() {

		this.element.className = "deck inactive";

		this.element.querySelector(".meta tr:first-child td:first-child").textContent = "";
		this.element.querySelector(".meta tr:nth-child(2) td:first-child").textContent = "";

		this.element.querySelector(".meta tr:first-child td:nth-child(2)").textContent = "00:00"
		this.element.querySelector(".meta tr:nth-child(2) td:nth-child(2)").textContent = "00:00";

	}

}


// DEPRECATED/not used
// it's great, but might as well use the BBC peaks library because it's nicer and probably more efficient

// actually that's a lie it lags the fuck out of my browser but oh well


class Wave {

	waveform:WaveformData;
	context:CanvasRenderingContext2D;
	template:Canvas;
	templateContext:CanvasRenderingContext2D;
	min:Uint8Array;
	max:Uint8Array;
	sections:Array;
	cursor:number = -5;

	fmm:EventListener = null;
	fmd:EventListener = null;
	fmo:EventListener = null;

	constructor(event, private deck, private canvas:HTMLCanvasElement){


		this.template = document.createElement("canvas");
		this.templateContext = <CanvasRenderingContext2D> this.template.getContext("2d");

		var parent:HTMLElement = <HTMLElement> canvas.parentNode;

		canvas.width = parent.clientWidth * window.devicePixelRatio;
		canvas.height = parent.clientHeight * window.devicePixelRatio;

		canvas.cwidth = parent.clientWidth;
		canvas.cheight = parent.clientHeight;

		this.template.width = parent.clientWidth * window.devicePixelRatio;
		this.template.height = parent.clientHeight * window.devicePixelRatio * 2;
		this.templateContext.scale(window.devicePixelRatio, window.devicePixelRatio);
		
		this.context = <CanvasRenderingContext2D> canvas.getContext('2d');
		this.context.font = "60px arial";
		this.context.fillStyle = "#999";

		this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
		this.context.textAlign = "center";
		this.context.fillText("...", canvas.cwidth / 2, canvas.cheight / 1.7);

		if(event) 
			this.handleLoadDataFile(event);

		this.addListeners();

	}

	addListeners() {

		this.die();
		this.canvas.addEventListener("mousemove", this.fmm = (e:MouseEvent) => this.handleShowSeek(e));
		this.canvas.addEventListener("mousedown", this.fmd = (e:MouseEvent) => this.handleSeek(e));
		this.canvas.addEventListener("mouseout", this.fmo = (e:MouseEvent) => this.handleShowSeek(e))

	}

	die() {

		this.canvas.removeEventListener("mousemove", this.fmm);
		this.canvas.removeEventListener("mousedown", this.fmd);
		this.canvas.removeEventListener("mouseout", this.fmo);

	}

	handleShowSeek(e:MouseEvent):void {

		var rect = this.canvas.getBoundingClientRect();
		this.cursor = e.type == "mouseout" ? -5 : e.clientX - rect.left;

		this.drawWaveform();

	}

	handleSeek(e:MouseEvent):void {

		var rect = this.canvas.getBoundingClientRect();
		var playhead = (e.clientX - rect.left) / rect.width * this.waveform.duration;
		this.deck.seek(playhead);

	}

	loadDataFile():void {
		var http = new XMLHttpRequest();
		http.responseType = "arraybuffer";
		http.open("GET", this.track.waveformPath);
		http.addEventListener("load", (e) => this.handleLoadDataFile(e));
		http.send();
	}

	handleLoadDataFile(e:Event):void {

		this.waveform = WaveformData.create(e.target);

		var step = Math.floor(this.waveform.min.length / this.canvas.cwidth);
		var t = this.canvas.cwidth; // Math.ceil(this.waveform.min.length / step);
		var mult = this.canvas.cheight / 256;

		this.min = new Uint8Array(t);
		this.max = new Uint8Array(t);

		// pre-calculate so redraw is faster
		for(var i = 0, j = 0; i < t; i++, j = i * step){

			this.min[i] = this.interpolateHeight(this.waveform.min[j], mult);
			this.max[i] = this.interpolateHeight(this.waveform.max[j], mult);

		}

		var intro = Math.floor((this.track.intro / this.track.length) * t);
		var outro = Math.floor(t - (this.track.intro / this.track.length) * t);

		var colours = ["#F00", "#AAA", "#0F0"];

		this.sections = [
			[0, intro, "#666"],
			[intro - 1, outro + 1, "#AAA"],
			[outro, t, "#666"]
		];

		this.drawTemplate();
		this.drawWaveform();

	}

	loaded():boolean {
		return this.waveform && this.waveform.max;
	}

	/**
	 * Return the current volume and sets the playhead
	 * @param number seconds seconds (+ decimal) to set playhead to
	 * @return number the current time (0 - 100)
	 */
	getVolume(seconds?:number) {

		if(!this.loaded())
			return 0;

		if(seconds == undefined)
			seconds = this.deck.playhead;

		var volume = this.waveform.max[Math.floor(seconds / this.track.length * this.waveform.max.length)];
		volume = (volume + 0) / 1.28;
		return volume;

	}

	drawWaveform():void {

		if(!this.sections) return;

		//this.sections[3][1] = (this.deck.playhead || 0) / this.waveform.duration * this.max.length;

		var x = ((this.deck.playhead || 0) / this.waveform.duration * this.max.length) || 0;

		this.context.clearRect(0, 0, this.canvas.cwidth, this.canvas.cheight);
		this.context.drawImage(this.template, 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.cwidth, this.canvas.cheight);
		if(x != 0)
			this.context.drawImage(this.template, 0, this.canvas.height, x * window.devicePixelRatio, this.canvas.height, 0, 0, x, this.canvas.cheight);

		this.context.strokeStyle = "rgba(255, 0, 0, 0.8)";
		this.context.beginPath();
		this.context.moveTo(this.cursor, 0);
		this.context.lineTo(this.cursor, this.canvas.cheight);
		this.context.stroke();

	}

	drawTemplate(): void {
		if(!this.sections) return;

		this.context.clearRect(0, 0, this.canvas.cwidth, this.canvas.cheight);
		this.context.beginPath();

		// Now this is hell-a fast compared to reading the previous array
		for(var l = 0; l < this.sections.length; l++){

			this.drawSection(0, this.sections[l][0], this.sections[l][1], this.sections[l][2])

		}

		this.drawSection(this.canvas.cheight, 0, this.canvas.cwidth, "#FA2020");


	}

	drawSection(y, start, end, fill){

		this.templateContext.fillStyle = fill;
		this.templateContext.beginPath();
		this.templateContext.moveTo(start, y + this.canvas.cheight / 2);

		for(var i = start; i < end; i++){
			this.templateContext.lineTo(i, y + this.min[i]);
		}

		// Finish & go back to origin
		this.templateContext.lineTo(end, y + this.canvas.cheight / 2);
		this.templateContext.moveTo(start, y + this.canvas.cheight / 2);

		for(var i = start; i < end; i++){
			this.templateContext.lineTo(i, y + this.max[i]);
		}

		this.templateContext.lineTo(end, y + this.canvas.cheight / 2);
		this.templateContext.closePath();
		this.templateContext.fill();
	}


	interpolateHeight(size, mult){
		return this.canvas.cheight - (size + 128) * mult;
	}

}