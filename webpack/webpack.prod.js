const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')

const PATHS = {
  root: path.resolve('./'),
  src: path.resolve('./src'),
  dist: path.resolve('./dist'),
}

module.exports = {
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: PATHS.root,
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      excludeAssets: [/styles.js/],
      inject: 'body',
      chunks: ['src', 'styles'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
      title: 'Kevin &Oslash;sterkilde &middot; Frontend Engineer',
      template: `${PATHS.src}/index.html`,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
  ],
}
