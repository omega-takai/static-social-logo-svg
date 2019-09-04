<template lang="pug">
div.container
  header.hero.is-large.is-primary.is-bold
    .hero-body
      .container.has-text-centered
        h1.title LOGOMARKS
        h2.subtitle Collect SNS Logo SVG

    .hero-foot
      nav.tabs
        .container
          ul
            li
              a(
                href="https://ja.nuxtjs.org/"
                target="_blank"
                v-text="'Nuxt.js'"
              )
            li
              a(
                href="https://github.com/t--takai/static-social-logo-svg"
                target="_blank"
                v-text="'GitHub'"
              )
            li
              a(
                href="https://github.com/t--takai/static-social-logo-svg/tree/master/assets/image/logo"
                target="_blank"
                v-text="'Assets'"
              )

  nuxt

  footer.footer
    .container
      ul
        li
          a(
            href="https://ja.nuxtjs.org/"
            target="_blank"
            v-text="'Nuxt.js'"
          )
        li
          a(
            href="https://github.com/t--takai/static-social-logo-svg"
            target="_blank"
            v-text="'GitHub'"
          )
        li
          a(
            href="https://github.com/t--takai/static-social-logo-svg/tree/master/assets/image/logo"
            target="_blank"
            v-text="'Assets'"
          )
</template>
