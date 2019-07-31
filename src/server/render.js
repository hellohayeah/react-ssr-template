import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Template from './Template'
import App from '../common/App'

const render = () => (req, res) => {
  const content = renderToString(
    <Router location={req.url}>
      <App />
    </Router>
  )

  return res.send(
    '<!DOCTYPE html>' +
      renderToString(
        <Template
          css={[
            res.locals.assetPath('bundle.css'),
            res.locals.assetPath('vendor.css')
          ]}
          scripts={[
            res.locals.assetPath('bundle.js'),
            res.locals.assetPath('vendor.js')
          ]}
        >
          {content}
        </Template>
      )
  )
}

export default render
