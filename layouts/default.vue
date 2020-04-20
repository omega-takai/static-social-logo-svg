<template lang="pug">
-
  var links = [
    {
      url: 'https://ja.nuxtjs.org/',
      title: 'Nuxt.js',
    },
    {
      url: 'https://github.com/t--takai/static-social-logo-svg',
      title: 'GitHub',
    },
    {
      url: 'https://github.com/t--takai/static-social-logo-svg/tree/master/assets/image/logo',
      title: 'Assets',
    },
  ]

mixin pugmixin-links
  .container
    ul
      each val in links
        li
          a(
            target="_blank"
            href=val.url
            v-text=`"${val.title}"`
          )

div
  header.hero.is-large.is-primary.is-bold
    .hero-body
      .container.has-text-centered
        h1.title LOGOMARKS
        h2.subtitle Collect SNS Logo SVG

    .hero-foot
      nav.tabs
        +pugmixin-links

  nuxt

  footer.footer
    +pugmixin-links
</template>
