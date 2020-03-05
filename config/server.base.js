const path = require('path')
const nodeExternals = require('webpack-node-externals')
const paths = require('../utils/paths')
const { loaderServer } = require('./loaders')
const resolvers = require('./resolvers')

const serverConfig = {
  target: 'node',
  entry: {
    server: [
      require.resolve('core-js/stable'),
      require.resolve('regenerator-runtime/runtime'),
      path.resolve(paths.serverSrc)
    ]
  },
  output: {
    path: paths.serverBuild,
    publicPath: paths.publicPath,
    filename: '[name].js'
  },
  resolve: { ...resolvers },
  module: {
    rules: loaderServer
  },
  externals: nodeExternals({
    whitelist: /\.(sa|sc|c)ss$/
  })
}

module.exports = serverConfig
