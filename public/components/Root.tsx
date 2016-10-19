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
    console.log('Event fired');
    this.handleSort = this.handleSort.bind(this);
    this.setState({
      limit: this.state.limit + 30,
      pokemonComponents: this.getPokemonComponents()
    });
  }
  componentWillMount() {
    this.setState({
      pokemonComponents: this.getPokemonComponents()
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

  getPokemonComponents() {
    let limit = this.state.limit;
    let pokemonComponents = this.props.data.map(function (item, index) {
      if (index < limit) {
        return <PokemonNickname
                pokemon={item.pokemon}
                nickname={item.nickname}
                image={`http://serebii.net/xy/pokemon/${item.pokemon.id}.png`}
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
