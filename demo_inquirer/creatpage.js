const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const telpName = [{
    type: 'input',
    name: 'templateName',
    message: '模板的名字',
    filter: (val) => {
        return val.toLowerCase()
    }
}]
const telpType = [{
    type: 'list',
    name: 'templateType',
    message: '请选择模板',
    choices:['空白', '表格', '弹窗'],
}]
inquirer.prompt(telpName).then((answers) => {
    inquirer.prompt(telpType).then((type) => {
        this.pageDir = path.join(__dirname,'./src')
        console.log(answers);
        fs.mkdir(path.join(this.pageDir,answers.templateName), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('目录创建成功');
            console.log(type);
            const vueFile = path.join(this.pageDir, answers.templateName, `index.vue`);
            fs.writeFileSync(vueFile, `<div>111<div>`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('文件创建成功');
            });
        })
    })
    
})