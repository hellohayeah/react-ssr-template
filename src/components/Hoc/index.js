import React, { Component } from 'react'
import ChangeRender from './ChangeRender'
import './style.scss'

class Hoc extends Component {
  constructor() {
    super()
    this.state = {
      usual: 'usual',
      loggedIn: false
    }
  }

  componentDidMount() {
    console.log('didMount')
  }

  logout = () => {
    this.setState({loggedIn: false})
  }

  render() {
    return <div>{this.props.data}</div>
  }
}

export default ChangeRender(Hoc, 'data')
