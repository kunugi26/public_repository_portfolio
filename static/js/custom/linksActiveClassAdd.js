/**
 * 表示ページのメニューに「active」クラスを付与する処理
 * ・リンクの順番に自動でactiveクラスを付与
 * ・ループ内で再起的にこの関数自体を実行
 */

function setLinksActive() {
  const currentPageLink = $(".g_nav__page_links li a");

  function linksActiveClassAdd(path, i) {
    const url = location.pathname; // ページの絶対URLを取得

    // URLに下記のURLが含まれていたらliのi番目にactiveクラスを付与する
    if (url.indexOf(path) !== -1) {
      currentPageLink.eq(i).addClass("active");
    }
  }

  // ===================================================================== //
  //   現在ページのリンクのactive クラスの付与（linksActiveClassAddの関数実行）   //
  // ===================================================================== //

  const headerNavLinks = [];
  for (let i = 0; i < currentPageLink.length; i++) {
    // 下記配列の中に企業情報などの関連リンクのhref属性を取得し、表示されている順にheaderNavLinksの配列[]に格納
    headerNavLinks.push(currentPageLink.eq(i).attr("href"));
  }

  headerNavLinks.forEach((link, listIndex) => {
    // 説明: linksActiveClassAdd('該当ページのURLのパス', activeを付与したいliのn番目を指定（上記headerNavLinksの中身順に自動付与）)で配列内の数だけ関数を実行
    linksActiveClassAdd(link, listIndex);
  });
  // ===============  会社情報関連のリンクのactive クラスの付与 end =============== //
}
setLinksActive();
