// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  // Change to the real address once a custom domain is set up.
  site: 'https://mosaic-docs-poc.menuked.workers.dev',
  integrations: [
    // Mermaid must come before Starlight so diagrams are processed first.
    mermaid({
      theme: 'base',
      autoTheme: false,
      enableLog: false,
      mermaidConfig: {
        themeVariables: {
          primaryColor: '#d9efe6',
          primaryBorderColor: '#025e43',
          primaryTextColor: '#013b2a',
          lineColor: '#3fae84',
        },
      },
    }),
    starlight({
      title: 'Mosaic Help Center',
      description: 'Guides for Mosaic merchants and dispensary staff.',
      logo: {
        light: './src/assets/mosaic-logo-light.png',
        dark: './src/assets/mosaic-logo-dark.png',
        alt: 'Mosaic',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      customCss: ['./src/styles/mosaic.css'],
      lastUpdated: true,
      // Proof of concept: keep search engines out until the content is real.
      head: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
      plugins: [starlightImageZoom()],
      sidebar: [
        // Rule: a section is listed here only once it has at least one real page (see CONTENT-RULES.md).
        {
          label: 'Admin Portal',
          items: [
            {
              label: 'Marketing',
              items: [
                { label: 'Media banners', items: [{ autogenerate: { directory: 'admin-portal/marketing/media-banners' } }] },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
