const chalk = require('chalk')
const logSymbols = require('log-symbols')

module.exports = {
    success: (text) => console.log(logSymbols.success, chalk.green(text)),
    info: (text) => console.log(logSymbols.info, chalk.blue(text)),
    bash: (text) => console.log(chalk.cyan(`$ ${text}`)),
    warning: (text) => console.log(logSymbols.warning, chalk.yellow(text)),
    error: (text) => console.log(logSymbols.error, chalk.red(text))
}
