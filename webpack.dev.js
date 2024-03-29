const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { 
    hot: true,
    port: 9000,
    static: path.resolve(__dirname, './public')
  },
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      fix: true
    })    
  ]
});