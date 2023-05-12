function setGlobalNavigation() {

  /*--------------------------------------
  グロナビのScroll後固定
  --------------------------------------*/
  $(window).on("scroll", function () {
    $("header")
      .css("display", "block")
      .toggleClass("fixed", $(this).scrollTop() > 1200);
  });

  /*--------------------------------------
  SP版グロナビのボタン押下の動作
  --------------------------------------*/
  $(function () {
    $(".sp_nav_btn").click(function () {
      $(".g_nav ul").slideToggle();
    });
  });

  $(document).ready(function () {
    $(".open").click(function () {
      $(".modal,.mask").removeClass("hidden");
    });

    $(".close").click(function () {
      $(".modal,.mask").addClass("hidden");
    });
  });
};
setGlobalNavigation();