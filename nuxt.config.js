// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    "./assets/css/main.css"
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['swiper'],
  },
  modules: ['nuxt-swiper'],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
