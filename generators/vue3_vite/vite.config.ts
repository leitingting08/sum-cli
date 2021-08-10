import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import viteMock from 'vite-plugin-easy-mock'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteMock(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        return `element-plus/packages/theme-chalk/src/${name.substr(3)}.scss`
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`
                    }
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variable.scss" as *;`
            }
        }
    },
    server: {
        port: 8080,
        // 是否自动在浏览器打开
        open: true,
        // 是否开启 https
        https: false,
        /**
         * 在生产中服务时的基本公共路径。
         * @default '/'
         */
        base: './',
        // 代理
        proxy: {
            // '/api': {
            //     target: 'https://www.xxx.com',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, '')
            // }
        }
    }
})
