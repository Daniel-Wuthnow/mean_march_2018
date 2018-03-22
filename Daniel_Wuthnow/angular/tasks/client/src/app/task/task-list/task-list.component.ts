import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Task } from "../task"

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'Restful Tasks API';
  tasks : any;
  tasksToggle = true;
  task: Task;
  thistask: any;
  editToggle = false;
  editTaskid;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }

  getTasksFromService(){
  	let observable = this._httpService.getTasks()
  	observable.subscribe(data => {
  		if(this.tasksToggle){
  		console.log("got our data", data)
  		this.tasks = data;
  		this.tasksToggle = false;
  		} else {
  			this.tasks = [];
  			this.tasksToggle = true;
  		}
  	})

  

  }

	editTask(task) {
		if (this.editToggle == false) {
			this.editToggle = true;
			console.log(task);
			this.thistask = task;
		} else {
			this.editToggle = false;
		}
	}
		// if (this.editToggle == false) {
		// 	this.editToggle = true;
		// 	console.log("in editTask")
		// 	let observable = this._httpService.getEditForm(task)
		// 	observable.subscribe(data => {
		// 		console.log(data)
		// 	})
		// } else {
		// 	this.editToggle = false;
		// }
	

	submitEdit(){
		console.log(this.thistask)
		let observable = this._httpService.submitEdit(this.thistask);
		observable.subscribe();
	}

	deleteTask(id){
		console.log("inside deleteTask", id)
		let observable = this._httpService.destroyTask(id);
		observable.subscribe();
	}
}

