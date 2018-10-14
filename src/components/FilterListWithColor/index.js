import React, { Component } from 'react'
import './style.scss'
import items from './repos'

class FilterListWithColor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterLists: []
    }
  }

  inputText = e => {
    const filterLists = items.filter(
      item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    )

    this.setState({ filterLists })
  }

  render() {
    return (
      <div className="filter-list-with-color">
        <input type="text" onChange={this.inputText} />
      </div>
    )
  }
}

export default FilterListWithColor
