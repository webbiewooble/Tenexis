import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        products2: resolve(__dirname, 'products-2.html'),
      },
      output: {
        assetFileNames: '[name][extname]',
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js'
      }
    },
  },
})
