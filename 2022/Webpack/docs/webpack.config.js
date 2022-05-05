const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// resolve는 슬래시를 붙여 줌 (public을 하면, /public이 됨)
console.log(path.join(__dirname, 'public'));
console.log(path.resolve(__dirname, 'public'));
console.log(__dirname);

module.exports = {
  mode: 'development',
  watch: false,
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 9000,
    hot: true,
  },
};
