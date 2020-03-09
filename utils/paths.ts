import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath)

const paths: any = {
  clientSrc: resolveApp('src/client'),
  clientBuild: resolveApp('dist/client'),
  serverSrc: resolveApp('src/server'),
  serverBuild: resolveApp('dist/server'),
  publicPath: '/static/'
}

export default paths
