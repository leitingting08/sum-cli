module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true, // Inline JavaScript is not enabled. Is it set in your options? 允许js修改less变量
                globalVars: {
                    // primary: '#fff' // 定义全局less变量
                }
            }
        } // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    },
    devServer: {
        port: 8082, // 端口号
        host: 'localhost', // 'localhost'
        https: false, // https:{type:Boolean}
        open: true //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // proxy: {  // 配置多个代理
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        //
    }
}
