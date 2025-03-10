// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-mdi'],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //   additionalData: '@use "@/assets/styles/_vars.scss" as vars;'
        }
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000 // or your preferred port
  }
})
