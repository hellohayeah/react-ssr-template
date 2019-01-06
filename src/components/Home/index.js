import React, { Component } from 'react'
import { HomeStyle } from './style'
import Test from './test'
class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <Test>Hello React.Memo</Test>
      </HomeStyle>
    )
  }
}

export default Home
