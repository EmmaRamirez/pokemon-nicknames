/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import VoteData from './VoteData';
import NicknameData from './NicknameData';
//import Notification from './Notification';
import * as localforage from 'localforage';

interface PokemonNicknameProps {
  pokemon: Pokemon;
  nickname: Nickname;
  id?: string;
  addToFavorites?: () => void;
  expandPokemon?: () => void;
  image?: string;
}

interface PokemonNicknameState {
  favorite?: boolean;
  image?: string;
}

function dasherize(string) {
  return string.replace(/[A-Z]/g, function (char, index) {
    return (index !== 0 ? '-' : '') + char.toLowerCase();
  }).replace(/\s+/g, function (char, index) {
    return '';
  });
}


class PokemonNickname extends React.Component<PokemonNicknameProps, PokemonNicknameState> {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
      //image: '../img/xy-animated/' + this.props.id + '.gif',
      //image: 'http://serebii.net/pokedex-xy/icon/' + this.props.id + '.png',
      image: `http://serebii.net/xy/pokemon/${this.props.id}.png`
    }
  }

  saveFavorites() {
    // localforage.setItem('favorites', this.state.favorites).then(function (value) {
    //   console.log(value);
    // }).catch(function (err) {
    //   console.log(err);
    // })
  }

  handleFavorite(species, nickname) {
    // if (this.state.favorite) {
    //   this.setState({
    //     favorite: false
    //   });
    //   let filteredFavorites = this.state.favorites.filter(function (fav) {
    //     return fav.species !== species && fav.nickname !== nickname;
    //   });
    //   this.setState({
    //     favorites: filteredFavorites
    //   })
    //   console.log(this.state.favorites);
    //   this.saveFavorites();
    // } else {
    //   let item:any = [{
    //     species,
    //     nickname
    //   }];
    //   let newFavorites = this.state.favorites.concat(item);
    //   this.setState({
    //     favorites: newFavorites
    //   });
    //
    //   this.setState({
    //     favorite: true
    //   });
    //
    //   console.log(this.state.favorites);
    //   this.saveFavorites();
    // }
  }



  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {
    // console.log(this.state.favorites);
    // for (let i = 0; i < this.state.favorites.length; i++) {
    //   if (this.state.favorites[i].species === this.props.pokemon.species && this.state.favorites[i].nickname === this.props.nickname.name) {
    //     this.setState({
    //       favorite: true
    //     });
    //   }
    // }
  }

  render():React.ReactElement<{}> {
    let tags;
    let voteData;
    if (this.props.nickname.tags !== undefined) {
      tags = this.props.nickname.tags.map(function (tag, index) {
        return <a key={index} href={'/tags/' + dasherize(tag)}>#{tag}</a>
      });
    }
    if (this.props.nickname.isRealNickname || typeof this.props.nickname.isRealNickname === 'undefined') {
      voteData = <VoteData pokemon={this.props.pokemon} nickname={this.props.nickname} />
    }

    return (
      <div className='pokemon-nickname' data-id={this.props.id}>
        { voteData }
        <div className='pokemon-data data-component'>
          <h3 className='pokemon-data-header'>
            <a href={'/pokemon/' + this.props.pokemon.species.toLowerCase()}>
              <span style={{ fontSize: '10px', color: 'grey' }}>#{this.props.pokemon.id}</span> {this.props.pokemon.species}
            </a>
          </h3>
          <div className='pokemon-image-container'>
            <img src={this.props.image} />
          </div>
          <a onClick={ this.props.expandPokemon } href={'/#' + this.props.pokemon.species.toLowerCase()} >
            { typeof this.props.nickname.isRealNickname === 'undefined' && this.props.pokemon.nicknames.length > 1 ? <button className='more'>+ {this.props.pokemon.nicknames.length - 1} more { this.props.pokemon.nicknames.length - 1 > 1 ? 'nicknames' : 'nickname' }</button> : '' }
          </a>
        </div>
        <NicknameData nickname={this.props.nickname} />
      </div>
    )
  }
}

export default PokemonNickname;
