const { merge: mergeConfigs } = require('webpack-merge')

const commonConfig = require('./webpack')
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

module.exports = ({ production }) => {
  const envConfig = production ? prodConfig : devConfig

  return mergeConfigs(commonConfig, envConfig)
}
