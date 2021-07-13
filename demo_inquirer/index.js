const inquirer = require('inquirer');
const promptConfirm = [{
    type: 'confirm',
    name: 'test',
    message: 'Are you sure?',
    default: true
}]
const promptInput= [{
    type: 'input',
    name: 'name',
    message: '你的名字',
    default: '豆花儿'
}]
const promptList = [{
    type: 'list',
    name: 'listItem',
    message: '请选择',
    choices:['Apple', 'Pear', 'Banana'],
    filter: (val) => {
        return val.toLowerCase()
    }
}]
const promptRawList = [{
    type: 'rawlist',
    name: 'rawlistItem',
    message: '请选择',
    choices:['RED', 'BLUE', 'GREEN'],
    filter: (val) => {
        return val.toLowerCase()
    }
}]
const checkList = [{
    type: 'checkbox',
    name: 'checkList',
    message: '请选择',
    choices: [{
        name: 'es6',
    },
    {
        name: 'es7',
        checked: true
    },
    {
        name: 'es8'
    }
    ]
}]
inquirer.prompt(promptConfirm).then((answers)=>{
    console.log(answers);
    inquirer.prompt(promptInput).then((answers)=>{
        console.log(answers);
        inquirer.prompt(promptList).then((answers)=>{
            console.log(answers);
            inquirer.prompt(promptRawList).then((answers)=>{
                console.log(answers);
                inquirer.prompt(checkList).then((answers)=>{
                    console.log(answers);
                })
            })
        })
    })
})
