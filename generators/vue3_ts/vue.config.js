const { useMiddleWare } = require('vite-plugin-mocker')

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@use "@/styles/variable.scss" as *;`
            }
        }
    },
    devServer: {
        before(app) {
            // 使用mock中间件
            app.use(useMiddleWare())
        }
    }
}
