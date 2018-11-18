import React, { Component } from 'react'
import './style.scss'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = this.state
    if (nextState.count !== count) {
      console.log('shouldComponentUpdate')
      return true
    }
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  render() {
    const { count } = this.state
    console.log('render')
    return (
      <div className="life-cycle">
        <p>{count}</p>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}

export default LifeCycle
