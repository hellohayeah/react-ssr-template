import React from 'react'
import Helmet from 'react-helmet'
import Header from './components/Header'
import '../assets/styles/_variable.scss'
import '../assets/styles/_mixins.scss'
import '../assets/styles/_global.scss'

const App = () => {
  return (
    <div className="app">
      <Helmet defaultTitle="React SSR" />
      <Header />
    </div>
  )
}

export default App
