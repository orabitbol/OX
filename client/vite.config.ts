


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      },
    },
  },
  server: {
    proxy: {
      '/assets': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/users': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
