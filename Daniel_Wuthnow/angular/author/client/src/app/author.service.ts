import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
  	return this._http.get('/authors')
  }

   getAuthor(id) {
    return this._http.get(`/authors/${id}`);
  }

  makeAuthor(author){
  	return this._http.post('/authors', author)
  }

  removeAuthor(id){
  	return this._http.delete(`/authors/${id}`)
  }

  editAuthor(id, author){
  	return this._http.put(`/edit/${id}`, author)
  }


}
