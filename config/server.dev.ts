import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './server.base'

const serverDevConfig: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
  performance: {
    hints: false,
  },
})

export default serverDevConfig
