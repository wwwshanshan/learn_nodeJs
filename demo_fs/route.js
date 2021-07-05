/**
 * 路由：是由一个url（路径）和特定的HTTP方法（get，post等）组成的
 *      涉及到应用如何响应客户端对某个网站节点的访问
 * 通俗讲：路由指的就是针对不同请求的url，处理不同的业务逻辑
 * 
 */
var http = require('http');
let url = require('url');
let routes = require('./module/routes.js');
http.createServer(function (req, res) {
    // 创建静态web服务
  routes.static(req, res, 'static');
}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');