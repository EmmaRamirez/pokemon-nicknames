import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import PokemonNickname from './PokemonNickname';
import Filter from './Filter';
import Footer from './Footer';

interface RootProps {
  data: any[];
}


class Root extends React.Component<RootProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    let pokemonComponents = this.props.data.map(function (item, index) {
      return <PokemonNickname
              pokemon={item.pokemon}
              nickname={item.nickname}
              key={index}
             />
    });
    return (
      <div>
        <Filter />
        {pokemonComponents}
        <Footer />
      </div>
    );
  }
}

export default Root;
