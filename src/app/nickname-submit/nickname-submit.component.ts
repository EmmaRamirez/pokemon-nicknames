import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Nickname } from '../nickname';
import { Pokemon } from '../pokemon';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { allSpecies } from '../shared/allSpecies';

@Component({
  selector: 'app-nickname-submit',
  templateUrl: './nickname-submit.component.html',
  styleUrls: ['./nickname-submit.component.css']
})
export class NicknameSubmitComponent implements OnInit {

  @Input() public species: Pokemon['species'];
  @Input() public id: Pokemon['id'];
  @Input() public nickname: any;

  myControl: FormControl = new FormControl();

  options = allSpecies;

  filteredOptions: Observable<string[]>;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nickname = new Nickname();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.species = this.route.snapshot.paramMap.get('id');
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  async submitForm(e) {
    e.preventDefault();
    const request = { ...this.nickname, species: this.species };
    console.log(request);
    try {
      const result = await this.pokemonService.addNickname(request);
      console.log(result);
      window.location.replace(`pokemon/${this.species}`);
    } catch (e) {
      console.log(e);
    }
  }

}
