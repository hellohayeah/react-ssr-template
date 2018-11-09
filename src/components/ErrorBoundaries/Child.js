import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state
    if (count === 5) {
      throw new Error('不能超過5')
    }

    return (
      <div>
        {count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default Child
