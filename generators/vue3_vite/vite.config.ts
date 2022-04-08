import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteMock from 'vite-plugin-easy-mock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        viteMock(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
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
