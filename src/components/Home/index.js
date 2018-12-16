import React, { Component } from 'react'
import { HomeStyle, ButtonStyle } from './style'

class Home extends Component {
  render() {
    return (
      <HomeStyle>
        Hello World!
        <div className="btns-box">
          <ButtonStyle borderLinear>登入</ButtonStyle>
          <ButtonStyle as="a">註冊</ButtonStyle>
        </div>
      </HomeStyle>
    )
  }
}

export default Home
