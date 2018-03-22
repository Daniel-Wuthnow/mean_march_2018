import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getTasks(){
       return this._http.get('/tasks');
  }

  makeTasks(task){
       return this._http.post('/tasks', task);
  }

  submitEdit(task){
  	return this._http.put(`/tasks/${task._id}`, task)
  }

  destroyTask(id){
  	return this._http.delete(`/tasks/${id}`)
  }

}
