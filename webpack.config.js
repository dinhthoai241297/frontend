const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                  limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[hash].[ext]',
                },
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'admin-lte/bower_components/jquery/dist/jquery.min.js',
            jQuery: 'admin-lte/bower_components/jquery/dist/jquery.min.js'
        })
    ]
};