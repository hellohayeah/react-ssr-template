import React, { Component } from 'react'

export default class picker extends Component {
  render() {
    const { value, onChange, options } = this.props
    return (
      <div>
        <h1>{value}</h1>
        <select value={value} onChange={e => onChange(e.target.value)}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
}
