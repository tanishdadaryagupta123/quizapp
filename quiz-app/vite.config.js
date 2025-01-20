import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://opentdb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,  // Enforce HTTPS
        timeout: 5000, // 5 second timeout
        // Add headers if needed
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      },
    },
    host: true,      // Expose to network
    port: 5173,      // Explicit port
    strictPort: true // Fail if port is in use
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: 'jsx',
      target: 'esnext',
      jsx: 'automatic', // Enable automatic JSX runtime
    },
  },
  build: {
    target: 'esnext',
    sourcemap: true,  // Enable source maps for debugging
    minify: 'esbuild', // Use esbuild for minification
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})