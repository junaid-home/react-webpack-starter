const { resolve: resolvePath } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const PwaManifest = require('webpack-pwa-manifest')
const EslintPlugn = require('eslint-webpack-plugin')

const manifest = require('../public/manifes.json')

module.exports = {
  entry: ['babel-polyfill', resolvePath(__dirname, '../src/index.js')],
  output: {
    filename: '[name].[contenthash].js',
    path: resolvePath(__dirname, '../build')
  },
  resolve: {
    modules: [
      resolvePath(__dirname, '../node_modules'),
      resolvePath(__dirname, '../public'),
      resolvePath(__dirname, '../src')
    ],
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|giff|svg|ico|ttf|json)$/,
        use: 'file-loader'
      },
      {
        exclude: '/node_modules/',
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath(__dirname, '../public/index.html'),
      filename: 'index.html',
      favicon: resolvePath(__dirname, '../public/favicon.ico')
    }),
    new EslintPlugn(),
    new PwaManifest({
      publicPath: './',
      fingerprints: false,
      ...manifest,
      icons: manifest.icons.map((obj) => {
        const imageEntity = {
          src: resolvePath(__dirname, `../public${obj.src}`),
          sizes: obj.sizes,
          type: obj.type || 'image/png',
          destination: 'icons'
        }

        return imageEntity
      })
    })
  ]
}
