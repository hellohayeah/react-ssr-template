import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './client.base'

const clientProdConfig: webpack.Configuration = merge(common, {
  mode: 'production',
  output: { filename: 'bundle.[contenthash:8].js' },
  plugins: [],
})

export default clientProdConfig
