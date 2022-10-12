import { browser } from '$app/environment'
import axios from 'axios'

let baseURL: string = import.meta.env.VITE_API_ENDPOINT
if (browser && !import.meta.env.VITE_API_ENDPOINT && !import.meta.env.PROD) {
  const url = new URL(window.location.href)
  url.port = '8888'
  url.pathname = '/api'
  baseURL = url.toString()
}

const api = axios.create({
  baseURL: baseURL || '/api'
})

export default api
