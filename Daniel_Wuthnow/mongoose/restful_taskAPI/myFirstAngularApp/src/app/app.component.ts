import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  tasksToggle = true;

  constructor(private _httpService: HttpService){
  }

  ngOnInit(){
  }

  getTasksFromService(){
  	let observable = this._httpService.getTasks()
  	observable.subscribe(data => {
  		if(this.tasksToggle){
  		console.log("got our data", data)
  		this.tasks = data['data'];
  		this.tasksToggle = false;
  		} else {
  			this.tasks = [];
  			this.tasksToggle = true;
  		}
  	})
  }

  onButtonClick(event) {
  	console.log("click event is working", event)
  }



  }
