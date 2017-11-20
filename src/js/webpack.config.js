"use strict";
/**
 * npm install --save-dev jquery@1.* 安装jq 1.*版本写入配置文件
 * webpack -p 线上生产环境
 * webpack --watch 监听文件自动压缩
 * webpack-dev-server --inline  自动刷新
 * webpack --watch  --env.js index 自动监听index入口文件修改
 * loader 主要是处理打包合并之前的 例如 import Vuex from 'vuex'; 相当于执行 vue-loader 输出vuex文件读取编译
 * plugin 主要处理打包之后输出结果 extract-text-webpack-plugin
 */
const os = require('os');
const path = require('path');
const webpack = require('webpack');
const pkgjson = require('./package.json');
const lessplugin = require("extract-text-webpack-plugin");
const serviceworker = require('sw-precache-webpack-plugin');
const publicpath = path.join(path.dirname(path.dirname(__dirname)), "www");
const utils = {
    analysis: (data) => {
        let output = data.output;
        let suffix = data.suffix;
        let name, datasource = data.datasource;
        for (let key in datasource) {
            name = output + key + suffix;
            webpackconfig.entry[name] = datasource[key];
        };
    },
    ip: () => {
        let list, hostname = os.hostname();
        let network = os.networkInterfaces();
        for (let key in network) {
            list = network[key];
            for (let i = 0, len = list.length; i < len; i++) {
                if (list[i].family == "IPv4") {
                    return list[i].address;
                };
            };
        };
        return "127.0.0.1";
    },
    today: (time, format) => {
        let data = time ? new Date(time * 1000) : new Date();
        let date = {
            "M+": data.getMonth() + 1,
            "d+": data.getDate(),
            "h+": data.getHours(),
            "m+": data.getMinutes(),
            "s+": data.getSeconds(),
            "q+": Math.floor((data.getMonth() + 3) / 3),
            "S+": data.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length));
        };
        for (let k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            };
        };
        return format;
    }
};
const config = {
    js: {
        suffix: ".min.js",
        output: "script/",
        datasource: {
            vue: "./src/vue.js",
            hls: "./src/hls.js",
            play: "./src/play.js",
            main: "./src/main.js",
            route: "./src/route.js",
            index: "./src/index.js",
<<<<<<< HEAD
            virtual: "./src/virtual.js",
            charts:"./src/charts.js",
=======
            virtual: "./src/virtual.js"
>>>>>>> 6de3aa95aca6842f5e64f186748b05f9f8daac50
        }
    },
    css: {
        suffix: ".min.css",
        output: "css/",
        datasource: {
            "index": "./less/index.less"
        }
    }
};
const webpackconfig = {
    devtool: 'cheap-source-map',
    entry: {
        vendor: ["vue", "vuex", "axios", "jquery"]
    },
    output: {
        path: publicpath, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: '[name]', //每个页面对应的主js的生成配置
        //chunkFilename: 'script/chunks/[name].[chunkHash].js',
        chunkFilename: "script/chunks/[id].chunk.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.less$/,
            use: lessplugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "less-loader"]
            })
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }],
        }, {
            test: /\.tpl$/,
            loader: 'html-template-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: outputpath,
    //     port: 80,
    //     host: utils.ip(),
    // },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(), //热加载插件
        new lessplugin({
            filename: "[name]",
            disable: process.env.NODE_ENV === "development"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            filename: "./script/libs/commons.min.js"
        }),
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(pkgjson.version),
            __DEV__:false,
        }),
        new webpack.BannerPlugin(`
-------------------------------------------------------------
本人保留所有版权与权利.

https://github.com/ningxiao
@version: ${pkgjson.version}
@author: ${pkgjson.author}
@qq:${pkgjson.qq}
@description:  ${pkgjson.description}
@date: ${utils.today(null, "yyyy/MM/dd hh:mm:ss")}
-------------------------------------------------------------`),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};

module.exports = function(env) {
    let data = [config.js, config.css];
    if (env) {
        for (let type in config) {
            if (env[type]) {
                let json, key = env[type];
                let datasource = config[type].datasource;
                if (key in datasource) {
                    json = {};
                    json[key] = datasource[key];
                    config[type].datasource = json;
                };
                data = [config[type]];
            };
        };
    };
    for (let i = 0; i < data.length; i++) {
        utils.analysis(data[i]);
    };
    return webpackconfig;
};