import webpack from 'webpack'
import merge from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import paths from '../utils/paths'
import common from './client.base'

const clientDevConfig: webpack.Configuration = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  entry: {
    bundle: ['webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr', paths.clientSrc]
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

export default clientDevConfig
