import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sermount.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
});
