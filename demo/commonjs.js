/**
 * 1、我们可以把公共的功能抽离成为一个单独的JS文件作为一个模块，
 * 默认情况下，这个模块里的方法过着属性，外部无法访问，
 * 若要访问，则在模块里通过 exports 或者 module.exports 暴露属性或者方法。
 * 2、在需要使用模块的文件中，通过 require 的方式引入该模块，
 * 就可使用该模块里暴露的属性和方法
 */
var obj = {
    get:() => {
        console.log('获取数据');
    },
    post:() => {
        console.log('提交数据');
    }
}
/**
 * const common = require('./ commonjs')
 * 向外暴露的写法（两种）
 * 1、exports.xxx = obj; // console.log(common); { xxx: { get: [Function: get], post: [Function: post] } }
 * 2、module.exports = obj; // console.log(common); { get: [Function: get], post: [Function: post] }
 */
 module.exports = obj;

exports.get = () => {
    console.log('获取数据'); /* common.get(); 获取数据 */
}

// nodejs 会默认找 node_modules 对应模块的index.js 可直接写文件夹的名字 
const axios = require('axios');
axios.get();

/**
 * 若不是index.js 则会报错 Error: Cannot find module 'db' 
 * 当前目录下npm init --yes 要配置 package.json 方可使用
 */
const db = require('db');
db.post();


// 第一次加载某个模块时，Node.js 会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的 module.exports 属性返回了。
const a = require('axios');
console.log(a.name); // 小豆花
a.name = '小小花';
// 第二次 require 模块时，并没有重新加载并执行模块。而是直接返回了第一次 require 时的结果，
const b = require('axios');
console.log(b.name); // 小小花

