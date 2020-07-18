const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/image'),
                    to:   path.resolve(__dirname, 'dist/assets/image'),
                }
            ],
          }),
        // new MiniCssExtractPlugin(),
        // new CleanWebpackPlugin(),
        
    ],
    module: {
        rules: [
            // {
            //     test: /\style.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            //   },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }

        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        proxy: {
            '/api': {
                target: 'http://admin-panel',
                pathRewrite: { '^/api': '' },
                // secure: false,
                changeOrigin: true
            },
        }
    }
}