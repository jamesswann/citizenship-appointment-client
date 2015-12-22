'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  context: path.join(__dirname, 'lib'),
  entry: {
    login: "./login",
    booking: "./booking"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib)/,
        loader: 'babel'
      },
      {
        test: /\.mustache$/,
        include: /views\/client/,
        loader: 'mustache?noShortcut'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-au/)
  ],
  node: {
   fs: 'empty'
  },
  resolve: {
    alias: {
      'hogan.js': 'hogan.js/dist/template-3.0.2.js'
    }
  }
};
