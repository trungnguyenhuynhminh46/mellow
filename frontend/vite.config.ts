import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@apps': path.resolve(__dirname, './src/applications/'),
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@assets': path.resolve(__dirname, './src/assets/')
    }
  }
})
