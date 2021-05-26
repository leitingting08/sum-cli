#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const updateNotifier = require('update-notifier')
const log = require('./log')
const fs = require('fs')
updateNotifier({ pkg }).notify({ isGlobal: true })
const { sumGenerator, gitGenerator, localGenerator } = require('./generator')

/**
 * program 命令询问和帮助，如果没有输入任何参数则输出帮助查看命令
 */

program
    .version(pkg.version, '-v, --version')
    .usage('<command> [options]')
    .description('Standard tooling generate dir from templates')

program
    .command('init [name]')
    .description('Create a project')
    .option('-l, --local', 'Create dir from local template')
    .option('-g, --git', 'Create dir from git address')
    .action((name, options) => {
        if (!name) return log.error('Please input your project name')
        // 判断本地目录是否已经存在
        if (fs.existsSync(name)) return log.error('Project name already exist')
        if (options.git) {
            gitGenerator(name)
        } else if (options.local) {
            localGenerator(name)
        } else {
            sumGenerator(name)
        }
    })

program.parse(process.argv)

const commandName = program.args.length
if (!commandName) {
    program.help()
}
