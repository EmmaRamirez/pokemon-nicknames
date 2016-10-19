/// <reference path='../../typings/index.d.ts' />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const sortSelections = [
  {
    name: "Pokemon # ▴",
    icon: "fa fa-sort-num-asc",
    value: "number-sort-asc",
    selected: true
  },
  {
    name: "Pokemon # ▾",
    icon: "fa fa-sort-num-desc",
    value: "number-sort-desc",
    selected: false
  },
  {
    name: "Pokemon Name ▴",
    icon: "fa fa-sort-alpha-asc",
    value: "name-sort-asc",
    selected: false
  },
  {
    name: "Pokemon Name ▾",
    icon: "fa fa-sort-alpha-desc",
    value: "name-sort-desc",
    selected: false
  },
  {
    name: "Number of Nicknames ▴",
    value: "nickname-num-sort-asc",
  },
  {
    name: "Number of Nicknames ▾",
    value: "nickname-num-sort-desc",
  }
];

interface FilterProps {
  onInput: (event) => void;
  onChange: (event) => void;
}

interface FilterState {
  sortSelections
}

class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props) {
    super(props);
    this.state = {
      sortSelections: sortSelections
    }
  }
  render() {
    let sortListItems = this.state.sortSelections.map(function (item, index) {
      return <option onClick={() => { this._handleSortSelection() }} data-selected={item.selected} data-index={index} value={item.value} key={index}>{item.name}</option>;
    });
    return (
      <div className='filter'>
        <input onInput={this.props.onInput} className='filter-input' type='text' placeholder='search' />
        <div className='select-wrapper'>
          <span>Sort by</span>
          <select className='select' onChange={this.props.onChange}>
            {sortListItems}
          </select>
        </div>
      </div>
    )
  }
}

export default Filter;
