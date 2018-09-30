import React, { Component } from 'react'
import data from './zipCodes'
import './style.scss'

class RegionSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      area: []
    }
  }

  componentWillMount() {
    this.setState({ area: data })
  }

  render() {
    const { area } = this.state
    console.log(area)
    return <div className="region-select">RegionSelect</div>
  }
}

export default RegionSelect
