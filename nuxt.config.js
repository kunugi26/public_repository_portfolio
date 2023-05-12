import headConfig from './config/head.js'

export default {
  head: headConfig,
  css: [{ src: '~/assets/scss/style.scss' }],
  plugins: [],
  bodyAttrs: {
    class: ['.animsition-overlay'],
  },
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios'],
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  axios: {
    baseURL: process.env.API_BASE_URL
  },
  server: {
    port: 1002,
    host: '0.0.0.0',
  },
  build: {},
}
