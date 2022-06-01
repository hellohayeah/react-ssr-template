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
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          },
        ],
      ],
      cacheDirectory: true,
    },
  },
}

const urlLoaderClient = {
  test: /\.(png|jpe?g|gif|svg)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const urlLoaderServer = {
  test: /\.(png|jpe?g|gif|svg)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const fileLoaderClient = {
  exclude: [/\.(js|jsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

const fileLoaderServer = {
  exclude: [/\.(js|tsx|ts|tsx|css|scss|mjs|html|ejs|json)$/],
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash:8].[ext]',
  },
}

export const clientLoaders = [babelLoader, urlLoaderClient, fileLoaderClient]
export const loaderServer = [babelLoader, urlLoaderServer, fileLoaderServer]
