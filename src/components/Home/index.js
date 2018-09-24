import React, { Component } from 'react'
import './style.scss'

import Children from '../Children'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  inputChange = e => {
    const { value } = e.target
    console.log(value)
    this.setState({ text: value })
  }

  render() {
    const { text } = this.state

    return (
      <div className="home">
        <input type="text" value={text} onChange={e => this.inputChange(e)} />
        <Children text={text} />
      </div>
    )
  }
}

export default Home
