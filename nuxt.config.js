// import { browserslist } from './package.json'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/destyle.css@1.0.10/destyle.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap&subset=japanese'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],
  styleResources: {
    // Important notice:
    // Do not import actual styles.
    // Use this module only to import variables, mixins,
    // functions (et cetera) as they won't exist in the actual build.
    // Can't cross import
    // Fail:    SCSS ==import==> Sass
    // Success: Sass ==import==> Sass
    sass: ['./assets/style/_chunk.sass']
  },
  server: {
    port: 8000 // デフォルト: 3000
  },
  // buildDir: 'nuxt-dist',
  router: {
    base: '/static-social-logo-svg/'
  },
  generate: {
    dir: 'docs'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          // browsers: browserslist,
          grid: true
        }
      }
    }
  }
}
