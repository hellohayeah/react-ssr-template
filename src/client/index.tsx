import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserHistory } from 'history'
import App from '../common/App'

const history = createBrowserHistory()

hydrate(
  <Router history={history}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
