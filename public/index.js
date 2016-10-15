"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var Root_1 = require('./components/Root');
require('./styles/global.styl');
require('./styles/pokemon-nickname.styl');
require('./styles/filter.styl');
var mountNode = document.getElementById('mountNode');
var limit = 120;
function renderPage(data) {
    var RootWrapper = function () {
        return React.createElement(Root_1.default, {data: data});
    };
    ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
        React.createElement(react_router_1.Route, {path: "/", component: RootWrapper})
    ), mountNode);
}
function getPokemonData() {
    var xhr = new XMLHttpRequest();
    var PokemonByNickname = [];
    xhr.open('GET', 'http://localhost:3000/api/pokemon');
    xhr.onload = function () {
        if (xhr.status === 200) {
            var Pokemon = JSON.parse(xhr.responseText);
            Pokemon.sort(function (a, b) {
                return Number(a.id) - Number(b.id);
            });
            for (var i = 0; i < Pokemon.length; i++) {
                if (Pokemon[i].nicknames.length > 0) {
                    for (var j = 0; j < Pokemon[i].nicknames.length; j++) {
                        if (PokemonByNickname.length < limit) {
                            PokemonByNickname.push({
                                pokemon: Pokemon[i],
                                nickname: Pokemon[i].nicknames[j]
                            });
                        }
                        else {
                            break;
                        }
                    }
                }
                else {
                    if (PokemonByNickname.length < limit) {
                        PokemonByNickname.push({
                            pokemon: Pokemon[i],
                            nickname: {
                                name: "No Nicknames Yet",
                                description: "This Pokémon has not yet recieved any nicknames. Maybe you could be the first?",
                                upvotes: 0,
                                downvotes: 0,
                                tags: ["Needs Nickname"],
                                isRealNickname: false,
                            }
                        });
                    }
                    else {
                        break;
                    }
                }
            }
            renderPage(PokemonByNickname);
        }
        else {
            alert('Request failed. Reattempting shortly...');
            setTimeout(function () {
                getPokemonData();
            }, 2000);
        }
    };
    xhr.send();
}
getPokemonData();
