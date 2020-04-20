<template lang="pug">
  - var baseUrl = 'https://github.com/t--takai/static-social-logo-svg/raw/master/assets/image/logo/'
  -
    var logos = [
      'facebook.svg',
      'hatena.svg',
      'twitter.svg',
      'line.svg',
    ]

  main.section
    .container.is-fullhd
      .columns.is-multiline.is-centered
        each val in logos
          .column.is-2
            a(
              href=baseUrl + val
              target='_blank'
            )
              img(src='~/assets/image/logo/' + val)
</template>
