import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": [path.resolve(__dirname, "./src")], //設置路徑代表的東西
    },
  },
  envDir: path.resolve(__dirname, "./env"),
})
