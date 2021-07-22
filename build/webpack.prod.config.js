const webpack = require('webpack');
const { merge } = require("webpack-merge");
const baseWebpackConfig = require('./webpack.config.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 模块分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('production'),
        }),
        new CleanWebpackPlugin(),

        // 模块分析
        new BundleAnalyzerPlugin({
            // analyzerHost: "127.0.0.1",
            analyzerPort: 7777,
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
})