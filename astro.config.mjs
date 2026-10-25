import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amarecherche.fr',
  trailingSlash: 'always',
  integrations: [sitemap({ changefreq: 'weekly', priority: 0.7 })],
  build: { format: 'directory' },
});
