/*--------------------------------------
ページ背景画像アップムービング設定
--------------------------------------*/

$('body').vegas({
  slides: [
    { src: 'img/background/1.webp' },
    { src: 'img/background/2.webp' },
    { src: 'img/background/3.webp' },
    { src: 'img/background/4.webp' },
  ],
  transition: 'fade',
  transitionDuration: 4000,
  delay: 8000,
  cover: true,
  animation: 'random',
  animationDuration: 20000,
  timer: true,
})
