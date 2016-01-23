var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    entry: {
        app: './client/react/app.jsx'

    },
    output: {
        path: __dirname,
        filename: "build/js/[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin(/* strategy */ /* options */),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            index: "app.html",
            port: 8080,
            server: { baseDir: ['build']},
            open: false,
            ghostMode: false,
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.html?$/,
                loader: 'file-loader'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname),
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'client/modules'
        ]
    }
}