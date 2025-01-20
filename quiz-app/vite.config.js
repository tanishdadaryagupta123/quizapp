// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false, // Allow fallback to another port if 5173 is taken
    host: 'localhost',
    open: true, // Automatically open browser
    watch: {
      usePolling: true
    },
    // Remove middlewareMode as it's causing issues
  },
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      },
    }
  }
})