import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IEngine } from "./engine.interface";

@Injectable()
export class EngineService {
    private _APIUrl = 'https://angular-2-course-a0eeb.firebaseio.com';

    constructor(private _http: Http) {
    }

    getEngines(): Observable<IEngine[]> {
        return this._http
            .get(this._APIUrl + '/engines.json')
            .map((response: Response) => <IEngine[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEngine(id: number): Observable<IEngine> {
        return this._http
            .get(`${this._APIUrl}/engines/${id}.json`)
            .map((response: Response) => <IEngine> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) : any {
        return Observable.throw(error.json().error || 'Server error');
    }
}
