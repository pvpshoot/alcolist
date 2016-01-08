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
        app: './client/react/app.jsx'

    },
    output: {
        path: __dirname,
        filename: "build/js/[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            index: "app.htm",
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
                    presets: ['es2015']
                }
            },
            {
                test: /\.html?$/,
                loader: 'file-loader'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            }
        ]
    }
}