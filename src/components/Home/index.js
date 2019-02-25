import React, { Component } from 'react'
import { HomeStyle } from './style'

import Container1 from '../../containers/Container1'

class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <Container1 />
      </HomeStyle>
    )
  }
}

export default Home
