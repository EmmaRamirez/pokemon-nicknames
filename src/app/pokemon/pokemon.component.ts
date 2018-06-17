import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() public pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokemon = new Pokemon();
  }

  ngOnInit() {
    this.getPokemon();
  }

  async getPokemon() {
    console.log(this.pokemon);
    const species = this.route.snapshot.paramMap.keys;
    console.error(species);
    const data = await this.pokemonService.getPokemon('pikachu');

    {
      this.pokemon.id = data.id;
      this.pokemon.species = data.species;
      this.pokemon.nicknames = data.nicknames;
    }
  }

}
