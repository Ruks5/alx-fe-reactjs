import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // contains "tailwindcss"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // also contains "tailwindcss"
  ],
})
