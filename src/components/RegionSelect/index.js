import React, { Component } from 'react'
import data from './zipCodes'
import './style.scss'

class RegionSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      cityIdx: 0,
      areaIdx: 0
    }
  }

  componentWillMount() {
    this.setState({ cities: data })
  }

  onChangeCity = e => {
    const { value } = e.target
    this.setState({ cityIdx: value, areaIdx: 0 })
  }

  onChangeArea = e => {
    const { value } = e.target
    this.setState({ areaIdx: value })
  }

  render() {
    const { cities, cityIdx, areaIdx } = this.state
    const city = cities[cityIdx]
    const areas = city.areas

    return (
      <div className="region-select">
        <select value={cityIdx} onChange={this.onChangeCity}>
          {cities.map(({ name }, idx) => (
            <option key={name} value={idx}>
              {name}
            </option>
          ))}
        </select>
        <select value={areaIdx} onChange={this.onChangeArea}>
          {areas.map(({ name }, idx) => (
            <option key={name} value={idx}>
              {name}
            </option>
          ))}
        </select>
        <span>{areas[areaIdx].zip}</span>
      </div>
    )
  }
}

export default RegionSelect
