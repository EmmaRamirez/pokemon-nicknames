/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';
import { Router, Route, Link } from 'react-router';

interface PokemonComponentProps {
  data: any[];
  params?: any;
}

interface PokemonComponentState {
  item: any;
}

let capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class PokemonComponent extends React.Component<PokemonComponentProps, PokemonComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  findBySpecies(species) {
    let item = this.props.data.find((val) => {
      return val.pokemon.species === species;
    });
    return item;
  }

  componentDidMount() {
    this.setState({
      item: this.props.data[0]
    })

  }

  render() {
    let nicknames = () => {

    }
    return (
      <div className='pokemon-profile'>
        <h2>
          <span style={{ fontSize: '10px', color: 'grey' }}>#{this.state.item.pokemon.id}</span> {this.state.item.pokemon.species}
        </h2>
        <div className='pokemon-image'>
          <img src={'../img/xy-animated/' + this.state.item.pokemon.id + '.gif'} />
        </div>
        <div className='pokemon-nicknames'>
          { nicknames }
        </div>
      </div>
    );
  }
}

export default PokemonComponent;
