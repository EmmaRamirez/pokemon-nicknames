/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';
import PokemonNickname from './PokemonNickname';

class Favorites extends React.Component<{}, {}> {
  render() {
    return (
      <div className='favorites-wrapper'>
        <h3>Favorites</h3>
      </div>
    )
  }
}

export default Favorites;
