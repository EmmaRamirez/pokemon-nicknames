import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';
import Notification from './Notification';

interface VoteDataProps {
  pokemon: Pokemon;
  nickname: Nickname;
}

interface VoteDataState {
  upvotes: number;
  downvotes: number;
}

class VoteData extends React.Component<VoteDataProps, VoteDataState> {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: this.props.nickname.upvotes,
      downvotes: this.props.nickname.downvotes
    }
  }
  handleUpvote() {

  }
  render() {
    return (<div className='vote-data data-component'>
      <div onClick={() => {
        this.handleUpvote();
      }} className='upvote-arrow'>
        <i className='fa fa-arrow-up'></i>
      </div>
      <div className='upvotes'>{this.state.upvotes}</div>
      <div className='favorites-wrapper'>
        <div className='votes-total'>
          {this.state.upvotes - this.state.downvotes}
        </div>
        <div className='favorite-trigger' data-favorite={this.state.favorite} onClick={() => {
          this.handleFavorite(this.props.pokemon.species, this.props.nickname.name);
        }}>
          <i className='fa fa-star' title='Add to Favorites'></i>
        </div>
      </div>
      <div  className='downvotes'>{this.state.downvotes}</div>
      <div onClick={() => {
        this.handleDownvote();
      }} className='downvote-arrow'>
        <i className='fa fa-arrow-down'></i>
      </div>
    </div>);
  }
}
