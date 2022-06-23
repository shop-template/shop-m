import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shop-m/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  test: {
    environment: 'jsdom'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true
      }
    }
  }
})
