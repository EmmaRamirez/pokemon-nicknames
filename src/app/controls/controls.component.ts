import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';

enum Options {
  dexNo = 'dexNo',
  numOfNicknames = 'numOfNicknames',
  speciesName = 'speciesName',
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  selected = Options.dexNo;

  public searchTerms = new Subject<string>();

  constructor(private pokemonService: PokemonService) { }

  search(event): void {
    this.pokemonService.filterString = event.target.value;
    console.log(this.pokemonService.filterString);
  }

  ngOnInit(): void {
    // this.pokemonService.filterString
  }

}
