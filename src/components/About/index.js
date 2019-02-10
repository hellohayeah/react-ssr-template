import React, { Component } from 'react'
import { AboutStyle } from './style'

import UseAbout from './useAbout'

class About extends Component {
  render() {
    return (
      <AboutStyle>
        <h2>About</h2>
        <UseAbout />
      </AboutStyle>
    )
  }
}

export default About
