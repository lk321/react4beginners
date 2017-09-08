const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '_/assets/js/app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'stage-0', 'es2015'],
                plugins: [
                    ['import', { libraryName: "antd", style: "css" }]
                ]
            }
        }, { // Sass and native styles
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
            })
        }, { // Images and vectors
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?context=src/images&name=[path][name].[ext]', {
                loader: 'image-webpack-loader',
                query: {
                    mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 4,
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 3,
                    },
                    svgo: {
                        plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }]
                    }
                }
            }],
            exclude: /node_modules/,
            include: __dirname,
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project title',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/public/index.html'
        }),
        new ExtractTextPlugin({
            filename: '_/assets/css/app.bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    }
}