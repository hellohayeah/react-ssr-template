import * as React from 'react'
import './style.scss'

import logo = require('../../assets/logo.svg')

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={String(logo)} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }
}

export default Header
