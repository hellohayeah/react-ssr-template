const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/components/Home/index.js',
    about: './src/components/About/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
<<<<<<< HEAD
      chunks: 'all'
=======
      chunks: 'all',
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
>>>>>>> eae0cc15750f4f30e138ab8f82bb0b0d7f47705e
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.mp4?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
