var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    entry: {
        main: [
            './client/react/app.jsx',
            './build/app.html'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/build/js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 8080,
            server: { baseDir: ['build'] }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.html?$/,
                loader: 'file-loader'
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot!babel'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            }
        ]
    }
}