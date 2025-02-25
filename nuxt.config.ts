export default defineNuxtConfig({
  app: {
    head: {
      title: 'Developer Resume - Nuxt.js',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  css: ['~/assets/css/main.css', 'bootstrap/dist/css/bootstrap.min.css'],

  nitro: {
    preset: 'static' // Tạo trang tĩnh cho SSG
  },

  compatibilityDate: '2025-02-25'
});