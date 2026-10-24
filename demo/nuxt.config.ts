import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

// Cloudflare compatibility date — keep the two copies below in sync.
const COMPATIBILITY_DATE = '2026-10-24';

export default defineNuxtConfig({
  compatibilityDate: COMPATIBILITY_DATE,

  modules: ['@nuxtjs/color-mode'],

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  // The demo renders the library from source, so it always shows the code in
  // this checkout — no build step between an edit and the demo.
  alias: {
    'v-intl-listformat': fileURLToPath(
      new URL('../src/index.ts', import.meta.url),
    ),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Cookie-backed so the server renders the right class on <html>; the
  // module's inline head script resolves "system" before first paint.
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storage: 'cookie',
    storageKey: 'v-intl-listformat-color-mode',
  },

  // Public IDs ship in the HTML; they are not secrets. Override per env with
  // NUXT_PUBLIC_GTAG_ID etc. An empty gtagId skips GA4 entirely (the GA4
  // property for this host is not created yet).
  runtimeConfig: {
    public: {
      gtagId: '',
      plausibleScriptId: 'pa-tWszSf8vGs4VScGEBxyhX',
      plausibleApiHost: 'https://analytics.geoql.in',
      openpanelClientId: 'e84ebb28-98ed-4bcb-ba18-843041688ba0',
      openpanelApiUrl: 'https://events.geoql.in/api',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'v-intl-listformat — Intl.ListFormat for Vue',
      meta: [
        {
          name: 'description',
          content:
            'A tiny Vue 3 component that turns an array into a locale-aware list with Intl.ListFormat. Try every locale, type and style live.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'preload',
          href: '/fonts/clash-display-600.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/satoshi-400.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
    },
  },

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      // Merged into the generated .output/server/wrangler.json.
      wrangler: {
        name: 'v-intl-listformat-demo',
        account_id: 'bd11b1c42ee2759044a1769f80f704dd',
        compatibility_date: COMPATIBILITY_DATE,
        workers_dev: true,
        preview_urls: false,
        routes: [
          {
            pattern: 'v-intl-listformat.vinayakkulkarni.dev',
            custom_domain: true,
          },
        ],
        observability: { enabled: true },
      },
    },
  },

  typescript: {
    strict: true,
  },
});
