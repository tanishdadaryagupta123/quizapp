import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://opentdb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: 'jsx', // Ensures JSX files are processed correctly by Vite’s bundler (esbuild)
    },
  },
})