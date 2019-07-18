import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Template from './Template'
import App from '../common/App'

const render = () => (req, res) => {
  const content = renderToString(<App />)

  return send(
    '<!DOCTYPE html>' +
    (
      <Template
        css={[
          res.locals.assetPath('bundle.css'),
          res.locals.assetPath('vender.css')
        ]}
        scripts={[
          res.locals.assetPath('bundle.js'),
          res.locals.assetPath('vender.js')
        ]}
      >
        {content}
      </Template>
    )
  )
}

export default render
