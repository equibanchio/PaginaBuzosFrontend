import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permitir acceso externo
    port: 5173, // Puerto donde corre Vite
    allowedHosts: [
      "5858-2800-810-4f6-1c9-9409-3a69-a987-14ba.ngrok-free.app" // Agrega la URL de Ngrok
    ]
  }
});
