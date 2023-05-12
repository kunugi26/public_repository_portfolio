/*--------------------------------------
  ページ読み込み時のSVGアニメーション設定
  --------------------------------------*/
$(function () {
  $('.mainSite').css('display', 'none');
  setTimeout(function () {
    $('.anime').fadeOut(5000);
  }, 1200);

  $('.mainSite').css({ opacity: '0' });
  setTimeout(function () {
    $('.mainSite').css('display', 'block');
    $('.mainSite').stop().animate({ opacity: '1' }, 2000);
  }, 0);

  /*--------------------------------------
  ページ読み込み時のアクション（黄色）
  --------------------------------------*/

  $('.animsition-overlay')
    .animsition({
      inClass: 'overlay-slide-in-bottom',
      outClass: 'overlay-slide-out-top',
      overlay: true,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body',
    })
    .one('animsition.inStart', function () {
      $('body').removeClass('bg-init');
      $(this).find('.item').append('<h2 class="target">Callback: Start</h2>');
    })
    .one('animsition.inEnd', function () {
      $('.target', this).html('Callback: End');
    })
    .one('animsition.outStart', function () {})
    .one('animsition.outEnd', function () {
      $('.target', this).html('Callback: End');
    });

  /*--------------------------------------
  初回のみSVGロゴアニメーションを読み込む処理
  --------------------------------------*/
  // Cookie
  if ($.cookie('access') == undefined) {
    $.cookie('access', 'once');
    $('.mod_message').css('display', 'block');
  };

  // Message close
  // $('.mod_message').fadeOut(5000);
});
