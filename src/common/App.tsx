import React from 'react'
import { Helmet } from 'react-helmet-async'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import Routes from './routes'
import favicon from './assets/images/favicon.ico'
import Header from './components/Header'

const App: React.FC = () => (
  <div className="app">
    <Helmet defaultTitle="React SSR" link={[{ rel: 'icon', type: 'image/png', href: favicon }]} />
    <Header />
    <Switch>{renderRoutes(Routes)}</Switch>
  </div>
)

export default App
