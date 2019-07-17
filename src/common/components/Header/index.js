import React, { Component } from 'react'
import s from './header.module.scss'
import logo from '../../../assets/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to React</h1>
      </div>
    )
  }
}

export default Header
