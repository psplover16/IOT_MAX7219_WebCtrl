import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Your App Name',
        short_name: 'App Name',
        theme_color: '#ffffff',
        icons: [
          {
            src: './icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": [path.resolve(__dirname, "./src")], //設置路徑代表的東西
    },
  },
  envDir: path.resolve(__dirname, "./env"),
})
