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
        { label: 'Getting started', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Admin Portal', items: [{ autogenerate: { directory: 'admin-portal' } }] },
        { label: 'Online storefront', items: [{ autogenerate: { directory: 'storefront' } }] },
        { label: 'POS integrations', items: [{ autogenerate: { directory: 'pos-integrations' } }] },
        { label: 'Payments and loyalty', items: [{ autogenerate: { directory: 'payments-and-loyalty' } }] },
        { label: 'Settings managed by Mosaic', items: [{ autogenerate: { directory: 'mosaic-managed-settings' } }] },
        { label: 'About these docs', collapsed: true, items: [{ autogenerate: { directory: 'about' } }] },
      ],
    }),
  ],
});
