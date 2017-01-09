var jsSourcePath = './js/src/';

module.exports = {

    entry : {
        async : ['babel-polyfill' , jsSourcePath + 'async.js'],
        block : jsSourcePath +  'block.js',
        promise : jsSourcePath +  'promise.js',
        callback : jsSourcePath + 'callback.js'
    },
    output : {
        path : './js/bin/',
        filename : '[name].bundle.js'
    },
    module : {
        loaders : [{ test: /\.json$/, loader: 'json-loader' },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015' , 'es2017']
            }
        }
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
