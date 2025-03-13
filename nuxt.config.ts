// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [] // Remove the preload links since @nuxt/fonts will handle this
    }
  },
  fonts: {
    families: [
      {
        name: 'Obviously-Regular',
        provider: 'local',
        src: './public/fonts/Obviously-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        name: 'Obviously-Semibold',
        provider: 'local',
        src: './public/fonts/Obviously-Semibold.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        name: 'Obviously-Thin',
        provider: 'local',
        src: './public/fonts/Obviously-Thin.woff2',
        weight: '100',
        style: 'normal',
      }
    ],
    defaults: {
      provider: 'local',
      fallbacks: ['system-ui', 'sans-serif'],
    },
    preload: true,
  },
  site: { indexable: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_variables.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@hypernym/nuxt-gsap',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://0.0.0.0:3000/api'
    }
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
