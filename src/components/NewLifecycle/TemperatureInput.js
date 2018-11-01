import React, { Component } from 'react'

const scaleNames = {
  c: '攝氏',
  f: '華氏'
}

export class TemperatureInput extends Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { temperature, scale } = this.props
    return (
      <div>
        <legend>
          {scaleNames[scale]}
          溫度
        </legend>
        <input value={temperature} onChange={this.handleChange} />
        <div className="Sidebar">{this.props.children}</div>
      </div>
    )
  }
}

export default TemperatureInput
