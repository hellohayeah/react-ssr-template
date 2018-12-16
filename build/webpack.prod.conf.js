const merge = require('webpack-merge')
const common = require('./webpack.base.conf.js')

module.exports = merge(common, {
  mode: 'production'
})
