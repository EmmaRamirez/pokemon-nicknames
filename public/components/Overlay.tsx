import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as _ from 'underscore';

require('../styles/overlay.styl');

interface OverlayProps {
  active: boolean;
  overlayClick: () => void;
}

interface OverlayState {

}

class Overlay extends React.Component<OverlayProps, OverlayState> {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div onClick={this.props.overlayClick} className='overlay' style={
        this.props.active
        ? { display: 'block' }
        : { display: 'none' }
      }></div>
    )
  }
}

export default Overlay;
