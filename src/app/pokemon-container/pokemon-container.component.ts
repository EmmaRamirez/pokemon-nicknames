import { Component, HostListener, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  public pokes: Pokemon[];
  public isLoading: boolean;
  public lastSearchString = '';
  private page: number;

  constructor(
    public pokemonService: PokemonService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    this.pokes = [];
    this.page = 1;
    this.isLoading = true;
    window.setInterval(() => this.checkSearchString(this), 250);
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
    if (this.page > 27) {
      this.isLoading = false;
    } else {
      this.isLoading = true;
      try {
        const data = await this.pokemonService.getPokemonPage(page);
        this.pokes.push(...data.filter(this.pokemonService.getFilters));
        this.isLoading = false;
      } catch (e) {
        console.error(e);
      }
    }
  }

  getString() {
    return this.pokemonService.getFilterString();
  }

  checkSearchString(t) {
    if (this.getString() !== t.lastSearchString) {
      t.pokes = [];
      t.page = 1;
      t.lastSearchString = t.getString();
      t.getPokemon(t.page);
    }
    if (this.lastSearchString !== '') {
      this.getMorePokemon();
    }
  }

  ngOnInit() {
    this.getPokemon(this.page);
  }

}
