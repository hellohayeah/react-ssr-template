import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5
    }
  }

  render() {
    const { count } = this.state
    if (count === 5) {
      throw new Error('sss')
    }

    return (
      <div>
        <h1>I am child</h1>
      </div>
    )
  }
}

export default Child
