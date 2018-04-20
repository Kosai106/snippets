const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')

const PATHS = {
  root: path.resolve('./'),
  src: path.resolve('./src'),
  dist: path.resolve('./dist'),
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      excludeAssets: [/styles.js/],
      inject: true,
      chunks: ['src', 'styles'],
      title: 'Kevin &Oslash;sterkilde &middot; Frontend Engineer',
      template: `${PATHS.src}/index.html`,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
  ],
  devServer: {
    port: 3000,
    host: 'localhost',
    open: true,
    historyApiFallback: true,
  },
}
