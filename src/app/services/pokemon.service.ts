import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(public _http: HttpClient) { }
  getPokemonList(){
    return this._http.get(`${this.apiUrl}/pokemon?limit=60`);
  }
  getPokemonData(id:number){
    return this._http.get(`${this.apiUrl}/pokemon/${id}`);
  }

}
