import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import IntlProvider from '../common/i18n/IntlProvider'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserHistory } from 'history'
import store from '../common/store'
import App from '../common/App'

const history = createBrowserHistory()

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <IntlProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </IntlProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
