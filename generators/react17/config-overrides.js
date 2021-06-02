const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
    fixBabelImports(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#42b983' }
    }),
    addWebpackAlias({
        '@': path.resolve('./src')
    })
)
