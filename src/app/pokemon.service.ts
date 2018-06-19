import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

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
    const url = `${this.apiUrl}submit-nickname`;
    return fetch(url, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ species, nickname, description, tags }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(console.error);
  }

}
