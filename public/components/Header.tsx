/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';


class Header extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='app-header'>
        <div className='app-header-inner'>
          <h1><a href='/'><img height='24px' src='../img/pokeball.svg' /> Pokemon Nicknames</a></h1>
          <a href='/favorites'>Favorites</a>
          <a href='/submit-nickname'>Submit Nickname</a>
          {/*
            <a href='/random'><i className='fa fa-random'></i> Random</a>
            <a href='/info'>Info</a>
          */}
        </div>
      </header>
    );
  }
}

export default Header;
