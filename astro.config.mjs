import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jackbwiese.github.io',
  output: 'static',
  i18n: {
    locales: [
      'en', 'es', 'fr', 'it', 'de', 'pt', 'nl', 'hi',
      'tr', 'ar', 'ko', 'zh-cn', 'ja', 'ru', 'zh-tw', 'vi', 'id',
    ],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
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
