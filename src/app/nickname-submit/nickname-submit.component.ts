import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Nickname } from '../nickname';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-nickname-submit',
  templateUrl: './nickname-submit.component.html',
  styleUrls: ['./nickname-submit.component.css']
})
export class NicknameSubmitComponent implements OnInit {

  @Input() public species: Pokemon['species'];
  @Input() public nickname: Nickname;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.nickname = new Nickname();
  }

  submitForm(e) {
    e.preventDefault();
    const request = { ...this.nickname, species: this.species };
    console.log(request);
  }

}
