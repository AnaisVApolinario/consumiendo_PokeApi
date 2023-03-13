import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public pokemonDetails: any;
  public pokemonTypes:any;
  public pokemons:[]=[];
  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const pokemonId = params.get('id');
    if (pokemonId !== null) {
      const id = +pokemonId;
      this._pokemonService.getPokemonData(id).subscribe(data => {
        this.pokemonDetails = data;
        const typesArray: any[] = [];
        this.pokemons.concat(this.pokemonDetails?.types).forEach((element: any) => {
          typesArray.push(element.type.name);
        });
        this.pokemonTypes = typesArray;
      });
    }
  });
}

}
