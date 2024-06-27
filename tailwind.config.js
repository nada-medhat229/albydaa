/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      './nuxt.config.{js,ts}',
      "./app.vue",
      "./error.vue",
    ],
    
    theme: {
      fontFamily: {
        sans: ["Janna"],
        serif: ["Janna"],
        mono: ["Janna"],
        display: ["Janna"],
        body: ["Janna"],
        roboto: ['Janna']
        },
      extend: {},
    },
    plugins: [],
  }