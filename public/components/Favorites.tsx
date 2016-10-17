/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';
import PokemonNickname from './PokemonNickname';

let favorites = [];

if (favorites = []) {
  localforage.getItem('favorites').then(function (value) {
    favorites = value;
    console.log(localforage.getItem('favorites'));
  }).catch(function (err) {
    favorites = [];
    localforage.setItem('favorites', favorites);
    console.log(localforage.getItem('favorites'));
  });
}

interface FavoritesProps {
  data: Pokemon[];
}

interface FavoritesState {
  favorites: any[];
}

class Favorites extends React.Component<FavoritesProps, FavoritesState> {
  constructor(props) {
    super(props);
    this.state = {
      favorites
    }
  }
  render() {
    let renderFavorites = () => {
      this.props.data.map((index, item) => {
        return (
          <div>Favorite</div>
        )
      })
    };
    return (
      <div className='favorites-wrapper'>
        <div class='favorite-pokemon'>

        </div>
      </div>
    )
  }
}

export default Favorites;
