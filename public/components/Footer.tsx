/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';

interface FooterProps {
  onClick: () => void;
}

class Footer extends React.Component<FooterProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='app-footer'>
        <div onClick={this.props.onClick} className='app-loader'>
          <i className='fa fa-refresh'></i> Load More
        </div>
      </footer>
    );
  }
}

export default Footer;
