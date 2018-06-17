import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public pokes: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.getPokemon();
  }

  async getPokemon() {
    const data = await this.pokemonService.getAllPokemon();
    {
      this.pokes = data;
    }
  }

}
