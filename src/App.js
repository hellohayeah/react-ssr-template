import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/style.scss'

import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import Password from './components/Password'
import RegionSelect from './components/RegionSelect'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/password" exact component={Password} />
        <Route path="/region-select" exact component={RegionSelect} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
