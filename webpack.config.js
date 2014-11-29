module.exports = {
    entry : './example/index.js',
    output : {
        path : __dirname + '/example',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.styl$/,
                loader : 'style-loader!css-loader!stylus-loader'
            },
            {
                test : /\.svg$/,
                loader : 'url-loader'
            }
        ]
    }
};