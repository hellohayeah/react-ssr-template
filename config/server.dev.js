const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./server.base')

const serverDevConfig = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
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

module.exports = serverDevConfig
