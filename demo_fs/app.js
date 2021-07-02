const fs = require('fs');
const http = require('http');
const common = require('./module/common.js');
const path = require('path');
const url = require('url');

http.createServer(function (req, res) {
    // 1、 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? '/index.html' : pathname;
    //  获取文件后缀名 path.extname()
    let extname = path.extname(pathname);
    // 2、 通过fs模块读取文件
    if(pathname !== '/favicon.ico'){
        fs.readFile('./static'+pathname, async(err, data)=>{
            if(err) {
                res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
                res.end('找不到页面');
                return
            }
            //1 let mime = common.getMime(extname);
            // 2
            let mimeObj = await common.getFileMime(extname);
            //3 let mimeObjSync = common.getFileMimeSync(extname);
            res.writeHead(200, {'Content-Type': `${mimeObj};charset=UTF-8`})
            res.end(data);
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');