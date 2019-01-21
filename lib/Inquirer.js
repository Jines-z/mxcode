const inquirer = require('inquirer')

const promptList = [{
    type: 'editor',
    message: 'AppID: ',
    name: 'AppID'
}, {
    type: 'editor',
    message: 'AppSecret: ',
    name: 'AppSecret'
}, {
    type: 'input',
    message: '扫码后进入的小程序页面路径: ',
    name: 'path',
    default: 'pages/index'
}, {
    type: 'input',
    message: '图片名称: ',
    name: 'name',
    default: 'mini'
}]

const Inquirer = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt(promptList).then(answers => {
            resolve(answers)
        })
    })
}

module.exports = Inquirer
