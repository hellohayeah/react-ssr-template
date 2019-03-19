import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle } from './style'
import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to React</h1>
        <Link to="/">Home</Link>
      </HeaderStyle>
    )
  }
}

export default Header
