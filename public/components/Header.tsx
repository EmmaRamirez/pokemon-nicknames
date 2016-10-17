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
      <h1>hi</h1>
    );
  }
}

export default Header;
