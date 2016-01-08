var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
    entry: ['file?name=build/index.html!jade-html!./client/templates/index.jade'],
    output: {
        path: __dirname,
        filename: "build/js/react/[name].js",
        library: "[name]"
    },
    // externals: {
    //     "React": "React",
    //     "react": "React",
    //     "ReactDOM": "ReactDOM",
    //     "react-dom": "ReactDOM"
    // },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin(/* strategy */ /* options */)
    ],
    resolve: {
        modulesDirectories: [
            'node_modules',
            'client/modules'
        ]
    }

};
