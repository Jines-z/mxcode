const chalk          = require('chalk')
const fs             = require('fs')
const Spinner        = require('../lib/Spinner')
const Banner         = require('../lib/Banner')
const Inquirer       = require('../lib/Inquirer')
const GetAccessToken = require('../lib/GetAccessToken')
const GetBinaryCode  = require('../lib/GetBinaryCode')

const GetWXACode = async (dir) => {
    await Banner('mxcode')
    let { AppID, AppSecret, path, name } = await Inquirer()
    if (!path) {
        path = 'pages/index'
    }
    if (!name) {
        name = 'mini'
    }
    console.log('\n')
    Spinner.start('开始获取access_token')
    const access_token = await GetAccessToken(AppID, AppSecret)
    Spinner.start('开始生成小程序码')
    const code = await GetBinaryCode(access_token, path)
    fs.writeFileSync(`${name}.png`, code)
    Spinner.stop()
    console.log(`\n ${chalk.green(`Successfully，See ${name}.png！ \n`)}`)
}

module.exports = GetWXACode