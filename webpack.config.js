const path = require('path');
const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    devtool: 'inline-source-map',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
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