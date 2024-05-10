import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/deploy-vite/'
  // server: {
  //   port: 6400,
  // }
  // preview: {
  //   host: true,
  //   port: 3050,
  // }
})