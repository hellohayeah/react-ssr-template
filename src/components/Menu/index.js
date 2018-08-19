import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
