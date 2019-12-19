import React from 'react'
import Helmet from 'react-helmet'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import Routes from '../routes'
import '../assets/styles/_global.scss'
import Header from './components/Header'

const App = () => {
  return (
    <div className="app">
      <Helmet defaultTitle="React SSR" />
      <Header />
      <Switch>{renderRoutes(Routes)}</Switch>
    </div>
  )
}

export default App
