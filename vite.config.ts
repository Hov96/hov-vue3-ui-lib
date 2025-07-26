import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            copyDtsFiles: false,
            outDir: 'dist',
            exclude: ['src/main.ts'],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'HovVue3UiLib',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                exports: 'named',
                assetFileNames: (assetInfo) => {
                    // Check if the asset is a CSS file
                    if (assetInfo.name === 'hov-vue3-ui-lib.css') return 'index.css'
                    return assetInfo.name || '[name].[ext]' // Fallback for other assets
                },
            },
        },
        cssCodeSplit: false, // Disable CSS code splitting to ensure all styles are in a single file
    },
})
