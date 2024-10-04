import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base:"/digital_format_resume/",
  plugins: [react()],
})
