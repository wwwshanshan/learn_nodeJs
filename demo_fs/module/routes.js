const fs = require('fs');
const path = require('path');
const url = require('url');
// 读取对应文件类型（同步）
let = getFileMimeSync = function(extname){
    let data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname];
}
// 封装node静态服务
exports.static = function(req,res,staticPath){
        // 1、 获取地址
        let pathname = url.parse(req.url).pathname;
        pathname = pathname === '/' ? '/index.html' : pathname;
        //  获取文件后缀名 path.extname()
        let extname = path.extname(pathname);
        // 2、 通过fs模块读取文件
        if(pathname !== '/favicon.ico'){
            try {
                let data = fs.readFileSync('./' + staticPath + pathname)
                if(data){
                    let mimeObjSync = getFileMimeSync(extname);
                    res.writeHead(200, {'Content-Type': `${mimeObjSync};charset=UTF-8`})
                    res.end(data);
                }
            } catch (error) {
                let pathname = url.parse(req.url).pathname;
                if(pathname === '/login'){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
                    res.end('执行登录');
                } else if(pathname === '/register'){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
                    res.end('执行注册');
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
                    res.end('页面找不到');
                }
            }
           
        }
}