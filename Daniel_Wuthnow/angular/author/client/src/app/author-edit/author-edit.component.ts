import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Author } from '../author'

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
	author: any;
	error: String;
  constructor(
  	private _authorService: AuthorService,
  	private _router: Router,
  	private _route: ActivatedRoute,
  	) {}

  ngOnInit() {
  	this.author = new Author();
  	this.getAuthor();
  }

  getAuthor() {
    this._route.params.subscribe((params) => {
      let observable = this._authorService.getAuthor(params['id']);
      observable.subscribe( (res) => {
      	console.log(res)
      	this.author = res
      })
    })
  }

  editSubmit(event){
  	event.preventDefault();
  	console.log(this.author)
  	let observable = this._authorService.editAuthor(this.author._id, this.author);
  	observable.subscribe((data) => {
  		console.log("success",data);
  		this._router.navigate(['/']);
  	},
  	(error) => {
  		console.log("er", error)
  		// this.error = err;
  	})
  }

}
