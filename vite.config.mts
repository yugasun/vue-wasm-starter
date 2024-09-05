/// <reference types="vitest" />
import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import replace from '@rollup/plugin-replace';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@crate': path.resolve(__dirname, 'crates'),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        // 入口文件名（不能变，否则所有打包的 js hash 值全变了）
        entryFileNames: 'index.js',
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          elementplus: ['element-plus', '@element-plus/icons-vue'],
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      dts: 'components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      strictMessage: false,
      fullInstall: true,
      // do not support ts extension
      include: [path.resolve(__dirname, 'locales/*.{yaml,yml,json}')],
    }),

    replace({
      preventAssignment: true,
      __DATE__: new Date().toISOString(),
    }),

    VueDevTools(),
  ],
  server: {
    port: 8080,
    host: '127.0.0.1',
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['src/tests/**/*.test.ts'],
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['@vue', '@vueuse', 'element-plus', 'pinia'],
      },
    },
  },
});
