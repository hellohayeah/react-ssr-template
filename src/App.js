import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/style.scss'
import logo from './assets/logo.svg'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
