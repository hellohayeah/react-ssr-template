const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/components/Home/index.js',
    about: './src/components/About/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist')
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
