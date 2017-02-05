class ListPage implements IPage {

	table:HTMLElement;
	constuctor() { };

	public open(data):void {

		console.log(UploadCollection.instance);
		UploadCollection.instance.load((a) => this.load(a));

	}

	protected load(scope:Collection) {

		var list = [];

		for(var i in scope.tracks) {

			var track = scope.tracks[i];

			list.push({
				track: track,
				message: [""],
				click: true });

		}

		this.draw(table, list);	

	}

	protected click(track:Track) {

		Pages.show("uploadEdit", { track: track });

	}

	protected draw(table:HTMLElement, tracks:object) {

		var _this = this;
		table.innerHTML = "";

		for(var i in tracks){

			var track = tracks[i].track;

			var htmlRow = document.createElement("tr");
			htmlRow.insertCell(0).textContent = "";
			htmlRow.insertCell(1).textContent = track.title;
			htmlRow.insertCell(2).textContent = track.artist;
			htmlRow.insertCell(3).textContent = track.uploadDate.toLocaleDateString() + " " +
				track.uploadDate.toLocaleTimeString();
			var extra = tracks[i].message;
			for(var j = 0; j < extra.length; j++)
				htmlRow.insertCell(4+j).textContent = tracks[i].message[j];

			htmlRow.insertCell(4 + j);
			htmlRow["track"] = track;

			if(tracks[i].click) {
				htmlRow.className = "hand ";
				htmlRow.onclick = function() {
					_this.click(<Track> this["track"]);
				}
			}

			for(var className in tracks[i].classList) {
				htmlRow.classList.add(tracks[i].classList[className]);
			}

			table.appendChild(htmlRow);

		}

	}

	public close():void {
		
	}

}

class UploadListPage extends ListPage {

	protected load(scope:Collection) {

		var tableA = document.getElementById("screen-upload-list-alert");
		var tableB = document.getElementById("screen-upload-list-all");
		var a = [], b = [];

		for(var i in scope.tracks) {

			var track = scope.tracks[i];

			if(track.status < 3)
				a.push({
					track: track,
					message: [track.status == 3 ? "Sent back" : "Metadata"],
					click: true });

			console.log(track.status);

			b.push({
				track: track,
				message: [track.status == 2 ? "Rejected" : (track.approved ? "Yes" : "Not yet")],
				click: track.status <= 2 || track.status == 10,
				classList: ["status-" + track.status]});

		}

		this.draw(tableA, a);
		this.draw(tableB, b);

	}

}

class EditView extends SerializeView {

	constructor() {

		super("Edit");

		this.bind("title", "edit-title");
		this.bind("artist", "edit-artist");
		this.bind("lyrics", "edit-lyrics", false);
		this.bind("end_type", "edit-extro");

		this.bind("title_edit", "edit-title-button");

		this.bind("intro_start", "edit00-text", true, "-00:00");
		this.bind("intro_end", "edit01-text", true, "-00:00");
		this.bind("hook_start", "edit10-text", true, "-00:00");
		this.bind("hook_end", "edit11-text", true, "-00:00");
		this.bind("extro_start", "edit20-text", true, "-00:00");

		["intro_start", "intro_end", "hook_start", "hook_end", "extro_start"].
			forEach((e:string) => this.serializeHook(e, (s:string) => this.onSerialize(s)));

		this.bind("intro_start_btn", "edit-is", false);
		this.bind("intro_end_btn", "edit-ie", false);
		this.bind("hook_start_btn", "edit-hs", false);
		this.bind("hook_end_btn", "edit-he", false);
		this.bind("extro_start_btn", "edit-es", false);

		this.bind("save", "edit-save", false);
		this.bind("save-publish", "edit-save-pub", false);
		this.bind("delete", "edit-delete", false);

		this.bind("lyrics-caption", "edit-lyrics-caption", false);

	}

	onSerialize(s) {

		var t = s.split(":");
		return parseInt(t[0]) * 60 + parseFloat(t[1]);

	}

}


class EditPage implements IPage {

	protected player:Deck = new Deck(document.getElementById("screen-edit-deck"));
	protected view:EditView = new EditView();

	protected id:number;
	protected track:Track;

	private types:string[] = ["intro", "hook", "extro"];

	constructor() {

		this.view.listen("intro_start_btn", "click", (e:Event) => this.handleClick(e));
		this.view.listen("intro_end_btn", "click", (e:Event) => this.handleClick(e));
		this.view.listen("hook_start_btn", "click", (e:Event) => this.handleClick(e));
		this.view.listen("hook_end_btn", "click", (e:Event) => this.handleClick(e));
		this.view.listen("extro_start_btn", "click", (e:Event) => this.handleClick(e));

		this.view.listen("title", "keypress", (e:Event) => (e.keyCode == 13 || e.which == 13) && this.saveEditTitle(e));
		this.view.listen("title_edit", "click", (e:Event) => this.handleEditTitle(e));

		this.view.listen("save", "click", (e:Event) => {
			this.save();
		});

		this.view.listen("save-publish", "click", (e:Event) => {
			this.saved == 2 ? this.publish() : this.save();
		});

		this.view.listen("delete", "click", (e:Event) => this.remove());
		this.view.listen(true, true, (e:Event) => this.handleChange(e));

	}

	open(data:any):void {

		document.body.scrollTop = document.documentElement.scrollTop = 0;
		Pages.pages["preload"].show();
		this.id = data.track.id;
		this.endEditTitle();
		this.view.reset();
		Track.load(data.track.id, (track:Track) => this.load(track));

	}

	load(track:Track):void {

		//Pages.pages["preload"].hide();
		this.track = track;
		this.view.set("title", track.title);
		this.view.set("artist", track.artist);
		this.view.set("lyrics", "");

		console.log(track);
		console.log(track.extro_start);
		if(track.extro_start != 0 && track.extro_start != null) {
			this.saved = 2;
			this.handleSave();
		} else {
			this.saved = 0;
			this.view.element("save-publish").querySelector("i").className = "fa fa-floppy-o";
//			this.view.element("save-publish").disabled = "disabled";
		}

		track.getLyrics((lyrics:string|boolean) => {

			if(lyrics == false)
				lyrics = "No lyric data available.";

			this.view.set("lyrics", lyrics);
			var lyrics = this.view.get("lyrics", true);
			lyrics = Utilities.Track.getExplicits(lyrics);

			this.view.set("lyrics", lyrics[0], true);
			this.view.set("lyrics-caption", "Lyrics (" + lyrics[1] + 
				" flagged word" + (lyrics[1] != 1 ? "s":"") + "):");

		});

		this.player.load(track);

		setTimeout(() => this.addPlayerListeners(), 2);

	}

	set(key:string, value:number) {

		this.view.set(key, Utilities.Date.formatTime(value, true));
		var type = this.types.indexOf(key.split("_")[0]);

		if(type == -1)
			throw new Error("Can't set " + key + " as there's no such property");

		var segment = this.player.waveform.segments.getSegments()[type];
		segment[key.split("_")[1] + "Time"] = value;

		this.player.waveform.waveform.segments.updateSegments();

	}

	fillMarkers():void {

		var waveform = this.player.waveform;
		if(!waveform.waveform.origWaveformData ||
				!waveform.waveform.origWaveformData.adapter.data.buffer.byteLength ||
				!waveform.player.getDuration())
			return setTimeout(() => this.fillMarkers(), 100);

		Pages.pages["preload"].hide();

		console.log("Setting markers");

		for(var t = 0; t < this.types.length * 2; t++) {
			var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
			if(this.track[type] != null)
				this.set(type, this.track[type]);
		}
		this.view.set("end_type", this.track.endType);

		console.log(this.track);
		if(this.track.extro_start == 0 || this.track.extro_start == null)
			this.calculateExtro();

	}

	calculateExtro():void {

		var waveform = this.player.waveform;
		var buffer = waveform.waveform.origWaveformData.adapter.data.buffer.slice(0);
		var extroTime = Utilities.Audio.getExtro(buffer, waveform.player.getDuration());

		this.set("extro_start", extroTime);
		this.handleChange();

	}

	addPlayerListeners():void {

		this.player.waveform.on('segments.dragged', (segment) => {

			var id = parseInt(segment.id.substr(7));

			this.handleChange(null);

			this.set(this.types[id] + "_start", segment.startTime);

			// Don't set the finish for extro - it doesn't actually do anything
			if(id == 2)
				return; // this.set("extro_start", segment.endTime - segment.startTime);

			this.set(this.types[id] + "_end", segment.endTime);

		});

		console.log("Adding listener");
		document.documentElement.addEventListener("keydown", this.listener = (e) => this.keyPressListener(e));

		this.fillMarkers();

	}

	protected handleClick(e:Event) {

		var target:string = e.targetName.split("_", 2).join("_");
		this.set(target, this.player.waveform.time.getCurrentTime());
		this.handleChange(e);

	}

	protected handleChange(e:Event) {
		this.saved = 0;
		this.view.element("save").disabled = "";
		this.view.element("save-publish").disabled = "";
		this.view.element("save-publish").querySelector("i").className = "fa fa-floppy-o";
	}

	protected handleEditTitle(e:Event) {
		if(this.view.element("title_edit").querySelector("i").className != "fa fa-check") {
			this.startEditTitle();
		} else {
			this.saveEditTitle();
		}
	}

	protected startEditTitle() {
		this.view.element("title").disabled = false;
		this.view.element("title").focus();
		this.view.element("title_edit").querySelector("i").className = "fa fa-check";
	}

	protected saveEditTitle() {
		this.endEditTitle();
		var title = this.view.get("title");
		if(title == this.track.title)
			return;
		if(title == "")
			return this.view.set("title", this.track.title);

		this.handleChange()

	}

	protected endEditTitle() {
		this.view.element("title").disabled = 'disabled';
		this.view.element("title_edit").querySelector("i").className = "fa fa-pencil";
	}

	protected keyPressListener(e):void {

		if(document.activeElement != document.body &&
				document.activeElement != window)
			return;
		if(e.keyCode == 32 || e.charCode == 32) {

			this.player.source.playing() ? this.player.pause() : this.player.play();
			e.preventDefault();
			return false;

		}
	}

	close():void {

		console.log("Removing listener");
		document.documentElement.removeEventListener("keydown", this.listener);
		this.player.eject();

	}

	protected save():void {

		this.view.element("save").disabled = "disabled";
		Pages.pages["preload"].show();

		var data = this.view.serialize();
		data["token"] = $config.key;

		this.saved = 1;

		new HTTP.POST("/upload/save/" + this.id, (scope:HTTP.Request):void => {

			this.handleSave(scope);

		}, function(scope:HTTP.Request) {

			try {
				var message = JSON.parse(scope.xml.responseText).message;
			} catch (e) {
				var message = "No description available, error " + scope.xml.status;
			}

			Errors.push(
				"SAVE-FAIL",
				"Couldn't save: " + message,
				true);
			Pages.pages["preload"].hide();

		}).send(data, "application/x-www-form-urlencoded");

	}

	protected handleSave(scope:HTTP.Request):void {

		Pages.pages["preload"].hide();
		if(this.saved != 1) return;
		this.saved = 2;

		this.view.element("save-publish").querySelector("i").className = "fa fa-upload";
		this.view.element("save-publish").disabled = "";

	}

	protected publish():void {

		Errors.query(Language.get("COMPLIANCE_CONFIRM"), "Compliance", (c) => (c && this.confirmPublish()));

	}

	protected confirmPublish(): void {

		Pages.pages["preload"].show();
		var data = this.view.serialize();
		data["token"] = $config.key;

		new HTTP.POST("/upload/publish/" + this.id, (scope:HTTP.Request):void => {

			this.handlePublish(scope);

		}, function(scope:HTTP.Request) {

			try {
				var message = JSON.parse(scope.xml.responseText).message;
			} catch (e) {
				var message = "No description available, error " + scope.xml.status;
			}

			Errors.push(
				"PUBLISH-FAIL",
				"Failed to publish track. " + message,
				true);
			Pages.pages["preload"].hide();

		}).send(data, "application/x-www-form-urlencoded");

	}

	protected handlePublish(scope:HTTP.Request):void {

		var data = JSON.parse(scope.xml.responseText);
		if(data.message != null) {

			Errors.push(
				"",
				data.message,
				true,
				() => {
					Pages.show("uploadList");
					Errors.dismiss();
				}, 
				"Information");			

		} else
			Pages.show("uploadList");


	}

	protected remove():void {

		var test = confirm("Are you absolutely sure you want to delete this track?");
		if(!test) return;

		Pages.pages["preload"].show();

		new HTTP.POST("/upload/delete/" + this.id, () => Pages.show("uploadList"), () => false).
			send({token: $config.key}, "application/x-www-form-urlencoded");		

	}

}

class UploadView extends View {

	constructor() {

		super("Upload");

		this.nullBind("override_bitrate", "override-bitrate");
		this.nullBind("override_compressor", "override-compressor");
		this.nullBind("upload_library", "upload-library");

		this.bind("progress", "song-upload-progress", false);
		this.bind("status", "song-upload-status", false);

		this.bind("file", "song-upload-main", false);

	}

}

class UploadPage implements IPage {

	protected view:UploadView = new UploadView();

	constructor():void {
		this.view.listen("file", "change", (event:Event) => this.selectFile(event.target.files[0]));
	}

	open():void {
		this.view.element("file").disabled = false;
	}

	close():void {

	}

	protected selectFile(file:File):void {
		Utilities.Audio.readTags(file, (tags) => this.metadata(file, tags));
	}

	protected metadata(file:File, tags:any) {

		if(tags === undefined)
			return Errors.push(
				"META-FAIL",
				"Provided track has no metadata (ID3 tags). This is usually the sign of a bad file.\nTry again ",
				false);

		this.view.element("file").disabled = "disabled";

		GlobalLibrary.match(tags, (result:any) => {

			if(result == null){
			
				if(!confirm("I couldn't find this song in any big databases, so it will have to be moderated. Continue?"))
					return this.abort();

				result = {
					id: -1,
					cacheID: -1,
					external_id: -1,
					title: tags.title,
					artist: [tags.artist],
					album: [tags.album],
					explicit: 1
				};

			}

			if(result.exists && !confirm("This already seems to exist on the system! Do you really want to (re-)upload it?"))
				return this.abort();

			if(result.explicit && !confirm("This song might be explicit. Are you sure it's safe to upload?"))
				return this.abort();

			this.upload(file, result);

		});

	}

	protected abort() {

		this.view.element("file").disabled = false;

	}

	protected upload(file:File, result:object) {

		var u = new HTTP.Upload(
			"/upload/",
			(data:Object) => this.uploadDone(data),
			(percent:number, message:string) => this.uploadProgress(percent, message),
			(e:Error) => this.uploadError(e));


		var fd = new FormData();

		fd.append("cache_id", result.cacheID);

		// For overrides, just in case nerve_id is -1.
		fd.append("title", result.title);
		fd.append("artist", result.artist);
		fd.append("album", result.album);

		fd.append("override_bitrate", this.view.get("override_bitrate"));
		fd.append("override_compressor", this.view.get("override_compressor"));
		fd.append("upload_library", this.view.get("upload_library"));

		fd.append("file", file);

		u.send(fd, file);

	}

	protected uploadDone(data:Object) {

		// data.success

	}

	protected uploadProgress(percent:number, message:string) {

		this.view.element("progress").style.width = (percent / 2) + "%";

		if(message != null)
			this.view.set("status", message);

	}

	protected uploadError(e:Error) {

	}

}

class UploadCopyView extends View {

	constructor() {

		super("UploadCopy");
		this.bind("search-action", "screen-upload-copy-search");
		this.bind("search-text", "screen-upload-copy-query");

		this.bind("table", "screen-upload-copy-list");

	}

}


class UploadCopyPage extends ListPage {

	view:UploadCopyView = new UploadCopyView();
	tracks:object = [];


	constructor():void {
		this.view.listen("search-action", "click", (event:Event) => this.search(this.view.get("search-text")));
	}

	public open(data):void {

	}
	public search(query:string):void {

		console.log("Searching for ", query);
		var page = 0, count = 50;
		var req = new HTTP.GET("/migrate/search/?query=" + escape(query) + "&page=" + page + "&count=" + count,
				(scope:HTTP.Request):void => {

			// Yay. We have the data.
			this.tracks = [];
			var data = JSON.parse(scope.xml.responseText);
			for(var i in data) {
				var track = new Track(data[i]);
				track.cart_id = data[i].cart_id;
				this.tracks.push(track);
			}

			this.load(this);

		}, function(scope:HTTP.Request) {

			Errors.push(
				"LOAD-FAIL",
				"Failed to load listings. Server returned " + scope.xml.status,
				true);

		});

	}	

	protected load(scope:Collection) {

		var table = this.view.element("table"); //document.getElementById("screen-upload-copy-list");
		var list = [];

		for(var i in scope.tracks) {

			var track = scope.tracks[i];

			list.push({
				track: track,
				message: [track.cart_id],
				click: true });
	
		}

		this.draw(table, list);

	}

	protected click(track:Track) {

		Pages.show("uploadSong2", { track: track });

	}

}

class Upload2View extends View {

	constructor() {

		super("Upload2");

		this.nullBind("override_bitrate", "override-bitrate2");
		this.nullBind("override_compressor", "override-compressor2");
		this.nullBind("upload_library", "upload-library2");

		this.bind("progress", "song-upload2-progress", false);
		this.bind("status", "song-upload2-status", false);

		this.bind("button", "upload-big-button", false);

	}

}

class Upload2Page extends UploadPage {

	view:Upload2View = new Upload2View();
	uploading:boolean = false;

	constructor() {
		this.view.listen("button", "click", (event:Event) => this.go());
	}

	open(data:object): void {

		this.uploading = false;
		var track = this.track = data.track;
		if(!track) {
			throw new Exception("SHIT");
			Errors.push;
		}

		this.view.set("status", this.track.title + " - " + this.track.artist + "; ready for upload");

	}

	abort() {
		Pages.show("uploadCopy");
	}

	go():void {

		if(this.uploading)
			return;
		var track = this.track;

		// We only care if it exists to be honest
		var data = {
			title: track.title,
			artist: track.artist,
			album: track.album
		}
		GlobalLibrary.match(data, (result:any) => {

			if(result.exists && !confirm("This already seems to exist on the system! Do you really want to (re-)upload it?"))
				return this.abort();

			if(result.explicit && !confirm("This song might be explicit. Are you sure it's safe to upload?"))
				return this.abort();

			this.upload(null, this.track.cart_id);

		});

	}

	protected upload(file:File, cart_id:number) {

		this.uploading = true;
		var u = new HTTP.Upload(
			"/upload/migrate/",
			(data:Object) => this.uploadDone(data),
			(percent:number, message:string) => this.uploadProgress(percent, message),
			(e:Error) => this.uploadError(e));

		var fd = new FormData();

		fd.append("cart_id", cart_id);

		fd.append("override_bitrate", this.view.get("override_bitrate"));
		fd.append("override_compressor", this.view.get("override_compressor"));
		fd.append("upload_library", this.view.get("upload_library"));

		u.send(fd, true);

	}

}

class ModerationPage extends ListPage {

	public open(data):void {

		ModerationCollection.instance.load((a) => this.load(a));

	}	

	protected load(scope:Collection) {

		var table = document.getElementById("screen-moderation-list");
		var list = [];

		for(var i in scope.tracks) {

			var track = scope.tracks[i];

			list.push({
				track: track,
				message: [
					track.status == 2 ? "Explicit Lyrics" : "Unusual File",
					track.createdBy.name],
				click: true });
	
		}

		this.draw(table, list);

	}

	protected click(track:Track) {

		Pages.show("moderationView", { track: track });

	}

}

class ModerationViewView extends View {

	constructor() {

		super("ModerationView");

		this.bind("title", "mv-title");
		this.bind("artist", "mv-artist");
		this.bind("lyrics", "mv-lyrics");
		this.bind("end_type", "mv-extro");

		this.bind("metadata", "mv-extra");

		this.bind("approve", "mv-approve");
		this.bind("reject", "mv-reject");
		this.bind("edit", "mv-edit");
		this.bind("delete", "mv-delete");
		this.bind("download", "mv-download");

		this.bind("lyrics-caption", "mv-lyrics-caption");

	}

}

class ModerationViewPage implements IPage {

	protected player:Deck = new Deck(document.getElementById("screen-mv-deck"));
	protected view:ModerationViewView = new ModerationViewView();

	protected id:number;
	private types:string[] = ["intro", "hook", "extro"];

	constructor() {

		this.view.listen("reject", "click", (e:Event) => {
			this.reject();
		});

		this.view.listen("approve", "click", (e:Event) => {
			this.approve();
		});

		this.view.listen("edit", "click", (e:Event) => this.edit());
		this.view.listen("delete", "click", (e:Event) => this.remove());

		this.view.listen("download", "click", (e:Event) => this.download());

	}

	open(data:any):void {

		Pages.pages["preload"].show();
		this.id = data.track.id;
		Track.load(data.track.id, (track:Track) => this.load(track));

	}

	load(track:Track):void {

		this.track = track;
		Pages.pages["preload"].hide();
		this.view.set("title", track.title);
		this.view.set("artist", track.artist);

		track.getArtistPurity((explicit:boolean) => {
			if(explicit)
				this.view.set("metadata", "Other tracks by this artist may be explicit.");
		})

		this.view.set("lyrics", "");
		console.log(track);

		track.getLyrics((lyrics:string|boolean) => {

			if(lyrics == false)
				lyrics = "No lyric data available.";

			this.view.set("lyrics", lyrics);
			var lyrics = this.view.get("lyrics", true);
			lyrics = Utilities.Track.getExplicits(lyrics);

			this.view.set("lyrics", lyrics[0], true);
			this.view.set("lyrics-caption", "Lyrics (" + lyrics[1] + 
				" flagged word" + (lyrics[1] != 1 ? "s":"") + "):");

		});

		this.view.element("approve").disabled = false;
		this.view.element("reject").disabled = false;
		this.player.load(track, null, true);
		document.documentElement.addEventListener("keydown", this.listener = (e) => this.keyPressListener(e));
		setTimeout(() => this.fillMarkers(), 1);

	}

	set(key:string, value:number) {

		var type = this.types.indexOf(key.split("_")[0]);

		if(type == -1)
			throw new Error("Can't set " + key + " as there's no such property");

		var segment = this.player.waveform.segments.getSegments()[type];
		segment[key.split("_")[1] + "Time"] = value;

		this.player.waveform.waveform.segments.updateSegments();

	}
	fillMarkers():void {

		console.log(this.player, this.player.waveform);
		var waveform = this.player.waveform;
		if(!waveform.waveform.origWaveformData ||
				!waveform.waveform.origWaveformData.adapter.data.buffer.byteLength ||
				!waveform.player.getDuration())
			return setTimeout(() => this.fillMarkers(), 100);

		Pages.pages["preload"].hide();

		console.log("Setting markers");

		for(var t = 0; t < this.types.length * 2; t++) {
			var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
			if(this.track[type] != null)
				this.set(type, this.track[type]);
		}

	}

	protected keyPressListener(e):void {

		console.log("Press", document.activeElement, e)
		if(document.activeElement != document.body &&
				document.activeElement != window)
			return;
		if(e.keyCode == 32 || e.charCode == 32) {

			this.player.source.playing() ? this.player.pause() : this.player.play();
			e.preventDefault();
			return false;

		}
	}

	close():void {

		document.documentElement.removeEventListener("keydown", this.listener);
		this.player.eject();

	}

	protected edit(): void {
		Pages.show("uploadEdit", { track: this.track });
	}

	protected download(): void {
		window.open("/audio/get/" + this.id, "_blank");
	}

	protected approve():void {

		this.view.element("approve").disabled = "disabled";
		this.view.element("reject").disabled = "disabled";
		Pages.pages["preload"].show();

		var data = this.view.serialize();
		data["token"] = $config.key;

		this.approved = true;

		new HTTP.POST("/moderation/approve/" + this.id, (scope:HTTP.Request):void => {

			this.handleApprove(scope);

		}, (scope:HTTP.Request) => {

			this.approved = false;
			try {
				var message = JSON.parse(scope.xml.responseText).message;
			} catch (e) {
				var message = "No description available, error " + scope.xml.status;
			}

			Errors.push(
				"APPROVE-FAIL",
				"Couldn't approve track: " + message,
				true);
			Pages.pages["preload"].hide();

		}).send(data, "application/x-www-form-urlencoded");

	}

	protected handleApprove(scope:HTTP.Request):void {

		Pages.show("moderation");

	}

	protected reject():void {

		// meow
		this.view.element("approve").disabled = "disabled";
		this.view.element("reject").disabled = "disabled";

		var data = this.view.serialize();
		data["token"] = $config.key;

		new HTTP.POST("/moderation/reject/" + this.id, (scope:HTTP.Request):void => {

			Pages.show("moderation");

		}, (scope:HTTP.Request) => {

			this.approved = false;
			try {
				var message = JSON.parse(scope.xml.responseText).message;
			} catch (e) {
				var message = "No description available, error " + scope.xml.status;
			}

			Errors.push(
				"REJECT-FAIL",
				"Couldn't reject track: " + message,
				true);
			Pages.pages["preload"].hide();

		}).send(data, "application/x-www-form-urlencoded");

	}

	protected remove():void {

		var test = confirm("Are you absolutely sure you want to delete this track?");
		if(!test) return;

		Pages.pages["preload"].show();

		new HTTP.POST("/upload/delete/" + this.id, () => Pages.show("uploadList"), () => Errors.push("DELETE_FAIL", "Delete failed")).
			send({token: $config.key}, "application/x-www-form-urlencoded");		

	}

}

class Pages {

	// Incoming super scary typedef
	static pages:{[id: string] : Page} = {
		preload: new Page(document.getElementById("screen-load"), null),
		upload: new Page(document.getElementById("screen-upload"), document.getElementById("sidebar-upload")),

		uploadSong: new Page(document.getElementById("screen-upload-song"), document.getElementById("sidebar-upload"), "upload", new UploadPage()),
		uploadSweeper: new Page(document.getElementById("screen-upload-sweeper"), document.getElementById("sidebar-upload"), "upload"),
		uploadList: new Page(document.getElementById("screen-upload-list"), document.getElementById("sidebar-upload"), "upload", new UploadListPage()),

		uploadEdit: new Page(document.getElementById("screen-edit"), document.getElementById("sidebar-upload"), "upload", new EditPage()),

		uploadCopy: new Page(document.getElementById("screen-upload-copy"), document.getElementById("sidebar-upload"), "upload", new UploadCopyPage()),
		uploadSong2: new Page(document.getElementById("screen-upload2-song"), document.getElementById("sidebar-upload"), "upload", new Upload2Page()),

		//libraryEdit: new Page(document.getElementById("screen-edit"), document.getElementById("sidebar-edit"), "library"),

		moderation: new Page(document.getElementById("screen-moderation"), document.getElementById("sidebar-moderation"), null, new ModerationPage()),
		moderationView: new Page(document.getElementById("screen-moderation-view"), document.getElementById("sidebar-moderation"), "moderation", new ModerationViewPage()),
		//moderationEdit: new Page(document.getElementById("screen-moderation-track"), null, "moderation")
	};

	static menu = document.querySelector("#sidebar .menu");
	static currentPage = null;
	static buttons = [];

	static show(pageName, parameter:any = null, noState:boolean = false){

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

		if(!noState)
			history.pushState({ pageName: pageName, parameter: parameter }, window.title, "#");

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

		window.addEventListener("popstate", function(event) {

			var data = event.state;
			Pages.show(data.pageName, data.parameter, true);

		});

	}

}


window.addEventListener("load", function() {

	window.app = new App();


	GlobalLibrary.search({ title: "Bring Me To Life", artist: "Evanescence" }, (result) => {

		console.log("Result! ", result);

	});

});