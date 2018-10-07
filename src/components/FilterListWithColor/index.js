import React, { Component } from 'react'
import './style.scss'
import items from './repos'

class FilterListWithColor extends Component {
  render() {
    return <div className="filter-list-with-color">
    <input type="text" onChange={this.inputText}>
    </div>
  }
}

export default FilterListWithColor
