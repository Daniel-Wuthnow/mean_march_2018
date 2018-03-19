import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  	// this.getTask();
  }

  getTasks(){
       return this._http.get('/tasks');
  }


}
