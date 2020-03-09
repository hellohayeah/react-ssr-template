import webpack from 'webpack'
import path from 'path'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import paths from '../utils/paths'
import { clientLoaders } from './loaders'
import resolvers from './resolvers'

const config: webpack.Configuration = {
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
    rules: clientLoaders
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

export default config
