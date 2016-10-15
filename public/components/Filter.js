"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var sortSelections = [
    {
        name: "Pokemon Name",
        icon: "fa fa-sort-alpha-asc",
        selected: true
    },
    {
        name: "Pokemon Name",
        icon: "fa fa-sort-alpha-desc",
        selected: false
    }
];
var Filter = (function (_super) {
    __extends(Filter, _super);
    function Filter(props) {
        _super.call(this, props);
        this.state = {
            sortSelections: sortSelections
        };
    }
    Filter.prototype._handleSortSelection = function () {
    };
    Filter.prototype.render = function () {
        var sortListItems = this.state.sortSelections.map(function (item, index) {
            var _this = this;
            return React.createElement("li", {onClick: function () { _this._handleSortSelection(); }, "data-selected": item.selected, "data-index": index, key: index}, 
                item.name, 
                " ", 
                React.createElement("i", {className: item.icon}));
        });
        return (React.createElement("div", {className: 'filter'}, 
            React.createElement("input", {className: 'filter-input', type: 'text', placeholder: 'filter...'}), 
            React.createElement("div", {className: 'select-wrapper'}, 
                React.createElement("span", null, "Sort by"), 
                React.createElement("ul", {className: 'select'}, sortListItems)), 
            React.createElement("div", {className: 'select-wrapper'}, 
                React.createElement("span", null, "# of Results per Page"), 
                React.createElement("div", {className: 'results-per-page-wrapper'}, 
                    React.createElement("input", {onChange: function () { }, type: 'text', defaultValue: '30'})
                ))));
    };
    return Filter;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Filter;
