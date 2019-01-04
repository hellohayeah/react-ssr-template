const merge = require('webpack-merge')
const common = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    // react router reload
    historyApiFallback: true
  }
})