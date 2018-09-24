import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
