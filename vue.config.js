/*
 * @Author: yzh
 * @Date: 2021-02-02 14:44:54
 * @LastEditTime: 2021-02-03 17:32:04
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /micro-vue/vue.config.js
 */
const { name } = require('./package');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]-123`,
      libraryTarget: 'umd',                   // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/child/vue-history/'
    : '/'
}