import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from './window.service';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public pokes: Pokemon[];
  public isLoading: boolean;
  private page: number;

  constructor(
    private pokemonService: PokemonService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    this.pokes = [];
    this.page = 1;
    this.isLoading = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((this.window.innerHeight + this.window.scrollY) >= this.document.body.offsetHeight) {
      this.getMorePokemon();
    }
  }

  getMorePokemon() {
    this.page += 1;
    this.getPokemon(this.page);
  }

  async getPokemon(page) {
    this.isLoading = true;
    const data = await this.pokemonService.getPokemonPage(page);
    this.pokes.push(...data);
    this.isLoading = false;
  }

  ngOnInit() {
    this.getPokemon(this.page);
  }

}
