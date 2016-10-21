import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import NicknameData from './NicknameData';
import VoteData from './VoteData';

require('../styles/pokemon-modal.styl');

interface PokemonModalProps {
  pokemon?: any;
  active?: boolean;
  modalClick?: () => void;
}

interface PokemonModalState {

}

class PokemonModal extends React.Component<PokemonModalProps, PokemonModalState> {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  getPokemonNicknames(pokemon, nicks) {
    let nicknames = nicks.sort((a, b) => {
      return a.name - b.name;
    });
    nicknames = nicks.map((item, index) => {
      return (
              <div className='pokemon-modal-nickname-wrapper' key={index}>
                <VoteData pokemon={pokemon} nickname={item} />
                <NicknameData nickname={item} />
              </div>
            )
    });
    return nicks.length > 0 ? nicknames : <p>This Pokémon has no nicknames yet.</p>;
  }

  render() {
    let pokemon = this.props.pokemon.pokemon;
    let nicknames = pokemon.nicknames;
    return (
      <div className='pokemon-modal' style={
        this.props.active
        ? { display: 'block' }
        : { display: 'none' }
      }>
        <div className='pokemon-modal-inner'>
          <div onClick={this.props.modalClick} className='pokemon-modal-close'>&times;</div>
          <header className='pokemon-modal-header'>
            <h1>{pokemon.species}</h1>
            <div className='pokemon-modal-image'>
              <img alt={pokemon.species} src={`http://serebii.net/xy/pokemon/${pokemon.id}.png`} />
            </div>
            <div className='pokemon-modal-links'>
              <strong>Links</strong>
              <a target='_blank' href={`http://serebii.net/pokedex-xy/${pokemon.id}.shtml`}>
                Serebi
              </a>
              <span> | </span>
              <a target='_blank' href={`http://www.smogon.com/dex/xy/pokemon/${pokemon.species.toLowerCase()}/`}>
                Smogon
              </a>
              <span> | </span>
              <a target='_blank' href={`http://pokemondb.net/pokedex/${pokemon.species.toLowerCase()}`}>
                PokemonDB
              </a>
              <span> | </span>
              <a target='_blank' href={`http://bulbapedia.bulbagarden.net/wiki/${pokemon.species}_(Pok%C3%A9mon)`}>
                Bulbapedia
              </a>
            </div>
          </header>
          <div className='pokemon-modal-nicknames'>
            {this.getPokemonNicknames(pokemon, nicknames)}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonModal;
