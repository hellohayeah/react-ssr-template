import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import favicon from './assets/images/favicon.ico'
import Header from './components/Header'

const App: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="app">
      <Helmet defaultTitle="React SSR" link={[{ rel: 'icon', type: 'image/png', href: favicon }]} />
      <h1>{t('title')}</h1>
      <Header />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} {...route} element={<route.Component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
