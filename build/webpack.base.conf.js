const path = require('path');
const utils = require('./utils');
const config = require('../config');
// const HappyPack = require('happypack'),
//   os = require('os'),
//   happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}


let argvs = {}
process.argv.filter((item, index) => index > 1).forEach(item => {
  if (item.includes("=")) {
    argvs[item.split("=")[0]] = item.split("=")[1]
  } else {
    argvs[item] = item
  }
})
if (argvs['branch'] === 'test2' && process.env.NODE_ENV === 'testing') {
  config.test.assetsPublicPath = 'https://content.0606.com.cn/mtest2/'
}
if (argvs['branch'] === 'dev2' && process.env.NODE_ENV === 'testing') {
  config.test.assetsPublicPath = '/'
}
module.exports = {
  entry: {
    // vendor: ['react', "react-dom", "mobx","mobx-react"],
    main: ["./src/main/index.tsx"]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : process.env.NODE_ENV === 'development' ? config.dev.assetsPublicPath : process.env.NODE_ENV === 'testing' ? config.test.assetsPublicPath : config.sh.assetsPublicPath
  },
  resolve: {    
    extensions: ['.js', '.jsx', '.json', ".webpack.js", ".web.js", ".ts", ".tsx"], //这里的顺序决定了，他在引入的时候，先找到什么就引入什么，比如同时有index.native.js,index.js,会先引index.js
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'components': resolve('src/main/components'),
      '@container': resolve('src/main/container')
    }
  }, 
  module: {
    rules: [
      {
        test: /\.js(x?)$/,      
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('node_modules/swiper'),
          resolve('node_modules/dom7'),
          resolve('node_modules/ace-lib'),
          resolve('node_modules/better-scroll')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts(x?)$/,
        include: [resolve('src')],
        // use: ['happypack/loader?id=happybabel', 'awesome-typescript-loader'],
        use: ['babel-loader', 'awesome-typescript-loader']
        // loader: 'happypack/loader?id=happybabel'
      }
    ]
  }
};
