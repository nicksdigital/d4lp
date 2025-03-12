
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      '209b7de6-6fdd-418d-81be-7fe716d3305f-00-3jann4twqxksd.worf.replit.dev',
      '.replit.dev',
      '.repl.co'
    ]
  }
})
