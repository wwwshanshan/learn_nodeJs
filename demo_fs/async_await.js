const fs = require('fs');

// 练习一： 判断服务器上有没有upload目录，没有就创建，有则不操作
// mkdirp 生成多级目录 npm i mkdirp --save 
// var mkdirp = require('mkdirp');
var path = './upload';
fs.stat(path, (err, data) => {
    if(err) {
        // 执行创建目录
        mkdir(path);
        return
    }
    if (!data.isDirectory()) {
        // 删除文件，再去执行创建目录
        fs.unlink(path, err => {
            if(!err) {
                mkdir(path);
            } else {
                console.log('请检测数据是否正确');
            }
        })
    }
})

function mkdir(dir) {
    fs.mkdir(dir, err => {
        if(err) {
            console.log(err);
            return
        }
    })
}
// 练习二 ：wwwroot文件夹里img js css及index.html，找出wwwroot目录下所有目录，放在一个数组里
// 问题：fs里的方法为异步
// 解决：1、改造for循环 递归实现
var dirArr = [];
var dirArr2 = [];
var paths = './wwwroot'
fs.readdir('./wwwroot',(err,data)=>{
    if(err) {
        console.log(err);
        return
    }
    (function getDir(i){
        fs.stat(paths+'/'+data[i], (err,stats)=>{
            if(i === data.length){
                console.log(1,dirArr);
                return
            }
            if(stats.isDirectory()){
                dirArr.push(data[i])
            }
            getDir(i+1)
        })
    })(0)
})
//  解决 2、async await
// 1、定义一个isDir的方法判断一个资源到底是目录还是文件
async function isDir(path){
    return new Promise((resolve,rejects)=>{
        fs.stat(path, (err,stats)=>{
            if(err) {
                console.log(err);
                rejects(err)
                return
            }
            if(stats.isDirectory()){
                return resolve(true);
            } else {
                return resolve(false)
            }
        })
    })
}
// 2、获取wwwroot里面所有资源 循环遍历
function getData(){
    fs.readdir(paths, async (err,data)=>{
        if(err) {
            console.log(err);
            return
        }
        for(var i = 0;i < data.length; i++){
            if(await isDir(paths+'/'+data[i])){
                dirArr2.push(data[i]);
            }
        }
        console.log(2,dirArr2);       
    })
}
getData();



// Promise处理异步
let p = new Promise((resolve, rejects) => {
    setTimeout(() => {
        var name = 'zhangsan';
        resolve(name);
    },1000)
})
p.then(data => {
    console.log(data);// zhangsan
})


// async 声明异步方法 让方法变成异步 await 等待异步方法执行完成
async function test(){
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            var name = '李四';
            resolve(name);
        },1000)
    })
}
console.log(test()); //Promise { <pending> }
async function main() {
    var data = await test();
    console.log(data);
}
main();// 李四