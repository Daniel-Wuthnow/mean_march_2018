import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  	this.getTask();
  	this.getOneTask();
  }

  getTask(){
  	console.log("getTask")
       let tempObservable = this._http.get('/tasks');
       tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask(){
  	console.log("in getOneTask")
  	
  	let tempObservable = this._http.get(`/tasks/5aac68351151d54d98ace578`);
  	console.log("Observable",tempObservable)

  	tempObservable.subscribe(data => console.log("Got our one tasks!", data));
  }

}
