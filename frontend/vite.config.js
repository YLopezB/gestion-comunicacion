import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: '0.0.0.0',
    proxy: {
      '/api/users': {
        target: 'http://user-service:3000',
        changeOrigin: true,
      },
      '/api/auth': {
        target: 'http://auth-service:3001',
        changeOrigin: true,
      },
      '/api/tasks': {
        target: 'http://task-service:3002',
        changeOrigin: true,
      },
    }
  }
})
