const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    src: path.resolve('assetsSource'),
    public: path.resolve('dist'),
};
module.exports = {
    entry: './assetsSource/index.jsx',
    output: {
        path: paths.public,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: '/node_modules',
                use: ["babel-loader"],
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/[name].min.css',
        })
    ],
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: ['node_modules', paths.src]
    },
    watchOptions: {
        aggregateTimeout: 300
    },
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};