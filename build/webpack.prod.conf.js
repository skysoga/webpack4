const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const utils = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = merge(base, {
    mode: "production",
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    output: {
        path: config.build.assetsRoot,  /* 编译输出目录 */
        filename: utils.assetsPath('js/[name].[chunkhash].js'),    /* 编译输出文件名 */
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')  // 没有指定输出名的文件输出的文件名
    },
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_console: true,
                    pure_funcs: ['console.log']
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: 'css/app.[name].css',
            chunkFilename: 'css/app.[contenthash:12].css'  // use contenthash *
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true }
        }),
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.build.index,
            template: 'index.html',
            inject: true,        // 是否注入 html
            minify: {            // 压缩的方式
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
                manifest: {
                    name: 'manifest',
                    minChunks: Infinity
                },
                // 处理异步chunk
                'async-vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    chunks: 'async',
                    name: 'async-vendors'
                }

            }
        },
        runtimeChunk: { name: 'manifest' }, // true
        noEmitOnErrors: true
    }
});

/* 开启 gzip 的情况下使用下方的配置 */
if (config.build.productionGzip) {
    /* 加载 compression-webpack-plugin 插件 */
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    /* 向webpackconfig.plugins中加入下方的插件 */
    webpackConfig.plugins.push(
        /* 使用 compression-webpack-plugin 插件进行压缩 */
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}
if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
