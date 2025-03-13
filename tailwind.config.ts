
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f172a',
        'primary': '#6d28d9',
        'secondary': '#4c1d95',
        'text': '#e2e8f0',
        'accent': '#8b5cf6',
        'highlight': '#7c3aed',
        'muted': '#64748b'
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin-reverse 12s linear infinite',
        'logo-spin': 'logo-spin 3s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          },
        },
        'logo-spin': {
          from: {
            transform: 'rotateY(0deg)'
          },
          to: {
            transform: 'rotateY(360deg)'
          },
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        'obviously': ['Obviously-Thin', 'sans-serif'],
        'obviously-regular': ['Obviously-Regular', 'sans-serif'],
        'obviously-semibold': ['Obviously-Semibold', 'sans-serif'],
        'obviously-compressed': ['Obviously Compressed', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'medium': '500',
        'semibold': '600',
        'super': '800',
      }
    }
  },
  plugins: []
} as Config
