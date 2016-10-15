/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';

interface PokemonComponentProps {
  pokemon: Pokemon,
  nicknames: Nickname[]
}

class PokemonComponent extends React.Component<PokemonComponentProps, {}> {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        ~ data ~
      </div>
    );
  }
}

export default PokemonComponent;
