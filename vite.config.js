import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'node:url';
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
  base: '/galaxyBoyzV3',
  build: {
    outDir: 'dist', // 設置構建目錄為 dist
  },
  plugins: [
    vue(),
    liveReload(['./src/**/*.html']), // 修改為包含所有 HTML 文件
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 將 @ 指向 src
    },
  },
  server: {
    open: true, // 啟動時自動開啟瀏覽器
    port: 8080, // 設定伺服器埠號
  }
});