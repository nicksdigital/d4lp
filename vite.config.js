
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      host: process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.' + 'replit.dev',
      protocol: 'wss',
      clientPort: 443
    },
    allowedHosts: [
      '.replit.dev',
      '.repl.co'
    ]
  }
})
