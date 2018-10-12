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
    const { filterLists } = this.state
    return (
      <div className="filter-list-with-color">
        <input type="text" onChange={this.inputText} />
        <ul>
          {filterLists.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FilterListWithColor
