import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jackbwiese.github.io',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
