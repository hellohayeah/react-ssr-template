import React, { Component } from 'react'
import './style.scss'

import items from './repos.json'

class FilterList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: items
    }
  }

  inputText = e => {
    const filterLists = items.filter(
      item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    )

    this.setState({ lists: filterLists })
  }

  render() {
    const { lists } = this.state
    return (
      <div className="filter-list">
        <input type="text" onChange={this.inputText} />
        <ul>
          {lists.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FilterList
