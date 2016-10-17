/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';
import * as localforage from 'localforage';



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

// localforage.getItem('favorites').then(function (value) {
//   favorites = value;
//   console.log(localforage.getItem('favorites'));
// }).catch(function (err) {
//   favorites = [];
//   localforage.setItem('favorites', favorites);
//   console.log(localforage.getItem('favorites'));
// });


console.log(favorites);

interface PokemonNicknameProps {
  pokemon: Pokemon;
  nickname: Nickname;
  id: string;
  addToFavorites?: () => void;
}

interface PokemonNicknameState {
  favorite?: boolean;
  image?: string;
  upvotes?: number;
  downvotes?: number;
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
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.state = {
      favorite: false,
      image: '../img/xy-animated/' + this.props.id + '.gif',
      upvotes: this.props.nickname.upvotes,
      downvotes: this.props.nickname.downvotes
    }
  }

  saveFavorites() {
    localforage.setItem('favorites', favorites).then(function (value) {
      console.log(value);
    }).catch(function (err) {
      console.log(err);
    })
  }

  handleFavorite(species, nickname) {
    if (this.state.favorite) {
      this.setState({
        favorite: false
      });
      favorites = favorites.filter(function (fav) {
        return fav.species !== species && fav.nickname !== nickname;
      });
      this.saveFavorites();
    } else {
      favorites.push({
        species,
        nickname
      });
      this.setState({
        favorite: true
      });
      this.saveFavorites();
    }
  }

  handleUpvote() {
    console.log('le upboat');
    this.setState({
      upvotes: this.state.upvotes + 1
    })
  }

  handleDownvote() {
    this.setState({
      downvotes: this.state.downvotes + 1
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      image: '../img/xy-animated/' + this.props.id + '.gif'
    })
  }

  componentWillMount() {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].species === this.props.pokemon.species && favorites[i].nickname === this.props.nickname.name) {
        this.setState({
          favorite: true
        });
      }
    }
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
      voteData = (<div className='vote-data data-component'>
        <div onClick={() => {
          this.handleUpvote();
        }} className='upvote-arrow'>
          <i className='fa fa-arrow-up'></i>
        </div>
        <div className='upvotes'>{this.state.upvotes}</div>
        <div className='favorites-wrapper'>
          <div className='votes-total'>
            {this.state.upvotes - this.state.downvotes}
          </div>
          <div className='favorite-trigger' data-favorite={this.state.favorite} onClick={() => {
            this.handleFavorite(this.props.pokemon.species, this.props.nickname.name);
          }}>
            <i className='fa fa-star' title='Add to Favorites'></i>
          </div>
        </div>
        <div  className='downvotes'>{this.state.downvotes}</div>
        <div onClick={() => {
          this.handleDownvote();
        }} className='downvote-arrow'>
          <i className='fa fa-arrow-down'></i>
        </div>
      </div>);
    }
    let nicknameData =  ( <div className='nickname-data data-component'>
          <h3 className='nickname-data-header'>
            <a href={'/nickname/' + dasherize(this.props.nickname.name)}>
              {this.props.nickname.name}
            </a>
          </h3>
          <p>{this.props.nickname.description === null ? 'No description provided.' : this.props.nickname.description}</p>
          <div className='nickname-tags'>
            {tags}
          </div>
        </div>);

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
            <img onMouseOver={ () => {
              this.setState({
                image: '../img/xy-animated-shiny/' + this.props.id + '.gif'
              })
            }}
            onMouseOut={ () => {
              this.setState({
                image: '../img/xy-animated/' + this.props.id + '.gif'
              })
            }}
            src={this.state.image} />
          </div>
        </div>
        { nicknameData }
      </div>
    )
  }
}

export default PokemonNickname;
