import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
              }
            }
          }
        ]
      ],
      cacheDirectory: true
    }
  }
}

const cssModueleLoaderClient = {
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
}

const cssLoaderClient = {
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
}

const cssModueleLoaderServer = {
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
}

const cssLoaderServer = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /\.module\.scss$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
}

const urlLoaderClient = {
  test: /\.(png|jpe?g|gif|svg)$/,
  use: [
    {
      loader: require.resolve('url-loader'),
      options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]'
      }
    }
  ]
}

const urlLoaderServer = {
  test: /\.(png|jpe?g|gif|svg)$/,
  loader: require.resolve('url-loader'),
  options: {
    limit: 2048,
    name: 'assets/[name].[hash:8].[ext]',
    emitFile: false
  }
}

const fileLoaderClient = {
  exclude: [/\.(js|jsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'assets/[name].[hash:8].[ext]'
      }
    }
  ]
}

const fileLoaderServer = {
  exclude: [/\.(js|tsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'assets/[name].[hash:8].[ext]',
        emitFile: false
      }
    }
  ]
}

export const clientLoaders = [babelLoader, cssModueleLoaderClient, cssLoaderClient, urlLoaderClient, fileLoaderClient]
export const loaderServer = [babelLoader, cssModueleLoaderServer, cssLoaderServer, urlLoaderServer, fileLoaderServer]
