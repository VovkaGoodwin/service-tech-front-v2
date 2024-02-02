import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

type Proxy = UserConfig['server']['proxy']

export default defineConfig(({ mode }) => {

  const proxy: Proxy = mode === 'development' ? {
    '/api': {
      target: 'http://localhost:8000/api'
    }
  } : {};

  return {
    plugins: [react()],
    server: {
      proxy
    },
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
  };
});
