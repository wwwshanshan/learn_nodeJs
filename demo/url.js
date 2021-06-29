/*  
    新
    new URL()
    旧
    url.parse()   解析 URL
    url.format(urlObject)是 url.parse() 操作的逆向操作
    url.resolve(from, to)添加或者替换地址   
*/
const url = require('url');
const common = require('./commonjs')
var api = "http://www.baidu.com?name=zhangsan&age=18";
console.log(new URL(api)); // 新

var getVal = url.parse(api, true); // 旧
console.log(getVal);

common.get();