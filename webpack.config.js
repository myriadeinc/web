const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs')


module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
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
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
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
        compress: true
    },
    // externals: {
    //   'config': JSON.stringify(config)
    // },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            // favicon: './public/favicon.png',
        }),
    ],
};