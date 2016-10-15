"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var localforage = require('localforage');
var favorites = [];
if (favorites = []) {
    localforage.getItem('favorites').then(function (value) {
        favorites = value;
        console.log(localforage.getItem('favorites'));
    }).catch(function (err) {
        favorites = [];
        localforage.setItem('favorites', favorites);
        console.log(localforage.getItem('favorites'));
    });
}
console.log(favorites);
function dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
    }).replace(/\s+/g, function (char, index) {
        return '';
    });
}
var PokemonNickname = (function (_super) {
    __extends(PokemonNickname, _super);
    function PokemonNickname(props) {
        _super.call(this, props);
        this.handleFavorite = this.handleFavorite.bind(this);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.state = {
            favorite: false,
            image: '../img/xy-animated/' + this.props.pokemon.id + '.gif',
            upvotes: this.props.nickname.upvotes,
            downvotes: this.props.nickname.downvotes
        };
    }
    PokemonNickname.prototype.saveFavorites = function () {
        localforage.setItem('favorites', favorites).then(function (value) {
            console.log(value);
        }).catch(function (err) {
            console.log(err);
        });
    };
    PokemonNickname.prototype.handleFavorite = function (species, nickname) {
        if (this.state.favorite) {
            this.setState({
                favorite: false
            });
            favorites = favorites.filter(function (fav) {
                return fav.species !== species && fav.nickname !== nickname;
            });
            this.saveFavorites();
        }
        else {
            favorites.push({
                species: species,
                nickname: nickname
            });
            this.setState({
                favorite: true
            });
            this.saveFavorites();
        }
    };
    PokemonNickname.prototype.handleUpvote = function () {
        console.log('le upboat');
        this.setState({
            upvotes: this.state.upvotes + 1
        });
    };
    PokemonNickname.prototype.handleDownvote = function () {
        this.setState({
            downvotes: this.state.downvotes + 1
        });
    };
    PokemonNickname.prototype.componentWillMount = function () {
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].species === this.props.pokemon.species && favorites[i].nickname === this.props.nickname.name) {
                this.setState({
                    favorite: true
                });
            }
        }
    };
    PokemonNickname.prototype.render = function () {
        var _this = this;
        var tags;
        var voteData;
        if (this.props.nickname.tags !== undefined) {
            tags = this.props.nickname.tags.map(function (tag, index) {
                return React.createElement("a", {key: index, href: '/tags/' + dasherize(tag)}, 
                    "#", 
                    tag);
            });
        }
        if (this.props.nickname.isRealNickname || typeof this.props.nickname.isRealNickname === 'undefined') {
            voteData = (React.createElement("div", {className: 'vote-data data-component'}, 
                React.createElement("div", {onClick: function () {
                    _this.handleUpvote();
                }, className: 'upvote-arrow'}, 
                    React.createElement("i", {className: 'fa fa-arrow-up'})
                ), 
                React.createElement("div", {className: 'upvotes'}, this.state.upvotes), 
                React.createElement("div", {className: 'favorites-wrapper'}, 
                    React.createElement("div", {className: 'votes-total'}, this.state.upvotes - this.state.downvotes), 
                    React.createElement("div", {className: 'favorite-trigger', "data-favorite": this.state.favorite, onClick: function () {
                        _this.handleFavorite(_this.props.pokemon.species, _this.props.nickname.name);
                    }}, 
                        React.createElement("i", {className: 'fa fa-star', title: 'Add to Favorites'})
                    )), 
                React.createElement("div", {className: 'downvotes'}, this.state.downvotes), 
                React.createElement("div", {onClick: function () {
                    _this.handleDownvote();
                }, className: 'downvote-arrow'}, 
                    React.createElement("i", {className: 'fa fa-arrow-down'})
                )));
        }
        return (React.createElement("div", {className: 'pokemon-nickname'}, 
            voteData, 
            React.createElement("div", {className: 'pokemon-data data-component'}, 
                React.createElement("h3", {className: 'pokemon-data-header'}, 
                    React.createElement("a", {href: '/' + this.props.pokemon.species.toLowerCase()}, 
                        React.createElement("span", {style: { fontSize: '10px', color: 'grey' }}, 
                            "#", 
                            this.props.pokemon.id), 
                        " ", 
                        this.props.pokemon.species)
                ), 
                React.createElement("div", {className: 'pokemon-image-container'}, 
                    React.createElement("img", {onMouseOver: function () {
                        _this.setState({
                            image: '../img/xy-animated-shiny/' + _this.props.pokemon.id + '.gif'
                        });
                    }, onMouseOut: function () {
                        _this.setState({
                            image: '../img/xy-animated/' + _this.props.pokemon.id + '.gif'
                        });
                    }, src: this.state.image})
                )), 
            React.createElement("div", {className: 'nickname-data data-component'}, 
                React.createElement("h3", {className: 'nickname-data-header'}, 
                    React.createElement("a", {href: '/nickname/' + dasherize(this.props.nickname.name)}, this.props.nickname.name)
                ), 
                React.createElement("p", null, this.props.nickname.description === null ? 'No description provided.' : this.props.nickname.description), 
                React.createElement("div", {className: 'nickname-tags'}, tags))));
    };
    return PokemonNickname;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonNickname;
