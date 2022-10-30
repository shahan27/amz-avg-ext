const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const { Template } = require('webpack');

//Code below not used
const tsRule = {
    test: /\.ts(x?)$/,
    exculde: /node_modules/,
    use: 'ts-loader',
}

const pluginsassa = [
    new HtmlWebpackPlugin({
        template: 'src/popup-page/popup.html',
        filename: 'popup.html',
        chunks: ['popup'],
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: "public", to: "." }
        ],
    }),
    new CleanWebpackPlugin(),
];

module.exports = {
    mode: "production",
    entry: {
        popup: "./src/popup-page/popup.tsx"
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
            }
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/popup-page/popup.html',
            filename: 'popup.html',
            chunks: ['popup'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: "." }
            ],
        }),
        new CleanWebpackPlugin(),
    ],
}