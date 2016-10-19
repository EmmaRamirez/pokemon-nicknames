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

interface FooterState {
  icon?: string;
}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa fa-refresh'
    }
  }

  iconSpin() {
    let iconSpinStop = this.iconSpinStop();
    this.setState({
      icon: 'fa fa-refresh fa-spin'
    });
  }

  iconSpinStop() {
    this.setState({
      icon: 'fa fa-refresh'
    })
  }

  render() {
    let onClick = this.props.onClick;
    //let iconSpinStop = this.iconSpinStop();
    return (
      <footer className='app-footer'>
        <div onClick={ () => {
            onClick();
          }
        } className='app-loader'>
          <i className={this.state.icon}></i> Load More
        </div>
      </footer>
    );
  }
}

export default Footer;
