import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes the built site work from any path - opened straight from
// disk, at a domain root, or under a GitHub Pages project subfolder.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5173 },
});
