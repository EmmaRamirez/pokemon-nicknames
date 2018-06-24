import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = environment.production ? 'https://pokemon-nicknames.herokuapp.com/' : 'http://localhost:8888/';
  public filterString = '';

  constructor(private http: HttpClient) { }

  getFilterString() { return this.filterString; }

  getPokemonSearch(search: string): Promise<Pokemon[]> {
    if (search === '' || (search.match(/\s/g) && search.match(/\s/g).length > 0)) {
      return this.getPokemonPage(1);
    }
    const url = `${this.apiUrl}pokemon/search?species=${search}`;
    return fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .catch(console.error);
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
