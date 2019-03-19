const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.base.conf.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    })
  ],
  output: {
    filename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
})
