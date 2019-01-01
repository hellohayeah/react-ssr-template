import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <div className="App">
    <GlobalStyle />
    <React.StrictMode>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </React.StrictMode>
  </div>
)

export default App
