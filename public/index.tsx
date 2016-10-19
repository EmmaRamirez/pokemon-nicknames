import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Pokemon from './interfaces/Pokemon';
import Nickname from './interfaces/Nickname';
import Root from './components/Root';
import PokemonNickname from './components/PokemonNickname';
import Favorites from './components/Favorites';
import Header from './components/Header';
import SubmitNickname from './components/SubmitNickname';
import PokemonComponent from './components/Pokemon';

require('./styles/global.styl');
require('./styles/pokemon-nickname.styl');
require('./styles/filter.styl');

let mountNode = document.getElementById('mountNode');


function renderPage(data) {
  const RootWrapper = () => {
    return <Root data={data} limit={30} />
  }
  const FavoritesWrapper = () => {
    return (
      <span>
        <Header />
        <Favorites data={data} />
      </span>
    )
  }
  const SubmitNicknameWrapper = () => {
    return (
      <span>
        <Header />
        <SubmitNickname />
      </span>
    )
  }
  const PokemonWrapper = () => {
    return (
      <span>
        <Header />
        <PokemonComponent data={data} />
      </span>
    )
  }
  const Routes = () => {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={RootWrapper} />
          <Route path="home" component={RootWrapper} />
          <Route path="favorites" component={FavoritesWrapper} />
          <Route path="submit-nickname" component={SubmitNicknameWrapper} />
          <Route path='*' component={RootWrapper} />
        </Route>
      </Router>
    );
  }
  ReactDOM.render(
    <Routes />,
    mountNode
  );
}

function getPokemonData():void {
  let xhr = new XMLHttpRequest();
  let PokemonByNickname = [];
  xhr.open('GET', 'http://localhost:3000/api/pokemon');
  xhr.onload = function() {
    if (xhr.status === 200) {
      let Pokemon = JSON.parse(xhr.responseText);

      Pokemon.sort(function (a, b) {
        return Number(a.id) - Number(b.id);
      });

      for (let i = 0; i < Pokemon.length; i++) {
        if (Pokemon[i].nicknames.length > 0) {

            PokemonByNickname.push({
              pokemon: Pokemon[i],
              nickname: Pokemon[i].nicknames[0]
            });

        } else {
          PokemonByNickname.push({
            pokemon: Pokemon[i],
            nickname: {
              name: "No Nicknames Yet",
              description: "This Pokémon has not yet recieved any nicknames. Maybe you could be the first?",
              upvotes: 0,
              downvotes: 0,
              tags: ["Needs Nickname"],
              isRealNickname: false,
            }
          });
        }
      }
      renderPage(PokemonByNickname);
    } else {
      alert('Request failed. Reattempting shortly...');
      setTimeout(() => {
        getPokemonData();
      }, 2000);
    }
  }
  xhr.send();
}

getPokemonData();
