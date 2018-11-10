import React, { Component } from 'react'

class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img
        src="https://cdn2.thecatapi.com/images/bpa.jpg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    )
  }
}

export default Cat
