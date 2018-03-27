import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
	authors: any;
  constructor(
  	private _authorService: AuthorService,
  	private _router: Router,
  	) { }

  ngOnInit() {
  	let observable = this._authorService.getAuthors();
  	observable.subscribe((data) => {
  		this.authors = data
  	}, (err) => {
  		console.log("errors", err)
  	})
  }


  onDelete(id){
  	let observable = this._authorService.removeAuthor(id)
  	observable.subscribe()
  }

  onEdit(author){
  	console.log(author._id)
  	this._router.navigate(['/edit', author.id]);
  }



}
