const path = require('path');
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
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
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
