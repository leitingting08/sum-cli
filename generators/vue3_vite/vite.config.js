import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import viteMocker from 'vite-plugin-mocker'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`
                    }
                }
            ]
        }),
        viteMocker()
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
            '/api': {
                target: 'https://www.xxx.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    configureServer: ({ app }) => {
        app.use()
    }
})
