export default {
  title: "Kunugi's Portfolio",
  titleTemplate: "%s | Kunugi's Portfolio",
  htmlAttrs: {
    lang: 'ja',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.5.4/vegas.min.css',
    },
  ],
  script: [
    { src: 'https://code.jquery.com/jquery-3.6.3.min.js' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js' },
    { src: 'js/library/cookie.js' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.5.4/vegas.min.js', body: true },
    { src: 'js/custom/settingVegasBackGroundSlide.js', body: true },
    { src: 'js/custom/pageAnimation.js', body: true },
    { src: 'js/custom/accordion.js', body: true },
    { src: 'js/custom/linksActiveClassAdd.js', body: true },
  ],
}
