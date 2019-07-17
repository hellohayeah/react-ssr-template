const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
  clientSrc: resolveApp('src/client'),
  clientBuild: resolveApp('dist/client'),
  ServerSrc: resolveApp('src/server'),
  serverBuild: resolveApp('dist/server')
}

module.exports = paths
