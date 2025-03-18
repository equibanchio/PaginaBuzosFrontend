import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permitir acceso externo
    port: 5173, // Puerto donde corre Vite
    allowedHosts: [
    ]
  }
});
