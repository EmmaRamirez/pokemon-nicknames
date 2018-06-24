import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokemon-nicknames.herokuapp.com/';
  public filterString = '';

  constructor(private http: HttpClient) { }

  getFilterString() {
    return this.filterString;
  }

  getFilters = (f) => f.species.startsWith(this.filterString);
  getSorters = (a, b) => {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 1;
  }

  getPokemon(id: string = 'bulbasaur'): any {
    const url = `${this.apiUrl}pokemon/${id}`;
    return fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .catch(console.error);
  }

  getAllPokemon() {
    const url = `${this.apiUrl}pokemon`;
    return fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .catch(console.error);
  }

  getPokemonPage(page: number = 1): Promise<Pokemon[]> {
    const url = `${this.apiUrl}pokemon/page/${page}`;
    return fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .catch(console.error);
  }

  addNickname({ species, nickname, description, tags }) {
    if (species == null || nickname == null) {
      throw new Error('Species and nickname are required.');
    }
    const formData = new FormData();
    formData.append('species', species);
    formData.append('nickname', nickname);
    formData.append('description', description || 'No description provided.');
    formData.append('tags', tags || '');
    const url = `${this.apiUrl}submit-nickname`;
    return fetch(url, {
      mode: 'cors',
      method: 'POST',
      body: formData
    })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(console.error);
  }

}
