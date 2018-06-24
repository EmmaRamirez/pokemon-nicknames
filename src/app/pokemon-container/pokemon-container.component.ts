import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

const formatString = (s: string) => {
  if (s === '') { return ''; }
  if (s.toLowerCase() === 'ho-oh') { return 'Ho-Oh'; }
  return s.split('')[0].toUpperCase() + s.slice(1).toLowerCase();
};

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
    private location: Location,
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
    if (this.page > 27 || this.getString() !== '') {
      this.isLoading = false;
    } else {
      this.isLoading = true;
      try {
        const data = await this.pokemonService.getPokemonPage(page);
        this.pokes.push(...data);
        this.isLoading = false;
      } catch (e) {
        console.error(e);
      }
    }
  }

  async searchPokemon(search) {
    // this.location.go(`/pokemon/search?species=${search}`);
    this.isLoading = true;
    try {
      const data = await this.pokemonService.getPokemonSearch(formatString(search));
      this.pokes.push(...data);
      this.isLoading = false;
    } catch (e) {
      console.error(e);
      this.isLoading = false;
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
      t.searchPokemon(t.getString());
    }
  }

  ngOnInit() {
    this.getPokemon(this.page);
  }

}
