import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['ef9a0cb3-93ce-4b0f-b201-400f2da9022e-00-e0tjt91goe31.reed.replit.dev']
  }
})
