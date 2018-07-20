const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
function resolve(dir) {
    return path.join(__dirname, '..', dir);
  }
exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : process.env.NODE_ENV === 'development' ? config.dev.assetsSubDirectory : process.env.NODE_ENV === 'testing' ? config.test.assetsSubDirectory:config.sh.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'sh',
            sourceMap: options.sourceMap
        }
    };

    const px2remLoader = {
        loader: 'px2rem-loader',
        options: {
            remUnit: 100
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader];
        loaders.push(px2remLoader);
        loaders.push({ loader: 'postcss-loader'});
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }
        //[css,p,sass]
        // enable postcss by default
        
        // loaders.push(px2remLoader);
        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders
            });
        } else {
            return [{ loader: 'style-loader' }].concat(loaders);
        }
    }

    return {
        css: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
}

exports.styleLoaders = function (options) {
    const output = [];
    const loaders = exports.cssLoaders(options);
    for (let extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        });
    }
    return output;
};
