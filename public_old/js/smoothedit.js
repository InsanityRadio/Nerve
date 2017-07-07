// Sue me for the name, it's not a registered trademark. 
var HTMLAudio = (function () {
    function HTMLAudio(track) {
        this.aud = new Audio(track.path);
        this.aud.preload = "auto";
    }
    HTMLAudio.prototype.playing = function () {
        if (!this.aud)
            return false;
        return !this.aud.paused;
    };
    HTMLAudio.prototype.play = function (callback) {
        if (!this.aud)
            return;
        this.aud.play();
        callback();
    };
    HTMLAudio.prototype.pause = function (callback) {
        if (!this.aud)
            return;
        this.aud.pause();
        callback();
    };
    HTMLAudio.prototype.seek = function (time) {
        if (!this.aud)
            return;
        this.aud.currentTime = time;
    };
    HTMLAudio.prototype.unload = function () {
        if (!this.aud)
            return;
        this.aud.pause();
        this.aud.src = "";
        delete this.aud;
    };
    HTMLAudio.prototype.onPlay = function (callback) {
        this.aud.onplaying = callback;
    };
    HTMLAudio.prototype.onPause = function (callback) {
        this.aud.onpause = callback;
    };
    HTMLAudio.prototype.onSeek = function (callback) {
        this.aud.onseeked = callback;
    };
    HTMLAudio.prototype.onEnd = function (callback) {
        this.aud.onended = callback;
    };
    HTMLAudio.prototype.time = function () {
        return this.aud.currentTime;
    };
    return HTMLAudio;
}());
var Deck = (function () {
    function Deck(element, id) {
        var _this = this;
        this.element = element;
        this.id = id;
        this.track = null;
        this.playhead = 0;
        this.wave = null;
        this.state = "UNLOAD";
        this.source = null;
        this.start = 0;
        this.iter = 0;
        element.querySelector(".play").addEventListener("click", function (e) { return _this.play(); });
        element.querySelector(".pause").addEventListener("click", function (e) { return _this.pause(); });
        element.querySelector(".reset").addEventListener("click", function (e) { return _this.reset(); });
        element.querySelector(".eject").addEventListener("click", function (e) { return _this.eject(); });
        this.vol = element.querySelector(".bit");
        this.iter = 0;
        // null wave
        this.source = null;
        this.wave = null;
        this.label();
    }
    Deck.prototype.load = function (track, notify, readonly) {
        var _this = this;
        this.clear();
        this.track = track;
        console.log("RO", readonly);
        this.source = new HTMLAudio(track);
        this.source.onPlay(function () { return _this.handlePlay(); });
        this.source.onPause(function () { return _this.handlePause(); });
        this.source.onEnd(function () { return _this.handleEnd(); });
        this.source.onSeek(function (a) { return _this.handleSeek(a); });
        this.label();
        if (this.wave && this.wave.die)
            this.wave.die();
        var options = {
            container: this.element.querySelector(".spect"),
            mediaElement: this.source.aud,
            dataUri: { arraybuffer: this.track.waveform },
            logger: console.error.bind(console),
            /** Optional config with defaults **/
            height: 200,
            zoomLevels: [4096],
            keyboard: false,
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
                    endTime: track.length,
                    editable: !readonly,
                    inMarkerColor: "#ff00ff",
                    color: "rgba(200, 0, 0, 0.5)",
                    labelText: "Outro"
                }]
        };
        var Peaks = peaks.js;
        setTimeout(function () {
            _this.waveform = Peaks.init(options);
            _this.waveform.on('error', function (error) {
                Errors.push("PEAKS-LOAD", "There was an error drawing the wave preview. " +
                    "If this persists, clear your cache and/or contact support.", false, null, "Waveform Error");
            });
        }, 1);
    };
    Deck.prototype.play = function () {
        var _this = this;
        this.source.play(function () { return _this.handlePlay(); });
    };
    Deck.prototype.handlePlay = function () {
        var _this = this;
        this.clear();
        this.element.querySelector(".play").className = "play active";
        this.element.querySelector(".pause").className = "pause";
        this.timer = setInterval(function (e) { return _this.changeVol(e); }, 50, 0.050);
        this.start = new Date().getTime() - this.playhead;
    };
    Deck.prototype.handleEnd = function () {
        this.element.querySelector(".pause").className = "pause";
        this.clear();
        this.setPlayhead(this.track.length);
    };
    Deck.prototype.clear = function () {
        this.element.querySelector(".play").className = "play";
        clearInterval(this.timer);
        clearInterval(this.timer2);
        this.timer = this.timer2 = null;
    };
    Deck.prototype.pause = function () {
        var _this = this;
        this.source.pause(function () { return _this.handlePause(); });
    };
    Deck.prototype.handlePause = function () {
        this.clear();
        this.element.querySelector(".pause").className = "pause active";
    };
    Deck.prototype.reset = function () {
        this.source.seek(0);
    };
    Deck.prototype.handleReset = function () {
        this.element.querySelector(".pause").className = "pause";
        this.clear();
        this.timer = null;
        this.playhead = 0;
        this.label();
    };
    Deck.prototype.eject = function () {
        this.clear();
        this.playhead = 0;
        this.source.unload();
        delete this.waveform;
        this.unloadLabel();
    };
    Deck.prototype.seek = function (time) {
        var _this = this;
        this.source.seek(time, function (a) { return _this.handleSeek(a); });
    };
    Deck.prototype.handleSeek = function (time) {
        this.beep = new Date().getTime();
        if (!this.track)
            this.playhead = 0;
        else
            this.playhead = Math.min(time, this.track.length);
        this.label();
        //this.wave.drawWaveform();
    };
    Deck.prototype.changeVol = function (time) {
        if (!this.wave)
            return;
        this.iter = (this.iter + 1) % 4;
        var beep = new Date().getTime();
        if (this.iter == 0)
            this.setPlayhead(this.playhead + (beep - this.beep) / 1000);
        else
            this.playhead += (beep - this.beep) / 1000;
        this.beep = beep;
        var volume = this.wave.getVolume();
        if (this.slider != null)
            volume *= this.slider.mute ? 0 : this.slider.gain / 100 | 0;
        this.vol.style.height = volume + "%";
    };
    Deck.prototype.setPlayhead = function () {
        //this.wave.drawWaveform();		
    };
    Deck.prototype.label = function () {
        if (!this.track)
            return this.unloadLabel();
        this.element.className = "deck";
        this.element.querySelector(".meta tr:first-child td:first-child").textContent = this.track.title;
        this.element.querySelector(".meta tr:nth-child(2) td:first-child").textContent = this.track.artist;
        this.element.querySelector(".meta tr:first-child td:nth-child(2)").textContent = Utilities.Date.formatTime(this.playhead || 0);
        this.element.querySelector(".meta tr:nth-child(2) td:nth-child(2)").textContent = "-" + Utilities.Date.formatTime(this.track.length - (this.playhead | 0));
    };
    Deck.prototype.unloadLabel = function () {
        this.element.className = "deck inactive";
        this.element.querySelector(".meta tr:first-child td:first-child").textContent = "";
        this.element.querySelector(".meta tr:nth-child(2) td:first-child").textContent = "";
        this.element.querySelector(".meta tr:first-child td:nth-child(2)").textContent = "00:00";
        this.element.querySelector(".meta tr:nth-child(2) td:nth-child(2)").textContent = "00:00";
    };
    return Deck;
}());
// DEPRECATED/not used
// it's great, but might as well use the BBC peaks library because it's nicer and probably more efficient
// actually that's a lie it lags the fuck out of my browser but oh well
var Wave = (function () {
    function Wave(event, deck, canvas) {
        this.deck = deck;
        this.canvas = canvas;
        this.cursor = -5;
        this.fmm = null;
        this.fmd = null;
        this.fmo = null;
        this.template = document.createElement("canvas");
        this.templateContext = this.template.getContext("2d");
        var parent = canvas.parentNode;
        canvas.width = parent.clientWidth * window.devicePixelRatio;
        canvas.height = parent.clientHeight * window.devicePixelRatio;
        canvas.cwidth = parent.clientWidth;
        canvas.cheight = parent.clientHeight;
        this.template.width = parent.clientWidth * window.devicePixelRatio;
        this.template.height = parent.clientHeight * window.devicePixelRatio * 2;
        this.templateContext.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.context = canvas.getContext('2d');
        this.context.font = "60px arial";
        this.context.fillStyle = "#999";
        this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.context.textAlign = "center";
        this.context.fillText("...", canvas.cwidth / 2, canvas.cheight / 1.7);
        if (event)
            this.handleLoadDataFile(event);
        this.addListeners();
    }
    Wave.prototype.addListeners = function () {
        var _this = this;
        this.die();
        this.canvas.addEventListener("mousemove", this.fmm = function (e) { return _this.handleShowSeek(e); });
        this.canvas.addEventListener("mousedown", this.fmd = function (e) { return _this.handleSeek(e); });
        this.canvas.addEventListener("mouseout", this.fmo = function (e) { return _this.handleShowSeek(e); });
    };
    Wave.prototype.die = function () {
        this.canvas.removeEventListener("mousemove", this.fmm);
        this.canvas.removeEventListener("mousedown", this.fmd);
        this.canvas.removeEventListener("mouseout", this.fmo);
    };
    Wave.prototype.handleShowSeek = function (e) {
        var rect = this.canvas.getBoundingClientRect();
        this.cursor = e.type == "mouseout" ? -5 : e.clientX - rect.left;
        this.drawWaveform();
    };
    Wave.prototype.handleSeek = function (e) {
        var rect = this.canvas.getBoundingClientRect();
        var playhead = (e.clientX - rect.left) / rect.width * this.waveform.duration;
        this.deck.seek(playhead);
    };
    Wave.prototype.loadDataFile = function () {
        var _this = this;
        var http = new XMLHttpRequest();
        http.responseType = "arraybuffer";
        http.open("GET", this.track.waveformPath);
        http.addEventListener("load", function (e) { return _this.handleLoadDataFile(e); });
        http.send();
    };
    Wave.prototype.handleLoadDataFile = function (e) {
        this.waveform = WaveformData.create(e.target);
        var step = Math.floor(this.waveform.min.length / this.canvas.cwidth);
        var t = this.canvas.cwidth; // Math.ceil(this.waveform.min.length / step);
        var mult = this.canvas.cheight / 256;
        this.min = new Uint8Array(t);
        this.max = new Uint8Array(t);
        // pre-calculate so redraw is faster
        for (var i = 0, j = 0; i < t; i++, j = i * step) {
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
    };
    Wave.prototype.loaded = function () {
        return this.waveform && this.waveform.max;
    };
    /**
     * Return the current volume and sets the playhead
     * @param number seconds seconds (+ decimal) to set playhead to
     * @return number the current time (0 - 100)
     */
    Wave.prototype.getVolume = function (seconds) {
        if (!this.loaded())
            return 0;
        if (seconds == undefined)
            seconds = this.deck.playhead;
        var volume = this.waveform.max[Math.floor(seconds / this.track.length * this.waveform.max.length)];
        volume = (volume + 0) / 1.28;
        return volume;
    };
    Wave.prototype.drawWaveform = function () {
        if (!this.sections)
            return;
        //this.sections[3][1] = (this.deck.playhead || 0) / this.waveform.duration * this.max.length;
        var x = ((this.deck.playhead || 0) / this.waveform.duration * this.max.length) || 0;
        this.context.clearRect(0, 0, this.canvas.cwidth, this.canvas.cheight);
        this.context.drawImage(this.template, 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvas.cwidth, this.canvas.cheight);
        if (x != 0)
            this.context.drawImage(this.template, 0, this.canvas.height, x * window.devicePixelRatio, this.canvas.height, 0, 0, x, this.canvas.cheight);
        this.context.strokeStyle = "rgba(255, 0, 0, 0.8)";
        this.context.beginPath();
        this.context.moveTo(this.cursor, 0);
        this.context.lineTo(this.cursor, this.canvas.cheight);
        this.context.stroke();
    };
    Wave.prototype.drawTemplate = function () {
        if (!this.sections)
            return;
        this.context.clearRect(0, 0, this.canvas.cwidth, this.canvas.cheight);
        this.context.beginPath();
        // Now this is hell-a fast compared to reading the previous array
        for (var l = 0; l < this.sections.length; l++) {
            this.drawSection(0, this.sections[l][0], this.sections[l][1], this.sections[l][2]);
        }
        this.drawSection(this.canvas.cheight, 0, this.canvas.cwidth, "#FA2020");
    };
    Wave.prototype.drawSection = function (y, start, end, fill) {
        this.templateContext.fillStyle = fill;
        this.templateContext.beginPath();
        this.templateContext.moveTo(start, y + this.canvas.cheight / 2);
        for (var i = start; i < end; i++) {
            this.templateContext.lineTo(i, y + this.min[i]);
        }
        // Finish & go back to origin
        this.templateContext.lineTo(end, y + this.canvas.cheight / 2);
        this.templateContext.moveTo(start, y + this.canvas.cheight / 2);
        for (var i = start; i < end; i++) {
            this.templateContext.lineTo(i, y + this.max[i]);
        }
        this.templateContext.lineTo(end, y + this.canvas.cheight / 2);
        this.templateContext.closePath();
        this.templateContext.fill();
    };
    Wave.prototype.interpolateHeight = function (size, mult) {
        return this.canvas.cheight - (size + 128) * mult;
    };
    return Wave;
}());
