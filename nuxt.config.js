// SEE: https://ja.nuxtjs.org/faq/github-pages/
const routerBase = process.env.BASE_DIR
  ? {
      router: {
        base: process.env.BASE_DIR,
      },
      generate: {
        fallback: true, // '404.html' を使用したい場合
        dir: 'public',
      },
    }
  : {}

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${process.env.BASE_DIR || '/'}favicon.ico`,
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap&subset=japanese',
      },
    ],
  },
  css: ['@/assets/style/main.sass'],
  modules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],
  styleResources: {
    sass: ['./assets/style/_chunk.sass'],
  },
  build: {
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
  },
  ...routerBase,
}
