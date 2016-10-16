import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import PokemonNickname from './PokemonNickname';
import Filter from './Filter';
import Footer from './Footer';

interface RootProps {
  data: any[];
  limit: number;
}

interface RootState {
  limit: number;
}

class Root extends React.Component<RootProps, RootState> {
  constructor(props) {
    super(props);
    this.state = {
      limit: 30
    }
  }
  _loadMore() {
    console.log('Event fired');
    this.setState({
      limit: this.state.limit + 30
    });
  }
  render() {
    let limit = this.state.limit;
    let pokemonComponents = this.props.data.map(function (item, index) {
      if (index < limit) {
        return <PokemonNickname
                pokemon={item.pokemon}
                nickname={item.nickname}
                key={index}
               />
      }
    });
    return (
      <div>
        <Filter />
        {pokemonComponents}
        <Footer onClick={() => { this._loadMore() }} />
      </div>
    );
  }
}

export default Root;
