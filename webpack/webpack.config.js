const development = require('./webpack.dev')
const production = require('./webpack.prod')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

const ENV = process.env.NODE_ENV
const TARGET = process.env.npm_lifecycle_event
const DEBUG = ENV === 'development'

const PATHS = {
  root: path.resolve('./'),
  src: path.resolve('./src'),
  dist: path.resolve('./dist'),
}

const shared = {
  mode: ENV,
  cache: DEBUG,
  devtool: DEBUG ? 'eval' : false,
  entry: {
    src: `${PATHS.src}/index.js`,
    styles: `${PATHS.src}/scss/main.scss`,
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.json'],
    modules: [path.resolve('node_modules'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?$|tsx?$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s?css|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: DEBUG,
                modules: false,
                importLoaders: true,
                minimize: !DEBUG,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: DEBUG,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: DEBUG,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin({ filename: '[name].css' })],
}

if (TARGET === 'dev') {
  module.exports = merge(shared, development)
}

if (TARGET === 'build') {
  module.exports = merge(shared, production)
}
