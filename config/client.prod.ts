import webpack from 'webpack'
import { merge } from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import common from './client.base'

const clientProdConfig: webpack.Configuration = merge(common, {
  mode: 'production',
  output: { filename: 'bundle.[contenthash:8].js' },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
})

export default clientProdConfig
