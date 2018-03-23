const path = require('path');
const bundleOutputDir = './wwwroot/dist';

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            use: [
                'ts-loader',
            ]
        }]
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name]-bundle.js',
        publicPath: 'dist/'
    },
    watch: true,
    stats: {
        children: false,
        colors: true,
        modules: false,
    }
};