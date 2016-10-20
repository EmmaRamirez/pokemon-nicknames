import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';

interface NicknameDataProps {
  nickname: Nickname;
}

interface NicknameDataState {

}

function dasherize(string) {
  return string.replace(/[A-Z]/g, function (char, index) {
    return (index !== 0 ? '-' : '') + char.toLowerCase();
  }).replace(/\s+/g, function (char, index) {
    return '';
  });
}

class NicknameData extends React.Component<NicknameDataProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    let tags;
    if (this.props.nickname.tags !== undefined) {
      tags = this.props.nickname.tags.map(function (tag, index) {
        return <span key={index}>#{tag}</span>
      });
    }
    return (
      <div className='nickname-data data-component'>
        <h3 className='nickname-data-header'>
          {this.props.nickname.name}
        </h3>
        <p>{this.props.nickname.description === null ? 'No description provided.' : this.props.nickname.description}</p>
        <div className='nickname-tags'>
          {tags}
        </div>
      </div>
    );
  }
}

export default NicknameData;
