
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/',
 base: '/Portfolio/', plugins: [react(), tailwindcss()],
})
