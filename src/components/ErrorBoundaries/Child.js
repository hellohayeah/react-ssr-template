import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 4
    }
  }

  render() {
    const { count } = this.state
    if (count === 5) {
      throw new Error('不能超過5')
    }

    return (
      <div>
        <h1>I am child</h1>
      </div>
    )
  }
}

export default Child
