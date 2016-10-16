/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const sortSelections = [
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

interface FilterState {
  sortSelections
}

class Filter extends React.Component<{}, FilterState> {
  constructor(props) {
    super(props);
    this.state = {
      sortSelections: sortSelections
    }
  }
  _handleSortSelection() {

  }
  render() {
    let sortListItems = this.state.sortSelections.map(function (item, index) {
      return <li onClick={() => { this._handleSortSelection() }} data-selected={item.selected} data-index={index} key={index}>{item.name} <i className={item.icon}></i></li>;
    });
    return (
      <div className='filter'>
        <input className='filter-input' type='text' placeholder='filter...' />
        <div className='select-wrapper'>
          <span>Sort by</span>
          <ul className='select'>
            {sortListItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default Filter;
