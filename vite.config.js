import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/uncensored-ai-chat/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
