import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import PokemonNickname from './PokemonNickname';
import Pokemon from '../interfaces/Pokemon';
import Header from './Header';
import Filter from './Filter';
import Footer from './Footer';

interface RootProps {
  data: any[];
  limit: number;
}


interface RootState {
  limit?: number;
  data?: any[];
  pokemonComponents?: any
}

class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.state = {
      limit: 30,
      data: this.props.data,
      pokemonComponents: null
    }
  }
  _loadMore() {
    console.log('Event fired with limit of ' + this.state.limit);
    this.setState({
      limit: this.state.limit + 30,
      pokemonComponents: this.getPokemonComponents()
    });
  }
  componentWillMount() {
    this.setState({
      pokemonComponents: this.getPokemonComponents(this.state.data)
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

    })
    this.setState({
      data: sortedData,
      pokemonComponents: this.getPokemonComponents()
    });
  }

  getPokemonComponents(data = this.props.data) {
    let limit = this.state.limit;
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
               />
      }
    });
    return pokemonComponents;
  }
  render() {
    let filter = (event) => {
      console.log(event.target.value);
      let filteredData = this.props.data.filter((item) => {
        return -1 < item.pokemon.species.toLowerCase().indexOf(event.target.value.toLowerCase());
      });
      console.log(filteredData);
      this.setState({
        data: filteredData
      })
      this.setState({
        pokemonComponents: event.target.value !== '' ? this.getPokemonComponents(this.state.data) : this.getPokemonComponents()
      })
    };
    return (
      <div>
        <Header />
        <Filter onInput={(event) => { filter(event) }} onChange={(event) => { this.handleSort(event) }}/>
        {this.state.pokemonComponents}
        <Footer onClick={() => { this._loadMore() }} />
      </div>
    );
  }
}

export default Root;
