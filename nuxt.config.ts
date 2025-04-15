// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-mdi', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image'],
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
    port: 3000
  },
  app: {
    head: {
      title: 'Mehmet Deveci - Software Development Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Software Development Specialist with 10+ years of experience in frontend development, specializing in Vue.js, Javascript, and modern web technologies.'
        },
        {
          property: 'og:image',
          content: 'https://volcode.org/public/assets/imgs/og-image.jpg'
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/icons/site.webmanifest' }
      ]
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/experience/sdui', '/experience/trt-world', '/experience/homeday'],
    Allow: '/'
  },
  sitemap: {
    siteUrl: 'https://volcode.org',
    exclude: ['/experience/sdui', '/experience/trt-world', '/experience/homeday'],
    routes: [
      {
        url: '/',
        changefreq: 'monthly',
        priority: 1
      },
      {
        url: '/experience',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        url: '/projects',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.7
      }
    ]
  },
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          quality: '80'
        }
      },
      project: {
        modifiers: {
          format: 'webp',
          quality: '80'
        }
      },
      og: {
        modifiers: {
          format: 'webp',
          quality: '80',
          width: 1200,
          height: 630
        }
      }
    },
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }
  }
});
