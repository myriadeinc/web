const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                    },
                  },
                ],
              },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'babel.config.js'),
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 8030,
        open: true,
        compress: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/icons/favicon.png',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/assets', to: 'assets' },
                { from: 'public/icons', to: 'icons' },
            ],
        }),
    ],
};
