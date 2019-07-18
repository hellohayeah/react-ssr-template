const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const paths = require('../utils/paths')

module.exports = {
  target: 'web',
  entry: {
    bundle: paths.clientSrc
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    publicPath: paths.publicPath,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new ManifestPlugin({ fileName: 'manifest.json' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]_[hash:8]'
              }
            }
          },
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        exclude: [/\.(js|css|scss)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|mp4|png|jpe?g|gif|svg)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: '[hash:8].[ext]',
          outputPath: 'assets'
        }
      }
    ]
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
