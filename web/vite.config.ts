/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // TODO (Day 1): add a dev-server proxy so "/api/*" goes to the Node API on localhost:3000.
  //   Why does a proxy avoid CORS problems in local development?
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
