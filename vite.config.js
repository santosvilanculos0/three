import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  base: './',
  plugins: [glsl()],
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        example1: './example1.html',
        example2: './example2.html',
        example3: './example3.html',
        example4: './example4.html'
      }
    }
  }
});
