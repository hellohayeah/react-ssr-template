import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/style.scss'

import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
