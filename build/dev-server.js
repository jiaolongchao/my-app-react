
const config = require('../config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}
const opn = require('opn');
const chalk = require('chalk');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');//引入代理中间件
const webpackConfig = require('./webpack.dev.conf');

// 端口设置
const port = process.env.PORT || config.dev.port;
// 是否自动打开浏览器
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// 创建http代理
const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
});

// 代理遍历
Object.keys(proxyTable).forEach(function (context) {        
    let options = proxyTable[context];    
    if (typeof options === 'string') {
        options = { target: options };        
    }
    app.use(proxyMiddleware(options.filter || context, options));
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./assets'));
// app.get('/mapp/', function (request, response) {
//     response.sendFile(path.resolve(__dirname, 'index.html'))
// })

//一些基础数据的配置，自己测试用的，后期优化
// const json = require('../assets/db/index.json');
// const apiRouters = express.Router();
// apiRouters.get('/broker', (req, res) => {
//     console.log('aa')
//     res.json({
//         code:200,
//         data:json.brokerList
//     })

// });
// app.use('/dev', apiRouters);

const uri = 'http://localhost:' + port;
const ip = 'http://' + require('ip').address() + ':' + port;

devMiddleware.waitUntilValid(function () {
    console.log(chalk.cyan('- Local: ' + uri + '\n'));
    console.log(chalk.cyan('- On your Network: ' + ip + '\n'));
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    };
});
