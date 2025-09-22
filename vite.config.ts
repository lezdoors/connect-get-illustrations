import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.e2b.dev',
      'igg22nvk3qb2627qpy61t-6532622b.e2b.dev',
      '3000-igg22nvk3qb2627qpy61t-6532622b.e2b.dev'
    ],
    hmr: {
      clientPort: 3000,
      host: 'localhost'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.e2b.dev',
      'igg22nvk3qb2627qpy61t-6532622b.e2b.dev',
      '3000-igg22nvk3qb2627qpy61t-6532622b.e2b.dev'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Performance optimizations
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})