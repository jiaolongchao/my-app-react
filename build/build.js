// https://github.com/shelljs/shelljs

process.env.NODE_ENV = 'production';

const chalkAnimation = require('chalk-animation'); //粉笔动画
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const shell = require('shelljs');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');
const ejs = require('ejs');
const utils = require('./utils');
const animation = chalkAnimation.rainbow('build.......');
animation.start();

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
let argvs = {}
/* process.argv.filter((item,index)=>index>1).forEach(item => {
    if (item.includes("=")) {
        argvs[item.split("=")[0]] = item.split("=")[1]
    } else {
        argvs[item] = item
    }
})
let branch = 'master'

if (argvs['branch']) {
    branch = argvs['branch']
}
if (!fsExistsSync(config.build.assetsRoot)) {
    shell.exec(`cd ${config.build.assetsRoot.substring(0, config.build.assetsRoot.lastIndexOf("/") + 1)} && git clone git@60.205.162.223:com.haina.web/haina-mobile-release.git && cd haina-mobile-release &&  git checkout ${branch}`, { silent: false }).stdout
} else {

    shell.exec(`cd ${config.build.assetsRoot} && git checkout ${branch} && git pull origin ${branch}`, { silent: true }).stdout
}

shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;
shell.cp('-R', 'assets/*', assetsPath);
shell.config.silent = false; */

webpack(webpackConfig, function (err, stats) {
    console.log('a')
    let jsarr = findSync(path.join(assetsPath, '/js'), 'js')
    let cssarr = findSync(path.join(assetsPath, '/css'), 'css')
    let arr = jsarr.concat(cssarr)
    console.log(arr)
    let filename = resolve("template/preload.ejs")
    let str = require('fs').readFileSync(filename, 'utf8');
    let ret = ejs.render(str, {
        items: arr,
        filename
    });
    console.log('b')
    fs.writeFileSync(path.join(config.build.assetsRoot, 'preload.html'), ret)

    animation.stop();
    
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build finish.\n'))
    console.log(chalk.yellow(
        '  build之后的文件是运行在服务器上的.\n' +
        '  直接打开index.html 不能运行.\n'
    ));

    /* console.log(chalk.yellow(
        argvs['commit']
    ));
    if (argvs['commit']) {
        try {
            console.log(`git commit -m ${argvs['commit']} && git push origin ${branch}`)
            shell.exec(`cd ${config.build.assetsRoot} && git add . &&  git commit -m ${argvs['commit']} && git push origin ${branch}`, { silent: false }).stdout
            console.log(chalk.yellow(
                '远程仓库提交完成'
            ));
        } catch (error) {
            console.log(chalk.yellow(
                '远程仓库提交失败'
            ));
        }
    } */


});

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

function findSync(startPath, type) {
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            //不存在多级目录
            // let fPath=join(path,val);
            // let stats=fs.statSync(fPath);
            // if(stats.isDirectory()) finder(fPath);
            result.push({ src: config.build.assetsPublicPath + utils.assetsPath(type+'/'+val), type });
        });

    }
    finder(startPath);
    return result;
}

//检测文件或者文件夹存在 nodeJS
function fsExistsSync(path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}
