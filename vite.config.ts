import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dir, './src'),
      shared: resolve(import.meta.dir, './src/shared'),
      entities: resolve(import.meta.dir, './src/entities'),
      features: resolve(import.meta.dir, './src/features'),
      widgets: resolve(import.meta.dir, './src/widgets'),
      pages: resolve(import.meta.dir, './src/pages'),
    }
  }
});
