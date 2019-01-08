import React from 'react'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { createGlobalStyle } from 'styled-components'
import routes from './router'

import Header from './components/Header'

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
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    </React.StrictMode>
  </div>
)

export default App
