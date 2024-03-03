import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_royal_house/', // Set base path to './' for relative paths
  plugins: [react()],
})
