/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';
import PokemonNickname from './PokemonNickname';

require('../styles/favorites.styl');

let favorites:FavoriteInterface[] = [];

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

interface DataModel {
  pokemon: Pokemon;
  nickname: Nickname;
}

interface FavoritesProps {
  data: DataModel[];
}

interface FavoriteInterface {
  species: string;
  nickname: string;
}

interface FavoritesState {
  favorites: FavoriteInterface[];
}

class Favorites extends React.Component<FavoritesProps, FavoritesState> {
  constructor(props) {
    super(props);
    this.state = {
      favorites
    }
  }
  render() {

    let favorites = this.state.favorites;

    console.log('favorites:', favorites);


    let data = [];
    let mutableData = this.props.data;
    function createNewPokemonArray ()  {
      let result = [];
      let foundItem;
      for (let i = 0; i < favorites.length; i++) {
        foundItem = mutableData.find((val) => {
          return val.pokemon.species === favorites[i].species && val.nickname.name === favorites[i].nickname;
        });
        typeof foundItem !== 'undefined'
        ? result.push(foundItem)
        : '';

      }
      return result;
    }
    data = createNewPokemonArray();

    console.log('data:', data);

    let renderFavorites = data.map((item, index) => {
        return <PokemonNickname
                 pokemon={item.pokemon}
                 nickname={item.nickname}
                 id={item.pokemon.id}
                 key={index}
                />
      }
    );

    console.log('renderFavorites:', renderFavorites);


    // let renderFavorites = () => {
    //   let fav = this.state.favorites;
    //   this.props.data.map((item, index) => {
    //         return <PokemonNickname
    //                 pokemon={item.pokemon}
    //                 nickname={item.nickname}
    //                 id={item.pokemon.id}
    //                 key={index}
    //                />
    //
    //     }).filter(filterByFavorites(item));
    // }

    return (
      <div className='favorites-wrapper'>
        <h2>Favorites</h2>
        <div className='favorite-pokemon'>
          { renderFavorites }
        </div>
      </div>
    )
  }
}

export default Favorites;
