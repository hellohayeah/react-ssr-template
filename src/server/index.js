import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import manifestHelpers from 'express-manifest-helpers'
import paths from '../../utils/paths'
import render from './render'

const app = express()
const port = 3000

import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import clientConfig from '../../config/client.dev'

const compiler = webpack(clientConfig)

app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(paths.clientBuild))
app.use(middleware(compiler))
app.use(webpackHotMiddleware(compiler))

const manifestPath = path.join(paths.clientBuild, paths.publicPath)
app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`
  })
)

app.use(render())

app.listen(port, () => {
  console.log(`React SSR app is running at http://localhost:${port}/`)
})
