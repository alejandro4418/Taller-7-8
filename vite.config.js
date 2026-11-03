import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Taller-7-8/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'docs' },
})