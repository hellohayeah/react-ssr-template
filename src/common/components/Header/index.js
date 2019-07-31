import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import { ReactComponent as ReactLogo } from '../../../assets/images/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <ReactLogo className="logo" />
        <h1>Welcome to React</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
