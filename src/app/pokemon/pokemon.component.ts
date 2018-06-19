import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() public pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokemon = new Pokemon();
  }

}
