import React from 'react'
import express from 'express'
import { Provider } from 'react-redux'
import IntlProvider from '../common/i18n/IntlProvider'
import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Template from './Template'
import store from '../common/store'
import App from '../common/App'

const helmetContext = {}

const render = () => (req: express.Request, res: express.Response) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <IntlProvider>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </IntlProvider>
      </StaticRouter>
    </Provider>
  )

  return res.send(
    '<!DOCTYPE html>' +
      renderToString(
        <Template
          helmetContext={helmetContext}
          scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
        >
          {content}
        </Template>
      )
  )
}

export default render
