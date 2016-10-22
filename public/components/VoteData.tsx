import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as _ from 'underscore';
import Pokemon from '../interfaces/Pokemon';
import Nickname from '../interfaces/Nickname';

interface VoteDataProps {
  pokemon: Pokemon;
  nickname: Nickname;
}

interface VoteDataState {
  upvotes?: number;
  downvotes?: number;
  favorite?: boolean;
  downvoted?: boolean;
  upvoted?: boolean;
}

class VoteData extends React.Component<VoteDataProps, VoteDataState> {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.state = {
      upvotes: this.props.nickname.upvotes,
      downvotes: this.props.nickname.downvotes,
      downvoted: false,
      upvoted: false,
      favorite: false
    }
  }
  handleVote(voteType) {
    let pokemon = this.props.pokemon;
    let nickname = this.props.nickname;
    let vote = function () {
      let xhr = new XMLHttpRequest();

      let params = `species=${pokemon.species}&name=${encodeURIComponent(nickname.name)}&upvotes=${nickname.upvotes}&downvotes=${nickname.downvotes}&type=${voteType}`;
      xhr.open('POST', `http://pokemon-nicknames.herokuapp.com/vote`);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        console.log('Ajax fired');
      }
      xhr.onerror = function () {
        console.log('Error');
      }
      xhr.send(params);
    }
    return vote;
  }
  handleUpvote() {
    let vote = this.handleVote('upvote');
    if (!this.state.upvoted) {
      this.setState({
        upvotes: this.state.upvotes + 1,
        upvoted: true,
      }, () => {
        vote()
      });
    }
  }
  handleDownvote() {
    let vote = this.handleVote('downvote');
    if (!this.state.downvoted) {
      this.setState({
        downvotes: this.state.downvotes + 1,
        downvoted: true,
      }, () => {
        vote()
      });
    }
  }
  handleFavorite(species, nickname) {

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

export default VoteData;
