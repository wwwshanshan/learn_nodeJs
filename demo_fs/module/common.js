const fs = require('fs');
exports.getMime = function(pathname){
    switch (pathname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';   
        default:
            return 'text/html';
    }
}
exports.getFileMime = function(extname){
    return new Promise((resolve, rejects)=>{
        fs.readFile('./data/mime.json', (err, data)=>{
            if(err){
                console.log(err);
                rejects(err);
                return
            }
            let mime = JSON.parse(data.toString());
            console.log(mime[extname]);
            resolve(mime[extname]);
        })
    })
   
}
exports.getFileMimeSync = function(extname){
    let data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname];
}