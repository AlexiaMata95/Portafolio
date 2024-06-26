import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portafolio/', // Asegúrate de que este sea el nombre de tu repositorio en GitHub
  plugins: [react()],
});

