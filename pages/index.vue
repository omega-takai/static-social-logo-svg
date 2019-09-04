<template lang="pug">
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
            img(src='~/assets/image/logo/' + val)
</template>
