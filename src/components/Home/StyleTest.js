import React, { Component } from 'react'
import { withTheme } from 'styled-components'

export class StyleTest extends Component {
  render() {
    console.log('Current theme: ', this.props.theme)
    return <p>123</p>
  }
}

export default withTheme(StyleTest)
