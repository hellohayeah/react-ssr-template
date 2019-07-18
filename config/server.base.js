const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../utils/paths')

const serverConfig = {
  target: 'node',
  entry: {
    server: paths.serverSrc
  },
  output: {
    path: paths.serverBuild,
    publicPath: paths.publicPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.module\.scss$/,
        use: [
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
          'sass-loader'
        ]
      },
      {
        exclude: [/\.(js|css|scss)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]',
              emitFile: false
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
          outputPath: 'assets',
          emitFile: false
        }
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.(sa|sc|c)ss$/
  })
}

module.exports = serverConfig
