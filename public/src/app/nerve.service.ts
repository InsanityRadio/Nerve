import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { IterTrack, Track, FullTrack, UploadTrack } from './struct/track';

export class Upload {

	complete: boolean = false;
	
	message:string = '';

	private _progress:number = 0;

	public id:number = 0;

	constructor (public track: Track, private file: File, private options: Object, private nerveService: NerveService) {

		this.id = (new Date().getTime()) - 1262304000000;
		nerveService.uploadGetPath()
			.then((path) => this.gotPath(path + 'do/'));

	}

	get progress () : number {
		return Math.round(this._progress / 2);
	}

	get error () : boolean {
		return this.progress != 100 && this.complete
	}

	update (method: () => void) {
		this._update = method;
	}

	private gotPath (path: String) {

		var formData = new FormData();

		for (var i in this.track) {
			formData.append(i, this.track[i]);
		}

		for (var i in this.options) {
			formData.append(i, this.options[i]);
		}

		formData.append("file", this.file);

		var [xhr, upload] = this.nerveService.uploadDo(path, formData)

		upload.subscribe(
			progress => {
				this._progress = progress;
				console.log(progress)
			},
			error => {
				this.message = error;
				this.complete = true;
				this._update()				
			},
			complete => {
				this._progress = 100;
				let response = JSON.parse(xhr.responseText)
				this._key = response.token;
				this.watchForChanges();
			}
		);

	}

	private watchForChanges () {

		this.nerveService.uploadCheck(this._key)
			.then((message) => {

				var data = message.json();

				if (data.running) {
					this._interval = setTimeout(() => this.watchForChanges(), 4000);
				} else {
					this.complete = true;
				}

				this._progress = 100 + data.percent;
				this.message = data.message;

				this._update(this);

			}).catch((message) => {

				var data = message.json();
				this.complete = true;
				this.error = true;

				this._update(this);

			});

	}

}

@Injectable()
export class NerveService {

	private static csrf_key:string;

	static getInstance () {
		return NerveService.instance;
	}

	constructor (private http: Http) {

		NerveService.instance = this;
		console.log('i am being constructed, yay')

	}

	handshake () : Promise<any> {
		return this.http.get('/api/dynamic/config')
			.toPromise()
			.then(this.extractData)
			.then(this.bootstrap)
			.catch(this.handleError);
	}

	myUploads () : Promise<Track[]> {
		return this.http.get('/api/upload/list/')
			.toPromise()
			.then(this.extractData)
			.then(this.extractTrack)
			.catch(this.handleError);
	}

	track (id: number) : Promise<FullTrack> {
		return this.http.get('/api/upload/file/' + id)
			.toPromise()
			.then(this.extractData)
			.then(this.extractFullTrack)
			.catch(this.handleError);
	}

	saveTrack (track:FullTrack) : Promise<FullTrack> {
		let data:any = track.serialize()
		data['token'] = NerveService.csrf_key

		let formData = new FormData();
		for (var i in data) {
			formData.append(i, data[i]);
		}

		return this.$post('/api/upload/save/' + track.id, formData)
			.then(this.extractData)
			.then(this.extractFullTrack)
			.catch(this.handleError);
	}

	publishTrack (track:FullTrack) : Promise<FullTrack> {

		let track_id = track.id;
		let formData = new FormData();
		formData.append('token', NerveService.csrf_key);

		return this.$post('/api/upload/publish/' + track_id, formData)
			.then(this.extractData)
			.catch(this.handleError);
	}

	moderationPending () : Promise<Track[]> {
		return this.http.get('/api/moderation/pending/')
			.toPromise()
			.then(this.extractData)
			.then(this.extractTrack)
			.catch(this.handleError);
	}

	flag (track:FullTrack) : Promise {

		let track_id = track.id;
		let formData = new FormData();
		formData.append('token', NerveService.csrf_key);

		return this.$post('/api/moderation/flag/' + track_id, formData)
			.then(this.extractData)
			.catch(this.handleError);
	}

	reject (track:FullTrack) : Promise {

		let track_id = track.id;
		let formData = new FormData();
		formData.append('token', NerveService.csrf_key);

		return this.$post('/api/moderation/reject/' + track_id, formData)
			.then(this.extractData)
			.catch(this.handleError);
	}

	approve (track:FullTrack) : Promise {

		let track_id = track.id;
		let formData = new FormData();
		formData.append('token', NerveService.csrf_key);

		return this.$post('/api/moderation/approve/' + track_id, formData)
			.then(this.extractData)
			.catch(this.handleError);
	}

	metadataMatch (metadata: Object) {

		return this.http.get('/api/metadata/match/?title=' + encodeURIComponent(metadata.title) + '&artist=' + encodeURIComponent(metadata.artist))
			.toPromise()
			.then(this.extractData)
			.then(this.extractUploadTrack)

	}

	upload (track:Track, file:File, options:Object) {

		return new Upload(track, file, options, this);

	}

	uploadGetPath () {
		return this.http.get('/api/upload/path/')
			.toPromise()
			.then(this.extractData)
			.then(function (data) {
				return data.path;
			})
			.catch(this.handleError);
	}

	uploadDo(path: String, form: FormData): Observable<string | number> {

		let xhr = new XMLHttpRequest();

		return [xhr, Observable.create(observer => { 
			xhr.addEventListener("progress", (progress) => {
				let percentCompleted;

				if (progress.lengthComputable) {
					percentCompleted = Math.round(progress.loaded / progress.total * 100);

					if (percentCompleted < 1) {
						observer.next(0);
					} else {
						observer.next(percentCompleted);
					}
				}
			});

			xhr.addEventListener("load", (e) => {
				if (e.target['status'] !== 200) {
					observer.error(e.target['responseText']);
				} else {
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

			return () => xhr.abort()
		})];
	}

	uploadCheck (key:string) : Promise {

		return this.http.get('/api/upload/status/' + key)
			.toPromise();

	}

	private $post (url:string, data:any) {
		let headers = new Headers({}); // { 'Content-Type': 'multipart/form-data' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, data, options).toPromise();
	}

	private extractData (res: Response) : any {
		return res.json();
	}

	private extractTrack (res: any) : Track[] {
		return res.map((t: any) => new IterTrack(t));
	}

	private extractUploadTrack (res: any) : Track[] {
		if (!res.external_id) {
			throw new Error("No results found");
		}
		return new UploadTrack(res);
	}

	private extractFullTrack (res: any) : FullTrack {
		return new FullTrack(('track' in res) ? res.track : res);
	}

	private bootstrap (res: any) {

		window['$config'] = res;
		NerveService.csrf_key = res.key;
		return res;

	}

	private handleError (error: Response | any) { 

		let errMsg: string;

		// Yuck.
		if (Object.getPrototypeOf(error).constructor.name == "Response") {
			const body = error.json() || '';
			errMsg = body.message || JSON.stringify(body);
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);

		// We should, er, show a dialogue here

		return Promise.reject(errMsg);

	}

}