import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import PokemonNickname from './PokemonNickname';
import Pokemon from '../interfaces/Pokemon';
import Header from './Header';
import Filter from './Filter';
import Footer from './Footer';
import PokemonModal from './PokemonModal';
import Overlay from './Overlay';

let capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


interface RootProps {
  data: any[];
  limit: number;
}

interface RootState {
  limit?: number;
  data?: any[];
  focusPokemon?: any;
  pokemonComponents?: any;
  overlayActive?: boolean;
}

class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.expandPokemon = this.expandPokemon.bind(this);
    this.state = {
      limit: 30,
      data: this.props.data,
      focusPokemon: null,
      pokemonComponents: null,
      overlayActive: false,
    }
  }
  _loadMore() {
    this.setState({
      limit: this.state.limit + 30,
      pokemonComponents: this.getPokemonComponents()
    });
  }
  componentWillMount() {
    let pokemonHash = location.hash.replace(/\#/, '');
    console.log(pokemonHash);
    let pokemon = this.getPokemon(capitalize(pokemonHash));
    console.log(pokemon);
    let hashActive = location.hash !== '' ? true : false;
    this.setState({
      pokemonComponents: this.getPokemonComponents(this.state.data),
      overlayActive: hashActive,
      focusPokemon: typeof pokemon !== 'undefined' ? pokemon : this.getPokemon('Ditto')
    })
  }
  componentDidMount() {
    this.setState({
      limit: 60
    })
  }
  handleSort(event) {
    switch (event.target.value) {
      case 'name-sort-desc':
        this.sort('name-sort-desc');
        break;
      case 'name-sort-asc':
        this.sort('name-sort-asc');
        break;
      case 'number-sort-asc':
        this.sort('number-sort-asc');
        break;
      case 'number-sort-desc':
        this.sort('number-sort-desc');
        break;
      case 'nickname-num-sort-asc':
        this.sort('nickname-num-sort-asc');
        break;
      case 'nickname-num-sort-desc':
        this.sort('nickname-num-sort-desc');
      default:
        break;
    }
  }
  sort(type) {
    let sortedData = this.props.data.sort((a, b) => {
      let nameA = a.pokemon.species;
      let nameB = b.pokemon.species;
      if (type === 'name-sort-desc') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
      if (type === 'name-sort-asc') {
        if (nameB < nameA) return -1;
        if (nameB > nameA) return 1;
        return 0;
      }
      if (type === 'number-sort-asc') {
        return Number(a.pokemon.id) - Number(b.pokemon.id);
      }
      if (type === 'number-sort-desc') {
        return Number(b.pokemon.id) - Number(a.pokemon.id);
      }
      if (type === 'nickname-num-sort-asc') {
        return b.pokemon.nicknames.length - a.pokemon.nicknames.length;
      }
      if (type === 'nickname-num-sort-desc') {
        return a.pokemon.nicknames.length - b.pokemon.nicknames.length;
      }

    })
    this.setState({
      data: sortedData,
      pokemonComponents: this.getPokemonComponents()
    });
  }

  expandPokemon(pokemon) {
    this.setState({
      focusPokemon: pokemon,
      overlayActive: true,
    })
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }

  overlayClick() {
    this.setState({
      overlayActive: false
    });
    window.scrollTo(10, 0);
  }

  getPokemonComponents(data = this.props.data) {
    let limit = this.state.limit;
    let expandPokemon = (pokemon) => {
      this.expandPokemon(pokemon);
    }
    let pokemonComponents = data.map(function (item, index) {
      if (index < limit) {
        let n = item.pokemon.id;
        if (item.pokemon.id < 100) {
          n = Number(item.pokemon.id).toString()
        }
        return <PokemonNickname
                pokemon={item.pokemon}
                nickname={item.nickname}
                image={`../img/sprites/${n}.png`}
                key={index}
                expandPokemon={ () => { expandPokemon(item) } }
               />
      }
    });
    return pokemonComponents;
  }
  getPokemon(species):Pokemon {
    let result = this.props.data.find((val) => {
      return val.pokemon.species === species;
    });
    return result;
  }
  render() {

    let filter = (event) => {
      let filteredData = this.props.data.filter((item) => {
        return -1 < item.pokemon.species.toLowerCase().indexOf(event.target.value.toLowerCase());
      });
      this.setState({
        data: filteredData
      })
      this.setState({
        pokemonComponents: event.target.value !== '' ? this.getPokemonComponents(this.state.data) : this.getPokemonComponents()
      })
    };
    return (
      <div>
        <Overlay active={this.state.overlayActive} overlayClick={
          () => { this.overlayClick() }
        } />
        <Header />
        <Filter onInput={(event) => { filter(event) }} onChange={(event) => { this.handleSort(event) }}/>
        <PokemonModal modalClick={() => { this.overlayClick() }} pokemon={this.state.focusPokemon} active={this.state.overlayActive} />
        {this.state.pokemonComponents}
        <Footer onClick={() => { this._loadMore() }} />
      </div>
    );
  }
}

export default Root;
