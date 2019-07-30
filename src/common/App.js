import React from 'react'
import Helmet from 'react-helmet'
import '../assets/styles/_global.scss'
import Header from './components/Header'

const App = () => {
  return (
    <div className="app">
      <Helmet defaultTitle="React SSR" />
      <Header />
    </div>
  )
}

export default App
