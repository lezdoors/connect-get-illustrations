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
      'iciwqb29fgq70e346lts8-6532622b.e2b.dev',
      '3000-iciwqb29fgq70e346lts8-6532622b.e2b.dev'
    ],
    hmr: {
      clientPort: 443,
      host: '3000-iciwqb29fgq70e346lts8-6532622b.e2b.dev'
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
      'iciwqb29fgq70e346lts8-6532622b.e2b.dev',
      '3000-iciwqb29fgq70e346lts8-6532622b.e2b.dev'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})