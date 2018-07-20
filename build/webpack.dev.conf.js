const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge'); //合并
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //根据你设置的模板，在每次运行后生成对应的模板文件，同时所依赖的CSS/JS也都会被引入，如果CSS/JS中含有hash值，则生成的模板文件也会引入正确版本的CSS/JS文件。
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// add hot-reload 
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = [
    'react-hot-loader/patch',
    './build/dev-client'    
  ].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'my-app-react', //生成的HTML模板的title，如果模板中有设置title的名字，则会忽略这里的设置
      filename: 'index.html', //生成的模板文件的名字
      template: 'src/main/test.html',//模板来源文件
      inject: true //引入模块的注入位置；取值有true/false/body/head
    }),
    new FriendlyErrorsPlugin()
  ]
});
