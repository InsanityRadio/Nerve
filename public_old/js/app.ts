interface Window { escape:any; jsmediatags:any; _:any; }

class User {
	
	id:number;
	username:string;
	uploads:Upload[];

}

class Page {
	private visible:boolean = false;
	constructor(public element:HTMLElement, public sidebar:HTMLElement, public parent:string = null, public listener:IPage = null){
	}
	show(parameter:any) {
		this.visible = true;
		if(this.listener)
			this.listener.open(parameter);
		this.element.style.display = "block";
		if(this.sidebar)
			this.sidebar.className = "second-sidebar visible";
	}
	hide() {
		if(this.listener && this.visible)
			this.listener.close();
		this.element.style.display = "none";
		if(this.sidebar)
			this.sidebar.className = "second-sidebar";
	}
}

interface IPage {

	open():void;
	close():void;

}

class UploadListPage implements IPage {

	constuctor() { };

	public open(data):void {

		var x = new XMLHttpRequest();
		x.open("GET", "/upload/list/");
		x.onreadystatechange = () => {
			if(x.readyState != 4) return;
			if(x.status != 200) throw new Error("Error loading the upload list - server returned " + this.status);

			this.drawTable(JSON.parse(x.responseText));

		}

		x.send();

	}

	private drawTable(results) {

		var alertTable = document.getElementById("screen-upload-list-alert");
		var fullTable = document.getElementById("screen-upload-list-all");
		alertTable.innerHTML = fullTable.innerHTML = "";

		for(var i in results){

			var row = new Track(results[i]);
			var htmlRow = document.createElement("tr");
			htmlRow.insertCell(0);
			htmlRow.insertCell(1).textContent = row.title;
			htmlRow.insertCell(2).textContent = row.artist;
			htmlRow.insertCell(3).textContent = row.uploadDate;
			htmlRow.insertCell(4);

			if(row.status < 3 && row.status != 1){
				var clone = htmlRow.cloneNode(true);
				clone.className = "hand";
				clone.insertCell(4).textContent = row.status == 3 ? "Sent back" : "Metadata";
				clone.track = row;

				clone.onclick = function() {

					Pages.show("uploadEdit", { track: this.track });

				}

				alertTable.appendChild(clone);
			}

			htmlRow.insertCell(4).textContent = row.status == 2 ? "Rejected" : (row.approved ? "Yes" : "Not yet");
			fullTable.appendChild(htmlRow);

		}

	}

	public close():void {
		
	}

}

class EditPage implements IPage {

	player:Deck = new Deck(document.getElementById("screen-edit-deck"));

	EditPage() { };

	errors:Object = {};
	warnings:Object = {};

	id:number = 0;

	public open(data):void {

		console.log(data.track);
		this.player.load(data.track);

		this.id = data.track.id;

		document.getElementById("edit-title").value = data.track.title;
		document.getElementById("edit-artist").value = data.track.artist;

		data.track.getLyrics((lyrics) => {

			var container = document.getElementById("edit-lyrics");

			if(lyrics == false) return container.innerHTML = "<em>No lyric data available.</em>";

			container.textContent = lyrics;
			container.innerHTML = container.innerHTML.split("\n").join("<br />\n");

			var exp = TrackProvider.getExplicits(container.innerHTML);
			container.innerHTML = exp[0];

			document.getElementById("edit-lyrics-caption").innerHTML = "Lyrics (" + exp[1] + 
				" flagged word" + (exp[1] != 1 ? "s":"") + "):";

		});

		var waveform;

		setTimeout(() => {

			waveform = window.$$0 = this.player.waveform;

			this.player.waveform.on('segments.dragged', function(segment) {

				var id = parseInt(segment.id.substr(7));

				document.getElementById("edit" + id + "0-text").value = formatTime(segment.startTime, true);
				
				// Don't set the finish for extro - it doesn't actually do anything
				if(id == 2)
					return setExtroDuration(segment.endTime - segment.startTime);
				document.getElementById("edit" + id + "1-text").value = formatTime(segment.endType, true);

			});

		}, 2);

		function guessExtro() {

			if(!waveform.waveform.origWaveformData ||
					!waveform.waveform.origWaveformData.adapter.data.buffer.byteLength ||
					!waveform.player.getDuration()) {

				console.log("no extro, re-loading");
				setTimeout(() => guessExtro(), 500);
				return;

			}

			console.log(waveform.waveform.origWaveformData);
			var buffer = waveform.waveform.origWaveformData.adapter.data.buffer.slice(0),
				view = new Int8Array(buffer);

			var copy = buffer.slice(0),
				view2 = new Int8Array(copy);

			var sample_rate = view.length / waveform.player.getDuration();

			var threshold1 = 1,
				threshold2 = 8,
				threshold3 = 100;

			var accuracy = 0.3; // in seconds - so the higher the number the lower the accuracy

			var avg = 0, max = 0, start = 0, end = 0, time = 30;

			// work out the number of samples to average on either side
			accuracy = Math.floor(sample_rate * accuracy);

			// work out exactly where the audio signal "ends"
			for(var i = view.length; i >= 0; i--) {
				if(view[i] < threshold1) continue;
				start = Math.floor(i - (time * sample_rate));
				end = i;
				break;
			}

			console.log(start, end, time, sample_rate, accuracy);

			// Transfer the envelope to a less accurate copy

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

			window.t2t = function(t) {

				return t / sample_rate;

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

						console.log("FOUND: ", l, i);
						mark("2;0", t2t(l));
						break;

					}
				}

			}

			window.$$$ = view2;


		}

		setTimeout(() => guessExtro(), 1000);
		var _this = this;

		// Why? Extro should never be longer than 5 seconds unless there's a silence at the end. 
		// Otherwise you get absolutely horrible crossfades.
		function setExtroDuration(time) {

			console.log(time);

			var tw = time > 5;
			if(time > 15 && !_this.errors.extro)
				_this.errors.extro = "The extro is far too long.";

			if(time < 10 && _this.errors.extro)
				delete _this.errors.extro;

			if(!_this.warnings.extro && tw)
				_this.warnings.extro = "Extro should be as short as possible, as they mark the start of the next track. <a href='/help/extro'>See here for more</a>";
			else if (_this.warnings.extro && !tw)
				delete _this.warnings.extro;
			//else
			//	return;

			_this.updateWarnings();

		}

		function mark(type, position) {

			var type = type.split(";");
			type[0] = parseInt(type[0]), type[1] = parseInt(type[1]);

			if(position == undefined)
				position = waveform.time.getCurrentTime();

			var segment = waveform.segments.getSegments()[type[0]];
			segment[type[1] ? "endTime" : "startTime"] = position;

			document.getElementById("edit" + type.join("") + "-text").value = formatTime(position, true);

			waveform.waveform.segments.updateSegments();

			if(type[0] == 2) setExtroDuration(segment.endTime - segment.startTime);

		}

		var elem = this.player.element;

		elem.querySelector(".sect.intro.start").onclick = () => mark("0;0");
		elem.querySelector(".sect.intro.end").onclick = () => mark("0;1");

		elem.querySelector(".sect.hook.start").onclick = () => mark("1;0");
		elem.querySelector(".sect.hook.end").onclick = () => mark("1;1");

		elem.querySelector(".sect.extro").onclick = () => mark("2;0");

		elem.querySelector("#edit-save").onclick = () => this.save();

		window.addEventListener("keypress", this.listener = (e) => this.keyPressListener(e));

	}

	public updateWarnings() {

		console.log("!");

		var warnings = document.getElementById("edit-warnings");
		warnings.innerHTML = "";

		for(var i in this.warnings) {
			var p = document.createElement("p");
			p.innerHTML = this.warnings[i];
			warnings.appendChild(p);
		}

		for(var i in this.errors) {
			var p = document.createElement("p");
			p.innerHTML = this.errors[i];
			p.style.fontWeight = "bold";
			warnings.appendChild(p);
		}

	}

	public keyPressListener(e):void {

		if(document.activeElement != document.body &&
				document.activeElement != window)
			return;
		if(e.charCode == 32) {

			this.player.source.playing() ? this.player.pause() : this.player.play();

		}
	}

	// Update track metadata and returns to the My Uploads page.
	public save() {

		var http = new XMLHttpRequest();
		http.onreadystatechange = function() {

			if(this.readyState != 4) return;
			if(this.status != 200) throw new Error("Failed to update backend");



		}
		http.open("POST", "/upload/save/" + this.id, true);
		http.send(JSON.stringify({
			intro_start: document.getElementById("edit00-text").value,
			intro_end: document.getElementById("edit01-text").value,
			hook_start: document.getElementById("edit10-text").value,
			hook_end: document.getElementById("edit11-text").value,
			extro: document.getElementById("edit20-text").value
		}));

	}

	public close():void {

		window.removeEventListener("keypress", this.listener);
		this.player.eject();

	}

}


class Moderation implements IPage {



}


class Pages {

	// Incoming super scary typedef
	static pages:{[id: string] : Page} = {
		preload: new Page(document.getElementById("screen-load"), null),
		upload: new Page(document.getElementById("screen-upload"), document.getElementById("sidebar-upload")),

		uploadSong: new Page(document.getElementById("screen-upload-song"), document.getElementById("sidebar-upload"), "upload"),
		uploadSweeper: new Page(document.getElementById("screen-upload-sweeper"), document.getElementById("sidebar-upload"), "upload"),
		uploadList: new Page(document.getElementById("screen-upload-list"), document.getElementById("sidebar-upload"), "upload", new UploadListPage()),

		uploadEdit: new Page(document.getElementById("screen-edit"), document.getElementById("sidebar-upload"), "upload", new EditPage()),

		//libraryEdit: new Page(document.getElementById("screen-edit"), document.getElementById("sidebar-edit"), "library"),

		moderation: new Page(document.getElementById("screen-moderation"), null, new Moderation()),
		moderationEdit: new Page(document.getElementById("screen-moderation-track"), null, "moderation")
	};

	static menu = document.querySelector("#sidebar .menu");

	static currentPage = null;

	public static buttons = [];

	static show(pageName, parameter:any = null){

		var page = this.pages[pageName];

		for(var i in this.pages){
			if(this.pages[i] != page){
				this.pages[i].hide();
			}
		}

		page.show(parameter);

		for(var i in this.buttons){
			var current = i == pageName || i == page.parent;
			for(var j in this.buttons[i])
				this.buttons[i][j].classList[current ? "add" : "remove"]("current");
		}

	}

}

class App {

	constructor() {

		this.hook();
		Pages.show("uploadList");

	}

	hook() {

		var elements = [].slice.apply(document.querySelectorAll("[data-href]"));

		elements.forEach(function(element) {

			var href:string = element.dataset.href;
			element.dataset.href2 = href;
			delete element.dataset.href;
			element.addEventListener("click", function(e) {

				e.preventDefault();	e.stopPropagation();
				if(!Pages.pages[href])
					throw new Error("Tried to show page " + href + ", but it does not exist.");

				Pages.show(href);

				return false;

			})
			if(!Pages.buttons[href])
				Pages.buttons[href] = [];
			if(!element.dataset.nomenu)
				Pages.buttons[href].push(element);

		});

	}

}



class BigLibrary {

	public static searchTags(tags:any, callback:(result:any) => void){

		this.search(tags.title, tags.artist, tags.album, function(result:any) {

			if(result == null)
				this.search(tags.title, tags.artist, "", callback);

			callback(result);

		});

	}
	public static search(title:string, artist:string, album:string, callback:(result:any)=>void) {

		title = UploadProvider.stripTag(title);
		artist = UploadProvider.stripTag(artist);
		album = UploadProvider.stripTag(album);

		var x = new XMLHttpRequest();

		artist = window.escape(artist).replace(/\//g, " ");
		album = window.escape(album).replace(/\//g, " ");
		title = window.escape(title).replace(/\//g, " ");

		x.open("GET", "/metadata/fetch/" + [artist, album, title, ""].join("/"), true);

		x.onreadystatechange = function(){
			if(this.readyState != 4) return;

			if(this.status != 200){
				callback(undefined);
				throw new Error("Backend API failure. Reason: " + this.responseText);
			}

			var track = JSON.parse(this.responseText);


			callback({
				title: track.title,
				artist: track.artist,
				album: track.album,
				//artwork: track["album_coverart_800x800"],
				nerve_id: track.nerve_id,
				external_id: track.external_id,
				explicit: track.explicit
			});
			

		}

		x.send();

	}

}


class UploadProvider {

	static readTags(file, callback:(tags:any)=>void){

		musicmetadata(file, (error, result) => {
			
			if(error) return callback(undefined);

			console.log(result);

			callback(this.strip(result));

		});

	}

	static strip(result:any){

		// Remove any brackets (regular or square) from the ID3
		// Some CD ripping software likes to advertise itself...

		var tags = {};

		if(!result.title || !result.artist) return undefined;

		tags.title = this.stripTag(result.title);
		tags.artist = this.stripTag(result.artist[0]);
		tags.album = this.stripTag(result.album);

		return tags;

	}

	static stripTag(tag:String){
		return tag.replace(/ *[\(\[][^)]*[\)\]] */g, "");
	}

}

declare class WaveformData {
	min:number[];
	max:number[];
	duration:number;
	static create(x:any);
}

class Track {

	id:number;
	externalID:number;

	title:string;
	artist:string;
	album:string;

	artistID:string;
	albumID:string;

	status:int;
	approved:int;
	uploadDate:string;

	length:number;

	private extended:string;

	constructor(ref:any) {

		this.id = ref.track_id;
		this.externalID = ref.external_id;

		this.title = ref.title;
		this.artist = ref.artist;
		this.album = ref.album;
		this.artistID = ref.artist_id;
		this.albumID = ref.album_id;

		this.length = parseFloat(ref.length);

		this.status = ref.status;
		this.approved = ref.approved;
		this.uploadDate = ref.upload_date;

		this.path = "/audio/preview/" + this.id;
		this.waveform = "/audio/waveform/" + this.id;

	}

	getExtended(callback) {

		if(this.extended) return callback(this);

		var x = new XMLHttpRequest();
		x.open("GET", "/upload/file/" + this.id);
		x.onreadystatechange = () => {
			if(x.readyState != 4) return;
			if(x.status != 200) throw new Error("Could not load track information for " + this.id);

			this.extended = JSON.parse(x.responseText);
			callback(this);
		}
		x.send();

	}

	getLyrics(callback) {

		this.getExtended(() => {
			console.log(this);
			callback(this.extended.lyrics);
		});

	}

}

// the title is a lie
class TrackProvider {

	public static getExplicits(lyrics){

		var matches = new RegExp("\\b((" + $config.banned_words.join("|") + ")[^\\s\\b,.\<\>]*)\\b", "igm"), match;

		console.log(matches);

		var total = lyrics.match(matches);
		total = total == null ? 0 : total.length;

		lyrics = lyrics.replace(matches, "<b>$1</b>");

		return [lyrics, total];

	}

}

interface HTMLCanvasElement {
	cwidth:number;
	cheight:number;
}


function formatTime(seconds, ms){
	var minutes = seconds / 60 | 0;
	seconds = seconds % 60;
	var time = ("00" + minutes).substr(-2) + ":" + ("00" + (seconds | 0)).substr(-2);

	if(ms)
		time += "." + ("00" + Math.floor((seconds * 100) % 100)).substr(-2);
	return time;
}


class Upload {
	
	id:number; // Internal ID
	nerve_id:number;

	title:string;
	artist:string;
	album:string;

	uuid:string[];

	override:boolean;

	private token:string;
	private origin:string;
	private file:File;
	private loop:boolean;

	constructor(tags:any) {

		this.title = tags.title;
		this.artist = tags.artist;
		this.album = tags.album;

		this.nerve_id = tags.nerve_id;
		this.id = -1;

	}

	upload(file:File) {

		if(this.complete)
			throw new Error("Attempted to upload to an existing track thing..?");

		this.file = file;
		
		var x = new XMLHttpRequest();
		x.open("GET", "/upload/path/", true);
		x.withCredentials = true;
		x.onreadystatechange = (e) => this.path_onReadyStateChange(e, e.target);
		x.send();

	}

	private doUpload(){

		var fd = new FormData(), _this = this;

		fd.append("nerve_id", this.nerve_id);

		// For overrides, just in case nerve_id is -1.
		fd.append("title", this.title);
		fd.append("artist", this.artist);
		fd.append("album", this.album);
		fd.append("file", this.file);

		fd.append("override", this.override);

		var x = new XMLHttpRequest();
		x.open("POST", this.origin + "/upload/do/", true);
		x.withCredentials = true; // Send our auth cookie.
		x.onreadystatechange = (e) => this.upload_onReadyStateChange(e, e.target);
		x.upload.onprogress = (e) => this.upload_onProgress(e, e.target);
		x.onerror = (e) => this.onError();

		x.send(fd);

	}

	getStatus(loop:boolean = false) {

		var url = this.origin + "/upload/status/" + this.token;
		var x = new XMLHttpRequest();
		this.loop = loop;

		x.onreadystatechange = (e) => this.status_onReadyStateChange(e, e.target);
		x.open("GET", url, true);
		x.send();

	}

	setStatus(message:string) {
		_("song-upload-status").textContent = message;
	}

	private onError(event) {
		this.setStatus("Connection to backend failed.");
	}

	private path_onReadyStateChange(event, target){
		if(target.readyState != 4) return;
		if(target.status != 200)
			return this.setStatus("Failed: server error???");

		var json = JSON.parse(target.responseText);
		this.origin = "http://" + json.path;
		this.doUpload();	
	}

	private upload_onReadyStateChange(event, target) {
		if(target.readyState != 4)  return;
		if(target.status != 200)
			return this.setStatus("Failed: server unavailable!");
		
		var token = JSON.parse(target.responseText).token;
		this.token = token;
		this.getStatus(true);
	}

	private upload_onProgress(event) {
		this.setStatus("Uploading");
		_("song-upload-progress").style.width = Math.floor(event.loaded / event.total * 30) + "%";
	}

	private status_onReadyStateChange(event, target) {
		if(target.readyState != 4 || target.status != 200)  return;

		var data = JSON.parse(target.responseText);
		_("song-upload-progress").style.width = ((data.percent * 0.6) + 30) + "%";

		if(data.message)  this.setStatus(data.message);
		if(!data.running)  return;
		if(this.loop)  setTimeout(() => this.getStatus(true), 500);
	}

}

// I should really get rid of this big method...

window.addEventListener("load", function() {

	window._ = function(x:string){ return document.getElementById.apply(document, arguments); };

	_("song-upload-main").disabled = "";
	_("song-upload-main").addEventListener("change", function(event) {

		_("song-upload-status").textContent = "Loading Metadata";
		_("song-upload-label").textContent = event.target.value;

		UploadProvider.readTags(event.target.files[0], function(tags) {

			if(tags == undefined) {

				alert("This track has no interpretable metadata.\n\nSince we can't use a service like Shazam,\nwe have no way of identifying it for copyright reasons.\n\nSorry, try a better version.")
				_("song-upload-status").textContent = "Failed: no metadata";
				return;

			}

			event.target.disabled = "disabled";

			BigLibrary.searchTags(tags, function(result) {

				if(result == null){
				
					var r = confirm("I couldn't find this song in any big databases, so it will have to be moderated. Continue?");
					if(!r) return _("song-upload-status").innerHTML = "Aborted";

					result = {
						id: -1,
						external_id: -1,
						title: tags.title,
						artist: [tags.artist],
						album: [tags.album],
						explicit: 1
					};

				}

				if(result.exists) {

					var r = confirm("This already seems to exist on the system! Do you really want to (re-)upload it?")
					if(!r) return _("song-upload-status").innerHTML = "Aborted";

				}

				if(result.explicit) {

					var r = confirm("This song might be explicit. Are you sure it's safe to upload?");
					if(!r) return _("song-upload-status").innerHTML = "Aborted";


				}

				_("song-upload-status").textContent = "Starting Upload";
				_("song-upload-label").innerHTML += "<br /><br />";
				_("song-upload-label").innerHTML += "<b>" + result.title + "</b> - " + result.artist;
				_("song-upload-label").innerHTML += "<br />" + result.album;



				var upload = new Upload(result);

				if(document.getElementById("override-bitrate").checked)
					upload.override = true;

				upload.upload(event.target.files[0]);

			});
		});

	});

	new App();

});
