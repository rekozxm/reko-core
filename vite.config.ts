import { defineConfig } from 'vite'
import * as path from 'path'
import { css, server, build, plugins } from './conf'

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './app/assets'),
      "@frame": path.resolve(__dirname, './app/frame'),
      "@styles": path.resolve(__dirname, './app/styles'),
      "@router": path.resolve(__dirname, './app/router'),
      "@type": path.resolve(__dirname, './app/type'),
      "@view": path.resolve(__dirname, './app/views'),
    },
  },
  css, plugins, server, build
})
