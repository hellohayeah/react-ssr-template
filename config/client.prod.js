const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./client.base')

const clientProdConfig = merge(common, {
  mode: 'production',
  output: { filename: 'bundle.[hash:8].js' },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ]
})

module.exports = clientProdConfig
