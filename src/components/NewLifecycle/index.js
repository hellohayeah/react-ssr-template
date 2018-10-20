import React, { Component } from 'react'
import './style.scss'

import Children from './Children'

class NewLifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      comments: [],
      date: new Date()
    }
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.tick)
  }

  render() {
    console.log('render')
    const { date } = this.state
    return (
      <div className="new-lifecycle">
        {date.toLocaleTimeString()}
        <Children />
      </div>
    )
  }
}

export default NewLifecycle
