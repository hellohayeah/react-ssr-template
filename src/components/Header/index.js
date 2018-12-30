import React, { Component } from 'react'
import { HeaderStyle } from './style'
import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <img src={logo} alt="logo" />
        <h1>Welcome to React</h1>
      </HeaderStyle>
    )
  }
}

export default Header
