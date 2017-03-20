// This is totally free for you to rip off. See the Nerve LICENSE. Never know, this might prove useful to someone. 
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $config;
var User = (function () {
    function User() {
    }
    return User;
}());
var Page = (function () {
    function Page(element, sidebar, parent, listener) {
        if (parent === void 0) { parent = null; }
        if (listener === void 0) { listener = null; }
        this.element = element;
        this.sidebar = sidebar;
        this.parent = parent;
        this.listener = listener;
        this.visible = false;
        this.noHook = false;
    }
    Page.prototype.show = function (parameter) {
        this.visible = true;
        if (this.listener && !this.noHook)
            this.listener.open(parameter);
        this.element.style.display = "block";
        if (this.sidebar)
            this.sidebar.className = "second-sidebar visible";
    };
    Page.prototype.hide = function () {
        if (this.listener && this.visible && !this.noHook)
            this.listener.close();
        this.element.style.display = "none";
        if (this.sidebar)
            this.sidebar.className = "second-sidebar";
    };
    Page.prototype.postMessage = function (message) {
    };
    return Page;
}());
/**
 * A view is essentially a form that can be made up of multiple (two-way ish binding) inputs that can
 *  then be easily grabbed by using the get method and set the same way.
 */
var View = (function () {
    function View(name) {
        var _this = this;
        this.name = name;
        this.elements = {};
        this.listeners = {};
        this.defaults = {};
        this.changeListener = function (e) { return _this.change(e); };
    }
    View.prototype.destroy = function () {
        for (var i in this.elements) {
            this.elements[i]["hasBinding"] = false;
            this.elements[i].removeEventListener("keyup", this.changeListener);
            this.elements[i].removeEventListener("change", this.changeListener);
        }
        for (var i in this.listeners)
            for (var j in this.listeners[i])
                this.elements[i].removeEventListener(j, this.listeners[i][j], true);
    };
    View.prototype.nullBind = function (name, element, serializable, def) {
        if (serializable === void 0) { serializable = true; }
        if (def === void 0) { def = undefined; }
        if (document.getElementById(element) != null)
            return this.bind(name, element, serializable, def);
        this.elements[name] = null;
    };
    View.prototype.bind = function (name, element, serializable, def) {
        if (serializable === void 0) { serializable = true; }
        if (def === void 0) { def = undefined; }
        if (typeof element == "string")
            element = document.getElementById(element);
        // Cowardly refuse to double-bind on the element if it's on another view. 
        if (element["hasBinding"])
            return false;
        var tag = element.tagName;
        if (tag == "INPUT" && (element.type == "checkbox" || element.type == "radio"))
            tag = "CHECK";
        this.elements[name] = [tag, element];
        element["hasBinding"] = true;
        element["serializable"] = serializable;
        element.addEventListener("keyup", this.changeListener);
        element.addEventListener("change", this.changeListener);
        this.defaults[name] = def;
        return true;
    };
    View.prototype.reset = function () {
        for (var i in this.defaults)
            if (this.defaults[i] !== undefined)
                this.set(i, this.defaults[i]);
    };
    View.prototype.change = function (e) {
        if (typeof this.listeners[true] == "undefined" || !this.listeners[true][true])
            return;
        var target = e.target, targetName;
        for (var i in this.elements) {
            if (this.elements[i][1] == target)
                targetName = i;
        }
        console.log(e, targetName);
        // Not ours?
        if (!targetName)
            return;
        e["element"] = targetName;
        this.listeners[true][true](e);
        this.intChange(targetName);
    };
    // This allows us to do internal stuff without triggering the users change listener
    // for example: setting element classes
    View.prototype.intChange = function (name) {
        var element = this.elements[name][1];
        if (!element)
            return;
        var fnc = this.get(name) == this.defaults[name] ? "add" : "remove";
        element.classList[fnc]("default");
    };
    // We ideally only want one listener, so we need to keep track of them. 
    View.prototype.listen = function (name, event, fnc) {
        // Change handler
        if (name == true) {
            if (!this.listeners[true])
                this.listeners[true] = {};
            this.listeners[true][true] = handler;
            return;
        }
        var handler = function (e) {
            e["targetName"] = name;
            fnc(e);
        };
        if (!this.elements[name])
            throw new Error("Tried to listen to element that doesn't exist on this object");
        if (!this.listeners[name])
            this.listeners[name] = {};
        if (this.listeners[name][event])
            this.elements[name][1].removeEventListener(event, this.listeners[name][event], true);
        this.listeners[name][event] = handler;
        this.elements[name][1].addEventListener(event, handler, true);
    };
    View.prototype.get = function (name, html) {
        if (html === void 0) { html = false; }
        if (!this.elements[name])
            return undefined;
        switch (this.elements[name][0]) {
            case "INPUT":
                return this.elements[name][1].value;
            case "CHECK":
                return this.elements[name][1][html ? "value" : "checked"];
            case "SELECT":
                return this.elements[name][1].value;
            default:
                return this.elements[name][1][html ? "innerHTML" : "textContent"];
        }
    };
    View.prototype.element = function (name) {
        return this.elements[name][1];
    };
    View.prototype.set = function (name, value, html) {
        if (html === void 0) { html = false; }
        if (!this.elements[name])
            return undefined;
        switch (this.elements[name][0]) {
            case "INPUT":
                this.elements[name][1].value = value;
                break;
            case "CHECK":
                this.elements[name][1][html ? "value" : "checked"] = value;
                break;
            case "SELECT":
                var options = this.elements[name][1].options;
                for (var i in options) {
                    if ((html ? options[i].label : options[i].value) == value) {
                        console.log(options[i].index);
                        this.elements[name][1].selectedIndex = options[i].index;
                    }
                }
                break;
            //this.elements[name][1].value = value;
            default:
                if (html)
                    return this.elements[name][1].innerHTML = value;
                this.elements[name][1].textContent = value;
                this.elements[name][1].innerHTML = this.elements[name][1].innerHTML.split("\n").join("<br />\n");
                break;
        }
        this.intChange(name);
    };
    View.prototype.serialize = function () {
        var obj = {};
        for (var i in this.elements)
            if (this.elements[i][1]["serializable"])
                obj[i] = this.get(i);
        return obj;
    };
    return View;
}());
var SerializeView = (function (_super) {
    __extends(SerializeView, _super);
    function SerializeView(name) {
        return _super.call(this, name) || this;
    }
    SerializeView.prototype.serializeHook = function (name, serialize) {
        this.elements[name][1]["serialize"] = serialize;
        return true;
    };
    SerializeView.prototype.serialize = function () {
        var obj = {};
        for (var i in this.elements) {
            var element = this.elements[i][1];
            if (!element["serializable"])
                continue;
            obj[i] = element["serialize"] ? element["serialize"](this.get(i)) : this.get(i);
        }
        return obj;
    };
    return SerializeView;
}(View));
var HTTP;
(function (HTTP) {
    var Request = (function () {
        function Request(url, success, error) {
            var _this = this;
            this.url = url;
            this.success = success;
            this.error = error;
            this.xml = new XMLHttpRequest();
            this.xml.onreadystatechange = function () { return _this.stateChange(); };
        }
        Request.prototype.stateChange = function () {
            if (this.xml.readyState != 4)
                return;
            this.xml.status == 200 ? this.success(this) : this.error(this);
        };
        Request.prototype.open = function () { };
        Request.prototype.send = function (form, contentType) {
            this.xml.open(this.METHOD, this.url, true);
            // This provides space for, say, additional headers
            this.open();
            this.xml.send();
        };
        return Request;
    }());
    HTTP.Request = Request;
    var GET = (function (_super) {
        __extends(GET, _super);
        function GET(url, success, error) {
            var _this = _super.call(this, url, success, error) || this;
            _this.url = url;
            _this.success = success;
            _this.error = error;
            _this.METHOD = "GET";
            _this.send();
            return _this;
        }
        return GET;
    }(Request));
    HTTP.GET = GET;
    var POST = (function (_super) {
        __extends(POST, _super);
        function POST() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.METHOD = "POST";
            return _this;
        }
        POST.prototype.send = function (form, contentType) {
            if (contentType === void 0) { contentType = "application/json"; }
            var data;
            // Depending on the contentType, we should probably properly encode the data.
            switch (contentType) {
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
            if (contentType)
                this.xml.setRequestHeader("Content-Type", contentType);
            this.open();
            this.xml.send(data);
        };
        return POST;
    }(Request));
    HTTP.POST = POST;
    var Upload = (function () {
        function Upload(base, uploadDone, uploadProgress, uploadError) {
            var _this = this;
            this.base = base;
            this.uploadDone = uploadDone;
            this.uploadProgress = uploadProgress;
            this.uploadError = uploadError;
            this.isReady = false;
            var xml = new GET(base + "path/", function (scope) { return _this.ready(scope); }, function (e) { return _this.error(e); });
        }
        Upload.prototype.send = function (form, file) {
            var _this = this;
            this.form = form;
            this.file = file;
            if (!this.isReady)
                return;
            var xml = new POST(this.path + "do/", function (scope) { return _this.done(scope); }, function (e) { return _this.error(e); });
            xml.xml.upload.onprogress = function (e) { return _this.uploadProgress(e.loaded / e.total * 100); };
            if (form == null)
                form = new FormData();
            form.append("file", file);
            xml.send(form, "formData");
        };
        Upload.prototype.ready = function (scope) {
            // We now have the upload location and can be ready
            this.isReady = true;
            this.path = JSON.parse(scope.xml.responseText).path;
            // send() has already been called, but it was too early. Run it again.
            if (this.file)
                this.send(this.form, this.file);
        };
        Upload.prototype.done = function (scope) {
            var token = JSON.parse(scope.xml.responseText).token;
            this.token = token;
            this.getStatus();
        };
        Upload.prototype.getStatus = function () {
            var _this = this;
            var xml = new GET(this.path + "status/" + this.token, function (scope) {
                var data = JSON.parse(scope.xml.responseText);
                _this.uploadProgress(100 + data.percent, data.message);
                if (data.running)
                    setTimeout(function () { return _this.getStatus(); }, 1000);
                else
                    _this.uploadDone(data);
            }, function (e) { return _this.error(e); });
        };
        Upload.prototype.error = function (e) {
            this.uploadError(e);
        };
        return Upload;
    }());
    HTTP.Upload = Upload;
})(HTTP || (HTTP = {}));
var Utilities;
(function (Utilities) {
    var Form = (function () {
        function Form() {
        }
        Form.encode = function (form) {
            var str = [];
            for (var i in form)
                str.push(encodeURIComponent(i) + "=" + encodeURIComponent(form[i]));
            return str.join("&");
        };
        return Form;
    }());
    Utilities.Form = Form;
    var String = (function () {
        function String() {
        }
        String.stripTag = function (tag) {
            return tag.replace(/ *[\(\[][^)]*[\)\]] */g, "");
        };
        return String;
    }());
    Utilities.String = String;
    var Date = (function () {
        function Date() {
        }
        Date.formatTime = function (seconds, ms) {
            var minutes = seconds / 60 | 0;
            seconds = seconds % 60;
            var time = ("00" + minutes).substr(-2) + ":" + ("00" + (seconds | 0)).substr(-2);
            if (ms)
                time += "." + ("00" + Math.floor((seconds * 100) % 100)).substr(-2);
            return time;
        };
        Date.getTime = function (time) {
            var parts = time.split(":");
            return parseInt(parts[0]) + (parseInt(parts[1]) / 100);
        };
        return Date;
    }());
    Utilities.Date = Date;
    var Track = (function () {
        function Track() {
        }
        Track.getExplicits = function (lyrics) {
            var matches = new RegExp("\\b((" + $config.banned_words.join("|") + ")[^\\s\\b,.\<\>]*)\\b", "igm"), match;
            var total = lyrics.match(matches);
            total = total == null ? 0 : total.length;
            lyrics = lyrics.replace(matches, "<b>$1</b>");
            return [lyrics, total];
        };
        return Track;
    }());
    Utilities.Track = Track;
    var Audio = (function () {
        function Audio() {
        }
        Audio.strip = function (result) {
            // Remove any brackets (regular or square) from the ID3
            // Some CD ripping software likes to advertise itself...
            var tags = {};
            if (!result.title || !result.artist)
                return undefined;
            tags.title = Utilities.String.stripTag(result.title);
            tags.artist = Utilities.String.stripTag(result.artist[0]);
            tags.album = Utilities.String.stripTag(result.album);
            return tags;
        };
        Audio.readTags = function (file, callback) {
            var _this = this;
            musicmetadata(file, function (error, result) {
                if (error)
                    return callback(undefined);
                callback(_this.strip(result));
            });
        };
        Audio.lowPass = function (buffer, view, accuracy, start, end) {
            var copy = buffer.slice(0), view2 = new Int8Array(copy);
            // Run a low-pass filter to work out the result.
            for (var i = start; i < end; i++) {
                view[i] = Math.abs(view[i]);
            }
            for (var i = start; i < end; i++) {
                var tmp = view[i];
                for (var j = i - accuracy; j <= i + accuracy; j++) {
                    tmp += view[j];
                }
                view2[i] = (tmp / (accuracy * 2) + 1) | 0;
            }
            return view2;
        };
        Audio.getExtro = function (buffer, duration) {
            var view = new Int8Array(buffer);
            var sampleRate = view.length / duration;
            var threshold1 = 1, threshold2 = 8, threshold3 = 100;
            var accuracy = 0.3; // in seconds - so the higher the number the lower the accuracy
            var avg = 0, max = 0, start = 0, end = 0, time = 30;
            // work out the number of samples to average on either side
            accuracy = Math.floor(sampleRate * accuracy);
            // Run a low-pass filter to get a more average waveform edge
            var view2 = this.lowPass(buffer, view, accuracy, start, end);
            // work out exactly where the audio signal "ends"
            for (var i = view.length; i >= 0; i--) {
                if (view[i] < threshold1)
                    continue;
                start = Math.floor(i - (time * sampleRate));
                end = i;
                break;
            }
            // To find the fade, we go back until the general level stops falling
            // Essentially, if we can find a maximum greater than the average 
            var rising = false; // we're looking backwards so this is good
            var t = 0, u = 0, l = 0, max = 0;
            for (var i = end; i >= start; i--) {
                // Keep going back until we can't get a value bigger than the threshold
                if (view2[i] > max) {
                    max = view2[i] + threshold2;
                    l = i;
                }
                else if (view2[i] < 10) {
                }
                else {
                    t++;
                    if (t > threshold3) {
                        // Got it!
                        return l / sampleRate;
                    }
                }
            }
            // No idea? Return the end, it's our safest bet.
            return end / sampleRate;
        };
        return Audio;
    }());
    Utilities.Audio = Audio;
})(Utilities || (Utilities = {}));
var ErrorView = (function (_super) {
    __extends(ErrorView, _super);
    function ErrorView() {
        var _this = _super.call(this, "Error") || this;
        _this.bind("close", "error-close");
        _this.bind("container", "error-container");
        _this.bind("code", "error-code");
        _this.bind("view", "error-view");
        _this.bind("message", "error-message");
        _this.bind("title", "error-title");
        return _this;
    }
    ErrorView.prototype.show = function () {
        this.element("view").style.display = "block";
    };
    ErrorView.prototype.hide = function () {
        this.element("view").style.display = "none";
    };
    return ErrorView;
}(View));
var QueryView = (function (_super) {
    __extends(QueryView, _super);
    function QueryView() {
        var _this = _super.call(this, "Query") || this;
        _this.bind("go", "confirm-go");
        _this.bind("close", "confirm-close");
        _this.bind("container", "error-container");
        _this.bind("view", "confirm-view");
        _this.bind("message", "confirm-message");
        _this.bind("title", "confirm-title");
        return _this;
    }
    QueryView.prototype.show = function () {
        this.element("view").style.display = "block";
    };
    QueryView.prototype.hide = function () {
        this.element("view").style.display = "none";
    };
    return QueryView;
}(View));
var ErrorPage = (function () {
    function ErrorPage() {
        var _this = this;
        this.errorView = new ErrorView();
        this.queryView = new QueryView();
        this.total = 0;
        this.errorView.listen("close", "click", function () { return _this.click(); });
        this.queryView.listen("go", "click", function () { return _this.click(true); });
        this.queryView.listen("close", "click", function () { return _this.click(false); });
    }
    ErrorPage.prototype.setError = function (error) {
        this.error = error;
        var type = this.error.type;
        if (type == "query")
            this.renderQuery(error);
        else
            this.renderError(error);
    };
    ErrorPage.prototype.setStackDepth = function (total) {
        this.total = total;
        var opacity = total / (total + 1) * 0.8;
        this.errorView.element("container").style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    };
    ErrorPage.prototype.renderError = function (error) {
        this.errorView.set("title", this.error.title);
        this.errorView.set("code", this.error.code);
        this.errorView.set("message", this.error.message);
        this.errorView.show();
        this.queryView.hide();
    };
    ErrorPage.prototype.renderQuery = function (query) {
        this.queryView.set("title", this.error.title);
        this.queryView.set("message", this.error.message);
        this.errorView.hide();
        this.queryView.show();
    };
    ErrorPage.prototype.click = function (result) {
        if (this.error.type == "query") {
            this.error.handler(result);
            this.error.requestClose();
        }
        else
            this.error.handler();
    };
    ErrorPage.prototype.open = function () {
    };
    ErrorPage.prototype.close = function () {
    };
    return ErrorPage;
}());
var Errors = (function () {
    function Errors() {
    }
    Errors.push = function (code, message, fatal, handler, title) {
        var _this = this;
        if (fatal === void 0) { fatal = false; }
        if (handler === void 0) { handler = null; }
        if (title === void 0) { title = null; }
        // Show an error here 
        if (handler == null)
            handler = function () { return _this.dismiss(); };
        if (!title)
            title = fatal ? "Fatal Error" : "Error";
        var error = { type: "error", title: title, code: code, message: message, fatal: fatal, handler: handler };
        this.errors.push(error);
        console.error(error);
        this.page.listener.setStackDepth(this.errors.length);
        this.page.show();
        if (this.page.listener.error == null)
            this.dismiss();
    };
    Errors.query = function (message, title, handler) {
        var _this = this;
        if (handler === void 0) { handler = null; }
        if (handler == null)
            handler = function () { return _this.dismiss(); };
        if (!title)
            title = "Query";
        var query = { type: "query", title: title, message: message, handler: handler, requestClose: function () { return _this.dismiss(); } };
        this.errors.push(query);
        this.page.listener.setStackDepth(this.errors.length);
        this.page.show();
        if (this.page.listener.error == null)
            this.dismiss();
    };
    Errors.dismiss = function () {
        this.page.listener.error = null;
        this.page.listener.setStackDepth(this.errors.length);
        if (this.errors.length == 0)
            this.page.hide();
        else
            this.page.listener.setError(this.errors.shift());
    };
    return Errors;
}());
Errors.page = new Page(document.getElementById("error-container"), null, null, new ErrorPage());
Errors.errors = [];
var Library = (function () {
    function Library() {
    }
    Library.match = function (query, callback) {
        var _this = this;
        var query = "match/?" + Utilities.Form.encode(query);
        new HTTP.GET(this.source + query, function (scope) {
            callback(_this.result(scope));
        }, function (scope) {
            if (scope.xml.status == 404)
                callback(null);
            else
                Errors.push("SEARCH-FAIL", "Failed to search. Server returned " + scope.xml.status, true);
        });
    };
    Library.search = function (query, callback) {
        var _this = this;
        var query = "search/?" + Utilities.Form.encode(query);
        new HTTP.GET(this.source + query, function (scope) {
            callback(_this.result(scope));
        }, function (scope) {
            Errors.push("SEARCH-FAIL", "Failed to search. Server returned " + scope.xml.status, true);
        });
    };
    Library.result = function (scope) {
        var data = JSON.parse(scope.xml.responseText);
        if (Array.isArray(data)) {
            var tracks = [];
            for (var i in data) {
                tracks.push(new this.trackType(data[i]));
                tracks[tracks.length - 1].status = -1;
            }
        }
        else {
            var tracks = new this.trackType(data);
            tracks.status = -1;
        }
        return tracks;
    };
    return Library;
}());
Library.source = null;
Library.trackType = Track;
var ExtendableDataSource = (function () {
    function ExtendableDataSource(ref) {
    }
    ExtendableDataSource.prototype.getExtended = function (callback) {
        var _this = this;
        if (this.extended)
            return callback(this);
        // Load super class so we can get the "source" method, even if it's been extended
        var sc = Object.getPrototypeOf(this).constructor;
        new HTTP.GET(sc.extended + this.id, function (scope) {
            _this.extended = JSON.parse(scope.xml.responseText);
            callback(_this);
        }, function (scope) {
            Errors.push("LOAD-FAIL", "Failed to load extended metadata. Server returned " + scope.xml.status, true);
        });
    };
    ExtendableDataSource.load = function (id, callback) {
        var _this = this;
        new HTTP.GET(this.source + id, function (scope) {
            var rt = JSON.parse(scope.xml.responseText);
            var data = new _this(rt);
            data.extended = rt;
            callback(data);
        }, function (scope) {
            Errors.push("LOAD-FAIL", "Failed to load extended metadata. Server returned " + scope.xml.status, true);
        });
    };
    return ExtendableDataSource;
}());
ExtendableDataSource.source = null;
var Track = (function (_super) {
    __extends(Track, _super);
    function Track(ref) {
        var _this = _super.call(this) || this;
        _this.id = ref.id;
        _this.externalID = ref.external_id;
        _this.cacheID = ref.cache_id;
        _this.title = ref.title;
        _this.artist = ref.artist;
        _this.album = ref.album;
        _this.artistID = ref.artist_id;
        _this.albumID = ref.album_id;
        _this.length = parseFloat(ref.length);
        _this.status = ref.status;
        _this.approved = ref.approved == true;
        _this.uploadDate = new Date(ref.upload_date);
        _this.path = "/audio/preview/" + _this.id;
        _this.waveform = "/audio/waveform/" + _this.id;
        _this.intro_start = ref.intro_start, _this.intro_end = ref.intro_end;
        _this.hook_start = ref.hook_start, _this.hook_end = ref.hook_end;
        _this.extro_start = ref.extro_start;
        _this.endType = ref.end_type;
        _this.createdBy = ref.created_by;
        _this.flagged = ref.flagged;
        return _this;
    }
    Track.prototype.getLyrics = function (callback) {
        var _this = this;
        this.getExtended(function (source) {
            callback(_this.extended["lyrics"]);
        });
    };
    Track.prototype.getArtistPurity = function (callback) {
        new HTTP.GET("/metadata/explicit_artist/?artist=" + escape(this.artist), function (scope) {
            var data = JSON.parse(scope.xml.responseText);
            callback(data.explicit == 1);
        }, function (scope) {
        });
    };
    Track.prototype.getAlternateMetadata = function () {
        this;
    };
    return Track;
}(ExtendableDataSource));
Track.source = "/upload/file/";
var PreTrack = (function (_super) {
    __extends(PreTrack, _super);
    function PreTrack(ref) {
        var _this = _super.call(this) || this;
        _this.id = ref.id;
        _this.externalID = ref.external_id;
        _this.cacheID = ref.cache_id;
        _this.title = ref.title;
        _this.artist = ref.artist;
        _this.album = ref.album;
        _this.artistID = ref.artist_id;
        _this.albumID = ref.album_id;
        _this.length = parseFloat(ref.length);
        _this.explicit = ref.explicit;
        _this.exists = ref.exists;
        return _this;
    }
    PreTrack.prototype.getLyrics = function (callback) {
        var _this = this;
        this.getExtended(function (source) {
            callback(_this.extended["lyrics"]);
        });
    };
    PreTrack.prototype.getAlternateMetadata = function () {
        this;
    };
    return PreTrack;
}(ExtendableDataSource));
PreTrack.source = null;
var GlobalLibrary = (function (_super) {
    __extends(GlobalLibrary, _super);
    function GlobalLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GlobalLibrary;
}(Library));
GlobalLibrary.source = "/metadata/";
GlobalLibrary.trackType = PreTrack;
var MyLibrary = (function (_super) {
    __extends(MyLibrary, _super);
    function MyLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyLibrary;
}(Library));
MyLibrary.source = "/upload/";
/**
 * A collection represents any set of tracks. Edit pages, search, moderation, you name it.
 */
var Collection = (function () {
    function Collection() {
        this.base = "/void/list/";
    }
    Collection.prototype.load = function (callback, page, display) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (display === void 0) { display = 50; }
        var req = new HTTP.GET(this.base + "?page=" + page + "&count=" + display, function (scope) {
            // Yay. We have the data.
            _this.tracks = [];
            var data = JSON.parse(scope.xml.responseText);
            for (var i in data) {
                _this.tracks.push(new Track(data[i]));
            }
            callback(_this);
        }, function (scope) {
            Errors.push("LOAD-FAIL", "Failed to load listings. Server returned " + scope.xml.status, true);
        });
    };
    return Collection;
}());
var UploadCollection = (function (_super) {
    __extends(UploadCollection, _super);
    function UploadCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = "/upload/list/";
        return _this;
    }
    return UploadCollection;
}(Collection));
UploadCollection.instance = new UploadCollection();
var ModerationCollection = (function (_super) {
    __extends(ModerationCollection, _super);
    function ModerationCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = "/moderation/pending/";
        return _this;
    }
    return ModerationCollection;
}(Collection));
ModerationCollection.instance = new ModerationCollection();
