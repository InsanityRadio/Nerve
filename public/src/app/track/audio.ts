export class AudioUtil {

	static strip(result:any){

		// Remove any brackets (regular or square) from the ID3
		// Some CD ripping software likes to advertise itself...

		var tags = {};

		if(!result.title || !result.artist) return undefined;

		tags.title = Utilities.String.stripTag(result.title);
		tags.artist = Utilities.String.stripTag(result.artist[0]);
		tags.album = Utilities.String.stripTag(result.album);

		return tags;

	}

	static readTags(file, callback:(tags:any)=>void){

		musicmetadata(file, (error, result) => {
			
			if(error) return callback(undefined);

			callback(this.strip(result));

		});

	}

	public static lowPass(buffer:ArrayBuffer, view:Int8Array, accuracy:number, start:number, end:number) {

		var copy = buffer.slice(0),
			view2 = new Int8Array(copy);

		// Run a low-pass filter to work out the result.
		for(var i = start; i < end; i++) {

			view[i] = Math.abs(view[i]);

		}

		for(var i = start; i < end; i++) {

			var tmp = view[i];
			for(var j = i - accuracy; j <= i + accuracy; j++) {
				tmp += view[j];
			}
			view2[i] = (tmp / (accuracy * 2) + 1) | 0;

		}

		return view2;

	}

	public static getExtro(buffer:ArrayBuffer, duration:number) {

		var view = new Int8Array(buffer);

		var sampleRate = view.length / duration;

		var threshold1 = 1,
			threshold2 = 8,
			threshold3 = 100;

		var accuracy = 0.3; // in seconds - so the higher the number the lower the accuracy

		var avg = 0, max = 0, start = 0, end = 0, time = 30;


		// work out the number of samples to average on either side
		accuracy = Math.floor(sampleRate * accuracy);

		// Run a low-pass filter to get a more average waveform edge
		var view2 = this.lowPass(buffer, view, accuracy, start, end);

		// work out exactly where the audio signal "ends"
		for(var i = view.length; i >= 0; i--) {
			if(view[i] < threshold1) continue;
			start = Math.floor(i - (time * sampleRate));
			end = i;
			break;
		}

		// To find the fade, we go back until the general level stops falling
		// Essentially, if we can find a maximum greater than the average 

		var rising = false; // we're looking backwards so this is good
		var t = 0, u = 0, l = 0, max = 0;

		for(var i = end; i >= start; i--) {

			// Keep going back until we can't get a value bigger than the threshold
			if(view2[i] > max) {
				max = view2[i] + threshold2;
				l = i;
			} else if(view2[i] < 10) {
			} else {
				t++;
				if(t > threshold3) {

					// Got it!
					return l / sampleRate;

				}
			}

		}

		// No idea? Return the end, it's our safest bet.
		return end / sampleRate;

	}

}

export interface AudioBackend {

	play() : void;
	playing() : boolean;
	pause() : void ;
	seek(time:number) : void;
	time():number;
	unload() : void;

	onPlay(callback:() => void) : void;
	onPause(callback:() => void) : void;
	onEnd(callback:() => void) : void;
	onSeek(callback:() => void) : void;

}

export class HTMLAudio implements AudioBackend {

	public aud:any;
	
	constructor (path:string) {
		this.aud = new Audio(path);
		this.aud.preload = "auto";
	}

	public playing() {
		if(!this.aud)
			return false;
		return !this.aud.paused;
	}

	public play() : void {
		if(!this.aud)
			return;
		this.aud.play();
	}

	public pause() : void {
		if(!this.aud)
			return;
		this.aud.pause();
	}

	public seek(time:number) {
		if(!this.aud)
			return;
		this.aud.currentTime = time;
		
	}

	public unload() : void {
		if(!this.aud)
			return;
		this.aud.pause();
		this.aud.src = "";
		delete this.aud;
	}

	public onPlay(callback:() => void) : void {
		this.aud.onplaying = callback;
	}
	public onPause(callback:() => void) : void {
		this.aud.onpause = callback;
	}
	public onSeek(callback:() => void) : void {
		this.aud.onseeked = callback;
	}
	public onEnd(callback:() => void) : void {
		this.aud.onended = callback;
	}

	public time() : number {
		return this.aud.currentTime;
	}

}