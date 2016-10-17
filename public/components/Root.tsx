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
}

class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.state = {
      limit: 30,
      data: this.props.data
    }
  }
  _loadMore() {
    console.log('Event fired');
    this.setState({
      limit: this.state.limit + 30
    });
  }
  componenetWillMount() {

  }
  render() {
    let limit = this.state.limit;
    let pokemonComponents = this.state.data.map(function (item, index) {
      if (index < limit) {
        return <PokemonNickname
                pokemon={item.pokemon}
                nickname={item.nickname}
                id={item.pokemon.id}
                key={index}
               />
      }
    });
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
        <Filter onInput={(event) => { filter(event) }} />
        {pokemonComponents}
        <Footer onClick={() => { this._loadMore() }} />
      </div>
    );
  }
}

export default Root;
