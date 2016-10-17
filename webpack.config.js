/// <reference path="node_modules/@types/node/index.d.ts"/>

var webpack = require('webpack');
var path = require('path');

var WebpackNotifierPlugin = require('webpack-notifier');

process.env.NODE_ENV = "dev";

module.exports = {
  entry: './public/index.tsx',
  output: {
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.jsx', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new WebpackNotifierPlugin({ excludeWarnings: true })
  ],
  module: {
    loaders: [
      { test: /\.ts?x$/, loader: 'ts-loader' },
      { test: /\.styl$/, loader: 'style!css!stylus!' }
    ]
  }
}
