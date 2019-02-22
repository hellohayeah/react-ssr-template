import React, { Component } from 'react'
import { HomeStyle } from './style'

import AsyncApp from '../../containers/AsyncApp/index'

class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <AsyncApp />
      </HomeStyle>
    )
  }
}

export default Home
