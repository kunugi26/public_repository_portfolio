// アコーディオン機能
function accordion() {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $(".js-accordion-trigger").click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next(".accordion__content").slideToggle();
    $(this).toggleClass("is-active");

    // 1つ開いたら1つ閉じたい場合
    // $('.js-accordion-trigger').not($(this)).next('.accordion__content').slideUp();
    // $('.js-accordion-trigger').not($(this)).removeClass("is-active");
  });
}
accordion();