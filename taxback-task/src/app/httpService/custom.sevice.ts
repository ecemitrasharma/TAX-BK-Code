import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class CustomHttpService {
// URL to web api
public serviceUrl = 'https://jointhecrew.in/api/txns/priya@gmail.com/';
constructor (private http: Http) {}

public getCall<T>(request: any):Promise<T>{
var url = this.serviceUrl;
return this.http.get(url)
.toPromise()
.then(i => <T>i.json())
.catch(this.handleError);
}

public postCall<T> (model: any): Promise<T> {
let headers = new Headers({
     'Content-Type': 'application/x-www-form-urlencoded' 
});
 headers.append('Content-Type', 'application/x-www-form-urlencoded');
let options = new RequestOptions({ headers: headers });
let body = new URLSearchParams();
for(var prop in model){
body.set(prop, model[prop] );
}
return this.http.post(this.serviceUrl+model.id, body.toString(), options)
.toPromise()
.then(i=><T>i.json())
.catch(this.handleError);
}

public putCall<T> (request : any): Promise<T> {
return this.http.get(this.serviceUrl)
.toPromise()
.then(i=><T> i.json())
.catch(this.handleError);
}

public deleteCall<T> (id: any): Promise<T> {
return this.http.delete(this.serviceUrl+id)
.toPromise()
.then(i=><T> i.json())
.catch(this.handleError);
}

private extractData(res: Response) {
let body = res.json();
return body || { };
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