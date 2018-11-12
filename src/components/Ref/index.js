import React, { Component } from 'react'
import './style.scss'

class Ref extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  focus = () => this.textInput.current.focus()

  render() {
    return (
      <div className="ref">
        <input type="text" ref={this.textInput} />
        <button onClick={this.focus}>focus input</button>
      </div>
    )
  }
}

export default Ref
