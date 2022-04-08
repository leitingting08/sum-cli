const { useMiddleWare } = require('vite-plugin-easy-mock')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@use "@/styles/variable.scss" as *;`
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [{ test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' }]
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ]
    },
    devServer: {
        before(app) {
            // 使用mock中间件
            app.use(useMiddleWare())
        }
    }
}
