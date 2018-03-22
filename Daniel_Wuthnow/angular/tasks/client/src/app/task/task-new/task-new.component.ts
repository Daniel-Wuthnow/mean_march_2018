import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task: Task;

  constructor(private _httpService: HttpService) {
  	this.task = new Task();
  	console.log(this.task);
  }

  ngOnInit() {
  }

  onSubmit(){
  	let observable = this._httpService.makeTasks(this.task)
  	observable.subscribe(data => {
  		console.log("made a task", data)
      this.task = new Task();
  	})
  }

}
