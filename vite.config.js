import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  base: '/dev-SOS/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials")
    }),
    FullReload(["src/partials/**/*"])
  ],
})