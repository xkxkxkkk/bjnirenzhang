import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    server: {
    host: '0.0.0.0', // 允许外部访问（关键配置）
    port: 5173, // 端口保持 5173（可自定义）
    open: false // 可选：是否自动打开浏览器
  }
})
