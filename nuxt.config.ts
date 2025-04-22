// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/', '/experience', '/projects', '/contact']
    },
    compressPublicAssets: true,
    minify: true
  },
  router: {
    options: {
      hashMode: false
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-mdi', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image', '@nuxt/test-utils/module'],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap', // Add font display swap for better performance
    prefetch: true,
    preconnect: true,
    preload: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //   additionalData: '@use "@/assets/styles/_vars.scss" as vars;'
        }
      }
    },
    build: {
      cssCodeSplit: true,
      // Improve chunk loading
      rollupOptions: {
        output: {
          manualChunks: {
            'pdf-resources': ['assets/files/Mehmet_Deveci_Resume.pdf']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  // Runtime config to handle environment variables
  runtimeConfig: {
    public: {
      isStaging: process.env.NUXT_PUBLIC_IS_STAGING === 'true'
    }
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
          content: 'https://volcode.org/assets/imgs/og-image.jpg'
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        // Add noindex tag for staging environment
        ...(process.env.NUXT_PUBLIC_IS_STAGING === 'true' ? [{ name: 'robots', content: 'noindex, nofollow' }] : [])
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/icons/site.webmanifest' }
      ]
    },
    // Add performance optimizations for faster LCP
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  site: {
    url: 'https://volcode.org'
  },
  // Different robots.txt for production and staging
  robots: {
    disallow: process.env.NUXT_PUBLIC_IS_STAGING === 'true' ? ['/'] : []
  },
  sitemap: {
    // Only include production URLs in sitemap
    urls: process.env.NUXT_PUBLIC_IS_STAGING === 'true' ? [] : ['/', '/experience', '/projects', '/contact'],
    xslColumns: [
      { label: 'URL', width: '70%' },
      { label: 'Last Modified', select: 'lastmod', width: '30%' }
    ],
    exclude: ['/experience/sdui', '/experience/trt-world', '/experience/homeday'],
    sitemapName: 'sitemap.xml'
  },
  image: {
    quality: 80,
    format: ['webp', 'jpg', 'png']
    // dir: 'public/assets/imgs'
  },
  // Add render performance optimizations
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
    asyncContext: true
    // Remove unsupported option
  }
});
