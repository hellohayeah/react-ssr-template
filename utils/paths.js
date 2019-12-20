const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
  clientSrc: resolveApp('src/client'),
  clientBuild: resolveApp('dist/client'),
  serverSrc: resolveApp('src/server'),
  serverBuild: resolveApp('dist/server'),
  publicPath: '/static/'
}

module.exports = paths
