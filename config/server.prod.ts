import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './server.base'

const serverProdConfig: webpack.Configuration = merge(common, {
  mode: 'production',
  plugins: [],
})

export default serverProdConfig
