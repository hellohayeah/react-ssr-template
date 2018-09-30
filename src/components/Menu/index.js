import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Menu = () => (
  <nav className="menu">
    <ul>
      <li>
        <Link to="/">首頁</Link>
      </li>
      <li>
        <Link to="password">密碼強度</Link>
      </li>
      <li>
        <Link to="region-select">地區選單</Link>
      </li>
    </ul>
  </nav>
)

export default Menu
