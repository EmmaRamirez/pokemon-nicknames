"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Favorites = (function (_super) {
    __extends(Favorites, _super);
    function Favorites() {
        _super.apply(this, arguments);
    }
    Favorites.prototype.render = function () {
        return (React.createElement("div", {className: 'favorites-wrapper'}, 
            React.createElement("h3", null, "Favorites")
        ));
    };
    return Favorites;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Favorites;
