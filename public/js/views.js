var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ListPage = (function () {
    function ListPage() {
    }
    ListPage.prototype.constuctor = function () { };
    ;
    ListPage.prototype.open = function (data) {
        var _this = this;
        console.log(UploadCollection.instance);
        UploadCollection.instance.load(function (a) { return _this.load(a); });
    };
    ListPage.prototype.load = function (scope) {
        var list = [];
        for (var i in scope.tracks) {
            var track = scope.tracks[i];
            list.push({
                track: track,
                message: "",
                click: true });
        }
        this.draw(table, list);
    };
    ListPage.prototype.click = function (track) {
        Pages.show("uploadEdit", { track: track });
    };
    ListPage.prototype.draw = function (table, tracks) {
        var _this = this;
        table.innerHTML = "";
        for (var i in tracks) {
            var track = tracks[i].track;
            var htmlRow = document.createElement("tr");
            htmlRow.insertCell(0).textContent = "";
            htmlRow.insertCell(1).textContent = track.title;
            htmlRow.insertCell(2).textContent = track.artist;
            htmlRow.insertCell(3).textContent = track.uploadDate.toLocaleDateString() + " " +
                track.uploadDate.toLocaleTimeString();
            htmlRow.insertCell(4).textContent = tracks[i].message;
            htmlRow.insertCell(5);
            htmlRow["track"] = track;
            if (tracks[i].click) {
                htmlRow.className = "hand ";
                htmlRow.onclick = function () {
                    _this.click(this["track"]);
                };
            }
            for (var className in tracks[i].classList) {
                htmlRow.classList.add(tracks[i].classList[className]);
            }
            table.appendChild(htmlRow);
        }
    };
    ListPage.prototype.close = function () {
    };
    return ListPage;
}());
var UploadListPage = (function (_super) {
    __extends(UploadListPage, _super);
    function UploadListPage() {
        _super.apply(this, arguments);
    }
    UploadListPage.prototype.load = function (scope) {
        var tableA = document.getElementById("screen-upload-list-alert");
        var tableB = document.getElementById("screen-upload-list-all");
        var a = [], b = [];
        for (var i in scope.tracks) {
            var track = scope.tracks[i];
            if (track.status < 3)
                a.push({
                    track: track,
                    message: track.status == 3 ? "Sent back" : "Metadata",
                    click: true });
            console.log(track.status);
            b.push({
                track: track,
                message: track.status == 2 ? "Rejected" : (track.approved ? "Yes" : "Not yet"),
                click: track.status <= 2 || track.status == 10,
                classList: ["status-" + track.status] });
        }
        this.draw(tableA, a);
        this.draw(tableB, b);
    };
    return UploadListPage;
}(ListPage));
var EditView = (function (_super) {
    __extends(EditView, _super);
    function EditView() {
        var _this = this;
        _super.call(this, "Edit");
        this.bind("title", "edit-title");
        this.bind("artist", "edit-artist");
        this.bind("lyrics", "edit-lyrics", false);
        this.bind("end_type", "edit-extro");
        this.bind("intro_start", "edit00-text", true, "-00:00");
        this.bind("intro_end", "edit01-text", true, "-00:00");
        this.bind("hook_start", "edit10-text", true, "-00:00");
        this.bind("hook_end", "edit11-text", true, "-00:00");
        this.bind("extro_start", "edit20-text", true, "-00:00");
        ["intro_start", "intro_end", "hook_start", "hook_end", "extro_start"].
            forEach(function (e) { return _this.serializeHook(e, function (s) { return _this.onSerialize(s); }); });
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
    EditView.prototype.onSerialize = function (s) {
        var t = s.split(":");
        return parseInt(t[0]) * 60 + parseFloat(t[1]);
    };
    return EditView;
}(SerializeView));
var EditPage = (function () {
    function EditPage() {
        var _this = this;
        this.player = new Deck(document.getElementById("screen-edit-deck"));
        this.view = new EditView();
        this.types = ["intro", "hook", "extro"];
        this.view.listen("intro_start_btn", "click", function (e) { return _this.handleClick(e); });
        this.view.listen("intro_end_btn", "click", function (e) { return _this.handleClick(e); });
        this.view.listen("hook_start_btn", "click", function (e) { return _this.handleClick(e); });
        this.view.listen("hook_end_btn", "click", function (e) { return _this.handleClick(e); });
        this.view.listen("extro_start_btn", "click", function (e) { return _this.handleClick(e); });
        this.view.listen("save", "click", function (e) {
            _this.save();
        });
        this.view.listen("save-publish", "click", function (e) {
            _this.saved == 2 ? _this.publish() : _this.save();
        });
        this.view.listen("delete", "click", function (e) { return _this.remove(); });
        this.view.listen(true, true, function (e) { return _this.handleChange(e); });
    }
    EditPage.prototype.open = function (data) {
        var _this = this;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        Pages.pages["preload"].show();
        this.id = data.track.id;
        this.view.reset();
        Track.load(data.track.id, function (track) { return _this.load(track); });
    };
    EditPage.prototype.load = function (track) {
        var _this = this;
        //Pages.pages["preload"].hide();
        this.track = track;
        this.view.set("title", track.title);
        this.view.set("artist", track.artist);
        this.view.set("lyrics", "");
        console.log(track);
        console.log(track.extro_start);
        if (track.extro_start != 0 && track.extro_start != null) {
            this.saved = 1;
            this.handleSave();
        }
        else {
            //			this.view.element("save-publish").disabled = "disabled";
            this.view.element("save-publish").querySelector("i").className = "fa fa-floppy-o";
        }
        track.getLyrics(function (lyrics) {
            if (lyrics == false)
                lyrics = "No lyric data available.";
            _this.view.set("lyrics", lyrics);
            var lyrics = _this.view.get("lyrics", true);
            lyrics = Utilities.Track.getExplicits(lyrics);
            _this.view.set("lyrics", lyrics[0], true);
            _this.view.set("lyrics-caption", "Lyrics (" + lyrics[1] +
                " flagged word" + (lyrics[1] != 1 ? "s" : "") + "):");
        });
        this.player.load(track);
        setTimeout(function () { return _this.addPlayerListeners(); }, 2);
    };
    EditPage.prototype.set = function (key, value) {
        this.view.set(key, Utilities.Date.formatTime(value, true));
        var type = this.types.indexOf(key.split("_")[0]);
        if (type == -1)
            throw new Error("Can't set " + key + " as there's no such property");
        var segment = this.player.waveform.segments.getSegments()[type];
        segment[key.split("_")[1] + "Time"] = value;
        this.player.waveform.waveform.segments.updateSegments();
    };
    EditPage.prototype.fillMarkers = function () {
        var _this = this;
        var waveform = this.player.waveform;
        if (!waveform.waveform.origWaveformData ||
            !waveform.waveform.origWaveformData.adapter.data.buffer.byteLength ||
            !waveform.player.getDuration())
            return setTimeout(function () { return _this.fillMarkers(); }, 100);
        Pages.pages["preload"].hide();
        console.log("Setting markers");
        for (var t = 0; t < this.types.length * 2; t++) {
            var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
            if (this.track[type] != null)
                this.set(type, this.track[type]);
        }
        this.view.set("end_type", this.track.endType);
        console.log(this.track);
        if (this.track.extro_start == 0 || this.track.extro_start == null)
            this.calculateExtro();
    };
    EditPage.prototype.calculateExtro = function () {
        var waveform = this.player.waveform;
        var buffer = waveform.waveform.origWaveformData.adapter.data.buffer.slice(0);
        var extroTime = Utilities.Audio.getExtro(buffer, waveform.player.getDuration());
        this.set("extro_start", extroTime);
    };
    EditPage.prototype.addPlayerListeners = function () {
        var _this = this;
        this.player.waveform.on('segments.dragged', function (segment) {
            var id = parseInt(segment.id.substr(7));
            _this.handleChange(null);
            _this.set(_this.types[id] + "_start", segment.startTime);
            // Don't set the finish for extro - it doesn't actually do anything
            if (id == 2)
                return; // this.set("extro_start", segment.endTime - segment.startTime);
            _this.set(_this.types[id] + "_end", segment.endTime);
        });
        console.log("Adding listener");
        document.documentElement.addEventListener("keydown", this.listener = function (e) { return _this.keyPressListener(e); });
        this.fillMarkers();
    };
    EditPage.prototype.handleClick = function (e) {
        var target = e.targetName.split("_", 2).join("_");
        this.set(target, this.player.waveform.time.getCurrentTime());
        this.handleChange(e);
    };
    EditPage.prototype.handleChange = function (e) {
        this.saved = 0;
        this.view.element("save").disabled = "";
        this.view.element("save-publish").disabled = "";
        this.view.element("save-publish").querySelector("i").className = "fa fa-floppy-o";
    };
    EditPage.prototype.keyPressListener = function (e) {
        if (document.activeElement != document.body &&
            document.activeElement != window)
            return;
        if (e.keyCode == 32 || e.charCode == 32) {
            this.player.source.playing() ? this.player.pause() : this.player.play();
            e.preventDefault();
            return false;
        }
    };
    EditPage.prototype.close = function () {
        console.log("Removing listener");
        document.documentElement.removeEventListener("keydown", this.listener);
        this.player.eject();
    };
    EditPage.prototype.save = function () {
        var _this = this;
        this.view.element("save").disabled = "disabled";
        Pages.pages["preload"].show();
        var data = this.view.serialize();
        data["token"] = $config.key;
        this.saved = 1;
        new HTTP.POST("/upload/save/" + this.id, function (scope) {
            _this.handleSave(scope);
        }, function (scope) {
            try {
                var message = JSON.parse(scope.xml.responseText).message;
            }
            catch (e) {
                var message = "No description available, error " + scope.xml.status;
            }
            Errors.push("SAVE-FAIL", "Couldn't save: " + message, true);
            Pages.pages["preload"].hide();
        }).send(data, "application/x-www-form-urlencoded");
    };
    EditPage.prototype.handleSave = function (scope) {
        Pages.pages["preload"].hide();
        if (this.saved != 1)
            return;
        this.saved = 2;
        this.view.element("save-publish").querySelector("i").className = "fa fa-upload";
        this.view.element("save-publish").disabled = "";
    };
    EditPage.prototype.publish = function () {
        var _this = this;
        Errors.query(Language.get("COMPLIANCE_CONFIRM"), "Compliance", function (c) { return (c && _this.confirmPublish()); });
    };
    EditPage.prototype.confirmPublish = function () {
        var _this = this;
        Pages.pages["preload"].show();
        var data = this.view.serialize();
        data["token"] = $config.key;
        new HTTP.POST("/upload/publish/" + this.id, function (scope) {
            _this.handlePublish(scope);
        }, function (scope) {
            try {
                var message = JSON.parse(scope.xml.responseText).message;
            }
            catch (e) {
                var message = "No description available, error " + scope.xml.status;
            }
            Errors.push("PUBLISH-FAIL", "Failed to publish track. " + message, true);
            Pages.pages["preload"].hide();
        }).send(data, "application/x-www-form-urlencoded");
    };
    EditPage.prototype.handlePublish = function (scope) {
        var data = JSON.parse(scope.xml.responseText);
        if (data.message != null) {
            Errors.push("", data.message, true, function () {
                Pages.show("uploadList");
                Errors.dismiss();
            }, "Information");
        }
        else
            Pages.show("uploadList");
    };
    EditPage.prototype.remove = function () {
        var test = confirm("Are you absolutely sure you want to delete this track?");
        if (!test)
            return;
        Pages.pages["preload"].show();
        new HTTP.POST("/upload/delete/" + this.id, function () { return Pages.show("uploadList"); }, function () { return false; }).
            send({ token: $config.key }, "application/x-www-form-urlencoded");
    };
    return EditPage;
}());
var UploadView = (function (_super) {
    __extends(UploadView, _super);
    function UploadView() {
        _super.call(this, "Upload");
        this.nullBind("override_bitrate", "override-bitrate");
        this.nullBind("override_compressor", "override-compressor");
        this.nullBind("upload_library", "upload-library");
        this.bind("progress", "song-upload-progress", false);
        this.bind("status", "song-upload-status", false);
        this.bind("file", "song-upload-main", false);
    }
    return UploadView;
}(View));
var UploadPage = (function () {
    function UploadPage() {
        var _this = this;
        this.view = new UploadView();
        this.view.listen("file", "change", function (event) { return _this.selectFile(event.target.files[0]); });
    }
    UploadPage.prototype.open = function () {
        this.view.element("file").disabled = false;
    };
    UploadPage.prototype.close = function () {
    };
    UploadPage.prototype.selectFile = function (file) {
        var _this = this;
        Utilities.Audio.readTags(file, function (tags) { return _this.metadata(file, tags); });
    };
    UploadPage.prototype.metadata = function (file, tags) {
        var _this = this;
        if (tags === undefined)
            return Errors.push("META-FAIL", "Provided track has no metadata (ID3 tags). This is usually the sign of a bad file.\nTry again ", false);
        this.view.element("file").disabled = "disabled";
        GlobalLibrary.match(tags, function (result) {
            if (result == null) {
                if (!confirm("I couldn't find this song in any big databases, so it will have to be moderated. Continue?"))
                    return _this.abort();
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
            if (result.exists && !confirm("This already seems to exist on the system! Do you really want to (re-)upload it?"))
                return _this.abort();
            if (result.explicit && !confirm("This song might be explicit. Are you sure it's safe to upload?"))
                return _this.abort();
            _this.upload(file, result);
        });
    };
    UploadPage.prototype.abort = function () {
        this.view.element("file").disabled = false;
    };
    UploadPage.prototype.upload = function (file, result) {
        var _this = this;
        var u = new HTTP.Upload("/upload/", function (data) { return _this.uploadDone(data); }, function (percent, message) { return _this.uploadProgress(percent, message); }, function (e) { return _this.uploadError(e); });
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
    };
    UploadPage.prototype.uploadDone = function (data) {
        // data.success
    };
    UploadPage.prototype.uploadProgress = function (percent, message) {
        this.view.element("progress").style.width = (percent / 2) + "%";
        if (message != null)
            this.view.set("status", message);
    };
    UploadPage.prototype.uploadError = function (e) {
    };
    return UploadPage;
}());
var UploadCopyView = (function (_super) {
    __extends(UploadCopyView, _super);
    function UploadCopyView() {
        _super.call(this, "UploadCopy");
        this.bind("search-action", "screen-upload-copy-search");
        this.bind("search-text", "screen-upload-copy-query");
        this.bind("table", "screen-upload-copy-list");
    }
    return UploadCopyView;
}(View));
var UploadCopyPage = (function (_super) {
    __extends(UploadCopyPage, _super);
    function UploadCopyPage() {
        var _this = this;
        this.view = new UploadCopyView();
        this.tracks = [];
        this.view.listen("search-action", "click", function (event) { return _this.search(_this.view.get("search-text")); });
    }
    UploadCopyPage.prototype.open = function (data) {
    };
    UploadCopyPage.prototype.search = function (query) {
        var _this = this;
        console.log("Searching for ", query);
        var page = 0, count = 50;
        var req = new HTTP.GET("/migrate/search/?query=" + escape(query) + "&page=" + page + "&count=" + count, function (scope) {
            // Yay. We have the data.
            _this.tracks = [];
            var data = JSON.parse(scope.xml.responseText);
            for (var i in data) {
                var track = new Track(data[i]);
                track.cart_id = data[i].cart_id;
                _this.tracks.push(track);
            }
            _this.load(_this);
        }, function (scope) {
            Errors.push("LOAD-FAIL", "Failed to load listings. Server returned " + scope.xml.status, true);
        });
    };
    UploadCopyPage.prototype.load = function (scope) {
        var table = this.view.element("table"); //document.getElementById("screen-upload-copy-list");
        var list = [];
        for (var i in scope.tracks) {
            var track = scope.tracks[i];
            list.push({
                track: track,
                message: track.cart_id,
                click: true });
        }
        this.draw(table, list);
    };
    UploadCopyPage.prototype.click = function (track) {
        Pages.show("uploadSong2", { track: track });
    };
    return UploadCopyPage;
}(ListPage));
var Upload2View = (function (_super) {
    __extends(Upload2View, _super);
    function Upload2View() {
        _super.call(this, "Upload2");
        this.nullBind("override_bitrate", "override-bitrate2");
        this.nullBind("override_compressor", "override-compressor2");
        this.nullBind("upload_library", "upload-library2");
        this.bind("progress", "song-upload2-progress", false);
        this.bind("status", "song-upload2-status", false);
        this.bind("button", "upload-big-button", false);
    }
    return Upload2View;
}(View));
var Upload2Page = (function (_super) {
    __extends(Upload2Page, _super);
    function Upload2Page() {
        var _this = this;
        this.view = new Upload2View();
        this.uploading = false;
        this.view.listen("button", "click", function (event) { return _this.go(); });
    }
    Upload2Page.prototype.open = function (data) {
        this.uploading = false;
        var track = this.track = data.track;
        if (!track) {
            throw new Exception("SHIT");
            Errors.push;
        }
        this.view.set("status", this.track.title + " - " + this.track.artist + "; ready for upload");
    };
    Upload2Page.prototype.abort = function () {
        Pages.show("uploadCopy");
    };
    Upload2Page.prototype.go = function () {
        var _this = this;
        if (this.uploading)
            return;
        var track = this.track;
        // We only care if it exists to be honest
        var data = {
            title: track.title,
            artist: track.artist,
            album: track.album
        };
        GlobalLibrary.match(data, function (result) {
            if (result.exists && !confirm("This already seems to exist on the system! Do you really want to (re-)upload it?"))
                return _this.abort();
            if (result.explicit && !confirm("This song might be explicit. Are you sure it's safe to upload?"))
                return _this.abort();
            _this.upload(null, _this.track.cart_id);
        });
    };
    Upload2Page.prototype.upload = function (file, cart_id) {
        var _this = this;
        this.uploading = true;
        var u = new HTTP.Upload("/upload/migrate/", function (data) { return _this.uploadDone(data); }, function (percent, message) { return _this.uploadProgress(percent, message); }, function (e) { return _this.uploadError(e); });
        var fd = new FormData();
        fd.append("cart_id", cart_id);
        fd.append("override_bitrate", this.view.get("override_bitrate"));
        fd.append("override_compressor", this.view.get("override_compressor"));
        fd.append("upload_library", this.view.get("upload_library"));
        u.send(fd, true);
    };
    return Upload2Page;
}(UploadPage));
var ModerationPage = (function (_super) {
    __extends(ModerationPage, _super);
    function ModerationPage() {
        _super.apply(this, arguments);
    }
    ModerationPage.prototype.open = function (data) {
        var _this = this;
        ModerationCollection.instance.load(function (a) { return _this.load(a); });
    };
    ModerationPage.prototype.load = function (scope) {
        var table = document.getElementById("screen-moderation-list");
        var list = [];
        for (var i in scope.tracks) {
            var track = scope.tracks[i];
            list.push({
                track: track,
                message: track.status == 2 ? "Explicit Lyrics" : "Unusual File",
                click: true });
        }
        this.draw(table, list);
    };
    ModerationPage.prototype.click = function (track) {
        Pages.show("moderationView", { track: track });
    };
    return ModerationPage;
}(ListPage));
var ModerationViewView = (function (_super) {
    __extends(ModerationViewView, _super);
    function ModerationViewView() {
        _super.call(this, "ModerationView");
        this.bind("title", "mv-title");
        this.bind("artist", "mv-artist");
        this.bind("lyrics", "mv-lyrics");
        this.bind("end_type", "mv-extro");
        this.bind("approve", "mv-approve");
        this.bind("reject", "mv-reject");
        this.bind("edit", "mv-edit");
        this.bind("delete", "mv-delete");
        this.bind("download", "mv-download");
        this.bind("lyrics-caption", "mv-lyrics-caption");
    }
    return ModerationViewView;
}(View));
var ModerationViewPage = (function () {
    function ModerationViewPage() {
        var _this = this;
        this.player = new Deck(document.getElementById("screen-mv-deck"));
        this.view = new ModerationViewView();
        this.types = ["intro", "hook", "extro"];
        this.view.listen("reject", "click", function (e) {
            _this.reject();
        });
        this.view.listen("approve", "click", function (e) {
            _this.approve();
        });
        this.view.listen("edit", "click", function (e) { return _this.edit(); });
        this.view.listen("delete", "click", function (e) { return _this.remove(); });
        this.view.listen("download", "click", function (e) { return _this.download(); });
    }
    ModerationViewPage.prototype.open = function (data) {
        var _this = this;
        Pages.pages["preload"].show();
        this.id = data.track.id;
        Track.load(data.track.id, function (track) { return _this.load(track); });
    };
    ModerationViewPage.prototype.load = function (track) {
        var _this = this;
        this.track = track;
        Pages.pages["preload"].hide();
        this.view.set("title", track.title);
        this.view.set("artist", track.artist);
        this.view.set("lyrics", "");
        console.log(track);
        track.getLyrics(function (lyrics) {
            if (lyrics == false)
                lyrics = "No lyric data available.";
            _this.view.set("lyrics", lyrics);
            var lyrics = _this.view.get("lyrics", true);
            lyrics = Utilities.Track.getExplicits(lyrics);
            _this.view.set("lyrics", lyrics[0], true);
            _this.view.set("lyrics-caption", "Lyrics (" + lyrics[1] +
                " flagged word" + (lyrics[1] != 1 ? "s" : "") + "):");
        });
        this.view.element("approve").disabled = false;
        this.view.element("reject").disabled = false;
        this.player.load(track, null, true);
        document.documentElement.addEventListener("keydown", this.listener = function (e) { return _this.keyPressListener(e); });
        setTimeout(function () { return _this.fillMarkers(); }, 1);
    };
    ModerationViewPage.prototype.set = function (key, value) {
        var type = this.types.indexOf(key.split("_")[0]);
        if (type == -1)
            throw new Error("Can't set " + key + " as there's no such property");
        var segment = this.player.waveform.segments.getSegments()[type];
        segment[key.split("_")[1] + "Time"] = value;
        this.player.waveform.waveform.segments.updateSegments();
    };
    ModerationViewPage.prototype.fillMarkers = function () {
        var _this = this;
        console.log(this.player, this.player.waveform);
        var waveform = this.player.waveform;
        if (!waveform.waveform.origWaveformData ||
            !waveform.waveform.origWaveformData.adapter.data.buffer.byteLength ||
            !waveform.player.getDuration())
            return setTimeout(function () { return _this.fillMarkers(); }, 100);
        Pages.pages["preload"].hide();
        console.log("Setting markers");
        for (var t = 0; t < this.types.length * 2; t++) {
            var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
            if (this.track[type] != null)
                this.set(type, this.track[type]);
        }
    };
    ModerationViewPage.prototype.keyPressListener = function (e) {
        console.log("Press", document.activeElement, e);
        if (document.activeElement != document.body &&
            document.activeElement != window)
            return;
        if (e.keyCode == 32 || e.charCode == 32) {
            this.player.source.playing() ? this.player.pause() : this.player.play();
            e.preventDefault();
            return false;
        }
    };
    ModerationViewPage.prototype.close = function () {
        document.documentElement.removeEventListener("keydown", this.listener);
        this.player.eject();
    };
    ModerationViewPage.prototype.edit = function () {
        Pages.show("uploadEdit", { track: this.track });
    };
    ModerationViewPage.prototype.download = function () {
        window.open("/audio/get/" + this.id, "_blank");
    };
    ModerationViewPage.prototype.approve = function () {
        var _this = this;
        this.view.element("approve").disabled = "disabled";
        this.view.element("reject").disabled = "disabled";
        Pages.pages["preload"].show();
        var data = this.view.serialize();
        data["token"] = $config.key;
        this.approved = true;
        new HTTP.POST("/moderation/approve/" + this.id, function (scope) {
            _this.handleApprove(scope);
        }, function (scope) {
            _this.approved = false;
            try {
                var message = JSON.parse(scope.xml.responseText).message;
            }
            catch (e) {
                var message = "No description available, error " + scope.xml.status;
            }
            Errors.push("APPROVE-FAIL", "Couldn't approve track: " + message, true);
            Pages.pages["preload"].hide();
        }).send(data, "application/x-www-form-urlencoded");
    };
    ModerationViewPage.prototype.handleApprove = function (scope) {
        Pages.show("moderation");
    };
    ModerationViewPage.prototype.reject = function () {
        var _this = this;
        // meow
        this.view.element("approve").disabled = "disabled";
        this.view.element("reject").disabled = "disabled";
        var data = this.view.serialize();
        data["token"] = $config.key;
        new HTTP.POST("/moderation/reject/" + this.id, function (scope) {
            Pages.show("moderation");
        }, function (scope) {
            _this.approved = false;
            try {
                var message = JSON.parse(scope.xml.responseText).message;
            }
            catch (e) {
                var message = "No description available, error " + scope.xml.status;
            }
            Errors.push("REJECT-FAIL", "Couldn't reject track: " + message, true);
            Pages.pages["preload"].hide();
        }).send(data, "application/x-www-form-urlencoded");
    };
    ModerationViewPage.prototype.remove = function () {
        var test = confirm("Are you absolutely sure you want to delete this track?");
        if (!test)
            return;
        Pages.pages["preload"].show();
        new HTTP.POST("/upload/delete/" + this.id, function () { return Pages.show("uploadList"); }, function () { return Errors.push("DELETE_FAIL", "Delete failed"); }).
            send({ key: $config.key }, "application/x-www-form-urlencoded");
    };
    return ModerationViewPage;
}());
var Pages = (function () {
    function Pages() {
    }
    Pages.show = function (pageName, parameter, noState) {
        if (parameter === void 0) { parameter = null; }
        if (noState === void 0) { noState = false; }
        var page = this.pages[pageName];
        for (var i in this.pages) {
            if (this.pages[i] != page) {
                this.pages[i].hide();
            }
        }
        page.show(parameter);
        for (var i in this.buttons) {
            var current = i == pageName || i == page.parent;
            for (var j in this.buttons[i])
                this.buttons[i][j].classList[current ? "add" : "remove"]("current");
        }
        if (!noState)
            history.pushState({ pageName: pageName, parameter: parameter }, window.title, "#");
    };
    // Incoming super scary typedef
    Pages.pages = {
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
    };
    Pages.menu = document.querySelector("#sidebar .menu");
    Pages.currentPage = null;
    Pages.buttons = [];
    return Pages;
}());
var App = (function () {
    function App() {
        this.hook();
        Pages.show("uploadList");
    }
    App.prototype.hook = function () {
        var elements = [].slice.apply(document.querySelectorAll("[data-href]"));
        elements.forEach(function (element) {
            var href = element.dataset.href;
            element.dataset.href2 = href;
            delete element.dataset.href;
            element.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (!Pages.pages[href])
                    throw new Error("Tried to show page " + href + ", but it does not exist.");
                Pages.show(href);
                return false;
            });
            if (!Pages.buttons[href])
                Pages.buttons[href] = [];
            if (!element.dataset.nomenu)
                Pages.buttons[href].push(element);
        });
        window.addEventListener("popstate", function (event) {
            var data = event.state;
            Pages.show(data.pageName, data.parameter, true);
        });
    };
    return App;
}());
window.addEventListener("load", function () {
    window.app = new App();
    GlobalLibrary.search({ title: "Bring Me To Life", artist: "Evanescence" }, function (result) {
        console.log("Result! ", result);
    });
});
