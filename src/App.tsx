import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/style.scss'

// Components
import Header from './components/Header'
import Menu from './components/Menu'

// Pages
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <div className="App">
      {/* <React.StrictMode> */}
      <Header />
      <Menu />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        {/* </React.StrictMode> */}
      </div>
    </div>
  </BrowserRouter>
)

export default App
