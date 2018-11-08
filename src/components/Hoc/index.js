import React, { Component } from 'react'
import ExampleHoc from './ExampleHoc'
import './style.scss'

class Hoc extends Component {
  constructor() {
    super()
    this.state = {
      usual: 'usual'
    }
  }

  componentDidMount() {
    console.log('didMount')
  }

  render() {
    return <div>Usual</div>
  }
}

export default ExampleHoc(Hoc)
