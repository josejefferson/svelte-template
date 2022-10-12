import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const PORT = Number(process.env.FRONTEND_PORT) || Number(process.env.PORT) || 3000

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    port: PORT,
    host: true
  },
  preview: {
    port: PORT
  }
}

export default config
