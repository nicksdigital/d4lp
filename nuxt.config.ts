// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          href: '/assets/fonts/Obviously-Regular.woff2',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          as: 'font',
          href: '/assets/fonts/Obviously-Semibold.woff2',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          as: 'font',
          href: '/assets/fonts/Obviously-Thin.woff2',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-gsap',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  css: ['assets/css/main.css'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  // Make sure the server listens on all interfaces
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // Add more specific configuration for development server
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://0.0.0.0:3000/api',
        changeOrigin: true
      }
    }
  },
  // Ensure all hosts are allowed
  routeRules: {
    '/**': { cors: true }
  }
})
