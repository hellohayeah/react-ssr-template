import React, { Component } from 'react'
import s from './header.module.scss'
import { ReactComponent as ReactLogo } from '../../../assets/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className={s.header}>
        <ReactLogo className="logo" />
        <h1>Welcome to React</h1>
      </div>
    )
  }
}

export default Header
