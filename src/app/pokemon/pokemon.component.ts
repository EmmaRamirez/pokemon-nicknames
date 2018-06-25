import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() public pokemon: Pokemon;
  public isSinglePage: boolean;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokemon = new Pokemon();
    this.isSinglePage = false;
  }

  @Input() goBack() {
    history.back();
  }

  async getPokemon(id) {
    console.log(id);
    const data = await this.pokemonService.getPokemon(id);
    this.pokemon = data;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPokemon(id);
      this.isSinglePage = true;
    }
  }

}
