import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      // Only proxy the backend's admin *API* paths (e.g. /admin/users), not
      // the frontend's client-side "/admin" route, which must stay served by
      // Vite/React so the SPA can render its own page there.
      '/admin/users': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      // Admin-uploaded images are served by the backend from ./uploads.
      '/uploads': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
