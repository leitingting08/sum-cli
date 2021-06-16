const inquirer = require('inquirer')
const fsExtra = require('fs-extra')
const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const log = require('./log')

/**
 * 三种方式可选 1. 预设  2. 从 git 下载  3. 从本地 clone
 * sumGenerator 从预设中选择模板
 * gitGenerator 从 git 下载模板
 * localGenerator 从本地下载模板
 */

/**
 * @param {*} prompt 询问选项
 * @param {*} action 询问后的执行函数
 */
const generator = (prompt, action) => {
    inquirer
        .prompt(prompt)
        .then((answers) => {
            action(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                log.error(`Prompt couldn't be rendered in the current environment`)
            } else {
                log.error(error)
            }
        })
}

const spinner = ora('Download from template...')

const successInfo = (name) => {
    spinner.succeed()
    console.log(
        `
     ________  ___  ___  _____ ______                  ________  ___       ___     
    |\\   ____\\|\\  \\|\\  \\|\\   _ \\  _   \\               |\\   ____\\|\\  \\     |\\  \\    
    \\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\\\\\__\\ \\  \\  ____________\\ \\  \\___|\\ \\  \\    \\ \\  \\   
     \\ \\_____  \\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\|\\____________\\ \\  \\    \\ \\  \\    \\ \\  \\  
      \\|____|\\  \\ \\  \\\\\\  \\ \\  \\    \\ \\  \\|____________|\\ \\  \\    \\ \\  \\    \\ \\  \\
        ____\\_\\  \\ \\  \\\\\\  \\ \\  \\    \\ \\  \\              \\ \\  \\____\\ \\  \\____\\ \\  \\
       |\\_________\\ \\_______\\ \\__\\    \\ \\__\\              \\ \\_______\\ \\_______\\ \\__\\
       \\|_________|\\|_______|\\|__|     \\|__|               \\|_______|\\|_______|\\|__|                                                                                                                                           
    `
    )
    log.success(`🎉  Successfully created project ${name}.`)
    log.success('👉  Get started with the following commands:\n')
    log.bash(`cd ${name}`)
    log.bash(`yarn install`)
}

const SUM_PROMPTS = [
    {
        name: 'version',
        message: 'Select version',
        type: 'list',
        choices: [
            {
                name: 'Vue 2 + Javascript + Less',
                value: 'vue2'
            },
            {
                name: 'Vue 3 + Javascript + Less',
                value: 'vue3'
            },
            {
                name: 'Vue 3 + Typescript + Sass + ElementPlus',
                value: 'vue3_ts'
            },
            {
              name: 'Vue 3 + Typescript + Sass + ElementPlus + Vite',
              value: 'vue3_vite'
          },
            {
                name: 'React 17 + Javascript + Less + Antd',
                value: 'react17'
            }
        ]
    }
]

const sumGenerator = (name) => {
    generator(SUM_PROMPTS, (answers) => {
        spinner.start()
        switch (answers.version) {
            case 'vue2':
                fsExtra.copy(path.resolve(__dirname, '../generators/vue2'), `./${name}`, (err) => {
                    if (err) return log.error(err)
                    successInfo(name)
                })
                break
            case 'vue3':
                fsExtra.copy(path.resolve(__dirname, '../generators/vue3'), `./${name}`, (err) => {
                    if (err) return log.error(err)
                    successInfo(name)
                })
                break
            case 'vue3_ts':
              fsExtra.copy(path.resolve(__dirname, '../generators/vue3_ts'), `./${name}`, (err) => {
                  if (err) return log.error(err)
                  successInfo(name)
              })
              break
            case 'vue3_vite':
              fsExtra.copy(path.resolve(__dirname, '../generators/vue3_vite'), `./${name}`, (err) => {
                  if (err) return log.error(err)
                  successInfo(name)
              })
              break
            case 'react17':
                fsExtra.copy(path.resolve(__dirname, '../generators/react17'), `./${name}`, (err) => {
                    if (err) return log.error(err)
                    successInfo(name)
                })
                break
        }
    })
}

const GIT_PROMPTS = [
    {
        name: 'version',
        message: 'Enter git address',
        type: 'input',
        name: 'git'
    }
]

const gitGenerator = (name) => {
    generator(GIT_PROMPTS, (answers) => {
        spinner.start()
        download(`direct:${answers.git.trim()}`, name, { clone: true }, (err) => {
            if (err) {
                spinner.fail()
                log.error(err)
            } else {
                successInfo(name)
            }
        })
    })
}

const LOCAL_PROMPTS = [
    {
        name: 'version',
        message: 'Enter local address',
        type: 'input',
        name: 'path'
    }
]

const localGenerator = (name) => {
    generator(LOCAL_PROMPTS, (answers) => {
        spinner.start()
        fsExtra.copy(answers.path.trim(), `./${name}`, (err) => {
            if (err) {
                spinner.fail()
                log.error(err)
                return
            }
            successInfo(name)
        })
    })
}

module.exports = {
    sumGenerator,
    gitGenerator,
    localGenerator
}
