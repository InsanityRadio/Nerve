webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const forms_1 = __webpack_require__(24);
	const http_1 = __webpack_require__(28);
	const dialogue_service_1 = __webpack_require__(29);
	const nerve_service_1 = __webpack_require__(30);
	const pipes_1 = __webpack_require__(42);
	const app_component_1 = __webpack_require__(43);
	const dialogue_component_1 = __webpack_require__(61);
	const app_routing_1 = __webpack_require__(63);
	const home_component_1 = __webpack_require__(120);
	const upload_component_1 = __webpack_require__(95);
	const track_component_1 = __webpack_require__(98);
	const moderation_component_1 = __webpack_require__(112);
	const my_uploads_component_1 = __webpack_require__(106);
	const track_icon_component_1 = __webpack_require__(122);
	const copy_song_component_1 = __webpack_require__(110);
	const upload_song_component_1 = __webpack_require__(108);
	const library_component_1 = __webpack_require__(100);
	const library_search_component_1 = __webpack_require__(102);
	const library_track_component_1 = __webpack_require__(104);
	const audio_player_component_1 = __webpack_require__(124);
	const edit_controls_component_1 = __webpack_require__(126);
	const track_info_component_1 = __webpack_require__(128);
	const waveform_component_1 = __webpack_require__(130);
	const track_search_component_1 = __webpack_require__(132);
	const moderation_pending_component_1 = __webpack_require__(116);
	const moderation_track_component_1 = __webpack_require__(114);
	const music_policy_component_1 = __webpack_require__(118);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        declarations: [
	            app_component_1.AppComponent,
	            dialogue_component_1.DialogueComponent,
	            home_component_1.HomeComponent,
	            upload_component_1.UploadComponent,
	            track_component_1.TrackComponent,
	            music_policy_component_1.MusicPolicyComponent,
	            my_uploads_component_1.MyUploadsComponent,
	            copy_song_component_1.CopySongComponent,
	            upload_song_component_1.UploadSongComponent,
	            track_icon_component_1.TrackIconComponent,
	            audio_player_component_1.AudioPlayerComponent,
	            edit_controls_component_1.EditControlsComponent,
	            track_info_component_1.TrackInfoComponent,
	            waveform_component_1.WaveformComponent,
	            moderation_component_1.ModerationComponent,
	            moderation_track_component_1.ModerationTrackComponent,
	            moderation_pending_component_1.ModerationPendingComponent,
	            track_search_component_1.TrackSearchComponent,
	            library_component_1.LibraryComponent,
	            library_track_component_1.LibraryTrackComponent,
	            library_search_component_1.LibrarySearchComponent,
	            pipes_1.TimecodePipe,
	            pipes_1.LyricsPipe,
	            pipes_1.NL2BRPipe
	        ],
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            http_1.HttpModule,
	            http_1.JsonpModule,
	            app_routing_1.routing
	        ],
	        providers: [app_routing_1.appRoutingProviders, nerve_service_1.NerveService, dialogue_service_1.DialogueService],
	        bootstrap: [app_component_1.AppComponent]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	class ErrorDialogue {
	    constructor() {
	        this.type = 'ErrorDialogue';
	    }
	}
	exports.ErrorDialogue = ErrorDialogue;
	class ConfirmDialogue {
	    constructor() {
	        this.type = 'ConfirmDialogue';
	    }
	}
	exports.ConfirmDialogue = ConfirmDialogue;
	let DialogueService = DialogueService_1 = class DialogueService {
	    constructor() {
	    }
	    setComponent(dialogue) {
	        DialogueService_1.dialogue = dialogue;
	    }
	    showError(title, message, code, close) {
	        if (!close)
	            close = this.getDefaultAction();
	        var dialogue = new ErrorDialogue();
	        dialogue.title = title;
	        dialogue.message = message;
	        dialogue.code = code;
	        dialogue.close = close;
	        DialogueService_1.dialogue.show(dialogue);
	    }
	    showDialogue(title, message, confirm, cancel) {
	        if (!confirm)
	            confirm = this.getDefaultAction();
	        if (!cancel)
	            cancel = this.getDefaultAction();
	        var dialogue = new ConfirmDialogue();
	        dialogue.title = title;
	        dialogue.message = message;
	        dialogue.confirm = confirm;
	        dialogue.close = cancel;
	        DialogueService_1.dialogue.show(dialogue);
	    }
	    close() {
	        DialogueService_1.dialogue.close();
	    }
	    getDefaultAction() {
	        return () => {
	            DialogueService_1.dialogue.close();
	        };
	    }
	};
	DialogueService = DialogueService_1 = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], DialogueService);
	exports.DialogueService = DialogueService;
	var DialogueService_1;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(28);
	const Observable_1 = __webpack_require__(7);
	const track_1 = __webpack_require__(31);
	class Upload {
	    constructor(track, file, options, nerveService) {
	        this.track = track;
	        this.file = file;
	        this.options = options;
	        this.nerveService = nerveService;
	        this.complete = false;
	        this.message = '';
	        this._progress = 0;
	        this.id = 0;
	        this.id = (new Date().getTime()) - 1262304000000;
	        nerveService.uploadGetPath()
	            .then((path) => this.gotPath(path + 'do/'));
	    }
	    get progress() {
	        return Math.round(this._progress / 2);
	    }
	    get error() {
	        return this.progress != 100 && this.complete;
	    }
	    update(method) {
	        this._update = method;
	    }
	    gotPath(path) {
	        var formData = new FormData();
	        for (var i in this.track) {
	            formData.append(i, this.track[i]);
	        }
	        for (var i in this.options) {
	            formData.append(i, this.options[i]);
	        }
	        formData.append("file", this.file);
	        var [xhr, upload] = this.nerveService.uploadDo(path, formData);
	        upload.subscribe((progress) => {
	            this._progress = progress;
	            console.log(progress);
	        }, (error) => {
	            this.message = error;
	            this.complete = true;
	            this._update(this);
	        }, () => {
	            this._progress = 100;
	            let response = JSON.parse(xhr.responseText);
	            this._key = response.token;
	            this.watchForChanges();
	        });
	    }
	    watchForChanges() {
	        this.nerveService.uploadCheck(this._key)
	            .then((message) => {
	            var data = message.json();
	            if (data.running) {
	                this._interval = setTimeout(() => this.watchForChanges(), 4000);
	            }
	            else {
	                this.complete = true;
	            }
	            this._progress = 100 + data.percent;
	            this.message = data.message;
	            this._update(this);
	        }).catch((message) => {
	            var data = message.json();
	            this.complete = true;
	            this._update(this);
	        });
	    }
	}
	exports.Upload = Upload;
	let NerveService = NerveService_1 = class NerveService {
	    constructor(http) {
	        this.http = http;
	        NerveService_1.instance = this;
	        console.log('i am being constructed, yay');
	    }
	    static getInstance() {
	        return NerveService_1.instance;
	    }
	    handshake() {
	        return this.http.get('/api/dynamic/config?' + new Date().getTime())
	            .toPromise()
	            .then(this.extractData)
	            .then(this.bootstrap)
	            .catch(this.handleError);
	    }
	    myUploads() {
	        return this.http.get('/api/upload/list/')
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractTrack)
	            .catch(this.handleError);
	    }
	    search(title, artist, album) {
	        return this.http.get('/api/metadata/search/?title=' + encodeURIComponent(title) + '&artist=' + encodeURIComponent(artist) + '&album=' + encodeURIComponent(album || ''))
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractTrack)
	            .catch(this.handleError);
	    }
	    librarySearch(query) {
	        return this.http.get('/api/library/search/?query=' + encodeURIComponent(query))
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractTrack)
	            .catch(this.handleError);
	    }
	    track(id) {
	        return this.http.get('/api/upload/file/' + id)
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractFullTrack)
	            .catch(this.handleError);
	    }
	    saveTrack(track) {
	        let data = track.serialize();
	        data['token'] = NerveService_1.csrf_key;
	        let formData = new FormData();
	        for (var i in data) {
	            formData.append(i, data[i]);
	        }
	        return this.$post('/api/upload/save/' + track.id, formData)
	            .then(this.extractData)
	            .then(this.extractFullTrack)
	            .catch(this.handleError);
	    }
	    publishTrack(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/upload/publish/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    deleteTrack(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/upload/delete/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    recallTrack(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/moderation/recall/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    moderationPending() {
	        return this.http.get('/api/moderation/pending/')
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractTrack)
	            .catch(this.handleError);
	    }
	    flag(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/moderation/flag/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    reject(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/moderation/reject/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    approve(track) {
	        let track_id = track.id;
	        let formData = new FormData();
	        formData.append('token', NerveService_1.csrf_key);
	        return this.$post('/api/moderation/approve/' + track_id, formData)
	            .then(this.extractData)
	            .catch(this.handleError);
	    }
	    metadataMatch(metadata) {
	        return this.http.get('/api/metadata/match/?title=' + encodeURIComponent(metadata.title) + '&artist=' + encodeURIComponent(metadata.artist))
	            .toPromise()
	            .then(this.extractData)
	            .then(this.extractUploadTrack);
	    }
	    upload(track, file, options) {
	        return new Upload(track, file, options, this);
	    }
	    uploadGetPath() {
	        return this.http.get('/api/upload/path/')
	            .toPromise()
	            .then(this.extractData)
	            .then(function (data) {
	            return data.path;
	        })
	            .catch(this.handleError);
	    }
	    uploadDo(path, form) {
	        let xhr = new XMLHttpRequest();
	        return [xhr, Observable_1.Observable.create((observer) => {
	                xhr.upload.addEventListener("progress", (progress) => {
	                    let percentCompleted;
	                    console.log('progress?', xhr, progress);
	                    if (progress.lengthComputable) {
	                        percentCompleted = Math.round(progress.loaded / progress.total * 100);
	                        console.log('percent event', percentCompleted);
	                        if (percentCompleted < 1) {
	                            observer.next(0);
	                        }
	                        else {
	                            observer.next(percentCompleted);
	                        }
	                    }
	                }, false);
	                xhr.addEventListener("load", (e) => {
	                    if (e.target['status'] !== 200) {
	                        observer.error(e.target['responseText']);
	                    }
	                    else {
	                        observer.complete(e.target['responseText']);
	                    }
	                });
	                xhr.addEventListener("error", (err) => {
	                    console.log('upload error', err);
	                    observer.error('Upload error');
	                });
	                xhr.addEventListener("abort", (abort) => {
	                    console.log('upload abort', abort);
	                    observer.error('Transfer aborted by the user');
	                });
	                xhr.open('POST', path, true);
	                xhr.send(form);
	                return () => xhr.abort();
	            })];
	    }
	    uploadCheck(key) {
	        return this.http.get('/api/upload/status/' + key)
	            .toPromise();
	    }
	    $post(url, data) {
	        let headers = new http_1.Headers({}); // { 'Content-Type': 'multipart/form-data' });
	        let options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post(url, data, options).toPromise();
	    }
	    extractData(res) {
	        return res.json();
	    }
	    extractTrack(res) {
	        return res.map((t) => new track_1.IterTrack(t));
	    }
	    extractUploadTrack(res) {
	        if (!res.external_id) {
	            throw new Error("No results found");
	        }
	        return new track_1.UploadTrack(res);
	    }
	    extractFullTrack(res) {
	        return new track_1.FullTrack(('track' in res) ? res.track : res);
	    }
	    bootstrap(res) {
	        window['$config'] = res;
	        NerveService_1.csrf_key = res.key;
	        return res;
	    }
	    handleError(error) {
	        let errMsg;
	        // Yuck.
	        if (Object.getPrototypeOf(error).constructor.name == "Response") {
	            const body = error.json() || '';
	            errMsg = body.message || JSON.stringify(body);
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        // We should, er, show a dialogue here
	        return Promise.reject(errMsg);
	    }
	};
	NerveService = NerveService_1 = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], NerveService);
	exports.NerveService = NerveService;
	var NerveService_1;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var dateFormat = __webpack_require__(32);
	var mm = __webpack_require__(33);
	const nerve_service_1 = __webpack_require__(30);
	const audio_1 = __webpack_require__(41);
	class Track {
	    constructor(data) {
	        this.id = 0;
	        this.external_id = 0;
	        this.cache_id = 0;
	        this.ignore = ['big', 'genre_text', 'approved_by', 'approved', 'created_by', 'ignore', 'playout_id', 'status'];
	        for (var d in data) {
	            switch (d) {
	                case 'upload_date':
	                    data[d] = new Date(Date.parse(data[d]));
	                    break;
	            }
	            this[d] = data[d];
	        }
	    }
	    serialize() {
	        var keys = Object.keys(this);
	        var data = {};
	        for (var key in keys) {
	            key = keys[key];
	            if (this.ignore && this.ignore.indexOf(key) !== -1) {
	                continue;
	            }
	            if (this[key] != null && (typeof this[key] == 'function' || typeof this[key] == 'object')) {
	                console.log(typeof this[key], this[key], '!');
	                if (typeof this[key]['serialize'] != 'undefined')
	                    data[key] = this[key].serialize();
	                continue;
	            }
	            data[key] = this[key];
	        }
	        return data;
	    }
	    getUploadDate() {
	        return dateFormat(this.upload_date, "dS mmmm yyyy h:MM:ss");
	    }
	    get preview_url() {
	        return '/api/audio/preview/' + this.id;
	    }
	    get wave_url() {
	        return '/api/audio/waveform/' + this.id;
	    }
	    get audio_url() {
	        return this.status != 6 ? '/api/audio/get/' + this.id : false;
	    }
	    get submittable() {
	        return this.id > 0 && this.end_type > 0;
	    }
	}
	exports.Track = Track;
	class UploadTrack extends Track {
	    static from(file, metadata) {
	        return new Promise(function (fulfil, reject) {
	            if (metadata) {
	                return fulfil(metadata);
	            }
	            let extension = file.name.split(".").pop().toLowerCase();
	            // We should handle this further up in executon
	            if (extension == "wav") {
	                reject(['metadata']);
	            }
	            var t = setTimeout(() => reject(['timeout']), 5000);
	            var metadata = mm(file, function (err, metadata) {
	                clearTimeout(t);
	                if (err) {
	                    console.log('argh');
	                    return reject(['metadata', err]);
	                }
	                metadata = audio_1.AudioUtil.strip(metadata);
	                fulfil(metadata);
	            });
	        }).then(UploadTrack.search);
	    }
	    static search(metadata) {
	        return nerve_service_1.NerveService.getInstance().metadataMatch(metadata).catch((error) => metadata);
	    }
	}
	exports.UploadTrack = UploadTrack;
	class IterTrack extends Track {
	    get click() {
	        return this.status < 2;
	    }
	    get greyed() {
	        return !this.click;
	    }
	}
	exports.IterTrack = IterTrack;
	class FullTrack extends Track {
	    get submittable() {
	        return this.id > 0 && this.end_type > 0 && this.extro_start > 0;
	    }
	}
	exports.FullTrack = FullTrack;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */
	
	(function(global) {
	  'use strict';
	
	  var dateFormat = (function() {
	      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
	      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	      var timezoneClip = /[^-+\dA-Z]/g;
	  
	      // Regexes and supporting functions are cached through closure
	      return function (date, mask, utc, gmt) {
	  
	        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
	        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
	          mask = date;
	          date = undefined;
	        }
	  
	        date = date || new Date;
	  
	        if(!(date instanceof Date)) {
	          date = new Date(date);
	        }
	  
	        if (isNaN(date)) {
	          throw TypeError('Invalid date');
	        }
	  
	        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
	  
	        // Allow setting the utc/gmt argument via the mask
	        var maskSlice = mask.slice(0, 4);
	        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
	          mask = mask.slice(4);
	          utc = true;
	          if (maskSlice === 'GMT:') {
	            gmt = true;
	          }
	        }
	  
	        var _ = utc ? 'getUTC' : 'get';
	        var d = date[_ + 'Date']();
	        var D = date[_ + 'Day']();
	        var m = date[_ + 'Month']();
	        var y = date[_ + 'FullYear']();
	        var H = date[_ + 'Hours']();
	        var M = date[_ + 'Minutes']();
	        var s = date[_ + 'Seconds']();
	        var L = date[_ + 'Milliseconds']();
	        var o = utc ? 0 : date.getTimezoneOffset();
	        var W = getWeek(date);
	        var N = getDayOfWeek(date);
	        var flags = {
	          d:    d,
	          dd:   pad(d),
	          ddd:  dateFormat.i18n.dayNames[D],
	          dddd: dateFormat.i18n.dayNames[D + 7],
	          m:    m + 1,
	          mm:   pad(m + 1),
	          mmm:  dateFormat.i18n.monthNames[m],
	          mmmm: dateFormat.i18n.monthNames[m + 12],
	          yy:   String(y).slice(2),
	          yyyy: y,
	          h:    H % 12 || 12,
	          hh:   pad(H % 12 || 12),
	          H:    H,
	          HH:   pad(H),
	          M:    M,
	          MM:   pad(M),
	          s:    s,
	          ss:   pad(s),
	          l:    pad(L, 3),
	          L:    pad(Math.round(L / 10)),
	          t:    H < 12 ? 'a'  : 'p',
	          tt:   H < 12 ? 'am' : 'pm',
	          T:    H < 12 ? 'A'  : 'P',
	          TT:   H < 12 ? 'AM' : 'PM',
	          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
	          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
	          W:    W,
	          N:    N
	        };
	  
	        return mask.replace(token, function (match) {
	          if (match in flags) {
	            return flags[match];
	          }
	          return match.slice(1, match.length - 1);
	        });
	      };
	    })();
	
	  dateFormat.masks = {
	    'default':               'ddd mmm dd yyyy HH:MM:ss',
	    'shortDate':             'm/d/yy',
	    'mediumDate':            'mmm d, yyyy',
	    'longDate':              'mmmm d, yyyy',
	    'fullDate':              'dddd, mmmm d, yyyy',
	    'shortTime':             'h:MM TT',
	    'mediumTime':            'h:MM:ss TT',
	    'longTime':              'h:MM:ss TT Z',
	    'isoDate':               'yyyy-mm-dd',
	    'isoTime':               'HH:MM:ss',
	    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
	    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
	    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
	  };
	
	  // Internationalization strings
	  dateFormat.i18n = {
	    dayNames: [
	      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
	      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	    ],
	    monthNames: [
	      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
	      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
	    ]
	  };
	
	function pad(val, len) {
	  val = String(val);
	  len = len || 2;
	  while (val.length < len) {
	    val = '0' + val;
	  }
	  return val;
	}
	
	/**
	 * Get the ISO 8601 week number
	 * Based on comments from
	 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
	 *
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getWeek(date) {
	  // Remove time components of date
	  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	
	  // Change date to Thursday same week
	  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
	
	  // Take January 4th as it is always in week 1 (see ISO 8601)
	  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
	
	  // Change date to Thursday same week
	  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
	
	  // Check if daylight-saving-time-switch occured and correct for it
	  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
	  targetThursday.setHours(targetThursday.getHours() - ds);
	
	  // Number of weeks between target Thursday and first Thursday
	  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
	  return 1 + Math.floor(weekDiff);
	}
	
	/**
	 * Get ISO-8601 numeric representation of the day of the week
	 * 1 (for Monday) through 7 (for Sunday)
	 * 
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getDayOfWeek(date) {
	  var dow = date.getDay();
	  if(dow === 0) {
	    dow = 7;
	  }
	  return dow;
	}
	
	/**
	 * kind-of shortcut
	 * @param  {*} val
	 * @return {String}
	 */
	function kindOf(val) {
	  if (val === null) {
	    return 'null';
	  }
	
	  if (val === undefined) {
	    return 'undefined';
	  }
	
	  if (typeof val !== 'object') {
	    return typeof val;
	  }
	
	  if (Array.isArray(val)) {
	    return 'array';
	  }
	
	  return {}.toString.call(val)
	    .slice(8, -1).toLowerCase();
	};
	
	
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return dateFormat;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = dateFormat;
	  } else {
	    global.dateFormat = dateFormat;
	  }
	})(this);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global, Buffer, setImmediate) {(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.musicmetadata = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var strtok = require('strtok2')
	var common = require('./common')
	var equal = require('deep-equal')
	
	var decodeString = common.decodeString
	
	module.exports = function (stream, callback, done) {
	  var currentState = startState
	
	  strtok.parse(stream, function (v, cb) {
	    currentState = currentState.parse(callback, v, done)
	    return currentState.getExpectedType()
	  })
	}
	
	var startState = {
	  parse: function (callback) {
	    return idState
	  }
	}
	
	var finishedState = {
	  parse: function (callback) {
	    return this
	  },
	  getExpectedType: function () {
	    return strtok.DONE
	  }
	}
	
	var idState = {
	  parse: function (callback, data, done) {
	    if (!equal(common.asfGuidBuf, data)) {
	      done(new Error('expected asf header but was not found'))
	      return finishedState
	    }
	    return headerDataState
	  },
	  getExpectedType: function () {
	    return new strtok.BufferType(common.asfGuidBuf.length)
	  }
	}
	
	function ReadObjectState (size, objectCount) {
	  this.size = size
	  this.objectCount = objectCount
	}
	
	ReadObjectState.prototype.parse = function (callback, data, done) {
	  var guid = data.slice(0, 16)
	  var size = readUInt64LE(data, 16)
	  var State = stateByGuid(guid) || IgnoreObjectState
	  this.objectCount -= 1
	  this.size -= size
	  var nextState = (this.objectCount <= 0) ? finishedState : this
	  return new State(nextState, size - 24)
	}
	
	ReadObjectState.prototype.getExpectedType = function () {
	  return new strtok.BufferType(24)
	}
	
	var headerDataState = {
	  parse: function (callback, data, done) {
	    var size = readUInt64LE(data, 0)
	    var objectCount = data.readUInt32LE(8)
	    return new ReadObjectState(size, objectCount)
	  },
	  getExpectedType: function () {
	    // 8 bytes size
	    // 4 bytes object count
	    // 2 bytes ignore
	    return new strtok.BufferType(14)
	  }
	}
	
	function IgnoreObjectState (nextState, size) {
	  this.nextState = nextState
	  this.size = size
	}
	
	IgnoreObjectState.prototype.parse = function (callback, data, done) {
	  if (this.nextState === finishedState) done()
	  return this.nextState
	}
	
	IgnoreObjectState.prototype.getExpectedType = function () {
	  return new strtok.IgnoreType(this.size)
	}
	
	function ContentDescriptionObjectState (nextState, size) {
	  this.nextState = nextState
	  this.size = size
	}
	
	var contentDescTags = ['Title', 'Author', 'Copyright', 'Description', 'Rating']
	ContentDescriptionObjectState.prototype.parse = function (callback, data, done) {
	  var lengths = [
	    data.readUInt16LE(0),
	    data.readUInt16LE(2),
	    data.readUInt16LE(4),
	    data.readUInt16LE(6),
	    data.readUInt16LE(8)
	  ]
	  var pos = 10
	  for (var i = 0; i < contentDescTags.length; i += 1) {
	    var tagName = contentDescTags[i]
	    var length = lengths[i]
	    var end = pos + length
	    if (length > 0) {
	      var value = parseUnicodeAttr(data.slice(pos, end))
	      callback(tagName, value)
	    }
	    pos = end
	  }
	  if (this.nextState === finishedState) done()
	  return this.nextState
	}
	
	ContentDescriptionObjectState.prototype.getExpectedType = function () {
	  return new strtok.BufferType(this.size)
	}
	
	ContentDescriptionObjectState.guid = new Buffer([
	  0x33, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11,
	  0xA6, 0xD9, 0x00, 0xAA, 0x00, 0x62, 0xCE, 0x6C
	])
	
	function ExtendedContentDescriptionObjectState (nextState, size) {
	  this.nextState = nextState
	  this.size = size
	}
	
	var attributeParsers = [
	  parseUnicodeAttr,
	  parseByteArrayAttr,
	  parseBoolAttr,
	  parseDWordAttr,
	  parseQWordAttr,
	  parseWordAttr,
	  parseByteArrayAttr
	]
	
	ExtendedContentDescriptionObjectState.prototype.parse = function (callback, data, done) {
	  var attrCount = data.readUInt16LE(0)
	  var pos = 2
	  for (var i = 0; i < attrCount; i += 1) {
	    var nameLen = data.readUInt16LE(pos)
	    pos += 2
	    var name = parseUnicodeAttr(data.slice(pos, pos + nameLen))
	    pos += nameLen
	    var valueType = data.readUInt16LE(pos)
	    pos += 2
	    var valueLen = data.readUInt16LE(pos)
	    pos += 2
	    var value = data.slice(pos, pos + valueLen)
	    pos += valueLen
	    var parseAttr = attributeParsers[valueType]
	    if (!parseAttr) {
	      done(new Error('unexpected value type: ' + valueType))
	      return finishedState
	    }
	    var attr = parseAttr(value)
	    callback(name, attr)
	  }
	  if (this.nextState === finishedState) done()
	  return this.nextState
	}
	
	ExtendedContentDescriptionObjectState.prototype.getExpectedType = function () {
	  return new strtok.BufferType(this.size)
	}
	
	ExtendedContentDescriptionObjectState.guid = new Buffer([
	  0x40, 0xA4, 0xD0, 0xD2, 0x07, 0xE3, 0xD2, 0x11,
	  0x97, 0xF0, 0x00, 0xA0, 0xC9, 0x5E, 0xA8, 0x50
	])
	
	function FilePropertiesObject (nextState, size) {
	  this.nextState = nextState
	  this.size = size
	}
	
	FilePropertiesObject.prototype.parse = function (callback, data, done) {
	  // in miliseconds
	  var playDuration = parseQWordAttr(data.slice(40, 48)) / 10000
	  callback('duration', playDuration / 1000)
	
	  if (this.nextState === finishedState) done()
	  return this.nextState
	}
	
	FilePropertiesObject.prototype.getExpectedType = function () {
	  return new strtok.BufferType(this.size)
	}
	
	FilePropertiesObject.guid = new Buffer([
	  0xA1, 0xDC, 0xAB, 0x8C, 0x47, 0xA9, 0xCF, 0x11,
	  0x8E, 0xE4, 0x00, 0xC0, 0x0C, 0x20, 0x53, 0x65
	])
	
	var guidStates = [
	  FilePropertiesObject,
	  ContentDescriptionObjectState,
	  ExtendedContentDescriptionObjectState
	]
	function stateByGuid (guidBuf) {
	  for (var i = 0; i < guidStates.length; i += 1) {
	    var GuidState = guidStates[i]
	    if (equal(GuidState.guid, guidBuf)) return GuidState
	  }
	  return null
	}
	
	function parseUnicodeAttr (buf) {
	  return common.stripNulls(decodeString(buf, 'utf16le'))
	}
	
	function parseByteArrayAttr (buf) {
	  var newBuf = new Buffer(buf.length)
	  buf.copy(newBuf)
	  return newBuf
	}
	
	function parseBoolAttr (buf) {
	  return parseDWordAttr(buf) === 1
	}
	
	function parseDWordAttr (buf) {
	  return buf.readUInt32LE(0)
	}
	
	function parseQWordAttr (buf) {
	  return readUInt64LE(buf, 0)
	}
	
	function parseWordAttr (buf) {
	  return buf.readUInt16LE(0)
	}
	
	function readUInt64LE (buffer, offset) {
	  var high = buffer.slice(offset, offset + 4).readUInt32LE(0)
	  var low = buffer.slice(offset + 4, offset + 8).readUInt32LE(0)
	  var maxuint32 = Math.pow(2, 32)
	  return ((low * maxuint32) + (high >>> 0))
	}
	
	}).call(this,require("buffer").Buffer)
	},{"./common":3,"buffer":18,"deep-equal":21,"strtok2":47}],2:[function(require,module,exports){
	(function (process,Buffer){
	'use strict'
	/*jslint browser: true*/
	var readStream = require('filereader-stream')
	var through = require('through')
	var musicmetadata = require('./index')
	var isStream = require('is-stream')
	
	module.exports = function (stream, opts, callback) {
	  return musicmetadata(wrapFileWithStream(stream), opts, callback)
	}
	
	function wrapFileWithStream (file) {
	  var stream = through(function write (data) {
	    if (data.length > 0) this.queue(data)
	  }, null, {autoDestroy: false})
	
	  if (file instanceof window.ArrayBuffer) {
	    return wrapArrayBufferWithStream(file, stream)
	  }
	
	  stream.fileSize = function (cb) {
	    process.nextTick(function () {
	      cb(file.size)
	    })
	  }
	
	  if (isStream(file)) {
	    return file.pipe(stream)
	  }
	  if (file instanceof window.FileList) {
	    throw new Error('You have passed a FileList object but we expected a File')
	  }
	  if (!(file instanceof window.File || file instanceof window.Blob)) {
	    throw new Error('You must provide a valid File or Blob object')
	  }
	
	  return readStream(file).pipe(stream)
	}
	
	function wrapArrayBufferWithStream (arrayBuffer, throughStream) {
	  throughStream.fileSize = function (cb) {
	    process.nextTick(function () {
	      cb(arrayBuffer.byteLength)
	    })
	  }
	
	  process.nextTick(function () {
	    throughStream.write(new Buffer(new Uint8Array(arrayBuffer)))
	    throughStream.end()
	  })
	
	  return throughStream
	}
	
	}).call(this,require('_process'),require("buffer").Buffer)
	},{"./index":9,"_process":31,"buffer":18,"filereader-stream":25,"is-stream":29,"through":48}],3:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var strtok = require('strtok2')
	var equal = require('deep-equal')
	var windows1252decoder = require('./windows1252decoder')
	
	var asfGuidBuf = new Buffer([
	  0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11,
	  0xA6, 0xD9, 0x00, 0xAA, 0x00, 0x62, 0xCE, 0x6C
	])
	exports.asfGuidBuf = asfGuidBuf
	
	exports.getParserForMediaType = function (types, header) {
	  for (var i = 0; i < types.length; i += 1) {
	    var type = types[i]
	    var offset = type.offset || 0
	    if (header.length >= offset + type.buf.length &&
	      equal(header.slice(offset, offset + type.buf.length), type.buf)) {
	      return type.tag
	    }
	  }
	  // default to id3v1.1 if we cannot detect any other tags
	  return require('./id3v1')
	}
	
	exports.streamOnRealEnd = function (stream, callback) {
	  stream.on('end', done)
	  stream.on('close', done)
	  function done () {
	    stream.removeListener('end', done)
	    stream.removeListener('close', done)
	    callback()
	  }
	}
	
	exports.readVorbisPicture = function (buffer) {
	  var picture = {}
	  var offset = 0
	
	  picture.type = PICTURE_TYPE[strtok.UINT32_BE.get(buffer, 0)]
	
	  var mimeLen = strtok.UINT32_BE.get(buffer, offset += 4)
	  picture.format = buffer.toString('utf-8', offset += 4, offset + mimeLen)
	
	  var descLen = strtok.UINT32_BE.get(buffer, offset += mimeLen)
	  picture.description = buffer.toString('utf-8', offset += 4, offset + descLen)
	
	  picture.width = strtok.UINT32_BE.get(buffer, offset += descLen)
	  picture.height = strtok.UINT32_BE.get(buffer, offset += 4)
	  picture.colour_depth = strtok.UINT32_BE.get(buffer, offset += 4)
	  picture.indexed_color = strtok.UINT32_BE.get(buffer, offset += 4)
	
	  var picDataLen = strtok.UINT32_BE.get(buffer, offset += 4)
	  picture.data = new Buffer(buffer.slice(offset += 4, offset + picDataLen))
	
	  return picture
	}
	
	exports.removeUnsyncBytes = function (buffer) {
	  var readI = 0
	  var writeI = 0
	  while (readI < buffer.length - 1) {
	    if (readI !== writeI) {
	      buffer[writeI] = buffer[readI]
	    }
	    readI += (buffer[readI] === 0xFF && buffer[readI + 1] === 0) ? 2 : 1
	    writeI++
	  }
	  if (readI < buffer.length) {
	    buffer[writeI++] = buffer[readI++]
	  }
	  return buffer.slice(0, writeI)
	}
	
	exports.findZero = function (buffer, start, end, encoding) {
	  var i = start
	  if (encoding === 'utf16') {
	    while (buffer[i] !== 0 || buffer[i + 1] !== 0) {
	      if (i >= end) return end
	      i += 2
	    }
	    return i
	  } else {
	    while (buffer[i] !== 0) {
	      if (i >= end) return end
	      i++
	    }
	    return i
	  }
	}
	
	exports.sum = function (arr) {
	  var s = 0
	  var i
	  for (i = 0; i < arr.length; i++) {
	    s += arr[i]
	  }
	  return s
	}
	
	function swapBytes (buffer) {
	  var l = buffer.length
	  if (l & 0x01) {
	    throw new Error('Buffer length must be even')
	  }
	  for (var i = 0; i < l; i += 2) {
	    var a = buffer[i]
	    buffer[i] = buffer[i + 1]
	    buffer[i + 1] = a
	  }
	  return buffer
	}
	
	var readUTF16String = exports.readUTF16String = function (buffer) {
	  var offset = 0
	  if (buffer[0] === 0xFE && buffer[1] === 0xFF) { // big endian
	    buffer = swapBytes(buffer)
	    offset = 2
	  } else if (buffer[0] === 0xFF && buffer[1] === 0xFE) { // little endian
	    offset = 2
	  }
	  return buffer.toString('ucs2', offset)
	}
	
	exports.decodeString = function (buffer, encoding) {
	  // annoying workaround for a double BOM issue
	  // https://github.com/leetreveil/musicmetadata/issues/84
	  if (buffer[0] === 0xFF && buffer[1] === 0xFE && buffer[2] === 0xFE && buffer[3] === 0xFF) {
	    buffer = buffer.slice(2)
	  }
	
	  if (encoding === 'utf16le' || encoding === 'utf16') {
	    return readUTF16String(buffer)
	  } else if (encoding === 'utf8') {
	    return buffer.toString('utf8')
	  } else if (encoding === 'iso-8859-1') {
	    return windows1252decoder(buffer)
	  }
	
	  throw Error(encoding + ' encoding is not supported!')
	}
	
	exports.parseGenre = function (origVal) {
	  // match everything inside parentheses
	  var split = origVal.trim().split(/\((.*?)\)/g)
	    .filter(function (val) { return val !== '' })
	
	  var array = []
	  for (var i = 0; i < split.length; i++) {
	    var cur = split[i]
	    if (/^\d+$/.test(cur) && !isNaN(parseInt(cur, 10))) {
	      cur = GENRES[cur]
	    }
	    array.push(cur)
	  }
	
	  return array
	    .filter(function (val) { return val !== undefined })
	    .join('/')
	}
	
	exports.stripNulls = function (str) {
	  str = str.replace(/^\x00+/g, '')
	  str = str.replace(/\x00+$/g, '')
	  return str
	}
	
	exports.strtokUINT24_BE = {
	  len: 3,
	  get: function (buf, off) {
	    return (((buf[off] << 8) + buf[off + 1]) << 8) + buf[off + 2]
	  }
	}
	
	exports.strtokBITSET = {
	  len: 1,
	  get: function (buf, off, bit) {
	    return (buf[off] & (1 << bit)) !== 0
	  }
	}
	
	exports.strtokINT32SYNCSAFE = {
	  len: 4,
	  get: function (buf, off) {
	    return buf[off + 3] & 0x7f | ((buf[off + 2]) << 7) |
	        ((buf[off + 1]) << 14) | ((buf[off]) << 21)
	  }
	}
	
	var PICTURE_TYPE = exports.PICTURE_TYPE = [
	  'Other',
	  "32x32 pixels 'file icon' (PNG only)",
	  'Other file icon',
	  'Cover (front)',
	  'Cover (back)',
	  'Leaflet page',
	  'Media (e.g. lable side of CD)',
	  'Lead artist/lead performer/soloist',
	  'Artist/performer',
	  'Conductor',
	  'Band/Orchestra',
	  'Composer',
	  'Lyricist/text writer',
	  'Recording Location',
	  'During recording',
	  'During performance',
	  'Movie/video screen capture',
	  'A bright coloured fish',
	  'Illustration',
	  'Band/artist logotype',
	  'Publisher/Studio logotype'
	]
	
	var GENRES = exports.GENRES = [
	  'Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge', 'Hip-Hop',
	  'Jazz', 'Metal', 'New Age', 'Oldies', 'Other', 'Pop', 'R&B', 'Rap', 'Reggae', 'Rock',
	  'Techno', 'Industrial', 'Alternative', 'Ska', 'Death Metal', 'Pranks', 'Soundtrack',
	  'Euro-Techno', 'Ambient', 'Trip-Hop', 'Vocal', 'Jazz+Funk', 'Fusion', 'Trance',
	  'Classical', 'Instrumental', 'Acid', 'House', 'Game', 'Sound Clip', 'Gospel', 'Noise',
	  'Alt. Rock', 'Bass', 'Soul', 'Punk', 'Space', 'Meditative', 'Instrumental Pop',
	  'Instrumental Rock', 'Ethnic', 'Gothic', 'Darkwave', 'Techno-Industrial',
	  'Electronic', 'Pop-Folk', 'Eurodance', 'Dream', 'Southern Rock', 'Comedy', 'Cult',
	  'Gangsta Rap', 'Top 40', 'Christian Rap', 'Pop/Funk', 'Jungle', 'Native American',
	  'Cabaret', 'New Wave', 'Psychedelic', 'Rave', 'Showtunes', 'Trailer', 'Lo-Fi', 'Tribal',
	  'Acid Punk', 'Acid Jazz', 'Polka', 'Retro', 'Musical', 'Rock & Roll', 'Hard Rock',
	  'Folk', 'Folk/Rock', 'National Folk', 'Swing', 'Fast-Fusion', 'Bebob', 'Latin', 'Revival',
	  'Celtic', 'Bluegrass', 'Avantgarde', 'Gothic Rock', 'Progressive Rock', 'Psychedelic Rock',
	  'Symphonic Rock', 'Slow Rock', 'Big Band', 'Chorus', 'Easy Listening', 'Acoustic', 'Humour',
	  'Speech', 'Chanson', 'Opera', 'Chamber Music', 'Sonata', 'Symphony', 'Booty Bass', 'Primus',
	  'Porn Groove', 'Satire', 'Slow Jam', 'Club', 'Tango', 'Samba', 'Folklore',
	  'Ballad', 'Power Ballad', 'Rhythmic Soul', 'Freestyle', 'Duet', 'Punk Rock', 'Drum Solo',
	  'A Cappella', 'Euro-House', 'Dance Hall', 'Goa', 'Drum & Bass', 'Club-House',
	  'Hardcore', 'Terror', 'Indie', 'BritPop', 'Negerpunk', 'Polsk Punk', 'Beat',
	  'Christian Gangsta Rap', 'Heavy Metal', 'Black Metal', 'Crossover', 'Contemporary Christian',
	  'Christian Rock', 'Merengue', 'Salsa', 'Thrash Metal', 'Anime', 'JPop', 'Synthpop',
	  'Abstract', 'Art Rock', 'Baroque', 'Bhangra', 'Big Beat', 'Breakbeat', 'Chillout',
	  'Downtempo', 'Dub', 'EBM', 'Eclectic', 'Electro', 'Electroclash', 'Emo', 'Experimental',
	  'Garage', 'Global', 'IDM', 'Illbient', 'Industro-Goth', 'Jam Band', 'Krautrock',
	  'Leftfield', 'Lounge', 'Math Rock', 'New Romantic', 'Nu-Breakz', 'Post-Punk', 'Post-Rock',
	  'Psytrance', 'Shoegaze', 'Space Rock', 'Trop Rock', 'World Music', 'Neoclassical', 'Audiobook',
	  'Audio Theatre', 'Neue Deutsche Welle', 'Podcast', 'Indie Rock', 'G-Funk', 'Dubstep',
	  'Garage Rock', 'Psybient'
	]
	
	}).call(this,require("buffer").Buffer)
	},{"./id3v1":5,"./windows1252decoder":12,"buffer":18,"deep-equal":21,"strtok2":47}],4:[function(require,module,exports){
	'use strict'
	var strtok = require('strtok2')
	var common = require('./common')
	
	module.exports = function (stream, callback, done) {
	  var currentState = startState
	
	  strtok.parse(stream, function (v, cb) {
	    currentState = currentState.parse(callback, v, done)
	    return currentState.getExpectedType()
	  })
	}
	
	var DataDecoder = function (data) {
	  this.data = data
	  this.offset = 0
	}
	
	DataDecoder.prototype.readInt32 = function () {
	  var value = strtok.UINT32_LE.get(this.data, this.offset)
	  this.offset += 4
	  return value
	}
	
	DataDecoder.prototype.readStringUtf8 = function () {
	  var len = this.readInt32()
	  var value = this.data.toString('utf8', this.offset, this.offset + len)
	  this.offset += len
	  return value
	}
	
	var finishedState = {
	  parse: function (callback) {
	    return this
	  },
	  getExpectedType: function () {
	    return strtok.DONE
	  }
	}
	
	var BlockDataState = function (type, length, nextStateFactory) {
	  this.type = type
	  this.length = length
	  this.nextStateFactory = nextStateFactory
	}
	
	BlockDataState.prototype.parse = function (callback, data) {
	  if (this.type === 4) {
	    var decoder = new DataDecoder(data)
	    decoder.readStringUtf8() // vendor (skip)
	    var commentListLength = decoder.readInt32()
	    var comment
	    var split
	    var i
	
	    for (i = 0; i < commentListLength; i++) {
	      comment = decoder.readStringUtf8()
	      split = comment.split('=')
	      callback(split[0].toUpperCase(), split[1])
	    }
	  } else if (this.type === 6) {
	    var picture = common.readVorbisPicture(data)
	    callback('METADATA_BLOCK_PICTURE', picture)
	  } else if (this.type === 0) { // METADATA_BLOCK_STREAMINFO
	    if (data.length < 34) return // invalid streaminfo
	    var sampleRate = common.strtokUINT24_BE.get(data, 10) >> 4
	    var totalSamples = data.readUInt32BE(14)
	    var duration = totalSamples / sampleRate
	    callback('duration', duration)
	  }
	
	  return this.nextStateFactory()
	}
	
	BlockDataState.prototype.getExpectedType = function () {
	  return new strtok.BufferType(this.length)
	}
	
	var blockHeaderState = {
	  parse: function (callback, data, done) {
	    var header = {
	      lastBlock: (data[0] & 0x80) === 0x80,
	      type: data[0] & 0x7f,
	      length: common.strtokUINT24_BE.get(data, 1)
	    }
	    var followingStateFactory = header.lastBlock ? function () {
	      done()
	      return finishedState
	    } : function () {
	      return blockHeaderState
	    }
	
	    return new BlockDataState(header.type, header.length, followingStateFactory)
	  },
	  getExpectedType: function () {
	    return new strtok.BufferType(4)
	  }
	}
	
	var idState = {
	  parse: function (callback, data, done) {
	    if (data.toString() !== 'fLaC') {
	      done(new Error('expected flac header but was not found'))
	    }
	    return blockHeaderState
	  },
	  getExpectedType: function () {
	    return new strtok.BufferType(4)
	  }
	}
	
	var startState = {
	  parse: function (callback) {
	    return idState
	  },
	  getExpectedType: function () {
	    return strtok.DONE
	  }
	}
	
	},{"./common":3,"strtok2":47}],5:[function(require,module,exports){
	'use strict'
	var common = require('./common')
	
	module.exports = function (stream, callback, done) {
	  var endData = null
	  stream.on('data', function (data) {
	    endData = data
	  })
	  common.streamOnRealEnd(stream, function () {
	    var offset = endData.length - 128
	    var header = endData.toString('ascii', offset, offset += 3)
	    if (header !== 'TAG') {
	      return done(new Error('Could not find metadata header'))
	    }
	
	    var title = endData.toString('ascii', offset, offset += 30)
	    callback('title', title.trim().replace(/\x00/g, ''))
	
	    var artist = endData.toString('ascii', offset, offset += 30)
	    callback('artist', artist.trim().replace(/\x00/g, ''))
	
	    var album = endData.toString('ascii', offset, offset += 30)
	    callback('album', album.trim().replace(/\x00/g, ''))
	
	    var year = endData.toString('ascii', offset, offset += 4)
	    callback('year', year.trim().replace(/\x00/g, ''))
	
	    var comment = endData.toString('ascii', offset, offset += 28)
	    callback('comment', comment.trim().replace(/\x00/g, ''))
	
	    var track = endData[endData.length - 2]
	    callback('track', track)
	
	    if (endData[endData.length - 1] in common.GENRES) {
	      var genre = common.GENRES[endData[endData.length - 1]]
	      callback('genre', genre)
	    }
	    return done()
	  })
	}
	
	},{"./common":3}],6:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var strtok = require('strtok2')
	var parser = require('./id3v2_frames')
	var common = require('./common')
	
	module.exports = function (stream, callback, done, readDuration, fileSize) {
	  var frameCount = 0
	  var audioFrameHeader
	  var bitrates = []
	
	  strtok.parse(stream, function (v, cb) {
	    if (v === undefined) {
	      cb.state = 0
	      return new strtok.BufferType(10)
	    }
	
	    switch (cb.state) {
	      case 0: // header
	        if (v.toString('ascii', 0, 3) !== 'ID3') {
	          return done(new Error('expected id3 header but was not found'))
	        }
	        cb.id3Header = {
	          version: '2.' + v[3] + '.' + v[4],
	          major: v[3],
	          unsync: common.strtokBITSET.get(v, 5, 7),
	          xheader: common.strtokBITSET.get(v, 5, 6),
	          xindicator: common.strtokBITSET.get(v, 5, 5),
	          footer: common.strtokBITSET.get(v, 5, 4),
	          size: common.strtokINT32SYNCSAFE.get(v, 6)
	        }
	        cb.state = 1
	        return new strtok.BufferType(cb.id3Header.size)
	
	      case 1: // id3 data
	        parseMetadata(v, cb.id3Header, done).map(function (obj) {
	          callback.apply(this, obj)
	        })
	        if (readDuration) {
	          cb.state = 2
	          return new strtok.BufferType(4)
	        }
	        return done()
	
	      case 1.5:
	        var shiftedBuffer = new Buffer(4)
	        cb.frameFragment.copy(shiftedBuffer, 0, 1)
	        v.copy(shiftedBuffer, 3)
	        v = shiftedBuffer
	        cb.state = 2
	
	      /* falls through */
	      case 2: // audio frame header
	
	        // we have found the id3 tag at the end of the file, ignore
	        if (v.slice(0, 3).toString() === 'TAG') {
	          return done()
	        }
	
	        // first 11 bits should all be set (frame sync)
	        if ((v[0] === 0xFF && (v[1] & 0xE0) === 0xE0) !== true) {
	          // keep scanning for frame header, id3 tag may
	          // have some padding (0x00) at the end
	          return seekFirstAudioFrame(done)
	        }
	
	        var header = {
	          'version': readMpegVersion(v[1]),
	          'layer': readLayer(v[1]),
	          'protection': !(v[1] & 0x1),
	          'padding': !!((v[2] & 0x02) >> 1),
	          'mode': readMode(v[3])
	        }
	
	        if (isNaN(header.version) || isNaN(header.layer)) {
	          return seekFirstAudioFrame(done)
	        }
	
	        // mp3 files are only found in MPEG1/2 Layer 3
	        if ((header.version !== 1 && header.version !== 2) || header.layer !== 3) {
	          return seekFirstAudioFrame(done)
	        }
	
	        header.samples_per_frame = calcSamplesPerFrame(
	          header.version, header.layer)
	
	        header.bitrate = id3BitrateCalculator(v[2], header.version, header.layer)
	        if (isNaN(header.bitrate)) {
	          return seekFirstAudioFrame(done)
	        }
	
	        header.sample_rate = samplingRateCalculator(v[2], header.version)
	        if (isNaN(header.sample_rate)) {
	          return seekFirstAudioFrame(done)
	        }
	
	        header.slot_size = calcSlotSize(header.layer)
	
	        header.sideinfo_length = calculateSideInfoLength(
	          header.layer, header.mode, header.version)
	
	        var bps = header.samples_per_frame / 8.0
	        var fsize = (bps * (header.bitrate * 1000) / header.sample_rate) +
	          ((header.padding) ? header.slot_size : 0)
	        header.frame_size = Math.floor(fsize)
	
	        audioFrameHeader = header
	        frameCount++
	        bitrates.push(header.bitrate)
	
	        // xtra header only exists in first frame
	        if (frameCount === 1) {
	          cb.offset = header.sideinfo_length
	          cb.state = 3
	          return new strtok.BufferType(header.sideinfo_length)
	        }
	
	        // the stream is CBR if the first 3 frame bitrates are the same
	        if (readDuration && fileSize && frameCount === 3 && areAllSame(bitrates)) {
	          fileSize(function (size) {
	            // subtract non audio stream data from duration calculation
	            size = size - cb.id3Header.size
	            var kbps = (header.bitrate * 1000) / 8
	            callback('duration', size / kbps)
	            cb(done())
	          })
	          return strtok.DEFER
	        }
	
	        // once we know the file is VBR attach listener to end of
	        // stream so we can do the duration calculation when we
	        // have counted all the frames
	        if (readDuration && frameCount === 4) {
	          stream.once('end', function () {
	            callback('duration', calcDuration(frameCount,
	              header.samples_per_frame, header.sample_rate))
	            done()
	          })
	        }
	
	        cb.state = 5
	        return new strtok.IgnoreType(header.frame_size - 4)
	
	      case 3: // side information
	        cb.offset += 12
	        cb.state = 4
	        return new strtok.BufferType(12)
	
	      case 4: // xtra / info header
	        cb.state = 5
	        var frameDataLeft = audioFrameHeader.frame_size - 4 - cb.offset
	
	        var id = v.toString('ascii', 0, 4)
	        if (id !== 'Xtra' && id !== 'Info' && id !== 'Xing') {
	          return new strtok.IgnoreType(frameDataLeft)
	        }
	
	        // frames field is not present
	        if ((v[7] & 0x01) !== 1) {
	          return new strtok.IgnoreType(frameDataLeft)
	        }
	
	        var numFrames = v.readUInt32BE(8)
	        var ah = audioFrameHeader
	        callback('duration', calcDuration(numFrames, ah.samples_per_frame, ah.sample_rate))
	        return done()
	
	      case 5: // skip frame data
	        cb.state = 2
	        return new strtok.BufferType(4)
	    }
	
	    function seekFirstAudioFrame (done) {
	      if (frameCount) {
	        return done(new Error('expected frame header but was not found'))
	      }
	
	      cb.frameFragment = v
	      cb.state = 1.5
	      return new strtok.BufferType(1)
	    }
	  })
	}
	
	function areAllSame (array) {
	  var first = array[0]
	  return array.every(function (element) {
	    return element === first
	  })
	}
	
	function calcDuration (numFrames, samplesPerFrame, sampleRate) {
	  return Math.round(numFrames * (samplesPerFrame / sampleRate))
	}
	
	function parseMetadata (data, header, done) {
	  var offset = 0
	  var frames = []
	
	  if (header.xheader) {
	    offset += data.readUInt32BE(0)
	  }
	
	  while (true) {
	    if (offset === data.length) break
	    var frameHeaderBytes = data.slice(offset, offset += getFrameHeaderLength(header.major, done))
	    var frameHeader = readFrameHeader(frameHeaderBytes, header.major)
	
	    // Last frame. Check first char is a letter, bit of defensive programming
	    if (frameHeader.id === '' || frameHeader.id === '\u0000\u0000\u0000\u0000' ||
	      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(frameHeader.id[0]) === -1) {
	      break
	    }
	
	    var frameDataBytes = data.slice(offset, offset += frameHeader.length)
	    var frameData = readFrameData(frameDataBytes, frameHeader, header.major)
	    for (var pos in frameData) {
	      if (frameData.hasOwnProperty(pos)) {
	        frames.push([frameHeader.id, frameData[pos]])
	      }
	    }
	  }
	  return frames
	}
	
	function readFrameData (v, frameHeader, majorVer) {
	  switch (majorVer) {
	    case 2:
	      return parser.readData(v, frameHeader.id, null, majorVer)
	    case 3:
	    case 4:
	      if (frameHeader.flags.format.unsync) {
	        v = common.removeUnsyncBytes(v)
	      }
	      if (frameHeader.flags.format.data_length_indicator) {
	        v = v.slice(4, v.length)
	      }
	      return parser.readData(v, frameHeader.id, frameHeader.flags, majorVer)
	  }
	}
	
	function readFrameHeader (v, majorVer) {
	  var header = {}
	  switch (majorVer) {
	    case 2:
	      header.id = v.toString('ascii', 0, 3)
	      header.length = common.strtokUINT24_BE.get(v, 3, 6)
	    break
	    case 3:
	      header.id = v.toString('ascii', 0, 4)
	      header.length = strtok.UINT32_BE.get(v, 4, 8)
	      header.flags = readFrameFlags(v.slice(8, 10))
	    break
	    case 4:
	      header.id = v.toString('ascii', 0, 4)
	      header.length = common.strtokINT32SYNCSAFE.get(v, 4, 8)
	      header.flags = readFrameFlags(v.slice(8, 10))
	    break
	  }
	  return header
	}
	
	function getFrameHeaderLength (majorVer, done) {
	  switch (majorVer) {
	    case 2:
	      return 6
	    case 3:
	    case 4:
	      return 10
	    default:
	      return done(new Error('header version is incorrect'))
	  }
	}
	
	function readFrameFlags (b) {
	  return {
	    status: {
	      tag_alter_preservation: common.strtokBITSET.get(b, 0, 6),
	      file_alter_preservation: common.strtokBITSET.get(b, 0, 5),
	      read_only: common.strtokBITSET.get(b, 0, 4)
	    },
	    format: {
	      grouping_identity: common.strtokBITSET.get(b, 1, 7),
	      compression: common.strtokBITSET.get(b, 1, 3),
	      encryption: common.strtokBITSET.get(b, 1, 2),
	      unsync: common.strtokBITSET.get(b, 1, 1),
	      data_length_indicator: common.strtokBITSET.get(b, 1, 0)
	    }
	  }
	}
	
	function readMpegVersion (byte) {
	  var bits = (byte & 0x18) >> 3
	
	  if (bits === 0x00) {
	    return 2.5
	  } else if (bits === 0x01) {
	    return 'reserved'
	  } else if (bits === 0x02) {
	    return 2
	  } else if (bits === 0x03) {
	    return 1
	  }
	}
	
	function readLayer (byte) {
	  var bits = (byte & 0x6) >> 1
	
	  if (bits === 0x00) {
	    return 'reserved'
	  } else if (bits === 0x01) {
	    return 3
	  } else if (bits === 0x02) {
	    return 2
	  } else if (bits === 0x03) {
	    return 1
	  }
	}
	
	function readMode (byte) {
	  var bits = (byte & 0xC0) >> 6
	  if (bits === 0x00) {
	    return 'stereo'
	  } else if (bits === 0x01) {
	    return 'joint_stereo'
	  } else if (bits === 0x02) {
	    return 'dual_channel'
	  } else if (bits === 0x03) {
	    return 'mono'
	  }
	}
	
	function calcSamplesPerFrame (version, layer) {
	  if (layer === 1) return 384
	  if (layer === 2) return 1152
	  if (layer === 3 && version === 1) return 1152
	  if (layer === 3 && (version === 2 || version === 2.5)) return 576
	}
	
	function calculateSideInfoLength (layer, mode, version) {
	  if (layer !== 3) return 2
	  if (['stereo', 'joint_stereo', 'dual_channel'].indexOf(mode) >= 0) {
	    if (version === 1) {
	      return 32
	    } else if (version === 2 || version === 2.5) {
	      return 17
	    }
	  } else if (mode === 'mono') {
	    if (version === 1) {
	      return 17
	    } else if (version === 2 || version === 2.5) {
	      return 9
	    }
	  }
	}
	
	function calcSlotSize (layer) {
	  if (layer === 0) return 'reserved'
	  if (layer === 1) return 4
	  if (layer === 2) return 1
	  if (layer === 3) return 1
	}
	
	// [bits][mpegversion + layer] = bitrate
	var bitrate_index = {
	    0x01: {'11': 32, '12': 32, '13': 32, '21': 32, '22': 8, '23': 8},
	    0x02: {'11': 64, '12': 48, '13': 40, '21': 48, '22': 16, '23': 16},
	    0x03: {'11': 96, '12': 56, '13': 48, '21': 56, '22': 24, '23': 24},
	    0x04: {'11': 128, '12': 64, '13': 56, '21': 64, '22': 32, '23': 32},
	    0x05: {'11': 160, '12': 80, '13': 64, '21': 80, '22': 40, '23': 40},
	    0x06: {'11': 192, '12': 96, '13': 80, '21': 96, '22': 48, '23': 48},
	    0x07: {'11': 224, '12': 112, '13': 96, '21': 112, '22': 56, '23': 56},
	    0x08: {'11': 256, '12': 128, '13': 112, '21': 128, '22': 64, '23': 64},
	    0x09: {'11': 288, '12': 160, '13': 128, '21': 144, '22': 80, '23': 80},
	    0x0A: {'11': 320, '12': 192, '13': 160, '21': 160, '22': 96, '23': 96},
	    0x0B: {'11': 352, '12': 224, '13': 192, '21': 176, '22': 112, '23': 112},
	    0x0C: {'11': 384, '12': 256, '13': 224, '21': 192, '22': 128, '23': 128},
	    0x0D: {'11': 416, '12': 320, '13': 256, '21': 224, '22': 144, '23': 144},
	    0x0E: {'11': 448, '12': 384, '13': 320, '21': 256, '22': 160, '23': 160}
	  }
	
	function id3BitrateCalculator (byte, mpegVersion, layer) {
	  var bits = (byte & 0xF0) >> 4
	  if (bits === 0x00) return 'free'
	  if (bits === 0x0F) return 'reserved'
	  return bitrate_index[bits][mpegVersion.toString() + layer]
	}
	
	// [version][bits] == sampling rate
	var sampling_rate_freq_index = {
	    1: {0x00: 44100, 0x01: 48000, 0x02: 32000},
	    2: {0x00: 22050, 0x01: 24000, 0x02: 16000},
	    2.5: {0x00: 11025, 0x01: 12000, 0x02: 8000}
	}
	
	function samplingRateCalculator (byte, version) {
	  var bits = (byte & 0xC) >> 2
	  if (bits === 0x03) return 'reserved'
	  return sampling_rate_freq_index[version][bits]
	}
	
	}).call(this,require("buffer").Buffer)
	},{"./common":3,"./id3v2_frames":7,"buffer":18,"strtok2":47}],7:[function(require,module,exports){
	'use strict'
	var Buffer = require('buffer').Buffer
	var strtok = require('strtok2')
	var common = require('./common')
	var findZero = common.findZero
	var decodeString = common.decodeString
	
	exports.readData = function readData (b, type, flags, major) {
	  var encoding = getTextEncoding(b[0])
	  var length = b.length
	  var offset = 0
	  var output = []
	  var nullTerminatorLength = getNullTerminatorLength(encoding)
	  var fzero
	
	  if (type[0] === 'T') {
	    type = 'T*'
	  }
	
	  switch (type) {
	    case 'T*':
	      var text = decodeString(b.slice(1), encoding).replace(/\x00+$/, '')
	      // id3v2.4 defines that multiple T* values are separated by 0x00
	      output = text.split(/\x00/g)
	      break
	
	    case 'PIC':
	    case 'APIC':
	      var pic = {}
	
	      offset += 1
	
	      switch (major) {
	        case 2:
	          pic.format = decodeString(b.slice(offset, offset + 3), encoding)
	          offset += 3
	          break
	        case 3:
	        case 4:
	          var enc = 'iso-8859-1'
	          fzero = findZero(b, offset, length, enc)
	          pic.format = decodeString(b.slice(offset, fzero), enc)
	          offset = fzero + 1
	          break
	      }
	
	      pic.type = common.PICTURE_TYPE[b[offset]]
	      offset += 1
	
	      fzero = findZero(b, offset, length, encoding)
	      pic.description = decodeString(b.slice(offset, fzero), encoding)
	      offset = fzero + nullTerminatorLength
	
	      pic.data = new Buffer(b.slice(offset, length))
	      output = [pic]
	      break
	
	    case 'CNT':
	    case 'PCNT':
	      output = [strtok.UINT32_BE.get(b, 0)]
	      break
	
	    case 'SYLT':
	      // skip text encoding (1 byte),
	      //      language (3 bytes),
	      //      time stamp format (1 byte),
	      //      content type (1 byte),
	      //      content descriptor (1 byte)
	      offset += 7
	
	      output = []
	      while (offset < length) {
	        var txt = b.slice(offset, offset = findZero(b, offset, length, encoding))
	        offset += 5 // push offset forward one +  4 byte timestamp
	        output.push(decodeString(txt, encoding))
	      }
	      break
	
	    case 'ULT':
	    case 'USLT':
	    case 'COM':
	    case 'COMM':
	      var out = {}
	
	      offset += 1
	
	      out.language = decodeString(b.slice(offset, offset + 3), 'iso-8859-1')
	      offset += 3
	
	      fzero = findZero(b, offset, length, encoding)
	      out.description = decodeString(b.slice(offset, fzero), encoding)
	      offset = fzero + nullTerminatorLength
	
	      out.text = decodeString(b.slice(offset, length), encoding).replace(/\x00+$/, '')
	
	      output = [out]
	      break
	
	    case 'UFID':
	      var ufid = {}
	
	      fzero = findZero(b, offset, length, encoding)
	      ufid.owner_identifier = decodeString(b.slice(offset, fzero), encoding)
	      offset = fzero + nullTerminatorLength
	
	      ufid.identifier = b.slice(offset, length)
	      output = [ufid]
	      break
	  }
	
	  return output
	}
	
	function getTextEncoding (byte) {
	  switch (byte) {
	    case 0x00:
	      return 'iso-8859-1' // binary
	    case 0x01:
	    case 0x02:
	      return 'utf16' // 01 = with bom, 02 = without bom
	    case 0x03:
	      return 'utf8'
	    default:
	      return 'utf8'
	  }
	}
	
	function getNullTerminatorLength (enc) {
	  switch (enc) {
	    case 'utf16':
	      return 2
	    default:
	      return 1
	  }
	}
	
	},{"./common":3,"buffer":18,"strtok2":47}],8:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var strtok = require('strtok2')
	var common = require('./common')
	
	module.exports = function (stream, callback, done, readDuration) {
	  strtok.parse(stream, function (v, cb) {
	    // the very first thing we expect to see is the first atom's length
	    if (!v) {
	      cb.metaAtomsTotalLength = 0
	      cb.state = 0
	      return strtok.UINT32_BE
	    }
	
	    switch (cb.state) {
	      case -1: // skip
	        cb.state = 0
	        return strtok.UINT32_BE
	
	      case 0: // atom length
	        cb.atomLength = v
	        cb.state++
	        return new strtok.BufferType(4)
	
	      case 1: // atom name
	        v = v.toString('binary')
	        cb.atomName = v
	
	        // meta has 4 bytes padding at the start (skip)
	        if (v === 'meta') {
	          cb.state = -1
	          return new strtok.IgnoreType(4)
	        }
	
	        if (readDuration) {
	          if (v === 'mdhd') {
	            cb.state = 3
	            return new strtok.BufferType(cb.atomLength - 8)
	          }
	        }
	
	        if (!~CONTAINER_ATOMS.indexOf(v)) {
	          if (cb.atomContainer === 'ilst') {
	            cb.state = 2
	            return new strtok.BufferType(cb.atomLength - 8)
	          }
	          cb.state = -1
	          return new strtok.IgnoreType(cb.atomLength - 8)
	        }
	
	        // dig into container atoms
	        cb.atomContainer = v
	        cb.atomContainerLength = cb.atomLength
	        cb.state--
	        return strtok.UINT32_BE
	
	      case 2: // ilst atom
	        cb.metaAtomsTotalLength += cb.atomLength
	        var result = processMetaAtom(v, cb.atomName, cb.atomLength - 8)
	        if (result.length > 0) {
	          for (var i = 0; i < result.length; i++) {
	            callback(cb.atomName, result[i])
	          }
	        }
	
	        // we can stop processing atoms once we get to the end of the ilst atom
	        if (cb.metaAtomsTotalLength >= cb.atomContainerLength - 8) {
	          return done()
	        }
	
	        cb.state = 0
	        return strtok.UINT32_BE
	
	      case 3: // mdhd atom
	        // TODO: support version 1
	        var sampleRate = v.readUInt32BE(12)
	        var duration = v.readUInt32BE(16)
	        callback('duration', duration / sampleRate)
	        cb.state = 0
	        return strtok.UINT32_BE
	    }
	
	    // if we ever get this this point something bad has happened
	    return done(new Error('error parsing'))
	  })
	}
	
	function processMetaAtom (data, atomName, atomLength) {
	  var result = []
	  var offset = 0
	
	  // ignore proprietary iTunes atoms (for now)
	  if (atomName === '----') return result
	
	  while (offset < atomLength) {
	    var length = strtok.UINT32_BE.get(data, offset)
	    var type = TYPES[strtok.UINT32_BE.get(data, offset + 8)]
	
	    var content = processMetaDataAtom(data.slice(offset + 12, offset + length), type, atomName)
	
	    result.push(content)
	    offset += length
	  }
	
	  return result
	
	  function processMetaDataAtom (data, type, atomName) {
	    switch (type) {
	      case 'text':
	        return data.toString('utf8', 4)
	
	      case 'uint8':
	        if (atomName === 'gnre') {
	          var genreInt = strtok.UINT8.get(data, 5)
	          return common.GENRES[genreInt - 1]
	        }
	        if (atomName === 'trkn' || atomName === 'disk') {
	          return data[7] + '/' + data[9]
	        }
	
	        return strtok.UINT8.get(data, 4)
	
	      case 'jpeg':
	      case 'png':
	        return {
	          format: 'image/' + type,
	          data: new Buffer(data.slice(4))
	        }
	    }
	  }
	}
	
	var TYPES = {
	  '0': 'uint8',
	  '1': 'text',
	  '13': 'jpeg',
	  '14': 'png',
	  '21': 'uint8'
	}
	
	var CONTAINER_ATOMS = ['moov', 'udta', 'meta', 'ilst', 'trak', 'mdia']
	
	}).call(this,require("buffer").Buffer)
	},{"./common":3,"buffer":18,"strtok2":47}],9:[function(require,module,exports){
	(function (process,Buffer){
	'use strict'
	var events = require('events')
	var common = require('./common')
	var strtok = require('strtok2')
	var through = require('through')
	var fs = require('fs')
	
	module.exports = function (stream, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts
	    opts = {}
	  }
	
	  var emitter = new events.EventEmitter()
	
	  var fsize = function (cb) {
	    if (opts.fileSize) {
	      process.nextTick(function () {
	        cb(opts.fileSize)
	      })
	    } else if (stream.hasOwnProperty('path')) {
	      fs.stat(stream.path, function (err, stats) {
	        if (err) throw err
	        cb(stats.size)
	      })
	    } else if (stream.hasOwnProperty('fileSize')) {
	      stream.fileSize(cb)
	    } else if (opts.duration) {
	      emitter.emit(
	        'done',
	        new Error('for non file streams, specify the size of the stream with a fileSize option'))
	    }
	  }
	
	  // pipe to an internal stream so we aren't messing
	  // with the stream passed to us by our users
	  var istream = stream.pipe(through(null, null, {autoDestroy: false}))
	
	  var metadata = {
	    title: '',
	    artist: [],
	    albumartist: [],
	    album: '',
	    year: '',
	    track: { no: 0, of: 0 },
	    genre: [],
	    disk: { no: 0, of: 0 },
	    picture: [],
	    duration: 0
	  }
	
	  var aliased = {}
	
	  var hasReadData = false
	  istream.once('data', function (result) {
	    hasReadData = true
	    var parser = common.getParserForMediaType(headerTypes, result)
	    parser(istream, function (event, value) {
	      if (value === null) return
	      var alias = lookupAlias(event)
	      // emit original event & value
	      if (event !== alias) {
	        emitter.emit(event, value)
	      }
	      buildAliases(alias, event, value, aliased)
	    }, done, opts.hasOwnProperty('duration'), fsize)
	    // re-emitting the first data chunk so the
	    // parser picks the stream up from the start
	    istream.emit('data', result)
	  })
	
	  istream.on('end', function () {
	    if (!hasReadData) {
	      done(new Error('Could not read any data from this stream'))
	    }
	  })
	
	  istream.on('close', onClose)
	
	  function onClose () {
	    done(new Error('Unexpected end of stream'))
	  }
	
	  function done (exception) {
	    istream.removeListener('close', onClose)
	
	    // We only emit aliased events once the 'done' event has been raised,
	    // this is because an alias like 'artist' could have values split
	    // over many data chunks.
	    for (var _alias in aliased) {
	      if (aliased.hasOwnProperty(_alias)) {
	        var val
	        if (_alias === 'title' || _alias === 'album' ||
	          _alias === 'year' || _alias === 'duration') {
	          val = aliased[_alias][0]
	        } else {
	          val = aliased[_alias]
	        }
	
	        emitter.emit(_alias, val)
	
	        if (metadata.hasOwnProperty(_alias)) {
	          metadata[_alias] = val
	        }
	      }
	    }
	
	    if (callback) {
	      callback(exception, metadata)
	    }
	    return strtok.DONE
	  }
	
	  return emitter
	}
	
	function buildAliases (alias, event, value, aliased) {
	  // we need to do something special for these events
	  var cleaned
	  if (event === 'TRACKTOTAL' || event === 'DISCTOTAL') {
	    var evt
	    if (event === 'TRACKTOTAL') evt = 'track'
	    if (event === 'DISCTOTAL') evt = 'disk'
	
	    cleaned = parseInt(value, 10)
	    if (isNaN(cleaned)) cleaned = 0
	    if (!aliased.hasOwnProperty(evt)) {
	      aliased[evt] = { no: 0, of: cleaned }
	    } else {
	      aliased[evt].of = cleaned
	    }
	  }
	
	  // if the event has been aliased then we need to clean it before
	  // it is emitted to the user. e.g. genre (20) -> Electronic
	  if (alias) {
	    cleaned = value
	    if (alias === 'genre') cleaned = common.parseGenre(value)
	    if (alias === 'picture') cleaned = cleanupPicture(value)
	
	    if (alias === 'track' || alias === 'disk') {
	      cleaned = cleanupTrack(value)
	
	      if (aliased[alias]) {
	        aliased[alias].no = cleaned.no
	        return
	      } else {
	        aliased[alias] = cleaned
	        return
	      }
	    }
	
	    // if we haven't previously seen this tag then
	    // initialize it to an array, ready for values to be entered
	    if (!aliased.hasOwnProperty(alias)) {
	      aliased[alias] = []
	    }
	
	    if (cleaned.constructor === Array) {
	      aliased[alias] = cleaned
	    } else {
	      aliased[alias].push(cleaned)
	    }
	  }
	}
	
	function lookupAlias (event) {
	  // mappings for common metadata types(id3v2.3, id3v2.2, id4, vorbis, APEv2)
	  var mappings = [
	    ['title', 'TIT2', 'TT2', '©nam', 'TITLE', 'Title'],
	    ['artist', 'TPE1', 'TP1', '©ART', 'ARTIST', 'Author'],
	    ['albumartist', 'TPE2', 'TP2', 'aART', 'ALBUMARTIST', 'ENSEMBLE', 'WM/AlbumArtist'],
	    ['album', 'TALB', 'TAL', '©alb', 'ALBUM', 'WM/AlbumTitle'],
	    ['year', 'TDRC', 'TYER', 'TYE', '©day', 'DATE', 'Year', 'WM/Year'],
	    ['comment', 'COMM', 'COM', '©cmt', 'COMMENT'],
	    ['track', 'TRCK', 'TRK', 'trkn', 'TRACKNUMBER', 'Track', 'WM/TrackNumber'],
	    ['disk', 'TPOS', 'TPA', 'disk', 'DISCNUMBER', 'Disk'],
	    ['genre', 'TCON', 'TCO', '©gen', 'gnre', 'GENRE', 'WM/Genre'],
	    ['picture', 'APIC', 'PIC', 'covr', 'METADATA_BLOCK_PICTURE', 'Cover Art (Front)',
	    'Cover Art (Back)'],
	    ['composer', 'TCOM', 'TCM', '©wrt', 'COMPOSER'],
	    ['duration'],
	    ['lyrics', 'SYLT']
	  ]
	
	  return mappings.reduce(function (a, b) {
	    if (a !== undefined) return a
	
	    var hasAlias = b.map(function (val) {
	      return val.toUpperCase()
	    }).indexOf(event.toUpperCase())
	
	    if (hasAlias > -1) {
	      return b[0]
	    }
	  }, undefined)
	}
	
	// TODO: a string of 1of1 would fail to be converted
	// converts 1/10 to no : 1, of : 10
	// or 1 to no : 1, of : 0
	function cleanupTrack (origVal) {
	  var split = origVal.toString().split('/')
	  return {
	    no: parseInt(split[0], 10) || 0,
	    of: parseInt(split[1], 10) || 0
	  }
	}
	
	function cleanupPicture (picture) {
	  var newFormat
	  if (picture.format) {
	    var split = picture.format.toLowerCase().split('/')
	    newFormat = (split.length > 1) ? split[1] : split[0]
	    if (newFormat === 'jpeg') newFormat = 'jpg'
	  } else {
	    newFormat = 'jpg'
	  }
	  return { format: newFormat, data: picture.data }
	}
	
	var headerTypes = [
	  {
	    buf: common.asfGuidBuf,
	    tag: require('./asf')
	  },
	  {
	    buf: new Buffer('ID3'),
	    tag: require('./id3v2')
	  },
	  {
	    buf: new Buffer('ftypM4A'),
	    tag: require('./id4'),
	    offset: 4
	  },
	  {
	    buf: new Buffer('ftypmp42'),
	    tag: require('./id4'),
	    offset: 4
	  },
	  {
	    buf: new Buffer('OggS'),
	    tag: require('./ogg')
	  },
	  {
	    buf: new Buffer('fLaC'),
	    tag: require('./flac')
	  },
	  {
	    buf: new Buffer('MAC'),
	    tag: require('./monkeysaudio')
	  }
	]
	
	}).call(this,require('_process'),require("buffer").Buffer)
	},{"./asf":1,"./common":3,"./flac":4,"./id3v2":6,"./id4":8,"./monkeysaudio":10,"./ogg":11,"_process":31,"buffer":18,"events":24,"fs":16,"strtok2":47,"through":48}],10:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var common = require('./common')
	var strtok = require('strtok2')
	
	module.exports = function (stream, callback, done) {
	  var ApeDescriptor = {
	    len: 44,
	
	    get: function (buf, off) {
	      return {
	        ID: new strtok.StringType(4, 'ascii').get(buf, off),
	        version: strtok.UINT32_LE.get(buf, off + 4) / 1000,
	        descriptorBytes: strtok.UINT32_LE.get(buf, off + 8),
	        headerDataBytes: strtok.UINT32_LE.get(buf, off + 12),
	        APEFrameDataBytes: strtok.UINT32_LE.get(buf, off + 16),
	        APEFrameDataBytesHigh: strtok.UINT32_LE.get(buf, off + 20),
	        terminatingDataBytes: strtok.UINT32_LE.get(buf, off + 24),
	        fileMD5: new strtok.BufferType(16).get(buf, 28)
	      }
	    }
	  }
	
	  // headerDataBytes = 24
	
	  var ApeHeader = {
	    len: 24,
	
	    get: function (buf, off) {
	      return {
	        compressionLevel: strtok.UINT16_LE.get(buf, off),
	        formatFlags: strtok.UINT16_LE.get(buf, off + 2),
	        blocksPerFrame: strtok.UINT32_LE.get(buf, off + 4),
	        finalFrameBlocks: strtok.UINT32_LE.get(buf, off + 8),
	        totalFrames: strtok.UINT32_LE.get(buf, off + 12),
	        bitsPerSample: strtok.UINT16_LE.get(buf, off + 16),
	        channel: strtok.UINT16_LE.get(buf, off + 18),
	        sampleRate: strtok.UINT32_LE.get(buf, off + 20)
	      }
	    }
	  }
	
	  strtok.parse(stream, function (v, cb) {
	    if (v === undefined) {
	      cb.state = 0
	      return ApeDescriptor
	    }
	
	    switch (cb.state) {
	      case 0:
	        if (v.ID !== 'MAC ') {
	          throw new Error('Expected MAC on beginning of file')
	        }
	        cb.state = 1
	        return new strtok.BufferType(v.descriptorBytes - 44)
	
	      case 1:
	        cb.state = 2
	        return ApeHeader
	
	      case 2:
	        callback('duration', calculateDuration(v))
	        return -1
	    }
	  })
	
	  return readMetadata(stream, callback, done)
	}
	
	/**
	 * Calculate the media file duration
	 * @param ah ApeHeader
	 * @return {number} duration in seconds
	 */
	function calculateDuration (ah) {
	  var duration = ah.totalFrames > 1 ? ah.blocksPerFrame * (ah.totalFrames - 1) : 0
	  duration += ah.finalFrameBlocks
	  return duration / ah.sampleRate
	}
	
	function readMetadata (stream, callback, done) {
	  var bufs = []
	
	  // TODO: need to be able to parse the tag if its at the start of the file
	  stream.on('data', function (data) {
	    bufs.push(data)
	  })
	
	  common.streamOnRealEnd(stream, function () {
	    var buffer = Buffer.concat(bufs)
	    var offset = buffer.length - 32
	
	    if (buffer.toString('utf8', offset, offset += 8) !== 'APETAGEX') {
	      done(new Error("expected APE header but wasn't found"))
	    }
	
	    var footer = {
	      version: strtok.UINT32_LE.get(buffer, offset, offset + 4),
	      size: strtok.UINT32_LE.get(buffer, offset + 4, offset + 8),
	      count: strtok.UINT32_LE.get(buffer, offset + 8, offset + 12)
	    }
	
	    // go 'back' to where the 'tags' start
	    offset = buffer.length - footer.size
	
	    for (var i = 0; i < footer.count; i++) {
	      var size = strtok.UINT32_LE.get(buffer, offset, offset += 4)
	      var flags = strtok.UINT32_LE.get(buffer, offset, offset += 4)
	      var kind = (flags & 6) >> 1
	
	      var zero = common.findZero(buffer, offset, buffer.length)
	      var key = buffer.toString('ascii', offset, zero)
	      offset = zero + 1
	
	      if (kind === 0) { // utf-8 textstring
	        var value = buffer.toString('utf8', offset, offset += size)
	        var values = value.split(/\x00/g)
	
	        /*jshint loopfunc:true */
	        values.forEach(function (val) {
	          callback(key, val)
	        })
	      } else if (kind === 1) { // binary (probably artwork)
	        if (key === 'Cover Art (Front)' || key === 'Cover Art (Back)') {
	          var picData = buffer.slice(offset, offset + size)
	
	          var off = 0
	          zero = common.findZero(picData, off, picData.length)
	          var description = picData.toString('utf8', off, zero)
	          off = zero + 1
	
	          var picture = {
	            description: description,
	            data: new Buffer(picData.slice(off))
	          }
	
	          offset += size
	          callback(key, picture)
	        }
	      }
	    }
	    return done()
	  })
	}
	
	}).call(this,require("buffer").Buffer)
	},{"./common":3,"buffer":18,"strtok2":47}],11:[function(require,module,exports){
	(function (Buffer){
	'use strict'
	var events = require('events')
	var strtok = require('strtok2')
	var common = require('./common')
	var sum = common.sum
	
	module.exports = function (stream, callback, done, readDuration) {
	  var innerStream = new events.EventEmitter()
	
	  var pageLength = 0
	  var sampleRate = 0
	  var header
	  var stop = false
	
	  stream.on('end', function () {
	    if (readDuration) {
	      callback('duration', header.pcm_sample_pos / sampleRate)
	      done()
	    }
	  })
	
	  // top level parser that handles the parsing of pages
	  strtok.parse(stream, function (v, cb) {
	    if (!v) {
	      cb.state = 0
	      return new strtok.BufferType(27)
	    }
	
	    if (stop) {
	      return done()
	    }
	
	    switch (cb.state) {
	      case 0: // header
	        header = {
	          type: v.toString('ascii', 0, 4),
	          version: v[4],
	          packet_flag: v[5],
	          pcm_sample_pos: (v.readUInt32LE(10) << 32) + v.readUInt32LE(6),
	          stream_serial_num: strtok.UINT32_LE.get(v, 14),
	          page_number: strtok.UINT32_LE.get(v, 18),
	          check_sum: strtok.UINT32_LE.get(v, 22),
	          segments: v[26]
	        }
	        if (header.type !== 'OggS') {
	          return done(new Error('expected ogg header but was not found'))
	        }
	        cb.pageNumber = header.page_number
	        cb.state++
	        return new strtok.BufferType(header.segments)
	
	      case 1: // segments
	        pageLength = sum(v)
	        cb.state++
	        return new strtok.BufferType(pageLength)
	
	      case 2: // page data
	        innerStream.emit('data', new Buffer(v))
	        cb.state = 0
	        return new strtok.BufferType(27)
	    }
	  })
	
	  // Second level parser that handles the parsing of metadata.
	  // The top level parser emits data that this parser should
	  // handle.
	  strtok.parse(innerStream, function (v, cb) {
	    if (!v) {
	      cb.commentsRead = 0
	      cb.state = 0
	      return new strtok.BufferType(7)
	    }
	
	    switch (cb.state) {
	      case 0: // type
	        if (v.toString() === '\x01vorbis') {
	          cb.state = 6
	          return new strtok.BufferType(23)
	        } else if (v.toString() === '\x03vorbis') {
	          cb.state++
	          return strtok.UINT32_LE
	        } else {
	          return done(new Error('expected vorbis header but found something else'))
	        }
	      break
	
	      case 1: // vendor length
	        cb.state++
	        return new strtok.BufferType(v)
	
	      case 2: // vendor string
	        cb.state++
	        return new strtok.BufferType(4)
	
	      case 3: // user comment list length
	        cb.commentsLength = v.readUInt32LE(0)
	        // no metadata, stop parsing
	        if (cb.commentsLength === 0) return strtok.DONE
	        cb.state++
	        return strtok.UINT32_LE
	
	      case 4: // comment length
	        cb.state++
	        return new strtok.BufferType(v)
	
	      case 5: // comment
	        cb.commentsRead++
	        v = v.toString()
	        var idx = v.indexOf('=')
	        var key = v.slice(0, idx).toUpperCase()
	        var value = v.slice(idx + 1)
	
	        if (key === 'METADATA_BLOCK_PICTURE') {
	          value = common.readVorbisPicture(new Buffer(value, 'base64'))
	        }
	
	        callback(key, value)
	
	        if (cb.commentsRead === cb.commentsLength) {
	          // if we don't want to read the duration
	          // then tell the parent stream to stop
	          stop = !readDuration
	          return strtok.DONE
	        }
	
	        cb.state-- // back to comment length
	        return strtok.UINT32_LE
	
	      case 6: // vorbis info
	        var info = {
	          'version': v.readUInt32LE(0),
	          'channel_mode': v.readUInt8(4),
	          'sample_rate': v.readUInt32LE(5),
	          'bitrate_nominal': v.readUInt32LE(13)
	        }
	        sampleRate = info.sample_rate
	        cb.state = 0
	        return new strtok.BufferType(7)
	    }
	  })
	}
	
	}).call(this,require("buffer").Buffer)
	},{"./common":3,"buffer":18,"events":24,"strtok2":47}],12:[function(require,module,exports){
	var windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
	8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,
	8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,
	169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
	185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
	201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
	217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
	233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,
	248, 249, 250, 251, 252, 253, 254, 255]
	
	function inRange (a, min, max) {
	  return min <= a && a <= max
	}
	
	function codePointToString (cp) {
	  if (cp <= 0xFFFF) {
	    return String.fromCharCode(cp)
	  } else {
	    cp -= 0x10000
	    return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00)
	  }
	}
	
	function singleByteDecoder (bite, index) {
	  if (inRange(bite, 0x00, 0x7F)) {
	    return bite
	  }
	
	  var code_point = index[bite - 0x80]
	  if (code_point === null) {
	    throw Error('invaliding encoding')
	  }
	
	  return code_point
	}
	
	module.exports = function (buffer) {
	  var str = ''
	  for (var i = 0; i < buffer.length; i++) {
	    str += codePointToString(singleByteDecoder(buffer[i], windows1252))
	  }
	  return str
	}
	
	},{}],13:[function(require,module,exports){
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// when used in node, this will actually load the util module we depend on
	// versus loading the builtin util module as happens otherwise
	// this is a bug in node module loading as far as I am concerned
	var util = require('util/');
	
	var pSlice = Array.prototype.slice;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	  else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = stackStartFunction.name;
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function replacer(key, value) {
	  if (util.isUndefined(value)) {
	    return '' + value;
	  }
	  if (util.isNumber(value) && !isFinite(value)) {
	    return value.toString();
	  }
	  if (util.isFunction(value) || util.isRegExp(value)) {
	    return value.toString();
	  }
	  return value;
	}
	
	function truncate(s, n) {
	  if (util.isString(s)) {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	
	function getMessage(self) {
	  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(JSON.stringify(self.expected, replacer), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
	    if (actual.length != expected.length) return false;
	
	    for (var i = 0; i < actual.length; i++) {
	      if (actual[i] !== expected[i]) return false;
	    }
	
	    return true;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!util.isObject(actual) && !util.isObject(expected)) {
	    return actual == expected;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b) {
	  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b)) {
	    return a === b;
	  }
	  var aIsArgs = isArguments(a),
	      bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  var ka = objectKeys(a),
	      kb = objectKeys(b),
	      key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }
	
	  return false;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (util.isString(expected)) {
	    message = expected;
	    expected = null;
	  }
	
	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};
	
	assert.ifError = function(err) { if (err) {throw err;}};
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	},{"util/":52}],14:[function(require,module,exports){
	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}
	
	},{}],15:[function(require,module,exports){
	
	},{}],16:[function(require,module,exports){
	arguments[4][15][0].apply(exports,arguments)
	},{"dup":15}],17:[function(require,module,exports){
	(function (global){
	'use strict';
	
	var buffer = require('buffer');
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"buffer":18}],18:[function(require,module,exports){
	(function (global){
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = require('base64-js')
	var ieee754 = require('ieee754')
	var isArray = require('isarray')
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"base64-js":14,"ieee754":26,"isarray":19}],19:[function(require,module,exports){
	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};
	
	},{}],20:[function(require,module,exports){
	(function (Buffer){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = Buffer.isBuffer;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
	},{"../../is-buffer/index.js":28}],21:[function(require,module,exports){
	var pSlice = Array.prototype.slice;
	var objectKeys = require('./lib/keys.js');
	var isArguments = require('./lib/is_arguments.js');
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return true;
	}
	
	},{"./lib/is_arguments.js":22,"./lib/keys.js":23}],22:[function(require,module,exports){
	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};
	
	},{}],23:[function(require,module,exports){
	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	
	},{}],24:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	
	},{}],25:[function(require,module,exports){
	(function (Buffer){
	var inherits = require('inherits')
	var EventEmitter = require('events').EventEmitter
	
	module.exports = FileStream
	
	function FileStream(file, options) { 
	  if (!(this instanceof FileStream))
	    return new FileStream(file, options)
	  options = options || {}
	  options.output = options.output || 'arraybuffer'
	  this.options = options
	  this._file = file
	  this.readable = true
	  this.offset = options.offset || 0
	  this.paused = false
	  this.chunkSize = this.options.chunkSize || 8128  
	
	  var tags = ['name','size','type','lastModifiedDate']
	  tags.forEach(function (thing) {
	     this[thing] = file[thing]
	   }, this)      
	}
	
	  
	FileStream.prototype._FileReader = function() {
	  var self = this
	  var reader = new FileReader()
	  var outputType = this.options.output
	
	  reader.onloadend = function loaded(event) {
	    var data = event.target.result      
	    if (data instanceof ArrayBuffer)
	      data = new Buffer(new Uint8Array(event.target.result))
	    self.dest.write(data)        
	    if (self.offset < self._file.size) {
	      self.emit('progress', self.offset)
	      !self.paused && self.readChunk(outputType)      
	      return
	    }
	    self._end()
	  }
	  reader.onerror = function(e) {
	    self.emit('error', e.target.error)
	  }
	
	  return reader
	}
	
	FileStream.prototype.readChunk = function(outputType) {
	  var end = this.offset + this.chunkSize
	  var slice = this._file.slice(this.offset, end)
	  this.offset = end
	  if (outputType === 'binary')
	    this.reader.readAsBinaryString(slice)
	  else if (outputType === 'dataurl')
	    this.reader.readAsDataURL(slice)
	  else if (outputType === 'arraybuffer')
	    this.reader.readAsArrayBuffer(slice)
	  else if (outputType === 'text')
	    this.reader.readAsText(slice)  
	}
	
	FileStream.prototype._end = function() {
	  if (this.dest !== console && (!this.options || this.options.end !== false)) {
	    this.dest.end && this.dest.end()
	    this.dest.close && this.dest.close()
	    this.emit('end', this._file.size)
	  }  
	}
	
	FileStream.prototype.pipe = function pipe(dest, options) {
	  this.reader = this._FileReader()
	  this.readChunk(this.options.output)
	  this.dest = dest
	  return dest
	}
	
	FileStream.prototype.pause = function() {
	  this.paused = true
	  return this.offset
	}
	
	FileStream.prototype.resume = function() {
	  this.paused = false
	  this.readChunk(this.options.output)
	}
	
	FileStream.prototype.abort = function() {
	  this.paused = true
	  this.reader.abort()
	  this._end()
	  return this.offset
	}
	
	inherits(FileStream, EventEmitter)
	}).call(this,require("buffer").Buffer)
	},{"buffer":18,"events":24,"inherits":27}],26:[function(require,module,exports){
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}
	
	},{}],27:[function(require,module,exports){
	module.exports = inherits
	
	function inherits (c, p, proto) {
	  proto = proto || {}
	  var e = {}
	  ;[c.prototype, proto].forEach(function (s) {
	    Object.getOwnPropertyNames(s).forEach(function (k) {
	      e[k] = Object.getOwnPropertyDescriptor(s, k)
	    })
	  })
	  c.prototype = Object.create(p.prototype, e)
	  c.super = p
	}
	
	//function Child () {
	//  Child.super.call(this)
	//  console.error([this
	//                ,this.constructor
	//                ,this.constructor === Child
	//                ,this.constructor.super === Parent
	//                ,Object.getPrototypeOf(this) === Child.prototype
	//                ,Object.getPrototypeOf(Object.getPrototypeOf(this))
	//                 === Parent.prototype
	//                ,this instanceof Child
	//                ,this instanceof Parent])
	//}
	//function Parent () {}
	//inherits(Child, Parent)
	//new Child
	
	},{}],28:[function(require,module,exports){
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}
	
	},{}],29:[function(require,module,exports){
	'use strict';
	
	var isStream = module.exports = function (stream) {
		return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
	};
	
	isStream.writable = function (stream) {
		return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
	};
	
	isStream.readable = function (stream) {
		return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
	};
	
	isStream.duplex = function (stream) {
		return isStream.writable(stream) && isStream.readable(stream);
	};
	
	isStream.transform = function (stream) {
		return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
	};
	
	},{}],30:[function(require,module,exports){
	(function (process){
	'use strict';
	
	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}
	
	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}
	
	}).call(this,require('_process'))
	},{"_process":31}],31:[function(require,module,exports){
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };
	
	},{}],32:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	module.exports = Stream;
	
	var EE = require('events').EventEmitter;
	var inherits = require('inherits');
	
	inherits(Stream, EE);
	Stream.Readable = require('readable-stream/readable.js');
	Stream.Writable = require('readable-stream/writable.js');
	Stream.Duplex = require('readable-stream/duplex.js');
	Stream.Transform = require('readable-stream/transform.js');
	Stream.PassThrough = require('readable-stream/passthrough.js');
	
	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;
	
	
	
	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.
	
	function Stream() {
	  EE.call(this);
	}
	
	Stream.prototype.pipe = function(dest, options) {
	  var source = this;
	
	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }
	
	  source.on('data', ondata);
	
	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }
	
	  dest.on('drain', ondrain);
	
	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }
	
	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    dest.end();
	  }
	
	
	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    if (typeof dest.destroy === 'function') dest.destroy();
	  }
	
	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }
	
	  source.on('error', onerror);
	  dest.on('error', onerror);
	
	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);
	
	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);
	
	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);
	
	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);
	
	    dest.removeListener('close', cleanup);
	  }
	
	  source.on('end', cleanup);
	  source.on('close', cleanup);
	
	  dest.on('close', cleanup);
	
	  dest.emit('pipe', source);
	
	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};
	
	},{"events":24,"inherits":33,"readable-stream/duplex.js":35,"readable-stream/passthrough.js":42,"readable-stream/readable.js":43,"readable-stream/transform.js":44,"readable-stream/writable.js":45}],33:[function(require,module,exports){
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}
	
	},{}],34:[function(require,module,exports){
	arguments[4][19][0].apply(exports,arguments)
	},{"dup":19}],35:[function(require,module,exports){
	module.exports = require("./lib/_stream_duplex.js")
	
	},{"./lib/_stream_duplex.js":36}],36:[function(require,module,exports){
	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.
	
	'use strict';
	
	/*<replacement>*/
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/
	
	module.exports = Duplex;
	
	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/
	
	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/
	
	var Readable = require('./_stream_readable');
	var Writable = require('./_stream_writable');
	
	util.inherits(Duplex, Readable);
	
	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	
	  Readable.call(this, options);
	  Writable.call(this, options);
	
	  if (options && options.readable === false) this.readable = false;
	
	  if (options && options.writable === false) this.writable = false;
	
	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
	
	  this.once('end', onend);
	}
	
	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;
	
	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}
	
	function onEndNT(self) {
	  self.end();
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	},{"./_stream_readable":38,"./_stream_writable":40,"core-util-is":20,"inherits":33,"process-nextick-args":30}],37:[function(require,module,exports){
	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.
	
	'use strict';
	
	module.exports = PassThrough;
	
	var Transform = require('./_stream_transform');
	
	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/
	
	util.inherits(PassThrough, Transform);
	
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	
	  Transform.call(this, options);
	}
	
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};
	},{"./_stream_transform":39,"core-util-is":20,"inherits":33}],38:[function(require,module,exports){
	(function (process){
	'use strict';
	
	module.exports = Readable;
	
	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/
	
	/*<replacement>*/
	var isArray = require('isarray');
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Readable.ReadableState = ReadableState;
	
	/*<replacement>*/
	var EE = require('events').EventEmitter;
	
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = require('st' + 'ream');
	  } catch (_) {} finally {
	    if (!Stream) Stream = require('events').EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = require('buffer').Buffer;
	/*<replacement>*/
	var bufferShim = require('buffer-shims');
	/*</replacement>*/
	
	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/
	
	/*<replacement>*/
	var debugUtil = require('util');
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/
	
	var BufferList = require('./internal/streams/BufferList');
	var StringDecoder;
	
	util.inherits(Readable, Stream);
	
	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	
	function ReadableState(options, stream) {
	  Duplex = Duplex || require('./_stream_duplex');
	
	  options = options || {};
	
	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
	
	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;
	
	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;
	
	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;
	
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	
	function Readable(options) {
	  Duplex = Duplex || require('./_stream_duplex');
	
	  if (!(this instanceof Readable)) return new Readable(options);
	
	  this._readableState = new ReadableState(options, this);
	
	  // legacy
	  this.readable = true;
	
	  if (options && typeof options.read === 'function') this._read = options.read;
	
	  Stream.call(this);
	}
	
	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	
	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }
	
	  return readableAddChunk(this, state, chunk, encoding, false);
	};
	
	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};
	
	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};
	
	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }
	
	      if (!addToFront) state.reading = false;
	
	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
	
	          if (state.needReadable) emitReadable(stream);
	        }
	      }
	
	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }
	
	  return needMoreData(state);
	}
	
	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}
	
	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};
	
	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}
	
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}
	
	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	
	  if (n !== 0) state.emittedReadable = false;
	
	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }
	
	  n = howMuchToRead(n, state);
	
	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }
	
	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.
	
	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);
	
	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }
	
	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	
	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;
	
	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }
	
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;
	
	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	
	  if (ret !== null) this.emit('data', ret);
	
	  return ret;
	};
	
	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}
	
	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	
	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}
	
	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}
	
	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}
	
	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}
	
	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}
	
	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};
	
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
	
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	
	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);
	
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }
	
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	
	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);
	
	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);
	
	    cleanedUp = true;
	
	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	
	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }
	
	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	
	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);
	
	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }
	
	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);
	
	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	
	  return dest;
	};
	
	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	
	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	
	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;
	
	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;
	
	    if (!dest) dest = state.pipes;
	
	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }
	
	  // slow case. multiple pipe destinations.
	
	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	
	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this);
	    }return this;
	  }
	
	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;
	
	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	
	  dest.emit('unpipe', this);
	
	  return this;
	};
	
	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	
	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }
	
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}
	
	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};
	
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}
	
	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }
	
	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};
	
	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}
	
	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;
	
	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }
	
	    self.push(null);
	  });
	
	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);
	
	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
	
	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });
	
	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }
	
	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });
	
	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	
	  return self;
	};
	
	// exposed for testing purposes only.
	Readable._fromList = fromList;
	
	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;
	
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }
	
	  return ret;
	}
	
	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}
	
	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	function endReadable(stream) {
	  var state = stream._readableState;
	
	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
	
	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}
	
	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	}).call(this,require('_process'))
	},{"./_stream_duplex":36,"./internal/streams/BufferList":41,"_process":31,"buffer":18,"buffer-shims":17,"core-util-is":20,"events":24,"inherits":33,"isarray":34,"process-nextick-args":30,"string_decoder/":46,"util":15}],39:[function(require,module,exports){
	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.
	
	'use strict';
	
	module.exports = Transform;
	
	var Duplex = require('./_stream_duplex');
	
	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/
	
	util.inherits(Transform, Duplex);
	
	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };
	
	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}
	
	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;
	
	  var cb = ts.writecb;
	
	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
	
	  ts.writechunk = null;
	  ts.writecb = null;
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  cb(er);
	
	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	
	  Duplex.call(this, options);
	
	  this._transformState = new TransformState(this);
	
	  var stream = this;
	
	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;
	
	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }
	
	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}
	
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};
	
	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};
	
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};
	
	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	
	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	
	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;
	
	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');
	
	  if (ts.transforming) throw new Error('Calling transform done when still transforming');
	
	  return stream.push(null);
	}
	},{"./_stream_duplex":36,"core-util-is":20,"inherits":33}],40:[function(require,module,exports){
	(function (process){
	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.
	
	'use strict';
	
	module.exports = Writable;
	
	/*<replacement>*/
	var processNextTick = require('process-nextick-args');
	/*</replacement>*/
	
	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Writable.WritableState = WritableState;
	
	/*<replacement>*/
	var util = require('core-util-is');
	util.inherits = require('inherits');
	/*</replacement>*/
	
	/*<replacement>*/
	var internalUtil = {
	  deprecate: require('util-deprecate')
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = require('st' + 'ream');
	  } catch (_) {} finally {
	    if (!Stream) Stream = require('events').EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = require('buffer').Buffer;
	/*<replacement>*/
	var bufferShim = require('buffer-shims');
	/*</replacement>*/
	
	util.inherits(Writable, Stream);
	
	function nop() {}
	
	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}
	
	function WritableState(options, stream) {
	  Duplex = Duplex || require('./_stream_duplex');
	
	  options = options || {};
	
	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
	
	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;
	
	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;
	
	  // a flag to see when we're in the middle of a write.
	  this.writing = false;
	
	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;
	
	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };
	
	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;
	
	  // the amount that is being written when _write is called.
	  this.writelen = 0;
	
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;
	
	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;
	
	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;
	
	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	
	  // count buffered requests
	  this.bufferedRequestCount = 0;
	
	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	
	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	
	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();
	
	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;
	
	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}
	
	function Writable(options) {
	  Duplex = Duplex || require('./_stream_duplex');
	
	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.
	
	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }
	
	  this._writableState = new WritableState(options, this);
	
	  // legacy.
	  this.writable = true;
	
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	
	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }
	
	  Stream.call(this);
	}
	
	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};
	
	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}
	
	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}
	
	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
	
	  if (typeof cb !== 'function') cb = nop;
	
	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }
	
	  return ret;
	};
	
	Writable.prototype.cork = function () {
	  var state = this._writableState;
	
	  state.corked++;
	};
	
	Writable.prototype.uncork = function () {
	  var state = this._writableState;
	
	  if (state.corked) {
	    state.corked--;
	
	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}
	
	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;
	
	  state.length += len;
	
	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	
	  return ret;
	}
	
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);
	
	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}
	
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	
	  onwriteStateUpdate(state);
	
	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);
	
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	
	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}
	
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}
	
	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}
	
	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	
	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	
	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }
	
	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
	
	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }
	
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	
	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	
	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};
	
	Writable.prototype._writev = null;
	
	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;
	
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
	
	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	
	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};
	
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	
	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}
	
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}
	
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	
	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;
	
	  this.next = null;
	  this.entry = null;
	
	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	}).call(this,require('_process'))
	},{"./_stream_duplex":36,"_process":31,"buffer":18,"buffer-shims":17,"core-util-is":20,"events":24,"inherits":33,"process-nextick-args":30,"util-deprecate":49}],41:[function(require,module,exports){
	'use strict';
	
	var Buffer = require('buffer').Buffer;
	/*<replacement>*/
	var bufferShim = require('buffer-shims');
	/*</replacement>*/
	
	module.exports = BufferList;
	
	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}
	
	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};
	
	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};
	
	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};
	
	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};
	
	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};
	
	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};
	},{"buffer":18,"buffer-shims":17}],42:[function(require,module,exports){
	module.exports = require("./lib/_stream_passthrough.js")
	
	},{"./lib/_stream_passthrough.js":37}],43:[function(require,module,exports){
	(function (process){
	var Stream = (function (){
	  try {
	    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = require('./lib/_stream_readable.js');
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = require('./lib/_stream_writable.js');
	exports.Duplex = require('./lib/_stream_duplex.js');
	exports.Transform = require('./lib/_stream_transform.js');
	exports.PassThrough = require('./lib/_stream_passthrough.js');
	
	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}
	
	}).call(this,require('_process'))
	},{"./lib/_stream_duplex.js":36,"./lib/_stream_passthrough.js":37,"./lib/_stream_readable.js":38,"./lib/_stream_transform.js":39,"./lib/_stream_writable.js":40,"_process":31}],44:[function(require,module,exports){
	module.exports = require("./lib/_stream_transform.js")
	
	},{"./lib/_stream_transform.js":39}],45:[function(require,module,exports){
	module.exports = require("./lib/_stream_writable.js")
	
	},{"./lib/_stream_writable.js":40}],46:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var Buffer = require('buffer').Buffer;
	
	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }
	
	
	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}
	
	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }
	
	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};
	
	
	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;
	
	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;
	
	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }
	
	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);
	
	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
	
	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;
	
	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }
	
	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);
	
	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }
	
	  charStr += buffer.toString(this.encoding, 0, end);
	
	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }
	
	  // or just emit the charStr
	  return charStr;
	};
	
	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;
	
	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];
	
	    // See http://en.wikipedia.org/wiki/UTF-8#Description
	
	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }
	
	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }
	
	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};
	
	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);
	
	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }
	
	  return res;
	};
	
	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}
	
	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}
	
	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}
	
	},{"buffer":18}],47:[function(require,module,exports){
	// A fast streaming parser library.
	
	var assert = require('assert');
	var Buffer = require('buffer').Buffer;
	
	// Buffer for parse() to handle types that span more than one buffer
	var SPANNING_BUF = new Buffer(1024);
	
	// Possibly call flush()
	var maybeFlush = function(b, o, len, flush) {
	    if (o + len > b.length) {
	        if (typeof(flush) !== 'function') {
	            throw new Error(
	                'Buffer out of space and no valid flush() function found'
	            );
	        }
	
	        flush(b, o);
	
	        return 0;
	    }
	
	    return o;
	};
	
	// Sentinel types
	
	var DEFER = {};
	exports.DEFER = DEFER;
	
	var DONE = {};
	exports.DONE = DONE;
	
	// Primitive types
	
	var UINT8 = {
	    len : 1,
	    get : function(buf, off) {
	        return buf[off];
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= 0 && v <= 0xff);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.UINT8 = UINT8;
	
	var UINT16_LE = {
	    len : 2,
	    get : function(buf, off) {
	        return buf[off] | (buf[off + 1] << 8);
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= 0 && v <= 0xffff);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = v & 0xff;
	        b[no + 1] = (v >>> 8) & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.UINT16_LE = UINT16_LE;
	
	var UINT16_BE = {
	    len : 2,
	    get : function(buf, off) {
	        return (buf[off] << 8) | buf[off + 1];
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= 0 && v <= 0xffff);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = (v >>> 8) & 0xff;
	        b[no + 1] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.UINT16_BE = UINT16_BE;
	
	var UINT32_LE = {
	    len : 4,
	    get : function(buf, off) {
	        // Shifting the MSB by 24 directly causes it to go negative if its
	        // last bit is high, so we instead shift by 23 and multiply by 2.
	        // Also, using binary OR to count the MSB if its last bit is high
	        // causes the value to go negative. Use addition there.
	        return (buf[off] | (buf[off + 1] << 8) | (buf[off + 2] << 16)) +
	               ((buf[off + 3] << 23) * 2);
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= 0 && v <= 0xffffffff);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = v & 0xff;
	        b[no + 1] = (v >>> 8) & 0xff;
	        b[no + 2] = (v >>> 16) & 0xff;
	        b[no + 3] = (v >>> 24) & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.UINT32_LE = UINT32_LE;
	
	var UINT32_BE = {
	    len : 4,
	    get : function(buf, off) {
	        // See comments in UINT32_LE.get()
	        return ((buf[off] << 23) * 2) +
	               ((buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3]);
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= 0 && v <= 0xffffffff);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = (v >>> 24) & 0xff;
	        b[no + 1] = (v >>> 16) & 0xff;
	        b[no + 2] = (v >>> 8) & 0xff;
	        b[no + 3] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.UINT32_BE = UINT32_BE;
	
	var INT8 = {
	    len : 1,
	    get : function(buf, off)  {
	        var v = UINT8.get(buf, off);
	        return ((v & 0x80) === 0x80) ?
	            (-128 + (v & 0x7f)) :
	            v;
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= -128 && v <= 127);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.INT8 = INT8;
	
	var INT16_BE = {
	    len : 2,
	    get : function(buf, off)  {
	        var v = UINT16_BE.get(buf, off);
	        return ((v & 0x8000) === 0x8000) ?
	            (-32768 + (v & 0x7fff)) :
	            v;
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= -32768 && v <= 32767);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = ((v & 0xffff) >>> 8) & 0xff;
	        b[no + 1] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.INT16_BE = INT16_BE;
	
	var INT32_BE = {
	    len : 4,
	    get : function(buf, off)  {
	        // We cannot check for 0x80000000 directly, as this always returns
	        // false. Instead, check for the two's-compliment value, which
	        // behaves as expected. Also, we cannot subtract our value all at
	        // once, so do it in two steps to avoid sign busting.
	        var v = UINT32_BE.get(buf, off);
	        return ((v & 0x80000000) === -2147483648) ?
	            ((v & 0x7fffffff) - 1073741824 - 1073741824) :
	            v;
	    },
	    put : function(b, o, v, flush) {
	        assert.equal(typeof o, 'number');
	        assert.equal(typeof v, 'number');
	        assert.ok(v >= -2147483648 && v <= 2147483647);
	        assert.ok(o >= 0);
	        assert.ok(this.len <= b.length);
	
	        var no = maybeFlush(b, o, this.len, flush);
	        b[no] = (v >>> 24) & 0xff;
	        b[no + 1] = (v >>> 16) & 0xff;
	        b[no + 2] = (v >>> 8) & 0xff;
	        b[no + 3] = v & 0xff;
	
	        return (no - o) + this.len;
	    }
	};
	exports.INT32_BE = INT32_BE;
	
	// Complex types
	//
	// These types are intended to allow callers to re-use them by manipulating
	// the 'len' and other properties directly.
	
	var IgnoreType = function(l) {
	  this.len = l;
	  this.get = function() {
	    return null;
	  };
	};
	exports.IgnoreType = IgnoreType;
	
	
	var BufferType = function(l) {
	    var self = this;
	
	    self.len = l;
	
	    self.get = function(buf, off) {
	        return buf.slice(off, off + this.len);
	    };
	};
	exports.BufferType = BufferType;
	
	var StringType = function(l, e) {
	    var self = this;
	
	    self.len = l;
	
	    self.encoding = e;
	
	    self.get = function(buf, off) {
	        return buf.toString(e, off, off + this.len);
	    };
	};
	exports.StringType = StringType;
	
	// Parse a stream
	var parse = function(s, cb) {
	    // Type of data that we're to parse next; if DEFER, we're awaiting
	    // an invocation of typeCallback
	    var type = DEFER;
	
	    // Data that we've seen but not yet processed / handed off to cb; first
	    // valid byte to process is always bufs[0][bufOffset]
	    var bufs = [];
	    var bufsLen = 0;
	    var bufOffset = 0;
	    var ignoreLen = 0;
	
	    // Callback for FSM to tell us what type to expect next
	    var typeCallback = function(t) {
	        if (type !== DEFER) {
	            throw new Error('refusing to overwrite non-DEFER type');
	        }
	
	        type = t;
	
	        emitData();
	    };
	
	    // Process data that we have accumulated so far, emitting any type(s)
	    // collected. This is the main parsing loop.
	    //
	    // Out strategy for handling buffers is to shift them off of the bufs[]
	    // array until we have enough accumulated to account for type.len bytes.
	    var emitData = function() {
	        var b;
	        while (type !== DONE && type !== DEFER && bufsLen >= type.len) {
	            b = bufs[0];
	            var bo = bufOffset;
	
	            assert.ok(bufOffset >= 0 && bufOffset < b.length);
	
	            if ((b.length - bufOffset) < type.len) {
	                if (SPANNING_BUF.length < type.len) {
	                    SPANNING_BUF = new Buffer(
	                        Math.pow(2, Math.ceil(Math.log(type.len) / Math.log(2)))
	                    );
	                }
	
	                b = SPANNING_BUF;
	                bo = 0;
	
	                var bytesCopied = 0;
	                while (bytesCopied < type.len && bufs.length > 0) {
	                    var bb = bufs[0];
	                    var copyLength = Math.min(type.len - bytesCopied, bb.length - bufOffset);
	
	                    // TODO: Manually copy bytes if we don't need many of them.
	                    //       Bouncing down into C++ land to invoke
	                    //       Buffer.copy() is expensive enough that we
	                    //       shouldnt' do it unless we have a lot of dato to
	                    //       copy.
	                    bb.copy(
	                        b,
	                        bytesCopied,
	                        bufOffset,
	                        bufOffset + copyLength
	                    );
	
	                    bytesCopied += copyLength;
	
	                    if (copyLength < (bb.length - bufOffset)) {
	                        assert.equal(bytesCopied, type.len);
	                        bufOffset += copyLength;
	                    } else {
	                        assert.equal(bufOffset + copyLength, bb.length);
	                        bufs.shift();
	                        bufOffset = 0;
	                    }
	                }
	
	                assert.equal(bytesCopied, type.len);
	            } else if ((b.length - bufOffset) === type.len) {
	                bufs.shift();
	                bufOffset = 0;
	            } else {
	                bufOffset += type.len;
	            }
	
	            bufsLen -= type.len;
	            type = cb(type.get(b, bo), typeCallback);
	            if (type instanceof IgnoreType) {
	              ignoreLen += type.len;
	              if (ignoreLen >= bufsLen) {
	                // clear all buffers
	                ignoreLen -= bufsLen;
	                bufsLen = 0;
	                bufs = [];
	                bufOffset = 0;
	              } else if (ignoreLen < bufs[0].length - bufOffset) {
	                // set bufOffset correctly
	                bufsLen -= ignoreLen;
	                bufOffset += ignoreLen;
	                ignoreLen = 0;
	              } else if (bufsLen > 0) {
	                // shift some buffers and set bufOffset correctly.
	                bufsLen -= ignoreLen;
	                ignoreLen += bufOffset;
	                while (ignoreLen >= bufs[0].length) {
	                  ignoreLen -= bufs.shift().length;
	                }
	                bufOffset = ignoreLen;
	                ignoreLen = 0;
	              }
	              type = cb(type.get(), typeCallback);
	            }
	        }
	
	        if (type === DONE) {
	            s.removeListener('data', dataListener);
	
	            // Pump all of the buffers that we already saw back through the
	            // stream; the protocol layer will have set up listeners for this
	            // event if it cares about the remaining data.
	            while (bufs.length > 0) {
	                b = bufs.shift();
	
	                if (bufOffset > 0) {
	                    b = b.slice(bufOffset, b.length);
	                    bufOffset = 0;
	                }
	
	                s.emit('data', b);
	            }
	        }
	    };
	
	    // Listen for data from our stream
	    var dataListener = function(d) {
	        if (d.length <= ignoreLen) {
	          // ignore this data
	          assert.strictEqual(bufsLen, 0);
	          assert.strictEqual(bufs.length, 0);
	          ignoreLen -= d.length;
	        } else if (ignoreLen > 0) {
	          assert.strictEqual(bufsLen, 0);
	          bufsLen = d.length - ignoreLen;
	          bufs.push(d.slice(ignoreLen));
	          ignoreLen = 0;
	          emitData();
	        } else {
	          bufs.push(d);
	          bufsLen += d.length;
	          emitData();
	        }
	    };
	
	    // Get the initial type
	    type = cb(undefined, typeCallback);
	    if (type !== DONE) {
	        s.on('data', dataListener);
	    }
	};
	exports.parse = parse;
	
	},{"assert":13,"buffer":18}],48:[function(require,module,exports){
	(function (process){
	var Stream = require('stream')
	
	// through
	//
	// a stream that does nothing but re-emit the input.
	// useful for aggregating a series of changing but not ending streams into one stream)
	
	exports = module.exports = through
	through.through = through
	
	//create a readable writable stream.
	
	function through (write, end, opts) {
	  write = write || function (data) { this.queue(data) }
	  end = end || function () { this.queue(null) }
	
	  var ended = false, destroyed = false, buffer = [], _ended = false
	  var stream = new Stream()
	  stream.readable = stream.writable = true
	  stream.paused = false
	
	//  stream.autoPause   = !(opts && opts.autoPause   === false)
	  stream.autoDestroy = !(opts && opts.autoDestroy === false)
	
	  stream.write = function (data) {
	    write.call(this, data)
	    return !stream.paused
	  }
	
	  function drain() {
	    while(buffer.length && !stream.paused) {
	      var data = buffer.shift()
	      if(null === data)
	        return stream.emit('end')
	      else
	        stream.emit('data', data)
	    }
	  }
	
	  stream.queue = stream.push = function (data) {
	//    console.error(ended)
	    if(_ended) return stream
	    if(data === null) _ended = true
	    buffer.push(data)
	    drain()
	    return stream
	  }
	
	  //this will be registered as the first 'end' listener
	  //must call destroy next tick, to make sure we're after any
	  //stream piped from here.
	  //this is only a problem if end is not emitted synchronously.
	  //a nicer way to do this is to make sure this is the last listener for 'end'
	
	  stream.on('end', function () {
	    stream.readable = false
	    if(!stream.writable && stream.autoDestroy)
	      process.nextTick(function () {
	        stream.destroy()
	      })
	  })
	
	  function _end () {
	    stream.writable = false
	    end.call(stream)
	    if(!stream.readable && stream.autoDestroy)
	      stream.destroy()
	  }
	
	  stream.end = function (data) {
	    if(ended) return
	    ended = true
	    if(arguments.length) stream.write(data)
	    _end() // will emit or queue
	    return stream
	  }
	
	  stream.destroy = function () {
	    if(destroyed) return
	    destroyed = true
	    ended = true
	    buffer.length = 0
	    stream.writable = stream.readable = false
	    stream.emit('close')
	    return stream
	  }
	
	  stream.pause = function () {
	    if(stream.paused) return
	    stream.paused = true
	    return stream
	  }
	
	  stream.resume = function () {
	    if(stream.paused) {
	      stream.paused = false
	      stream.emit('resume')
	    }
	    drain()
	    //may have become paused again,
	    //as drain emits 'data'.
	    if(!stream.paused)
	      stream.emit('drain')
	    return stream
	  }
	  return stream
	}
	
	
	}).call(this,require('_process'))
	},{"_process":31,"stream":32}],49:[function(require,module,exports){
	(function (global){
	
	/**
	 * Module exports.
	 */
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],50:[function(require,module,exports){
	arguments[4][33][0].apply(exports,arguments)
	},{"dup":33}],51:[function(require,module,exports){
	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}
	},{}],52:[function(require,module,exports){
	(function (process,global){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = require('./support/isBuffer');
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = require('inherits');
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./support/isBuffer":51,"_process":31,"inherits":50}]},{},[2])(2)
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(34).Buffer, __webpack_require__(38).setImmediate))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(35)
	var ieee754 = __webpack_require__(36)
	var isArray = __webpack_require__(37)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr((len * 3 / 4) - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class AudioUtil {
	    static strip(result) {
	        // Remove any brackets (regular or square) from the ID3
	        // Some CD ripping software likes to advertise itself...
	        var tags = {};
	        if (!result.title || !result.artist)
	            return undefined;
	        tags.title = AudioUtil.stripTag(result.title);
	        tags.artist = AudioUtil.stripTag(result.artist[0]);
	        tags.album = AudioUtil.stripTag(result.album);
	        return tags;
	    }
	    static stripTag(data) {
	        return data.replace(/ *[\(\[][^)]*[\)\]] */g, "");
	    }
	    static lowPass(buffer, view, accuracy, start, end) {
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
	    }
	    static getExtro(buffer, duration) {
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
	    }
	}
	exports.AudioUtil = AudioUtil;
	class HTMLAudio {
	    constructor(path) {
	        this.aud = new Audio(path);
	        this.aud.preload = "auto";
	    }
	    playing() {
	        if (!this.aud)
	            return false;
	        return !this.aud.paused;
	    }
	    play() {
	        if (!this.aud)
	            return;
	        this.aud.play();
	    }
	    pause() {
	        if (!this.aud)
	            return;
	        this.aud.pause();
	    }
	    seek(time) {
	        if (!this.aud)
	            return;
	        this.aud.currentTime = time;
	    }
	    unload() {
	        if (!this.aud)
	            return;
	        this.aud.pause();
	        this.aud.src = "";
	        delete this.aud;
	    }
	    onPlay(callback) {
	        this.aud.onplaying = callback;
	    }
	    onPause(callback) {
	        this.aud.onpause = callback;
	    }
	    onSeek(callback) {
	        this.aud.onseeked = callback;
	    }
	    onEnd(callback) {
	        this.aud.onended = callback;
	    }
	    time() {
	        return this.aud.currentTime;
	    }
	}
	exports.HTMLAudio = HTMLAudio;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let TimecodePipe = class TimecodePipe {
	    transform(value, decimal) {
	        // value = parseFloat(value);
	        return (value / 60 | 0) + ":" + ("00" + (value % 60 | 0)).substr(-2) + (decimal ? "." + (value % 1 + "0000").substr(2, 3) : '');
	    }
	};
	TimecodePipe = __decorate([
	    core_1.Pipe({ name: 'timecode' })
	], TimecodePipe);
	exports.TimecodePipe = TimecodePipe;
	let LyricsPipe = class LyricsPipe {
	    transform(lyrics, getTotal) {
	        var matches = new RegExp("\\b((" + window['$config'].banned_words.join("|") + ")[^\\s\\b,.\<\>]*)\\b", "igm"), match;
	        var totalM = lyrics.match(matches);
	        var total = totalM == null ? 0 : totalM.length;
	        lyrics = lyrics.replace(matches, "<b>$1</b>");
	        return getTotal ? total : lyrics; // [lyrics, total];
	    }
	};
	LyricsPipe = __decorate([
	    core_1.Pipe({ name: 'lyrics' })
	], LyricsPipe);
	exports.LyricsPipe = LyricsPipe;
	let NL2BRPipe = class NL2BRPipe {
	    transform(value) {
	        return value.split("\n").join("<br />\n");
	    }
	};
	NL2BRPipe = __decorate([
	    core_1.Pipe({ name: 'nl2br' })
	], NL2BRPipe);
	exports.NL2BRPipe = NL2BRPipe;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const dialogue_service_1 = __webpack_require__(29);
	const nerve_service_1 = __webpack_require__(30);
	__webpack_require__(44);
	__webpack_require__(48);
	let AppComponent = class AppComponent {
	    constructor(nerveService, dialogueService) {
	        this.nerveService = nerveService;
	        this.dialogueService = dialogueService;
	        this.user = {}; // { name: 'Dummy User', admin: true, moderator: true };
	        this.stats = {};
	        this.loaded = false;
	    }
	    ngOnInit() {
	        var isChromium = window['chrome'], winNav = window.navigator, vendorName = winNav.vendor, isOpera = winNav.userAgent.indexOf("OPR") > -1, isIEedge = winNav.userAgent.indexOf("Edge") > -1, isFirefox = winNav.userAgent.indexOf("Firefox") > -1, isIOSChrome = winNav.userAgent.match("CriOS");
	        if (!(isChromium || isFirefox || isIEedge) || isOpera || isIOSChrome) {
	            setTimeout(() => this.dialogueService.showError("Browser Error", "To use Nerve, you need to open it on Firefox or Chrome. This is because Microsoft and Apple don't support the music format we use.", "BAD-BROWSER", () => window.location.reload()), 1);
	            return;
	        }
	        var config = this.nerveService.handshake().then(data => {
	            if (!data.authorized) {
	                location.href = data.redirect;
	                return;
	            }
	            this.loaded = true;
	            this.user = data.user;
	            this.stats = data.stats;
	            this.csrf_key = data.key;
	        }).catch((error) => {
	            this.dialogueService.showError("Fatal Error", "Could not connect to the backend.", "HANDSHAKE-FAIL", () => window.location.reload());
	        });
	    }
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(56)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService, dialogue_service_1.DialogueService])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
44,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<dialogue></dialogue>\n<div *ngIf=\"loaded\" id=\"sidebar\">\n\t<img class=\"logo\" src=\"" + __webpack_require__(57) + "\" style=\"padding-left: 5px\" />\n\t<b>Nerve</b>\n\t<br /><br />\n\t<ul class=\"main-menu\">\n\t\t<li><a routerLink=\"/library\" routerLinkActive=\"current\">\n\t\t\t<img src=\"" + __webpack_require__(58) + "\" />\n\t\t\tLibrary\n\t\t</a></li>\n\t\t<li><a routerLink=\"/upload\" routerLinkActive=\"current\">\n\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n\t\t\tUpload Songs\n\t\t</a></li>\n\t\t<li><a routerLink=\"/browse\" routerLinkActive=\"current\">\n\t\t\t<img src=\"" + __webpack_require__(59) + "\" style=\"width: 43%; margin-bottom: 5px; padding-right: 2px\" />\n\t\t\tBrowse\n\t\t</a></li>\n\t\t<li *ngIf=\"user.moderator\" [attr.data-balloon]=\"stats.pending_moderation\"><a routerLink=\"/moderation\" routerLinkActive=\"current\">\n\t\t\t<img src=\"" + __webpack_require__(60) + "\" style=\"width: 43%; margin-bottom: 5px; padding-right: 2px\" />\n\t\t\tModeration\n\t\t</a></li>\n\t\t<li><a href=\"https://wiki.insanityradio.com/wiki/Nerve/Manual\" routerLinkActive=\"current\">\n\t\t\t<i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n\t\t\tHelp &amp; Manual\n\t\t</a></li>\n\t</ul>\n\t<span>{{ stats.total_uploads }} tracks</span>\n\t<div class=\"credits\">\n\t\tProudly produced in-house in England\n\t</div>\n</div>\n<div *ngIf=\"loaded\" id=\"top\">\n\t<div class=\"profile\">\n\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;\n\t\t{{ user.name }} | <a [href]=\"'/api/logout?token=' + csrf_key\">Log Out</a>\n\t</div>\n</div>\n\n<router-outlet></router-outlet>\n";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/logo.68c0ba73b7ece4bac1ca6326b3f45142.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/library.8d27d40aa65ce715911043298efad21e.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/browse.7e1895579e24d47eb9e48ecd33614d6f.svg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/moderate.f83a736af5a4a3d5f1edbf34cdb860ec.svg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const dialogue_service_1 = __webpack_require__(29);
	class DialogueStack {
	    constructor() {
	        this.stack = [];
	    }
	    add(dialogue) {
	        this.stack.push(dialogue);
	    }
	    pop() {
	        return this.stack.pop();
	    }
	    length() {
	        return this.stack.length;
	    }
	}
	let DialogueComponent = class DialogueComponent {
	    constructor(_dialogue) {
	        this._dialogue = _dialogue;
	        this.dialogue = null;
	    }
	    ngOnInit() {
	        this.stack = new DialogueStack();
	        this._dialogue.setComponent(this);
	    }
	    show(dialogue) {
	        this.stack.add(dialogue);
	        if (!this.dialogue) {
	            this.close();
	        }
	    }
	    close() {
	        this.dialogue = this.stack.pop();
	    }
	    get opacity() {
	        var i = this.stack.length() + (this.dialogue != undefined ? 1 : 0);
	        return i == 0 ? 0 : 1 - (5 / (2 * i + 4));
	    }
	    getDefaultAction() {
	        return () => {
	            this.close();
	        };
	    }
	};
	DialogueComponent = __decorate([
	    core_1.Component({
	        selector: 'dialogue',
	        template: __webpack_require__(62)
	    }),
	    __metadata("design:paramtypes", [dialogue_service_1.DialogueService])
	], DialogueComponent);
	exports.DialogueComponent = DialogueComponent;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"coverall\" id=\"error-container\" *ngIf=\"dialogue != undefined\" [style.backgroundColor]=\"'rgba(0, 0, 0, ' + opacity + ')'\">\n\n\t<div class=\"all\" id=\"error-view\" *ngIf=\"dialogue.type == 'ErrorDialogue'\">\n\n\t\t<div>\n\t\t\t<h1 id=\"error-title\">{{ dialogue.title }}</h1>\n\t\t\t<p id=\"error-message\">{{ dialogue.message }}</p>\n\n\t\t\t<button (click)=\"dialogue.close()\" id=\"error-close\" class=\"button\" style=\"float: right\">Okay</button>\n\n\t\t\t<em id=\"error-code\">{{ dialogue.code }}</em>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"all\" id=\"confirm-view\" *ngIf=\"dialogue.type == 'ConfirmDialogue'\">\n\n\t\t<div>\n\t\t\t<h1 id=\"confirm-title\">{{ dialogue.title }}</h1>\n\t\t\t<p id=\"confirm-message\">{{ dialogue.message }}</p>\n\n\t\t\t<button (click)=\"dialogue.close()\" id=\"confirm-close\" class=\"button grey\" style=\"float: right\">Cancel</button>\n\t\t\t<button (click)=\"dialogue.confirm()\" id=\"confirm-go\" class=\"button\" style=\"float: right\">Confirm</button>\n\n\t\t</div>\n\n\t</div>\n</div>";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const router_1 = __webpack_require__(64);
	const upload_component_1 = __webpack_require__(95);
	const track_component_1 = __webpack_require__(98);
	const library_component_1 = __webpack_require__(100);
	const library_search_component_1 = __webpack_require__(102);
	const library_track_component_1 = __webpack_require__(104);
	const my_uploads_component_1 = __webpack_require__(106);
	const upload_song_component_1 = __webpack_require__(108);
	const copy_song_component_1 = __webpack_require__(110);
	const moderation_component_1 = __webpack_require__(112);
	const moderation_track_component_1 = __webpack_require__(114);
	const moderation_pending_component_1 = __webpack_require__(116);
	const music_policy_component_1 = __webpack_require__(118);
	const appRoutes = [
	    { path: '', redirectTo: 'upload', pathMatch: 'full' },
	    { path: 'upload', component: upload_component_1.UploadComponent, children: [
	            { path: 'track/:id', component: track_component_1.TrackComponent },
	            { path: 'list', component: my_uploads_component_1.MyUploadsComponent },
	            { path: 'song', component: upload_song_component_1.UploadSongComponent },
	            { path: 'copy', component: copy_song_component_1.CopySongComponent },
	            { path: '', redirectTo: 'list', pathMatch: 'full' }
	        ] },
	    { path: 'moderation', component: moderation_component_1.ModerationComponent, children: [
	            { path: 'track/:id', component: moderation_track_component_1.ModerationTrackComponent },
	            { path: 'pending', component: moderation_pending_component_1.ModerationPendingComponent },
	            { path: '', redirectTo: 'pending', pathMatch: 'full' }
	        ] },
	    { path: 'library', component: library_component_1.LibraryComponent, children: [
	            { path: 'track/:id', component: library_track_component_1.LibraryTrackComponent },
	            { path: 'search', component: library_search_component_1.LibrarySearchComponent },
	            { path: '', redirectTo: 'search', pathMatch: 'full' }
	        ] },
	    { path: 'music-policy', component: music_policy_component_1.MusicPolicyComponent, pathMatch: 'full' }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	let UploadComponent = class UploadComponent {
	    constructor(route, router) {
	        this.route = route;
	        this.router = router;
	        this.test = false;
	    }
	    ngOnInit() {
	    }
	};
	UploadComponent = __decorate([
	    core_1.Component({
	        selector: 'upload',
	        template: __webpack_require__(96)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router])
	], UploadComponent);
	exports.UploadComponent = UploadComponent;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"sidebar-upload\" class=\"second-sidebar visible\">\n\t<br />\n\t<b>Upload Menu</b>\n\t<br /><br />\n\t<ul class=\"main-menu\">\n\t\t<li><a routerLink=\"list\" routerLinkActive=\"current\">\n\t\t\t<i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n\t\t\tMy Uploads\n\t\t</a></li>\n\t\t<li><a routerLink=\"song\" routerLinkActive=\"current\">\n\t\t\t<img src=\"" + __webpack_require__(58) + "\" />\n\t\t\tUpload Song\n\t\t</a></li>\n\t\t<li><a routerLink=\"sweeper\" routerLinkActive=\"current\" style=\"pointer-events: none; opacity: 0.3 !important; color: #000 !important; cursor: default !important; background: none !important\">\n\t\t\t<img src=\"" + __webpack_require__(97) + "\" />\n\t\t\tUpload Sweeper\n\t\t</a></li>\n\t</ul>\n</div>\n\n<div class=\"body\">\n    <router-outlet></router-outlet>\n</div>\n";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/link.b9d4b6f6f92c4f91bbcc5f4dfff971dc.svg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const nerve_service_1 = __webpack_require__(30);
	const dialogue_service_1 = __webpack_require__(29);
	const audio_1 = __webpack_require__(41);
	let TrackComponent = class TrackComponent {
	    constructor(nerveService, dialogue, route, router) {
	        this.nerveService = nerveService;
	        this.dialogue = dialogue;
	        this.route = route;
	        this.router = router;
	        this.changed = false;
	        this.saved = false;
	        this.audio = null;
	    }
	    ngOnInit() {
	        this.sub = this.route.params.subscribe(params => {
	            this.id = params['id'] | 0;
	            this.loadTrack();
	        });
	    }
	    ngOnDestroy() {
	        this.sub.unsubscribe();
	    }
	    save() {
	        return this.nerveService.saveTrack(this.track).then((track) => {
	            console.log('SAVED!');
	            this.saved = true;
	            this.changed = false;
	        });
	    }
	    publish() {
	        var promise = new Promise((resolve, reject) => {
	            this.dialogue.showDialogue("Publish Track", "You are about to submit this song for addition to the playout system.\n\
	\n\
	By clicking 'Confirm', you agree that to the best of your knowledge this song does not contain explicit language.", () => {
	                this.dialogue.close();
	                resolve(this.nerveService.publishTrack(this.track).then((track) => {
	                    this.router.navigate(['/upload', 'list']);
	                }));
	            }, () => {
	                reject('reject');
	            });
	        }).catch((e) => {
	            if (e == 'reject') {
	                this.dialogue.close();
	            }
	            else {
	                throw e;
	            }
	        });
	        return promise;
	    }
	    remove() {
	        var promise = new Promise((resolve, reject) => {
	            this.dialogue.showDialogue("Delete Track", "Do you really want to delete this track? You cannot undo this.", () => {
	                this.dialogue.close();
	                resolve(this.nerveService.deleteTrack(this.track).then((track) => {
	                    this.router.navigate(['/upload', 'list']);
	                }));
	            }, () => {
	                reject('reject');
	            });
	        }).catch((e) => {
	            if (e == 'reject') {
	                this.dialogue.close();
	            }
	            else {
	                throw e;
	            }
	        });
	        return promise;
	    }
	    loadTrack() {
	        this.nerveService.track(this.id).then((track) => {
	            console.log(track);
	            this.audio = new audio_1.HTMLAudio(track.preview_url);
	            this.track = track;
	            this.changed = false;
	        });
	    }
	    mutate() {
	        console.log('Mutation');
	        this.changed = true;
	    }
	    get loaded() {
	        return this.track != null && this.audio != null;
	    }
	    get savable() {
	        return this.changed;
	    }
	    get submittable() {
	        return this.track.submittable;
	    }
	};
	__decorate([
	    core_1.ViewChild('wave'),
	    __metadata("design:type", Object)
	], TrackComponent.prototype, "wave", void 0);
	TrackComponent = __decorate([
	    core_1.Component({
	        selector: 'track',
	        template: __webpack_require__(99)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService,
	        dialogue_service_1.DialogueService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], TrackComponent);
	exports.TrackComponent = TrackComponent;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = "<div *ngIf=\"loaded\">\n\n\t<div class=\"grid-x\" style=\"max-width: inherit\">\n\t\t<div class=\"large-9 columns\">\n\t\t\t<waveform #wave [readonly]=\"false\" [controller]=\"this\" [audio]=\"audio\" [track]=\"track\"></waveform>\n\t\t</div>\n\t\t<div class=\"large-3 columns\">\n\t\t\t<track-info [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></track-info>\n\t\t</div>\n\t<!-- </div>\n\t<div class=\"gridx\" style=\"max-width: inherit\"> -->\n\t\t<div class=\"large-4 columns\">\n\t\t\t<audio-player [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></audio-player>\n\t\t</div>\n\t\t<div class=\"large-8 columns\">\n\t\t\t<edit-controls type=\"moderation\" [controller]=\"this\" [audio]=\"audio\" [track]=\"track\"></edit-controls>\n\t\t</div>\n\t</div>\n\n</div>\n<div *ngIf=\"!loaded\" class=\"screen\" id=\"screen-load\">\n\t<i class=\"fa fa-cog\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n\t<i class=\"fa fa-cog small\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n</div>\n";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	let LibraryComponent = class LibraryComponent {
	    constructor(route, router) {
	        this.route = route;
	        this.router = router;
	        this.test = false;
	    }
	    ngOnInit() {
	    }
	};
	LibraryComponent = __decorate([
	    core_1.Component({
	        selector: 'library',
	        template: __webpack_require__(101)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router])
	], LibraryComponent);
	exports.LibraryComponent = LibraryComponent;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"sidebar-moderation\" class=\"second-sidebar visible\">\n\t<br />\n\t<b>Library</b>\n\t<br /><br />\n\t<ul class=\"main-menu\">\n\t\t<li><a routerLink=\"search\" routerLinkActive=\"current\">\n\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\tSearch\n\t\t</a></li>\n\t</ul>\n</div>\n\n<div class=\"body\">\n    <router-outlet></router-outlet>\n</div>\n";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const nerve_service_1 = __webpack_require__(30);
	let LibrarySearchComponent = class LibrarySearchComponent {
	    constructor(nerveService, router) {
	        this.nerveService = nerveService;
	        this.router = router;
	        this.tracks = [];
	    }
	    ngOnInit() {
	    }
	    search(query) {
	        this.nerveService.librarySearch(query).then((tracks) => {
	            this.tracks = tracks;
	        });
	    }
	    navigate(track) {
	        this.router.navigate(['/library', 'track', track.id]);
	    }
	};
	LibrarySearchComponent = __decorate([
	    core_1.Component({
	        selector: 'library-search',
	        template: __webpack_require__(103)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService, router_1.Router])
	], LibrarySearchComponent);
	exports.LibrarySearchComponent = LibrarySearchComponent;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"screen visible\">\n\n\t<div class=\"input-group\" style=\"max-width: 600px; margin: 10px auto 30px;\">\n\t\t<input #searchQuery class=\"input-group-field\" type=\"text\" />\n\t\t<div class=\"input-group-button\">\n\t\t\t<button (click)=\"search(searchQuery.value)\" class=\"button\">Search</button>\n\t\t</div>\n\t</div>\n\n\t<table class=\"list first\">\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th style=\"width: 30%\">Title</th>\n\t\t\t<th style=\"width: 20%\">Artist</th>\n\t\t\t<th style=\"width: 15%\">Date</th>\n\t\t\t<th style=\"width: 35%\">Reason</th>\n\t\t</tr>\n\t\t<tbody id=\"screen-upload-list-alert\">\n\n\t\t\t<tr *ngFor=\"let track of tracks\" class=\"hand\" (click)=\"navigate(track)\">\n\t\t\t\t<td><track-icon [status]=\"track.flagged ? 7 : 0\"></track-icon></td>\n\t\t\t\t<td>{{ track.title }}</td>\n\t\t\t\t<td>{{ track.artist }}</td>\n\t\t\t\t<td>{{ track.getUploadDate() }}</td>\n\t\t\t\t<td>{{ track.flagged ? \"Flagged for senior review\" : track.neededInfo }}</td>\n\t\t\t</tr>\n\n\t\t</tbody>\n\t</table>\n</div>";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const app_component_1 = __webpack_require__(43);
	const dialogue_service_1 = __webpack_require__(29);
	const nerve_service_1 = __webpack_require__(30);
	const audio_1 = __webpack_require__(41);
	let LibraryTrackComponent = class LibraryTrackComponent {
	    constructor(appComponent, dialogue, nerveService, route, router) {
	        this.appComponent = appComponent;
	        this.dialogue = dialogue;
	        this.nerveService = nerveService;
	        this.route = route;
	        this.router = router;
	        this.changed = false;
	        this.saved = false;
	        this.type = 'library';
	        this.audio = null;
	    }
	    ngOnInit() {
	        this.sub = this.route.params.subscribe(params => {
	            this.id = params['id'] | 0;
	            this.loadTrack();
	        });
	    }
	    ngOnDestroy() {
	        this.sub.unsubscribe();
	    }
	    edit() {
	        this.router.navigate(['/upload', 'track', this.track.id]);
	    }
	    get shouldHideControls() {
	        return this.appComponent.user.moderator != true;
	    }
	    loadTrack() {
	        this.nerveService.track(this.id).then((track) => {
	            console.log(track);
	            this.audio = new audio_1.HTMLAudio(track.preview_url);
	            this.track = track;
	            this.changed = false;
	        });
	    }
	    mutate() {
	        console.log('Mutation');
	        this.changed = true;
	    }
	    get loaded() {
	        return this.track != null && this.audio != null;
	    }
	    get savable() {
	        return this.changed;
	    }
	    get submittable() {
	        return this.track.submittable;
	    }
	    remove() {
	        var promise = new Promise((resolve, reject) => {
	            this.dialogue.showDialogue("Recall Track", "Do you really want to recall this track? This will delete it if it is scheduled.", () => {
	                this.dialogue.close();
	                resolve(this.nerveService.recallTrack(this.track).then((track) => {
	                    this.router.navigate(['/upload', 'list']);
	                }));
	            }, () => {
	                reject('reject');
	            });
	        }).catch((e) => {
	            if (e == 'reject') {
	                this.dialogue.close();
	            }
	            else {
	                throw e;
	            }
	        });
	        return promise;
	    }
	};
	__decorate([
	    core_1.ViewChild('wave'),
	    __metadata("design:type", Object)
	], LibraryTrackComponent.prototype, "wave", void 0);
	LibraryTrackComponent = __decorate([
	    core_1.Component({
	        selector: 'library-track',
	        template: __webpack_require__(105)
	    }),
	    __metadata("design:paramtypes", [app_component_1.AppComponent,
	        dialogue_service_1.DialogueService,
	        nerve_service_1.NerveService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], LibraryTrackComponent);
	exports.LibraryTrackComponent = LibraryTrackComponent;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = "<div *ngIf=\"loaded\">\n\n\t<div class=\"grid-x\" style=\"max-width: inherit\">\n\t\t<div class=\"large-9 columns\">\n\t\t\t<waveform #wave [readonly]=\"true\" [controller]=\"this\" [audio]=\"audio\" [track]=\"track\"></waveform>\n\t\t</div>\n\t\t<div class=\"large-3 columns\">\n\t\t\t<track-info [readonly]=\"true\" [hideControls]=\"shouldHideControls\" [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></track-info>\n\t\t</div>\n\t<!-- </div>\n\t<div class=\"gridx\" style=\"max-width: inherit\"> -->\n\t\t<div class=\"large-4 columns \">\n\t\t\t<audio-player [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></audio-player>\n\t\t</div>\n\t</div>\n\n</div>\n<div *ngIf=\"!loaded\" class=\"screen\" id=\"screen-load\">\n\t<i class=\"fa fa-cog\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n\t<i class=\"fa fa-cog small\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n</div>\n";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const nerve_service_1 = __webpack_require__(30);
	let MyUploadsComponent = class MyUploadsComponent {
	    constructor(nerveService, router) {
	        this.nerveService = nerveService;
	        this.router = router;
	        this.tracksNeedingInput = [];
	        this.tracks = [];
	    }
	    ngOnInit() {
	        this.load();
	    }
	    load() {
	        console.log('loading....');
	        this.nerveService.myUploads().then((tracks) => {
	            console.log(tracks);
	            this.tracks = tracks;
	            this.tracksNeedingInput = tracks.filter((a) => a.status < 2);
	        });
	    }
	    navigate(track) {
	        if (!track.click) {
	            if (track.status == 5 || track.status == 6) {
	                this.router.navigate(['/library', 'track', track.id]);
	            }
	            return;
	        }
	        this.router.navigate(['/upload', 'track', track.id]);
	    }
	};
	MyUploadsComponent = __decorate([
	    core_1.Component({
	        selector: 'my-uploads',
	        template: __webpack_require__(107)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService, router_1.Router])
	], MyUploadsComponent);
	exports.MyUploadsComponent = MyUploadsComponent;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"screen visible\">\n\t<b>Uploads needing your input</b>\n\t<table class=\"list first\">\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th style=\"width: 30%\">Title</th>\n\t\t\t<th style=\"width: 20%\">Artist</th>\n\t\t\t<th style=\"width: 15%\">Date</th>\n\t\t\t<th style=\"width: 10%\">Needed Info</th>\n\t\t\t<th></th>\n\t\t</tr>\n\t\t<tbody id=\"screen-upload-list-alert\">\n\n\t\t\t<tr *ngFor=\"let track of tracksNeedingInput\" [ngClass]=\"[track.click ? 'hand': '', track.greyed ? 'greyed' : '']\" (click)=\"navigate(track)\">\n\t\t\t\t<td><track-icon [status]=\"track.status\"></track-icon></td>\n\t\t\t\t<td>{{ track.title }}</td>\n\t\t\t\t<td>{{ track.artist }}</td>\n\t\t\t\t<td>{{ track.getUploadDate() }}</td>\n\t\t\t\t<td>{{ track.neededInfo }}</td>\n\t\t\t\t<td></td>\n\t\t\t</tr>\n\n\t\t</tbody>\n\t</table>\n\n\t<b>My Uploads</b>\n\t<table class=\"list first\">\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th style=\"width: 30%\">Title</th>\n\t\t\t<th style=\"width: 20%\">Artist</th>\n\t\t\t<th style=\"width: 15%\">Date</th>\n\t\t\t<th style=\"width: 10%\">Approved</th>\n\t\t\t<th></th>\n\t\t</tr>\n\t\t<tbody id=\"screen-upload-list-all\">\n\n\t\t\t<tr *ngFor=\"let track of tracks\" [ngClass]=\"[track.click ? 'hand': '', track.greyed ? 'greyed' : '']\" (click)=\"navigate(track)\">\n\t\t\t\t<td><track-icon [status]=\"track.status\"></track-icon></td>\n\t\t\t\t<td>{{ track.title }}</td>\n\t\t\t\t<td>{{ track.artist }}</td>\n\t\t\t\t<td>{{ track.getUploadDate() }}</td>\n\t\t\t\t<td>{{ track.approved ? 'Yes' : 'No' }}</td>\n\t\t\t\t<td></td>\n\t\t\t</tr>\n\n\t\t</tbody>\n\t</table>\n</div>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const track_1 = __webpack_require__(31);
	const nerve_service_1 = __webpack_require__(30);
	const app_component_1 = __webpack_require__(43);
	const dialogue_service_1 = __webpack_require__(29);
	class FileWrapper {
	    constructor(file, message) {
	        this.file = file;
	        this.message = message;
	        this.name = file.name;
	    }
	}
	let UploadSongComponent = class UploadSongComponent {
	    constructor(appComponent, dialogue, nerveService) {
	        this.appComponent = appComponent;
	        this.dialogue = dialogue;
	        this.nerveService = nerveService;
	        this.uploads = [];
	        this.files = [];
	    }
	    ngOnInit() {
	    }
	    select(event) {
	        [].forEach.call(event.target.files, (file) => {
	            let extension = file.name.split(".").pop().toLowerCase();
	            // We should handle this further up in executon
	            if (extension == "wav") {
	                let fw = new FileWrapper(file, 'Missing Title & Artist');
	                this.files.push(fw);
	                if (event.target.files.length == 1) {
	                    this.fix(fw);
	                }
	            }
	            else {
	                this.uploadFile(file);
	            }
	        });
	    }
	    uploadFile(file, metadata, track) {
	        let options = this.getOptions();
	        if (track) {
	            var upload = this.nerveService.upload(track, file, options);
	            this.uploads.push(upload);
	            upload.update((upload) => this.update(upload));
	            return;
	        }
	        let trackP = track_1.UploadTrack.from(file, metadata);
	        trackP.then((track) => {
	            let finished = () => {
	                var upload = this.nerveService.upload(track, file, options);
	                this.uploads.push(upload);
	                upload.update((upload) => this.update(upload));
	                this.dialogue.close();
	            };
	            if (track.exists) {
	                this.dialogue.showDialogue("Duplicate Song", track.title + " already seems to exist on the system. Continue anyway?", finished);
	            }
	            else {
	                finished();
	            }
	        }).catch((error) => {
	            console.log('RECEIVE SOME ERROR', error);
	            if (error == 'metadata') {
	                let fw = new FileWrapper(file, 'Missing Title & Artist');
	                this.files.push(fw);
	                if (this.files.length == 1) {
	                    this.fix(fw);
	                }
	            }
	            else {
	                throw error;
	            }
	        });
	    }
	    fix(file) {
	        this.currentSearchFile = file;
	    }
	    fixed(track) {
	        console.log('Fixed!!');
	        if (track != null) {
	            if (this.files.indexOf(this.currentSearchFile) != -1) {
	                this.files.splice(this.files.indexOf(this.currentSearchFile), 1);
	            }
	            this.uploadFile(this.currentSearchFile.file, null, track);
	        }
	        this.currentSearchFile = null;
	    }
	    getOptions() {
	        var options = {};
	        if (this.overrideBitrate) {
	            options['override_bitrate'] = this.overrideBitrate.nativeElement.checked;
	        }
	        if (this.overrideCompressor) {
	            options['override_compressor'] = this.overrideCompressor.nativeElement.checked;
	        }
	        if (this.instrumental) {
	            options['instrumental'] = this.instrumental.nativeElement.checked;
	        }
	        if (this.library) {
	            options['upload_library'] = this.library.nativeElement.checked;
	        }
	        return options;
	    }
	    update(upload) {
	        // console.log('Progres Event', upload)
	    }
	};
	__decorate([
	    core_1.ViewChild('upload'),
	    __metadata("design:type", HTMLElement)
	], UploadSongComponent.prototype, "upload", void 0);
	__decorate([
	    core_1.ViewChild('overrideBitrate'),
	    __metadata("design:type", core_1.ElementRef)
	], UploadSongComponent.prototype, "overrideBitrate", void 0);
	__decorate([
	    core_1.ViewChild('overrideCompressor'),
	    __metadata("design:type", core_1.ElementRef)
	], UploadSongComponent.prototype, "overrideCompressor", void 0);
	__decorate([
	    core_1.ViewChild('instrumental'),
	    __metadata("design:type", core_1.ElementRef)
	], UploadSongComponent.prototype, "instrumental", void 0);
	__decorate([
	    core_1.ViewChild('library'),
	    __metadata("design:type", core_1.ElementRef)
	], UploadSongComponent.prototype, "library", void 0);
	UploadSongComponent = __decorate([
	    core_1.Component({
	        selector: 'upload-song',
	        template: __webpack_require__(109)
	    }),
	    __metadata("design:paramtypes", [app_component_1.AppComponent, dialogue_service_1.DialogueService, nerve_service_1.NerveService])
	], UploadSongComponent);
	exports.UploadSongComponent = UploadSongComponent;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<div>\n\t<track-search *ngIf=\"currentSearchFile\" [title]=\"currentSearchFile.name\" (complete)=\"fixed($event)\"></track-search>\n\t<table class=\"grid upload-container\"><tr><td>\n\n\t\t<label class=\"upload-box\" for=\"song-upload-main\">\n\n\t\t\t<div class=\"upload-progress\" id=\"song-upload-progress\" style=\"width: 0%\"></div>\n\n\t\t\t<i class=\"fa fa-file-audio-o\" aria-hidden=\"true\"></i><br />\n\t\t\t<span id=\"song-upload-label\">Choose Songs</span>\n\t\t\t<br />\n\t\t\t<br /><span id=\"song-upload-status\"></span>\n\n\t\t</label>\n\n\t\t<input #upload (change)=\"select($event)\" id=\"song-upload-main\" type=\"file\" multiple accept=\".mp3,.m4a,.ogg,.oga,.flac,.wav\" style=\"display: none\" />\n\t\t<br />\n\n\t\t<table style=\"font-size: 9pt; width: 600px; margin: 0 auto\" *ngIf=\"appComponent.user && appComponent.user.permissions\">\n\t\t\t<tr *ngIf=\"appComponent.user.permissions.override_bitrate\">\n\t\t\t\t<td><input #overrideBitrate type=\"checkbox\" name=\"override-bitrate\" id=\"override-bitrate\" value=\"1\" /></td>\n\t\t\t\t<td><label for=\"override-bitrate\">Override Minimum Bit / Sample Rate</label></td>\n\t\t\t\t<td>Using this to upload \"stream rips\" will have your privileges revoked.</td>\n\t\t\t</tr>\n\n\t\t\t<tr *ngIf=\"appComponent.user.permissions.override_compressor\" >\n\t\t\t\t<td><input #overrideCompressor type=\"checkbox\" name=\"override-compressor\" id=\"override-compressor\" value=\"1\" /></td>\n\t\t\t\t<td><label for=\"override-compressor\">Disable Compression</label></td>\n\t\t\t\t<td>Don't check unless you know what you're doing - for example classical music</td>\n\t\t\t</tr>\n\n\t\t\t<tr *ngIf=\"appComponent.user.permissions.instrumental\">\n\t\t\t\t<td><input #instrumental type=\"checkbox\" name=\"upload-instrumental\" id=\"upload-instrumental\" value=\"1\" /></td>\n\t\t\t\t<td><label for=\"upload-instrumental\">Instrumental</label></td>\n\t\t\t\t<td>Check this if there are no lyrics at all (including backing vocals)</td>\n\t\t\t</tr>\n\n\t\t\t<tr *ngIf=\"appComponent.user.permissions.upload_library\">\n\t\t\t\t<td><input #library type=\"checkbox\" checked name=\"upload-library\" id=\"upload-library\" value=\"1\" /></td>\n\t\t\t\t<td><label for=\"upload-library\">Add To Library</label></td>\n\t\t\t\t<td>(Don't uncheck this!)</td>\n\t\t\t</tr>\n\t\t</table>\n\n\t</td>\n\t<td style=\"width: 300px; padding-right: 15px\">\n\n\t\t<br />\n\t\t<div class=\"callout warning\">\n\n\t\t\t<h5><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>&nbsp;&nbsp;  Information</h5>\n\n\t\t\t<p>Use the \"Library\" tab to search for a song before you upload it here. Duplicate songs are automatically rejected, unless you press the \"Upload Alternative Version\" next to it in search.</p>\n\n\t\t\t<p>Also, this is a reminder that any and all music you upload <b>MUST</b> adhere to rules and regulations.</p>\n\n\t\t\t<p>We don't want to lose our license, that'd be terrible!</p>\n\n\t\t\t<p>Find a copy of the <a href=\"/music-policy\" target=\"_blank\">Music Policy here</a>.</p>\n\n\t\t\t<br />\n\t\t\t<p style=\"font-size: 8pt\">(In short, check every upload for explicit lyrics and please don't use YouTube rips.)</p>\n\n\t\t</div>\n\n\t</td></tr></table>\n\n\t<div class=\"bottom-peek\">\n\t\t<table style=\"width: 90%; margin: 0 auto; table-layout: auto; \" class=\"list\">\n\t\t\t<tr>\n\t\t\t\t<th style=\"width: 14%\">Job</th><th>Song</th><th style=\"width: 50%\">Status</th>\n\t\t\t</tr>\n\t\t\t<tbody id=\"screen-upload-song-status-table\">\n\n\t\t\t\t<tr *ngFor=\"let file of files\">\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"fa fa-question-circle\"></i>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ file.name }}</td>\n\t\t\t\t\t<td><a href=\"javascript:void(0)\" (click)=\"fix(file)\">{{ file.message }}</a></td>\n\n\t\t\t\t</tr>\n\n\t\t\t\t<tr *ngFor=\"let upload of uploads\">\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"progress\" [class.alert]=\"upload.error\" role=\"progressbar\" tabindex=\"0\" [attr.aria-valuenow]=\"upload.progress\" aria-valuemin=\"0\" [attr.aria-valuetext]=\"upload.progress + ' percent'\" aria-valuemax=\"100\" style=\"margin-bottom: 0; width: 80%\">\n\t\t\t\t\t\t\t<div class=\"progress-meter\" [style.width]=\"upload.progress + '%'\">\n\t\t\t\t\t\t\t\t<p class=\"progress-meter-text\">{{ upload.progress }}%</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ upload.track.title + ' - ' + upload.track.artist }}</td>\n\t\t\t\t\t<td>{{ upload.message }}</td>\n\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let CopySongComponent = class CopySongComponent {
	    constructor() {
	        this.test = false;
	    }
	};
	CopySongComponent = __decorate([
	    core_1.Component({
	        selector: 'upload-copy-song',
	        template: __webpack_require__(111)
	    })
	], CopySongComponent);
	exports.CopySongComponent = CopySongComponent;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = "<div>\n\tCOPY!!!!!1\n</div>";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	let ModerationComponent = class ModerationComponent {
	    constructor(route, router) {
	        this.route = route;
	        this.router = router;
	        this.test = false;
	    }
	    ngOnInit() {
	    }
	};
	ModerationComponent = __decorate([
	    core_1.Component({
	        selector: 'moderation',
	        template: __webpack_require__(113)
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router])
	], ModerationComponent);
	exports.ModerationComponent = ModerationComponent;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"sidebar-moderation\" class=\"second-sidebar visible\">\n\t<br />\n\t<b>Moderation</b>\n\t<br /><br />\n\t<ul class=\"main-menu\">\n\t\t<li><a routerLink=\"pending\" routerLinkActive=\"current\">\n\t\t\t<img src=\"" + __webpack_require__(58) + "\" />\n\t\t\tPending\n\t\t</a></li>\n\t</ul>\n</div>\n\n<div class=\"body\">\n    <router-outlet></router-outlet>\n</div>\n";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const nerve_service_1 = __webpack_require__(30);
	const audio_1 = __webpack_require__(41);
	let ModerationTrackComponent = class ModerationTrackComponent {
	    constructor(nerveService, route, router) {
	        this.nerveService = nerveService;
	        this.route = route;
	        this.router = router;
	        this.changed = false;
	        this.saved = false;
	        this.audio = null;
	    }
	    ngOnInit() {
	        this.sub = this.route.params.subscribe(params => {
	            this.id = params['id'] | 0;
	            this.loadTrack();
	        });
	    }
	    ngOnDestroy() {
	        this.sub.unsubscribe();
	    }
	    edit() {
	        this.router.navigate(['/upload', 'track', this.track.id]);
	    }
	    flag() {
	        return this.nerveService.flag(this.track).then(() => {
	            this.router.navigate(['/moderation', 'pending']);
	        });
	    }
	    reject() {
	        return this.nerveService.reject(this.track).then(() => {
	            this.router.navigate(['/moderation', 'pending']);
	        });
	    }
	    approve() {
	        return this.nerveService.approve(this.track).then(() => {
	            this.router.navigate(['/moderation', 'pending']);
	        });
	    }
	    loadTrack() {
	        this.nerveService.track(this.id).then((track) => {
	            console.log(track);
	            this.audio = new audio_1.HTMLAudio(track.preview_url);
	            this.track = track;
	            this.changed = false;
	        });
	    }
	    mutate() {
	        console.log('Mutation');
	        this.changed = true;
	    }
	    get loaded() {
	        return this.track != null && this.audio != null;
	    }
	    get savable() {
	        return this.changed;
	    }
	    get submittable() {
	        return this.track.submittable;
	    }
	};
	__decorate([
	    core_1.ViewChild('wave'),
	    __metadata("design:type", Object)
	], ModerationTrackComponent.prototype, "wave", void 0);
	ModerationTrackComponent = __decorate([
	    core_1.Component({
	        selector: 'moderation-track',
	        template: __webpack_require__(115)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], ModerationTrackComponent);
	exports.ModerationTrackComponent = ModerationTrackComponent;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = "<div *ngIf=\"loaded\">\n\n\t<div class=\"grid-x\" style=\"max-width: inherit\">\n\t\t<div class=\"large-9 columns\">\n\t\t\t<waveform #wave [readonly]=\"true\" [controller]=\"this\" [audio]=\"audio\" [track]=\"track\"></waveform>\n\t\t</div>\n\t\t<div class=\"large-3 columns\">\n\t\t\t<track-info [readonly]=\"true\" [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></track-info>\n\t\t</div>\n\t<!-- </div>\n\t<div class=\"gridx\" style=\"max-width: inherit\"> -->\n\t\t<div class=\"large-4 columns\">\n\t\t\t<audio-player [audio]=\"audio\" [controller]=\"this\" [track]=\"track\"></audio-player>\n\t\t</div>\n\t\t<div class=\"large-8 columns\">\n\t\t\t<br /><br /><br />\n\t\t\t<div class=\"float-right\">\n\n\t\t\t\t<button class=\"button large secondary sect\" (click)=\"flag()\"><i class=\"fa fa-flag\" style=\"font-size: 30pt\" aria-hidden=\"true\"></i></button>\n\t\n\t\t\t\t<button class=\"button large secondary sect\" (click)=\"reject()\"><i class=\"fa fa-times\" style=\"font-size: 30pt\" aria-hidden=\"true\"></i></button>\n\n\t\t\t\t<button class=\"button large secondary sect\" (click)=\"approve()\"><i class=\"fa fa-upload\" style=\"font-size: 30pt\" aria-hidden=\"true\"></i></button>\n\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</div>\n\t</div>\n\n</div>\n<div *ngIf=\"!loaded\" class=\"screen\" id=\"screen-load\">\n\t<i class=\"fa fa-cog\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n\t<i class=\"fa fa-cog small\" style=\"animation: fa-spin 5s infinite linear;\"></i>\n</div>\n";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const router_1 = __webpack_require__(64);
	const nerve_service_1 = __webpack_require__(30);
	let ModerationPendingComponent = class ModerationPendingComponent {
	    constructor(nerveService, router) {
	        this.nerveService = nerveService;
	        this.router = router;
	        this.tracks = [];
	    }
	    ngOnInit() {
	        this.load();
	    }
	    load() {
	        this.nerveService.moderationPending().then((tracks) => {
	            console.log(tracks);
	            this.tracks = tracks;
	        });
	    }
	    navigate(track) {
	        console.log('hello!');
	        this.router.navigate(['/moderation', 'track', track.id]);
	    }
	};
	ModerationPendingComponent = __decorate([
	    core_1.Component({
	        selector: 'moderation-pending',
	        template: __webpack_require__(117)
	    }),
	    __metadata("design:paramtypes", [nerve_service_1.NerveService, router_1.Router])
	], ModerationPendingComponent);
	exports.ModerationPendingComponent = ModerationPendingComponent;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"screen visible\">\n\t<b>Pending Tracks</b>\n\t<table class=\"list first\">\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th style=\"width: 30%\">Title</th>\n\t\t\t<th style=\"width: 20%\">Artist</th>\n\t\t\t<th style=\"width: 15%\">Date</th>\n\t\t\t<th style=\"width: 35%\">Reason</th>\n\t\t</tr>\n\t\t<tbody id=\"screen-upload-list-alert\">\n\n\t\t\t<tr *ngFor=\"let track of tracks\" class=\"hand\" (click)=\"navigate(track)\">\n\t\t\t\t<td><track-icon [status]=\"track.flagged ? 7 : 0\"></track-icon></td>\n\t\t\t\t<td>{{ track.title }}</td>\n\t\t\t\t<td>{{ track.artist }}</td>\n\t\t\t\t<td>{{ track.getUploadDate() }}</td>\n\t\t\t\t<td>{{ track.flagged ? \"Flagged for senior review\" : track.neededInfo }}</td>\n\t\t\t</tr>\n\n\t\t</tbody>\n\t</table>\n</div>";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let MusicPolicyComponent = class MusicPolicyComponent {
	};
	MusicPolicyComponent = __decorate([
	    core_1.Component({
	        selector: 'music-policy',
	        template: __webpack_require__(119)
	    })
	], MusicPolicyComponent);
	exports.MusicPolicyComponent = MusicPolicyComponent;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"body\">\n\n\t<h1>Music Policy</h1>\n\n\t<p>To comply with Ofcom rules, we need to ensure that content we play sticks to certain rules. These rules are explained.</p>\n\n\t<ol>\n\t\t<li>\n\t\t\t<p>We operate with <b>no bad language</b>, 24/7, 365 days a year. Exceptions to this are rare.</p>\n\t\t\t<p>The general rule of thumb is if you wouldn't say it to a child or to your grandparents, you can't say it on air.</p>\n\t\t\t<p>'Mild' words (as defined by Ofcom) such as <em>ass</em> are exceptions to this rule.</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p>We are <b>high quality</b>.</p>\n\t\t\t<p>You must only upload music that comes directly from CD, record label, or a reputable online store.</p>\n\t\t\t<p>That means <i>no YouTube rips</i>. No exceptions. </p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p>We are <b>impartial</b>.</p>\n\t\t\t<p>Of course, many songs have political roots, but some overly political songs may be unsuitable for airplay. </p>\n\t\t\t<p>For example, 'Liar Liar' could not be played during the general election period.</p>\n\t\t</li>\n\t\t<li>\n\t\t\t<p>We act in the <b>public interest</b>.</p>\n\t\t\t<p>Music should not explicitly condone drug use or anti social behaviour.</p>\n\t\t\t<p>If a local or national incident occurs, we stick wholly to the truth, and show our mellow side.</p>\n\t\t</li>\n\t</ol>\n\n\t<p>As a station, we legally are obliged to stick to these rules. Hence, any breaches of them will be taken very seriously and may result in upload privileges being taken away.</p>\n\n\t<p>At the time of writing, Nerve only covers music uploads. There will be provisions in the future to upload sound-bites.</p>\n\n</div>";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let HomeComponent = class HomeComponent {
	};
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(121)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = "<div>\n    <h3>Home Page</h3>\n    <div class=\"resource\">\n        <h4>Angular</h4>\n        <p>Angular is a development platform for building mobile and desktop web applications.</p>\n    </div>\n\n    <div class=\"resource\">\n        <h4>TypeScript</h4>\n        <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>\n    </div>\n</div>\n";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let TrackIconComponent = class TrackIconComponent {
	    constructor() {
	        this.track = null;
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], TrackIconComponent.prototype, "status", void 0);
	TrackIconComponent = __decorate([
	    core_1.Component({
	        selector: 'track-icon',
	        template: __webpack_require__(123)
	    })
	], TrackIconComponent);
	exports.TrackIconComponent = TrackIconComponent;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = "<span [ngClass]=\"'status-' + status\"></span>";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const track_1 = __webpack_require__(31);
	const track_component_1 = __webpack_require__(98);
	let AudioPlayerComponent = class AudioPlayerComponent {
	    ngOnInit() {
	        document.documentElement.addEventListener("keydown", this.listener = (e) => this.keyPressListener(e));
	    }
	    ngOnDestroy() {
	        if (this.audio) {
	            this.audio.unload();
	        }
	        document.documentElement.removeEventListener("keydown", this.listener);
	    }
	    keyPressListener(e) {
	        if (document.activeElement != document.body)
	            return;
	        if (e.keyCode == 32 || e.charCode == 32) {
	            this.audio.playing() ? this.audio.pause() : this.audio.play();
	            e.preventDefault();
	            return false;
	        }
	    }
	    get loaded() {
	        return false;
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_1.Track)
	], AudioPlayerComponent.prototype, "track", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], AudioPlayerComponent.prototype, "audio", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_component_1.TrackComponent)
	], AudioPlayerComponent.prototype, "controller", void 0);
	AudioPlayerComponent = __decorate([
	    core_1.Component({
	        selector: 'audio-player',
	        template: __webpack_require__(125)
	    })
	], AudioPlayerComponent);
	exports.AudioPlayerComponent = AudioPlayerComponent;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = "<table class=\"meta\">\n\t<tr>\n\t\t<td>{{ track.title }}</td>\n\t\t<!-- BUG: THE ACTUAL ONE IS WAAAY TOO SLOW WITH 2 WAY BINDINGS -->\n\t\t<td>00:00</td>\n\t\t<!-- <td>{{ audio.time() | timecode:true }}</td> -->\n\t</tr><tr>\n\t\t<td>{{ track.artist }}</td>\n\t\t<td>{{ track.length | timecode:true }}</td>\n\t</tr><tr>\n\t\t<td colspan=2><em>Low quality, low-bandwidth preview</em></td>\n\t</tr>\n</table>\n<button class=\"button play\" (click)=\"$event.target.blur(); audio.play()\"><i class=\"fa fa-play\"></i></button>\n<button class=\"button pause\" (click)=\"$event.target.blur(); audio.pause()\"><i class=\"fa fa-pause\"></i></button>\n<button class=\"button reset\" (click)=\"$event.target.blur(); audio.seek(0)\"><i class=\"fa fa-step-backward\"></i></button>\n<button class=\"button eject\" disabled><i class=\"fa fa-eject\"></i></button>";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const dialogue_service_1 = __webpack_require__(29);
	const track_1 = __webpack_require__(31);
	const track_component_1 = __webpack_require__(98);
	let EditControlsComponent = class EditControlsComponent {
	    constructor(dialogue) {
	        this.dialogue = dialogue;
	    }
	    ngOnInit() {
	    }
	    ngOnDestroy() {
	    }
	    loadTrack() {
	    }
	    get loaded() {
	        return false;
	    }
	    set(type) {
	        this.controller.wave.set(type, this.controller.wave.getCurrentTime());
	        this.controller.mutate();
	    }
	    defocus(event) {
	        var element = event.target || event.srcElement || event.currentTarget;
	        element ? element.blur() : null;
	    }
	    save() {
	        this.controller.save().catch((e) => this.dialogue.showError("Error Saving", e, "save-fail"));
	    }
	    publish() {
	        this.controller.publish().catch((e) => this.dialogue.showError("Error Publishing", e, "pub-fail"));
	    }
	    remove() {
	        this.controller.remove().catch((e) => this.dialogue.showError("Error Deleting", e, "delete-fail"));
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_1.Track)
	], EditControlsComponent.prototype, "track", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], EditControlsComponent.prototype, "audio", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_component_1.TrackComponent)
	], EditControlsComponent.prototype, "controller", void 0);
	EditControlsComponent = __decorate([
	    core_1.Component({
	        selector: 'edit-controls',
	        template: __webpack_require__(127)
	    }),
	    __metadata("design:paramtypes", [dialogue_service_1.DialogueService])
	], EditControlsComponent);
	exports.EditControlsComponent = EditControlsComponent;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"float-right\">\n\t<select id=\"edit-extro\" [(ngModel)]=\"track.end_type\" style=\"font-size: 12pt; padding: 2px 8px; \">\n\t\t<option value=\"0\" disabled>How does the song end?&nbsp;&nbsp;&nbsp;</option>\n\t\t<option value=\"1\">Just Ends (fast)</option>\n\t\t<option value=\"2\">Fades Out (medium)</option>\n\t\t<option value=\"3\">Sustained Ending (slow)</option>\n\t</select><br /><br />\n</div>\n<div class=\"clearfix\"></div>\n<div class=\"float-right\">\n\t<button (click)=\"defocus($event); set('intro_start')\" id=\"edit-is\" class=\"button large secondary sect intro start\" onclick=\"confirm('WARNING - this doesn\\'t trim the song, it simply adds a marker. Continue?') || event.stopPropagation()\" title=\"Set Intro Start point\">\n\t\tIntro<br />Start\n\t\t<input type=\"text\" id=\"edit00-text\" [value]=\"track.intro_start | timecode:true\" locked />\n\t</button>\n\t<button (click)=\"defocus($event); set('intro_end')\" id=\"edit-ie\" class=\"button large secondary sect intro end\" title=\"Set Intro End point\">\n\t\tIntro<br />End\n\t\t<input type=\"text\" id=\"edit01-text\" [value]=\"track.intro_end | timecode:true\" locked />\n\t</button>\n\n\t<button (click)=\"defocus($event); set('hook_start')\" id=\"edit-hs\" class=\"button large secondary sect hook start\" title=\"Set Hook Start point\">\n\t\tHook<br />Start\n\t\t<input type=\"text\" id=\"edit10-text\" [value]=\"track.hook_start | timecode:true\" locked />\n\t</button>\n\t<button (click)=\"defocus($event); set('hook_end')\" id=\"edit-he\" class=\"button large secondary sect hook end\" title=\"Set Hook End point\">\n\t\tHook<br />End\n\t\t<input type=\"text\" id=\"edit11-text\" [value]=\"track.hook_end | timecode:true\" locked />\n\t</button>\n\n\t<button (click)=\"defocus($event); set('extro_start')\" id=\"edit-es\" class=\"button large secondary sect extro start\" title=\"Set Extro Point\">\n\t\t<br />Extro\n\t\t<input type=\"text\" id=\"edit20-text\" [value]=\"track.extro_start | timecode:true\" locked />\n\t</button>\n\n\t<button class=\"button large secondary sect\" id=\"edit-save\" (click)=\"save()\" *ngIf=\"!controller.submittable || controller.savable\" [disabled]=\"!controller.savable\"><i class=\"fa fa-floppy-o\" style=\"font-size: 30pt\" aria-hidden=\"true\"></i></button>\n\n\t<button class=\"button large secondary sect\" id=\"edit-pub\" (click)=\"publish()\" *ngIf=\"controller.submittable && !controller.savable\"><i class=\"fa fa-upload\" style=\"font-size: 30pt\" aria-hidden=\"true\"></i></button>\n\n\n</div>\n<div class=\"clearfix\"></div>\n";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const track_1 = __webpack_require__(31);
	const track_component_1 = __webpack_require__(98);
	let TrackInfoComponent = class TrackInfoComponent {
	    constructor() {
	        this._editMode = false;
	    }
	    ngOnInit() {
	    }
	    ngOnDestroy() {
	    }
	    loadTrack() {
	    }
	    get loaded() {
	        return false;
	    }
	    set editMode(value) {
	        if (this.readonly) {
	            return;
	        }
	        if (this._editMode == true && value == false) {
	            this.controller.mutate();
	        }
	        this._editMode = value;
	    }
	    get editMode() {
	        return this._editMode;
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_1.Track)
	], TrackInfoComponent.prototype, "track", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], TrackInfoComponent.prototype, "audio", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_component_1.TrackComponent)
	], TrackInfoComponent.prototype, "controller", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TrackInfoComponent.prototype, "readonly", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TrackInfoComponent.prototype, "hideControls", void 0);
	TrackInfoComponent = __decorate([
	    core_1.Component({
	        selector: 'track-info',
	        template: __webpack_require__(129)
	    })
	], TrackInfoComponent);
	exports.TrackInfoComponent = TrackInfoComponent;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"top-bar\" *ngIf=\"controller.type != 'library'\">\n\t<div class=\"top-bar-left\">\n\t\t<button class=\"button\" (click)=\"readonly ? (controller.edit()) : (editMode = !editMode)\" title=\"Edit Artist\"><i [ngClass]=\"['fa', editMode ? 'fa-check' : 'fa-pencil']\" aria-hidden=\"true\"></i></button>\n\t</div>\n\t<div class=\"top-bar-right\">\n\t\t<button class=\"button\" (click)=\"controller.remove()\" title=\"Delete Song\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n\t\t<button class=\"button\" *ngIf=\"!readonly\" (click)=\"controller.save()\" [disabled]=\"editMode\" title=\"Save Information\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></button>\n\t</div>\n</div>\n\n<div class=\"top-bar\" *ngIf=\"controller.type == 'library' && !hideControls\">\n\n\t<div class=\"top-bar-left\">\n\t\t<!-- <button class=\"button\" (click)=\"readonly ? (controller.edit()) : (editMode = !editMode)\" title=\"Edit Artist\"><i [ngClass]=\"['fa', editMode ? 'fa-check' : 'fa-pencil']\" aria-hidden=\"true\"></i></button> -->\n\t</div>\n\t<div class=\"top-bar-right\">\n\t\t<button class=\"button\" (click)=\"controller.remove()\" title=\"Remove From Playout\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n\t</div>\n\n</div>\n\n\n<b>Song Information:</b>\n\n<input type=\"text\" id=\"edit-title\" [(ngModel)]=\"track.title\" [disabled]=\"!editMode\" />\n<input type=\"text\" id=\"edit-artist\" [(ngModel)]=\"track.artist\" [disabled]=\"!editMode\" />\n\n<br />\n<b id=\"edit-lyrics-caption\">Lyrics ({{ track.lyrics | lyrics:true }} flagged words):</b>\n<div class=\"lyrics-portal\">\n\t<p id=\"edit-lyrics\" [innerHTML]=\"track.lyrics | lyrics | nl2br\"></p>\n</div>";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const track_1 = __webpack_require__(31);
	const audio_1 = __webpack_require__(41);
	const track_component_1 = __webpack_require__(98);
	function getOptions(track, container, audio, readonly) {
	    return {
	        container: container,
	        mediaElement: audio,
	        dataUri: { arraybuffer: track.wave_url },
	        logger: console.error.bind(console),
	        /** Optional config with defaults **/
	        height: 200,
	        zoomLevels: [4096],
	        keyboard: true,
	        nudgeIncrement: 0.01,
	        inMarkerColor: '#a0a0a0',
	        outMarkerColor: '#a0a0a0',
	        zoomWaveformColor: '#7880E0',
	        overviewWaveformColor: 'rgba(0,0,0,0.2)',
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
	                endTime: track.length + 100,
	                editable: !readonly,
	                inMarkerColor: "#ff00ff",
	                color: "rgba(200, 0, 0, 0.5)",
	                labelText: "Outro"
	            }]
	    };
	}
	let WaveformComponent = class WaveformComponent {
	    constructor() {
	        this.types = ["intro", "hook", "extro"];
	    }
	    ngOnInit() {
	    }
	    ngOnDestroy() {
	        if (this.peaks != null) {
	            this.peaks.destroy();
	        }
	    }
	    ngOnChanges(changes) {
	        if (changes.track || changes.audio && (this.track != null && this.audio.aud != null)) {
	            console.log('changes!', changes);
	            this.loadTrack(this.track);
	        }
	        else if (changes.track) {
	        }
	    }
	    loadTrack(track) {
	        if (track == null) {
	            return;
	        }
	        this.ngOnDestroy();
	        var options = getOptions(this.track, this.container.nativeElement, this.audio.aud, this.readonly);
	        this.peaks = window['peaks']['js'].init(options);
	        this.peaks.on('error', (error) => {
	            console.error('ERROR SHOWING WAVEFORM');
	            /*			Errors.push("PEAKS-LOAD", "There was an error drawing the wave preview. " +
	                            "If this persists, clear your cache and/or contact support.",
	                            false, null, "Waveform Error"); */
	        });
	        this.peaks.on('segments.ready', () => {
	            this.fillMarkers();
	        });
	        this.peaks.on('segments.dragged', (segment) => {
	            this.handleChange();
	            this.set(segment.id + "_start", segment.startTime);
	            // Don't set the finish for extro - it doesn't actually do anything
	            if (segment.id == "extro")
	                return; // this.set("extro_start", segment.endTime - segment.startTime);
	            this.set(segment.id + "_end", segment.endTime);
	        });
	    }
	    set(key, value) {
	        console.log('Setting', key, value);
	        this.track[key] = value;
	        var type = this.types.indexOf(key.split("_")[0]);
	        if (type == -1)
	            throw new Error("Can't set " + key + " as there's no such property");
	        var segment = this.peaks.waveform.segments.getSegments()[type];
	        segment[key.split("_")[1] + "Time"] = value;
	        this.peaks.waveform.segments.updateSegments();
	    }
	    getCurrentTime(key) {
	        return this.peaks.player.getCurrentTime();
	    }
	    fillMarkers() {
	        var waveform = this.peaks;
	        if (!waveform.waveform.originalWaveformData ||
	            !waveform.waveform.segments.getSegments()[0] ||
	            !waveform.waveform.originalWaveformData.adapter.data.buffer.byteLength ||
	            !waveform.player.getDuration()) {
	            setTimeout(() => this.fillMarkers(), 100);
	            return;
	        }
	        for (var t = 0; t < this.types.length * 2; t++) {
	            var type = this.types[t / 2 | 0] + "_" + ((t % 2) ? "end" : "start");
	            if (this.track[type] != undefined)
	                this.set(type, this.track[type]);
	        }
	        if (this.track.extro_start == 0 || this.track.extro_start == null)
	            this.calculateExtro();
	    }
	    calculateExtro() {
	        var waveform = this.peaks;
	        var buffer = waveform.waveform.originalWaveformData.adapter.data.buffer.slice(0);
	        var extroTime = audio_1.AudioUtil.getExtro(buffer, waveform.player.getDuration());
	        this.set("extro_start", extroTime);
	        this.handleChange();
	    }
	    handleChange() {
	        this.controller.mutate();
	    }
	    get loaded() {
	        return false;
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_1.FullTrack)
	], WaveformComponent.prototype, "track", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], WaveformComponent.prototype, "audio", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", track_component_1.TrackComponent)
	], WaveformComponent.prototype, "controller", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], WaveformComponent.prototype, "readonly", void 0);
	__decorate([
	    core_1.ViewChild('container'),
	    __metadata("design:type", Object)
	], WaveformComponent.prototype, "container", void 0);
	WaveformComponent = __decorate([
	    core_1.Component({
	        selector: 'waveform',
	        template: __webpack_require__(131)
	    })
	], WaveformComponent);
	exports.WaveformComponent = WaveformComponent;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = "<div #container style=\"width: 100%; height: 100%\"></div>";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const dialogue_service_1 = __webpack_require__(29);
	const nerve_service_1 = __webpack_require__(30);
	const track_1 = __webpack_require__(31);
	let TrackSearchComponent = class TrackSearchComponent {
	    constructor(dialogue, nerveService) {
	        this.dialogue = dialogue;
	        this.nerveService = nerveService;
	        this.complete = new core_1.EventEmitter();
	        this.selection = false;
	        this.mode = false;
	    }
	    close() {
	        this.complete.emit(null);
	    }
	    completed() {
	        this.complete.emit(this.mode ?
	            new track_1.UploadTrack({ title: this.newTitle.nativeElement.value, artist: this.newArtist.nativeElement.value }) :
	            this.selected);
	    }
	    search(title, artist) {
	        this.results = [];
	        this.nerveService.search(title, artist)
	            .then((results) => this.results = results)
	            .catch((e) => this.results = []);
	    }
	    select(result) {
	        this.selected = result;
	    }
	    ngOnInit() {
	    }
	    ngOnDestroy() {
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TrackSearchComponent.prototype, "title", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], TrackSearchComponent.prototype, "complete", void 0);
	__decorate([
	    core_1.ViewChild('title'),
	    __metadata("design:type", core_1.ElementRef)
	], TrackSearchComponent.prototype, "newTitle", void 0);
	__decorate([
	    core_1.ViewChild('artist'),
	    __metadata("design:type", core_1.ElementRef)
	], TrackSearchComponent.prototype, "newArtist", void 0);
	TrackSearchComponent = __decorate([
	    core_1.Component({
	        selector: 'track-search',
	        template: __webpack_require__(133)
	    }),
	    __metadata("design:paramtypes", [dialogue_service_1.DialogueService, nerve_service_1.NerveService])
	], TrackSearchComponent);
	exports.TrackSearchComponent = TrackSearchComponent;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"coverall\" id=\"error-container\" style=\"background-color: rgba(0, 0, 0, 0.5); \">\n\n\t<div class=\"all large\">\n\n\t\t<div>\n\t\t\t<h1>Find Track</h1>\n\t\t\t<p style=\"font-size: 80%\">You're finding a match for <b>{{ title }}</b>.</p>\n\t\t\t<p><a (click)=\"mode = !mode\">Input manually</a></p>\n\n\t\t\t<div class=\"search-field\" *ngIf=\"!mode\">\n\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"input-group-field\" #titleSearchField placeholder=\"Song\" /> \n\t\t\t\t\t<input type=\"text\" class=\"input-group-field\" #artistSearchField placeholder=\"Artist\" /> \n\t\t\t\t\t<div class=\"input-group-button\">\n\t\t\t\t\t\t<button (click)=\"search(titleSearchField.value, artistSearchField.value)\" class=\"button\">Search</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"resultsTable\">\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th style=\"width: 40px\"></th>\n\t\t\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t\t\t<th>Artist</th>\n\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr (click)=\"select(result)\" *ngFor=\"let result of results\" [class.selected]=\"selected == result\">\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td>{{ result.title }}</td>\n\t\t\t\t\t\t\t\t<td>{{ result.artist }}</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"manual\" *ngIf=\"mode\">\n\n\t\t\t\t<p>Any song that has data manually entered will have to pass through manual compliance.</p>\n\n\t\t\t\t<input type=\"text\" #title placeholder=\"Track Title\" /> <input type=\"text\" #artist placeholder=\"Artist\" />\n\n\t\t\t</div>\n\n\t\t\t<button (click)=\"completed()\" class=\"button\" style=\"float: right\">Save</button>\n\t\t\t<button (click)=\"close()\" class=\"button\" style=\"float: right\">Cancel</button>\n\n\t\t</div>\n\n\t</div>\n\n</div>";

/***/ })
]);
//# sourceMappingURL=app.aac398a7baef9cda10f6.js.map