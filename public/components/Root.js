"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var PokemonNickname_1 = require('./PokemonNickname');
var Filter_1 = require('./Filter');
var Root = (function (_super) {
    __extends(Root, _super);
    function Root(props) {
        _super.call(this, props);
    }
    Root.prototype.render = function () {
        var pokemonComponents = this.props.data.map(function (item, index) {
            return React.createElement(PokemonNickname_1.default, {pokemon: item.pokemon, nickname: item.nickname, key: index});
        });
        return (React.createElement("div", null, 
            React.createElement(Filter_1.default, null), 
            pokemonComponents));
    };
    return Root;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
