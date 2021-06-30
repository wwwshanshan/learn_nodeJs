// 引入http模块 
const http = require('http');
const url = require('url');
/**
 * 创建服务
 * request 获取URL传过来的信息
 * response 给浏览器相应信息
 */
http.createServer((request, response) => {
    // 浏览器访问地址
    console.log(request.url);
    if(request.url!='/favicon.ico'){
        // 旧
        var result=url.parse(request.url,true);
        console.log(result) //解析 URL
        // 新
        console.log(new URL(request.url));
    }
    // 设置响应头:状态码200 文件类型html 字符集utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.write('你好');
    // 表示页面上面输出一句话并且结束响应
    response.end('Hello World'); // end方法必须写
}).listen(3001); // 端口
console.log('Server running at http://127.0.0.1:3001/');