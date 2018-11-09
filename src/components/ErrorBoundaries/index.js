import React, { Component } from 'react'
import './style.scss'

import Child from './Child'

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <div>
          <h2>出錯了，ㄏ</h2>
        </div>
      )
    }
    return <Child />
  }
}

export default ErrorBoundaries
