'use strict'

const path = require('path');
const globalEnv = 'test';
const isHttps = true;
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../build/dist/index.html'),
    //assetsRoot: path.resolve(__dirname, '../../haina-mobile-release'),
    assetsRoot: path.resolve(__dirname, '../build/dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '',
    // assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  test: {
    env: require('./test.env'),
    index: path.resolve(__dirname, '../../haina-mobile-release/index.html'),
    assetsRoot: path.resolve(__dirname, '../../haina-mobile-release'),
    assetsSubDirectory: 'assets',
    // assetsPublicPath: '/',
    assetsPublicPath: 'https://content.0606.com.cn/mtest/', 
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  sh: {
    env: require('./sh.env'),
    index: path.resolve(__dirname, '../../haina-mobile-release/index.html'),
    assetsRoot: path.resolve(__dirname, '../../haina-mobile-release'),
    assetsSubDirectory: 'assets',
    // assetsPublicPath: '/',
    assetsPublicPath: 'https://content.0606.com.cn/msh/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 3000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    proxyTable: {
      "/advisor": {
        target: `http${isHttps ? 's' : ''}://advisor-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/advisor': ''
        },
        headers: {
          Origin: `http${isHttps ? 's' : ''}://mobile-${globalEnv}.0606.com.cn`,
          Referer: ''
        }
      },
      "/mapi": {
        target: `http${isHttps ? 's' : ''}://mapi-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/mapi': ''
        },
        headers: {
          Origin: `http${isHttps ? 's' : ''}://mobile-${globalEnv}.0606.com.cn`,
          Referer: ''
        }
      },
      "/cms": {
        target: `http${isHttps ? 's' : ''}://cms-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/cms': ''
        }
      },
      '/bigfund': {
        target: `http${isHttps ? 's' : ''}://bigfund-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/bigfund': ''
        }
      },
      '/quant': {
        target: `http${isHttps ? 's' : ''}://quant-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/quant': ''
        }

      },
      '/read': {
        target: `http${isHttps ? 's' : ''}://read-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/read': ''
        },
        headers: {
          Origin: `http${isHttps ? 's' : ''}://mobile-${globalEnv}.0606.com.cn`,
          Referer: ''
        }
      },
      '/mk/': {
        target: `http${isHttps ? 's' : ''}://mkbj.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/mk': ''
        }
      },
      '/broker/': {
        target: `http://localhost:9000`,
        changeOrigin: true,
        headers: {
          // Origin: `http${isHttps ? 's' : ''}://mobile-${globalEnv}.0606.com.cn`,
          Origin: `http${isHttps ? 's' : ''}://mobile-dev2.0606.com.cn`,
          Referer: ''
        }
        // pathRewrite: {
        //     '^/broker': ''
        // }
      },
      '/researchReport': {
        target: `http${isHttps ? 's' : ''}://researchReport-${globalEnv}.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/researchReport': ''
        }
      },
      '/track': {
        target: `http${isHttps ? 's' : ''}://stat-${globalEnv}.0606.com.cn/stat`,
        changeOrigin: true,
        pathRewrite: {
          '^/track': ''
        }
      },
      '/f9': {
        target: `https://f9.0606.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/f9': ''
        }
      },
      '/h5api': {
          target: `https://h5api-test.0606.com.cn`,
          changeOrigin: true,
          pathRewrite: {
            '^/h5api': ''
            }
        },
        '/currency': {
            target: `http${isHttps ? 's' : ''}://currency-${globalEnv}.0606.com.cn`,
            changeOrigin: true,
            pathRewrite: {
                '^/currency': ''
            }
        },
        '/buss': {
            target: `http${isHttps ? 's' : ''}://buss-test.0606.com.cn`,
            changeOrigin: true,
            pathRewrite: {
                '^/buss': ''
            }
        }
      }
    },
    cssSourceMap: false
  }


