import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokes: Pokemon[];

  constructor() {
    this.pokes = [
      {
        species: 'Pikachu',
        id: '035',
        nicknames: []
      },
      {
        species: 'Pikachu',
        id: '035',
        nicknames: []
      },
    ];
  }

}
