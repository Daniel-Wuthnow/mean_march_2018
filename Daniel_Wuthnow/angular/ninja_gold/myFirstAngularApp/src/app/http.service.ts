import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  	this.getPokemon();
  }

  getPokemon(){
       console.log("in pokemon")
       let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
       bulbasaur.subscribe((data) => {
        console.log(`This is the first pokemon ${data.name}`),
        console.log("Got our pokemon!", data);
     })
  }

}
