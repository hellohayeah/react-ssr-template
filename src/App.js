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
import FilterListWithColor from './components/FilterListWithColor'
import Portals from './components/Portals'
import ErrorBoundaries from './components/ErrorBoundaries'
import HOC from './components/Hoc'

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
        <Route
          path="/filter-list-with-color"
          exact
          component={FilterListWithColor}
        />
        <Route path="/portals" exact component={Portals} />
        <Route path="/error-boundaries" exact component={ErrorBoundaries} />
        <Route path="/hoc" exact component={HOC} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
