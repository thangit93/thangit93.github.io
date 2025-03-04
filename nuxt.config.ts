export default defineNuxtConfig({
  app: {
    head: {
      title: 'Thang Tran - Fullstack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    baseURL: '/',
    buildAssetsDir: 'assets',
  },

  css: ['~/assets/css/main.css', 'bootstrap/dist/css/bootstrap.min.css'],

  nitro: {
    preset: 'static',
    publicPath: '/'
  },

  compatibilityDate: '2025-02-25'
});