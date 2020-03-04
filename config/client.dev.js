const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../utils/paths')
const common = require('./client.base')

const clientDevConfig = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  entry: {
    bundle: [
      'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
      paths.clientSrc
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  performance: {
    hints: false
  }
})

module.exports = clientDevConfig
