import React, { Component } from 'react'
import './style.scss'

class Ref extends Component {
  focus = () => this.textInput.focus()

  render() {
    return (
      <div className="ref">
        <input type="text" ref={input => (this.textInput = input)} />
        <button onClick={this.focus}>focus input</button>
      </div>
    )
  }
}

export default Ref
