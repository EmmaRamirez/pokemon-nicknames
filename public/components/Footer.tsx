/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';

class Footer extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='app-footer'>
        <div className='app-loader'>
          <i className='fa fa-refresh'></i> Load More
        </div>
      </footer>
    );
  }
}

export default Footer;
