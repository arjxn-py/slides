import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  root: '.',
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: 'slides.md', dest: 'dist' }],
          hook: 'writeBundle',
        }),
      ],
    },
  },
});
