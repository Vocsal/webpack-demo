const webpack = require('webpack');
const { merge } = require("webpack-merge");
const baseWebpackConfig = require('./webpack.config.js')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: "dev.webpack5.com",
        port: 7777,
        // contentBase: '../dist',
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('development'),
        }),
    ],
    optimization: {
        moduleIds: "named"
    },
})