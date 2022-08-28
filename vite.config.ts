import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import postcssNested from 'postcss-nested'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vuex',
        '@vueuse/core',
        '@vueuse/head',
        'vue-i18n',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/antfu/unplugin-icons
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
    },
  },
})
