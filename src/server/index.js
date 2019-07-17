import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'
const app = express()
const port = 3000

import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientConfig from '../../config/client.dev'

const compiler = webpack(clientConfig)

app.use('/assets', express.static('../../dist/client'))
app.use(middleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title></title>
        <link rel="stylesheet" href='./bundle.css'>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
        <script src='./bundle.js'></script>
      </body>
    </html>  
  `
  res.send(html)
})

app.listen(port, () => {
  console.log(`React SSR app is running at http://localhost:${port}/`)
})
