const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    devtool: 'inline-source-map',
    target: 'node',
    externals: [ nodeExternals() ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};