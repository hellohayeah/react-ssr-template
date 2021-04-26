// const path = require('path')
// const nodeExternals = require('webpack-node-externals')
// const paths = require('../utils/paths')
// const { loaderServer } = require('./loaders')
// const resolvers = require('./resolvers')

import webpack from 'webpack'
import path from 'path'
import nodeExternals from 'webpack-node-externals'
import paths from '../utils/paths'
import { loaderServer } from './loaders'
import resolvers from './resolvers'

const config: webpack.Configuration = {
  target: 'node',
  entry: {
    server: [
      require.resolve('core-js/stable'),
      require.resolve('regenerator-runtime/runtime'),
      path.resolve(paths.serverSrc),
    ],
  },
  output: {
    path: paths.serverBuild,
    publicPath: paths.publicPath,
    filename: '[name].js',
  },
  resolve: { ...resolvers },
  module: {
    rules: loaderServer,
  },
  externals: nodeExternals({
    allowlist: /\.(sa|sc|c)ss$/,
  }),
}

export default config
