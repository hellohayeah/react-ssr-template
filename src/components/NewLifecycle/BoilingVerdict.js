import React, { Component } from 'react'

export class BoilingVerdict extends Component {
  render() {
    const { celsius } = this.props
    return celsius >= 100 ? <p>水會燒開</p> : <p>水不會燒開</p>
  }
}

export default BoilingVerdict
