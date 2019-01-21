const request  = require('request')
const chalk    = require('chalk')
const Spinner  = require('./Spinner')
const { params, errorMethod } = require('./Utils')

const GetAccessToken = (AppID, AppSecret) => {
    return new Promise((resolve, reject) => {
        const param = {
            grant_type: 'client_credential',
            appid: AppID,
            secret: AppSecret
        }
        request(`https://api.weixin.qq.com/cgi-bin/token?${params(param)}`, (error, response, body) => {
            errorMethod(error)
            const access_token = JSON.parse(body).access_token
            if (!access_token) {
                Spinner.stop()
                console.log(`  ${chalk.red(body)}\n`)
                process.exit(0)
            } else {
                resolve(access_token)
            }
        })
    })
}

module.exports = GetAccessToken