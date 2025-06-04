import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.gltf', '**/*.glb'], // Includes GLTF and GLB files
  build: {
    chunkSizeWarningLimit: 1000, // Optional: suppress warning for large chunks
  },
});
