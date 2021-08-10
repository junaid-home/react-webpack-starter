const { resolve: resolvePath } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

const PORT = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  stats: true,
  devServer: {
    hot: true,
    open: true,
    port: PORT,
    noInfo: false,
    compress: true,
    quiet: false,
    clientLogLevel: 'none',
    historyApiFallback: true,
    contentBase: resolvePath(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
}
