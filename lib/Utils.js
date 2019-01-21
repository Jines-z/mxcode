const params = (options) => {
    let paramString = ''
    for (let i in options) {
        paramString += i + '=' + options[i] + '&'
    }
    return paramString.slice(0, -1)
}

const errorMethod = (err) => {
    if (err) {
        throw err
        console.log(`\n ${chalk.red('出错啦！')}`)
        process.exit(0)
    }
}

module.exports = {
    params,
    errorMethod
}
