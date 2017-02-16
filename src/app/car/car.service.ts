import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarService {
  private _APIUrl = 'https://angular-2-course-a0eeb.firebaseio.com';

  constructor(private _http: Http) {
  }


  private handleError(error: Response) : any {
    return Observable.throw(error.json().error || 'Server error');
  }
}
