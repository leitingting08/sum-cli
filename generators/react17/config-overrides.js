const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const { getThemeVariables } = require('antd/dist/theme')
const path = require('path')

module.exports = override(
    fixBabelImports(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: getThemeVariables({
            dark: true // 开启暗黑模式
            // compact: true // 开启紧凑模式
        })
    }),
    addWebpackAlias({
        '@': path.resolve('./src')
    })
)
