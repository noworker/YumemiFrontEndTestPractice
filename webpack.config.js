const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    target: ["web", "es5"],
    devServer: {
        static: './dist/index.html',
        open: true,
        hot: true,
        port: 3002
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './style.css'
        })
    ]
}