const request  = require('request')
const { errorMethod } = require('./Utils')

const GetBinaryCode = (access_token, path) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.weixin.qq.com/wxa/getwxacode?access_token=${access_token}`,
            method: 'POST',
            json: true,
            encoding: null,
            headers: {
                'content-type': 'application/json',
            },
            body: {
                path: JSON.stringify(path)
            }
        }, (error, response, body) => {
            errorMethod(error)
            resolve(body)
        })
    })

}

module.exports = GetBinaryCode
