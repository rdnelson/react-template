var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    module: {
        loaders: [
        {
            test: /(?!\.spec)\.jsx?$/,
            include: APP_DIR,
            loaders: [
                'react-hot',
                'babel'
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    // dev server settings
    historyApiFallback: true,
};

module.exports = config;
