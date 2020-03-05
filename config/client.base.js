const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const paths = require('../utils/paths')
const { loaderClient } = require('./loaders')
const resolvers = require('./resolvers')

module.exports = {
  target: 'web',
  entry: {
    bundle: path.resolve(paths.clientSrc)
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    publicPath: paths.publicPath,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  plugins: [new OptimizeCssAssetsPlugin(), new ManifestPlugin({ fileName: 'manifest.json' })],
  resolve: { ...resolvers },
  module: {
    rules: loaderClient
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  stats: {
    chunks: false,
    chunkModules: false
  }
}
