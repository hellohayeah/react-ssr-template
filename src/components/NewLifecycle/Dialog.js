import React, { Component } from 'react'

export class Dialog extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Dialog
