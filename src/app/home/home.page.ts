import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pokemons: any[] = [];
  public details: any[] = [];
    constructor(private _pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }


  getPokemons(){
    this._pokemonService.getPokemonList().subscribe((data:any)=>{
      this.pokemons =data.results;
      for (let i = 0; i < this.pokemons.length; i++) {
        this._pokemonService.getPokemonData(i + 1).subscribe((data: any) => {
          this.details[i] = data.sprites.front_default;
        });
      }
    })
  }

  // showPokemon(id:number){
  //   console.log('Indice', id);
  //   this._pokemonService.getPokemonData(id).subscribe((data: any) => {
  //     this.details[id]=data.sprites.front_default;
  //   })
  // }
}