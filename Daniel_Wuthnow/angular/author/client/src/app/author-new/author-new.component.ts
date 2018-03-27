import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { Author } from '../author'

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
	author;
	error;
  constructor(
  		private _authorService: AuthorService,
  		private _router: Router,
  	) {
  	this.author = new Author();
  }

  ngOnInit() {
  }

  onSubmit(){
  	// this.author is an empty string
  	let observable = this._authorService.makeAuthor(this.author)
  	observable.subscribe((data) => {
  		console.log("success",data)
  		this._router.navigate(['/']);
  	},
  	(err) => {
  		this.error = err.error.errors.name.message
  	})
  }

  onCancel(){
    this._router.navigate(['/']);
  }

}
