import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/style.scss'

import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import Password from './components/Password'
import RegionSelect from './components/RegionSelect'
import ImagePreview from './components/ImagePreview'
import FilterList from './components/FilterList'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/password" exact component={Password} />
        <Route path="/region-select" exact component={RegionSelect} />
        <Route path="/image-preview" exact component={ImagePreview} />
        <Route path="/filter-list" exact component={FilterList} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
