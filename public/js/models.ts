// This is totally free for you to rip off. See the Nerve LICENSE. Never know, this might prove useful to someone. 

interface Window { escape:any; jsmediatags:any; _:any; $config:any; $lang:any; }
interface HTMLCanvasElement { cwidth:number; cheight:number; }

var $config:any;

class User {
	
	id:number;
	username:string;
	uploads:string[];

}

class Page {

	private visible:boolean = false;
	private noHook:boolean = false;

	constructor(public element:HTMLElement, public sidebar:HTMLElement, public parent:string = null, public listener:IPage = null){
	}

	show(parameter:any) {

		this.visible = true;
		if(this.listener && !this.noHook)
			this.listener.open(parameter);
		this.element.style.display = "block";

		if(this.sidebar)
			this.sidebar.className = "second-sidebar visible";

	}

	hide() {

		if(this.listener && this.visible && !this.noHook)
			this.listener.close();
		this.element.style.display = "none";

		if(this.sidebar)
			this.sidebar.className = "second-sidebar";

	}


	postMessage(message:Event) {


	}

}

/**
 * A view is essentially a form that can be made up of multiple (two-way ish binding) inputs that can
 *  then be easily grabbed by using the get method and set the same way. 
 */
class View {

	protected elements:any = {};
	protected listeners:any = {};

	protected defaults:any = {};

	protected changeListener = (e:Event) => this.change(e);

	constructor(public name:string) {

	}

	destroy():void {

		for(var i in this.elements){
			this.elements[i]["hasBinding"] = false;
			this.elements[i].removeEventListener("keyup", this.changeListener);
			this.elements[i].removeEventListener("change", this.changeListener);
		}

		for(var i in this.listeners)
			for(var j in this.listeners[i])
				this.elements[i].removeEventListener(j, this.listeners[i][j], true);

	}

	nullBind(name: string, element:HTMLElement|string, serializable:boolean = true, def:string = undefined):boolean {

		if(document.getElementById(element) != null)
			return this.bind(name, element, serializable, def);

		this.elements[name] = null;

	}

	bind(name:string, element:HTMLElement|string, serializable:boolean = true, def:string = undefined):boolean {

		if(typeof element == "string")
			element = document.getElementById(element);

		// Cowardly refuse to double-bind on the element if it's on another view. 
		if(element["hasBinding"])
			return false;

		var tag = element.tagName;
		if(tag == "INPUT" && (element.type == "checkbox" || element.type == "radio"))
			tag = "CHECK";

		this.elements[name] = [tag, element];
		element["hasBinding"] = true;
		element["serializable"] = serializable;

		element.addEventListener("keyup", this.changeListener);
		element.addEventListener("change", this.changeListener);

		this.defaults[name] = def;

		return true;

	}

	reset() {
		for(var i in this.defaults)
			if(this.defaults[i] !== undefined)
				this.set(i, this.defaults[i]);
	}

	change(e:Event) {

		if(typeof this.listeners[true] == "undefined" || !this.listeners[true][true]) return;

		var target = e.target, targetName;
		for(var i in this.elements) {
			if(this.elements[i][1] == target) 
				targetName = i;
			
		}

		console.log(e, targetName);
		// Not ours?
		if(!targetName) return;
		e["element"] = targetName;

		this.listeners[true][true](e);

		this.intChange(targetName);

	}

	// This allows us to do internal stuff without triggering the users change listener
	// for example: setting element classes
	intChange(name:string) {

		var element = this.elements[name][1];
		if(!element) return;

		var fnc = this.get(name) == this.defaults[name] ? "add" : "remove";

		element.classList[fnc]("default");

	}

	// We ideally only want one listener, so we need to keep track of them. 

	listen(name:string, event:string, fnc:(e:Event) => void) {

		// Change handler
		if(name == true) {
			if(!this.listeners[true])
				this.listeners[true] = {};

			this.listeners[true][true] = handler;
			return;
		}

		var handler = (e:Event) => { 
			e["targetName"] = name;
			fnc(e);
		};

		if(!this.elements[name])
			throw new Error("Tried to listen to element that doesn't exist on this object");

		if(!this.listeners[name])
			this.listeners[name] = {};

		if(this.listeners[name][event])
			this.elements[name][1].removeEventListener(event, this.listeners[name][event], true);

		this.listeners[name][event] = handler;

		this.elements[name][1].addEventListener(event, handler, true);

	}

	get(name:string, html:boolean = false):string|boolean|number {

		if(!this.elements[name])
			return undefined;

		switch(this.elements[name][0]){
			case "INPUT":
				return this.elements[name][1].value;
			case "CHECK":
				return this.elements[name][1][html ? "value" : "checked"];
			case "SELECT":
				return this.elements[name][1].value;
			default:
				return this.elements[name][1][html ? "innerHTML" : "textContent"];
		}

	}

	element(name:string):HTMLElement {
		return this.elements[name][1];
	}

	set(name:string, value:any, html:boolean = false):void {

		if(!this.elements[name])
			return undefined;

		switch(this.elements[name][0]){
			case "INPUT":
				this.elements[name][1].value = value;
				break;
			case "CHECK":
				this.elements[name][1][html ? "value" : "checked"] = value;
				break;
			case "SELECT":
				var options = this.elements[name][1].options;
				for(var i in options) {
					if((html ? options[i].label : options[i].value) == value) {
						console.log(options[i].index);
						this.elements[name][1].selectedIndex = options[i].index;
					}
				}
				break;
				//this.elements[name][1].value = value;
			default:
				if(html)
					return this.elements[name][1].innerHTML = value;

				this.elements[name][1].textContent = value;
				this.elements[name][1].innerHTML = this.elements[name][1].innerHTML.split("\n").join("<br />\n");
				break;
		}

		this.intChange(name);

	}

	serialize():Object {

		var obj = {};
		for(var i in this.elements)
			if(this.elements[i][1]["serializable"])
				obj[i] = this.get(i);
		
		return obj;

	}

}

class SerializeView extends View {

	constructor(name) {
		super(name);
	}

	serializeHook(name:string, serialize:(s:string) => void):boolean {

		this.elements[name][1]["serialize"] = serialize;
		return true;

	}

	serialize():Object {
		
		var obj = {};
		for(var i in this.elements){
			var element = this.elements[i][1];
			if(!element["serializable"]) continue;

			obj[i] = element["serialize"] ? element["serialize"](this.get(i)) : this.get(i);
		}
		
		return obj;

	}

}

interface IPage {

	open(parameter:any):void;
	close():void;

}


module HTTP {

	export abstract class Request {

		public xml:XMLHttpRequest;
		protected METHOD:string;

		constructor(protected url:string, protected success:(scope:Request) => void, protected error?:(scope:Request) => void) {

			this.xml = new XMLHttpRequest();
			this.xml.onreadystatechange = () => this.stateChange();

		}

		private stateChange():void {

			if(this.xml.readyState != 4) return;

			this.xml.status == 200 ? this.success(this) : this.error(this);

		}

		open(): void {  }

		send(form?:Object, contentType?:string):void {

			this.xml.open(this.METHOD, this.url, true);
			// This provides space for, say, additional headers
			this.open();
			this.xml.send();

		}

	}

	export class GET extends Request {

		protected METHOD:string = "GET";

		constructor(protected url:string, protected success:(scope:Request) => void, protected error?:(scope:Request) => void) {

			super(url, success, error);
			this.send();

		}

	}

	export class POST extends Request {

		protected METHOD:string = "POST";

		send(form:Object, contentType:string = "application/json"):void {

			var data:string;

			// Depending on the contentType, we should probably properly encode the data.
			switch(contentType) {

				case "application/json":
					data = JSON.stringify(form);
					break;

				case "application/x-www-form-urlencoded":
					contentType += "; charset=UTF-8";
					data = Utilities.Form.encode(form);
					break;

				case "formData":
					contentType = null;
					data = form;
					break;

				default:
					throw new Error("Expected valid content type, instead got " + contentType);

			}

			this.xml.open(this.METHOD, this.url, true);
			if(contentType)
				this.xml.setRequestHeader("Content-Type", contentType);
			this.open();

			this.xml.send(data);

		}

	}

	export class Upload {

		protected base;
		protected isReady:boolean = false;
		protected file:File;
		protected form:FormData;
		protected path:string;

		constructor(protected base, protected uploadDone:(scope:Request) => void,
				protected uploadProgress:(percent:number, message:string) => void, protected uploadError:(error:Error) => void) {

			var xml = new GET(base + "path/", (scope:Request) => this.ready(scope), (e) => this.error(e));


		}

		send(form:FormData, file:File):void {

			this.form = form;
			this.file = file;
			if(!this.isReady) return;

			var xml = new POST(this.path + "do/", (scope:Request) => this.done(scope), (e) => this.error(e));
			xml.xml.upload.onprogress = (e:Event) => this.uploadProgress(e.loaded / e.total * 100);

			if(form == null)
				form = new FormData();

			form.append("file", file);
			xml.send(form, "formData");

		}

		protected ready(scope:Request) {

			// We now have the upload location and can be ready
			this.isReady = true;
			this.path = JSON.parse(scope.xml.responseText).path;

			// send() has already been called, but it was too early. Run it again.
			if(this.file) this.send(this.form, this.file);

		}

		protected done(scope:Request) {

			var token = JSON.parse(scope.xml.responseText).token;
			this.token = token;

			this.getStatus();

		}

		protected getStatus() {

			var xml = new GET(this.path + "status/" + this.token, (scope:Request) => {

				var data = JSON.parse(scope.xml.responseText);
				this.uploadProgress(100 + data.percent, data.message);

				if(data.running)
					setTimeout(() => this.getStatus(), 1000);
				else
					this.uploadDone(data);

			}, (e) => this.error(e));

		}

		protected error(e) {

			this.uploadError(e);

		}

	}

}

module Utilities {

	export class Form {

		static encode(form:Object) {
			var str:string[] = [];
			for(var i in form)
				str.push(encodeURIComponent(i) + "=" + encodeURIComponent(form[i]));
			return str.join("&");
		}

	}

	export class String {

		static stripTag(tag:string){
			return tag.replace(/ *[\(\[][^)]*[\)\]] */g, "");
		}

	}

	export class Date {

		static formatTime(seconds, ms){
			var minutes = seconds / 60 | 0;
			seconds = seconds % 60;
			var time = ("00" + minutes).substr(-2) + ":" + ("00" + (seconds | 0)).substr(-2);

			if(ms)
				time += "." + ("00" + Math.floor((seconds * 100) % 100)).substr(-2);
			return time;
		}

		static getTime(time:string) {

			var parts:string[] = time.split(":");
			return parseInt(parts[0]) + (parseInt(parts[1]) / 100);

		}

	}

	export class Track {
	
		public static getExplicits(lyrics){

			var matches = new RegExp("\\b((" + $config.banned_words.join("|") + ")[^\\s\\b,.\<\>]*)\\b", "igm"), match;

			var total = lyrics.match(matches);
			total = total == null ? 0 : total.length;

			lyrics = lyrics.replace(matches, "<b>$1</b>");

			return [lyrics, total];

		}

	}

	export class Audio {

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

}

class ErrorView implements IPage extends View {

	constructor() {

		super("Error");

		this.bind("close", "error-close");
		this.bind("container", "error-container");
		this.bind("code", "error-code");
		this.bind("view", "error-view");
		this.bind("message", "error-message");
		this.bind("title", "error-title");

	}

	show() {
		this.element("view").style.display = "block";
	}

	hide() {
		this.element("view").style.display = "none";
	}

}

class QueryView implements IPage extends View {

	constructor() {

		super("Query");

		this.bind("go", "confirm-go");
		this.bind("close", "confirm-close");
		this.bind("container", "error-container");
		this.bind("view", "confirm-view");
		this.bind("message", "confirm-message");
		this.bind("title", "confirm-title");

	}

	show() {
		this.element("view").style.display = "block";
	}

	hide() {
		this.element("view").style.display = "none";
	}

}

class ErrorPage implements IPage {

	protected errorView:ErrorView = new ErrorView();
	protected queryView:QueryView = new QueryView();
	protected total:number = 0;

	protected error:any;

	constructor() {
		this.errorView.listen("close", "click", () => this.click());
		this.queryView.listen("go", "click", () => this.click(true));
		this.queryView.listen("close", "click", () => this.click(false));
	}

	setError(error:any) {

		this.error = error;

		var type = this.error.type;

		if(type == "query")
			this.renderQuery(error);
		else
			this.renderError(error);

	}

	setStackDepth(total:number) {

		this.total = total;
		var opacity:number = total / (total + 1) * 0.8;

		this.errorView.element("container").style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";

	}

	renderError(error:any) {
		this.errorView.set("title", this.error.title);
		this.errorView.set("code", this.error.code);
		this.errorView.set("message", this.error.message);
		this.errorView.show();
		this.queryView.hide();
	}

	renderQuery(query:any) {
		this.queryView.set("title", this.error.title);
		this.queryView.set("message", this.error.message);
		this.errorView.hide();
		this.queryView.show();
	}

	click(result: boolean):void {
		if(this.error.type == "query") {
			this.error.handler(result);
			this.error.requestClose();
		} else
			this.error.handler();
	}

	open():void {

	}

	close():void {

	}

}

class Errors {

	protected static page:Page = new Page(document.getElementById("error-container"), null, null, new ErrorPage());

	protected static errors:any[] = [];

	public static push(code:string, message:string, fatal:boolean = false, handler:() => void = null, title:string = null) {

		// Show an error here 
		if(handler == null)
			handler = () => this.dismiss();

		if(!title)
			title = fatal ? "Fatal Error" : "Error";

		var error = { type: "error", title: title, code: code, message: message, fatal: fatal, handler: handler };
		this.errors.push(error);

		console.error(error);

		this.page.listener.setStackDepth(this.errors.length);
		this.page.show();

		if(this.page.listener.error == null)
			this.dismiss();

	}

	public static query(message:string, title:string, handler:(result: boolean) => void = null) {

		if(handler == null)
			handler = () => this.dismiss();

		if(!title)
			title = "Query";

		var query = { type: "query", title: title, message: message, handler: handler, requestClose: () => this.dismiss() };
		this.errors.push(query);

		this.page.listener.setStackDepth(this.errors.length);
		this.page.show();

		if(this.page.listener.error == null)
			this.dismiss();

	}

	public static dismiss() {

		this.page.listener.error = null;
		this.page.listener.setStackDepth(this.errors.length);

		if(this.errors.length == 0)
			this.page.hide();
		else
			this.page.listener.setError(this.errors.shift());

	}

}

class Library {

	public static source:string = null;
	public static trackType = Track;

	static match(query:Object, callback:(result:any) => void) {

		var query = "match/?" + Utilities.Form.encode(query);
		new HTTP.GET(this.source + query, (scope:HTTP.Request):void => {

			callback(this.result(scope));

		}, function(scope:HTTP.Request) {

			if(scope.xml.status == 404)
				callback(null);
			else
				Errors.push(
					"SEARCH-FAIL",
					"Failed to search. Server returned " + scope.xml.status,
					true);

		});

	}

	static search(query:Object, callback:(result:any) => void) {

		var query = "search/?" + Utilities.Form.encode(query);
		new HTTP.GET(this.source + query, (scope:HTTP.Request):void => {

			callback(this.result(scope));

		}, function(scope:HTTP.Request) {

			Errors.push(
				"SEARCH-FAIL",
				"Failed to search. Server returned " + scope.xml.status,
				true);

		});

	}

	private static result(scope:HTTP.Request) {

		var data = JSON.parse(scope.xml.responseText);
		if(Array.isArray(data)) {

			var tracks = [];
			for(var i in data){
				tracks.push(new this.trackType(data[i]));
				tracks[tracks.length - 1].status = -1;
			}

		} else {
			var tracks = new this.trackType(data);
			tracks.status = -1;
		}
		return tracks;

	}

}

class ExtendableDataSource {

	id:number;

	protected extended:Object;
	protected static source:string = null;

	constructor(ref:any) { }

	getExtended(callback:(source:ExtendableDataSource) => void):void {

		if(this.extended)
			return callback(this);

		// Load super class so we can get the "source" method, even if it's been extended
		var sc = Object.getPrototypeOf(this).constructor;

		new HTTP.GET(sc.extended + this.id, (scope:HTTP.Request):void => {

			this.extended = JSON.parse(scope.xml.responseText);
			callback(this);

		}, function(scope:HTTP.Request) {

			Errors.push(
				"LOAD-FAIL",
				"Failed to load extended metadata. Server returned " + scope.xml.status,
				true);

		});

	}

	static load(id:number, callback:(target:ExtendableDataSource) => void) {

		new HTTP.GET(this.source + id, (scope:HTTP.Request):void => {

			var rt:any = JSON.parse(scope.xml.responseText);
			var data = new this(rt);
			data.extended = rt;
			callback(data);

		}, function(scope:HTTP.Request) {

			Errors.push(
				"LOAD-FAIL",
				"Failed to load extended metadata. Server returned " + scope.xml.status,
				true);

		});

	}

}

class Track extends ExtendableDataSource {

	id:number;
	externalID:number;

	cacheID:number;

	title:string;
	artist:string;
	album:string;

	artistID:string;
	albumID:string;

	status:number;
	approved:boolean;
	uploadDate:Date;

	path:string;
	waveform:string;

	length:number;

	endType:number;

	protected static source:string = "/upload/file/";

	constructor(ref:any) {

		super();

		this.id = ref.id;
		this.externalID = ref.external_id;

		this.cacheID = ref.cache_id;

		this.title = ref.title;
		this.artist = ref.artist;
		this.album = ref.album;
		this.artistID = ref.artist_id;
		this.albumID = ref.album_id;

		this.length = parseFloat(ref.length);

		this.status = ref.status;
		this.approved = ref.approved == true;
		this.uploadDate = new Date(ref.upload_date);

		this.path = "/audio/preview/" + this.id;
		this.waveform = "/audio/waveform/" + this.id;

		this.intro_start = ref.intro_start, this.intro_end = ref.intro_end;
		this.hook_start = ref.hook_start, this.hook_end = ref.hook_end;
		this.extro_start = ref.extro_start;

		this.endType = ref.end_type;

		this.createdBy = ref.created_by;

	}

	getLyrics(callback) {

		this.getExtended((source:Track) => {
			callback(this.extended["lyrics"]);
		});

	}

	getArtistPurity(callback) {

		new HTTP.GET("/metadata/explicit_artist/?artist=" + escape(this.artist), (scope:HTTP.Request):void => {

			var data = JSON.parse(scope.xml.responseText);
			callback(data.explicit == 1);

		}, function(scope:HTTP.Request) {
		});		

	}

	getAlternateMetadata() {

		this;

	}

}

class PreTrack extends ExtendableDataSource {

	id:number;
	externalID:number;

	cacheID:number;

	title:string;
	artist:string;
	album:string;

	artistID:string;
	albumID:string;

	exists:boolean;
	explicit:boolean;

	length:number;

	protected static source:string = null;

	constructor(ref:any) {

		super();

		this.id = ref.id;
		this.externalID = ref.external_id;

		this.cacheID = ref.cache_id;

		this.title = ref.title;
		this.artist = ref.artist;
		this.album = ref.album;
		this.artistID = ref.artist_id;
		this.albumID = ref.album_id;

		this.length = parseFloat(ref.length);
		this.explicit = ref.explicit;
		this.exists = ref.exists;

	}

	getLyrics(callback) {

		this.getExtended((source:Track) => {
			callback(this.extended["lyrics"]);
		});

	}

	getAlternateMetadata() {

		this;

	}

}

class GlobalLibrary extends Library {
	public static source:string = "/metadata/";
	public static trackType = PreTrack;
}

class MyLibrary extends Library {
	public static source:string = "/upload/";
}


/**
 * A collection represents any set of tracks. Edit pages, search, moderation, you name it. 
 */
class Collection {

	public tracks:Track[];

	protected base:string = "/void/list/";

	public load(callback:(scope:Collection) => void, page:number = 0, display:number = 50) {

		var req = new HTTP.GET(this.base + "?page=" + page + "&count=" + display,
				(scope:HTTP.Request):void => {

			// Yay. We have the data.
			this.tracks = [];
			var data = JSON.parse(scope.xml.responseText);
			for(var i in data) {
				this.tracks.push(new Track(data[i]));
			}

			callback(this);

		}, function(scope:HTTP.Request) {

			Errors.push(
				"LOAD-FAIL",
				"Failed to load listings. Server returned " + scope.xml.status,
				true);

		});

	}

}

class UploadCollection extends Collection {

	static instance = new UploadCollection();
	protected base:string = "/upload/list/";

}

class ModerationCollection extends Collection {

	static instance = new ModerationCollection();
	protected base:string = "/moderation/pending/";

}



