/**
 * 
fs.stat 文件详细信息
fs.mkdir 创建目录
fs.readdir 读取目录
fs.rmdir 删除目录

fs.writeFile 写入文件
fs.readFile 读取文件
fs.appendFile 追加文件

fs.rename  1、重命名 2、移动文件
fs.unlink 删除文件
 */
const fs = require('fs');
/*
fs.stat('./html', (err, data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(`文件：${data.isFile()}`);
    console.log(`目录：${data.isDirectory()}`);
})

fs.mkdir('./css', (err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('创建成功');
})

fs.writeFile('./html/index.html','你好 NodeJs 哈哈哈',(err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('创建写入成功');
})

fs.appendFile('./css/base.css','body{color: red}', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('appendFile成功');
})

fs.readFile('./html/index.html',(err,data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(data); // data 为 Buffer 类型
    console.log(data.toString()); // Buffer 转化成 string类型
})

fs.readdir('./html', (err, data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(data);
})

 fs.rename('./css/a.css', './css/c.css', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('重命名成功');
 })
 fs.rename('./css/c.css', './html/index.css', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('移动并重命名成功');
 })

fs.unlink('./aaa/index.js', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('删除文件成功');
})

fs.rmdir('./aaa', err => {
    // 只能删除空目录
    if(err) {
        console.log(err);
        return
    }
    console.log('删除目录成功');
})
*/