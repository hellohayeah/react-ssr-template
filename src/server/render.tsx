import React from 'react'
import express from 'express'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Template from './Template'
import store from '../common/store'
import App from '../common/App'

const helmetContext = {}

const render = () => (req: express.Request, res: express.Response) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={req.url}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </Router>
    </Provider>
  )

  return res.send(
    '<!DOCTYPE html>' +
      renderToString(
        <Template
          helmetContext={helmetContext}
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
          scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
        >
          {content}
        </Template>
      )
  )
}

export default render