import webpack from 'webpack'
import merge from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import common from './server.base'

const serverDevConfig: webpack.Configuration = merge(common, {
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

export default serverDevConfig
