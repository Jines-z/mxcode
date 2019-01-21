#!/usr/bin/env node

const program      = require('commander')
const GetWXACode   = require('../packages/GetWXACode')
const { version }  = require('../package')

program
    .version(version, '-v, --version')
    .description('开始生成你的小程序码')
    .action(function (dir, cmd) {
        GetWXACode()
    })

program.parse(process.argv)

if (process.argv.slice(2).length > 0) {
    program.help()
}
