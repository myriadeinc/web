const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '.js'
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        }
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.svg$/, use: ['@svgr/webpack'] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, localIdentName: '[local]___[hash:base64:5]' }
          },
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 8030,
    open: true,
    compress: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/icons/favicon.png'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },
        { from: 'public/icons', to: 'icons' }
      ]
    })
  ]
};
