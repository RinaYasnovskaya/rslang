const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'none',
  watch: false,
  entry: ['./src/script.js', './src/sass/style.scss'],
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'script.js',
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      }, {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin([
      { from: 'src/assets/', to: 'assets/', toType: 'dir' },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
