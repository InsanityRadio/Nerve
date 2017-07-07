import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { IterTrack, Track, FullTrack } from './struct/track';

@Injectable()
export class NerveService {

	private static csrf_key:string;

	constructor (private http: Http) {

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


		return this.$post('/api/upload/save/' + track.id, data)
			.then(this.extractData)
			.then(this.extractFullTrack)
			.catch(this.handleError);
	}

	private $post (url:string, data:any) {
		let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, data, options).toPromise();
	}

	private extractData (res: Response) : any {
		return res.json();
	}

	private extractTrack (res: any) : Track[] {
		return res.map((t: any) => new IterTrack(t));
	}

	private extractFullTrack (res: any) : FullTrack {
		return new FullTrack(('track' in res) ? res.track : res);
	}

	private bootstrap (res: any) {

		window.$config = res;
		NerveService.csrf_key = res.key;
		return res;

	}

	private handleError (error: Response | any) { 

		let errMsg: string;

		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);
		return Promise.reject(errMsg);

	}

}