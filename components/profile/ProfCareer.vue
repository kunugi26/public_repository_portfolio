<template>
  <dl class="accordion js-accordion">
    <div class="accordion__item">
      <h3 class="accordion__title js-accordion-trigger">主な経歴</h3>
      <div class="accordion__content">
        <dt id="modal">スクール運用会社・事業会社など （2018年4月 - 現在）</dt>
        <dd>
          2023年現在は自社開発企業にエンジニアとして常駐。<br />
          現在の主な使用言語はPHP・JavaScriptです。<br />
          オンラインプログラミングスクールのメンターとしてRuby on
          Railsのコードレビューも行なっていました。
          <h4>Product</h4>
          <ul>
            <h5>WordPress</h5>
            <li v-for="(site, index) in ProductWordPressSites" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>

            <h5>PHP</h5>
            <li v-for="(site, index) in ProductPHPSites" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>

            <h5>Ruby on Rails (※NuxtJS含む)</h5>
            <li v-for="(site, index) in ProductRailsSites" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>

            <h5>Web制作</h5>
            <li v-for="(site, index) in ProductWebSites" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>
          </ul>

          <h4>Joined Project</h4>
          <ul>
            <li v-for="(site, index) in JointedProjects" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>
          </ul>
        </dd>

        <dt>株式会社アトラス（2017年3月 - 2018年3月）</dt>
        <dd>
          フロントエンドエンジニア/Webデザイナーとして転職
          <h4>Product</h4>
          <ul>
            <li v-for="(site, index) in AtlasProjects" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>
          </ul>
        </dd>
        <dt>株式会社ユニオンテック（2015年12月 - 2017年2月）</dt>
        <dd>
          HTMLコーダー/Webデザイナーに転身
          <h4>Product</h4>
          <ul>
            <li v-for="(site, index) in UniontecProjects" :key="index">
              <a :href="site.link" target="_blank">{{ site.name }}</a>
            </li>
          </ul>
        </dd>
        <dt>某法律事務所（2012年8月 -）</dt>
        <dd>
          許認可申請代行・ビザ申請代行・入札代行、不動産登記・商業登記関連、etc
        </dd>
        <dt>出光リテール販売SS（2010年4月 - 2012年7月）</dt>
        <dd>昼間は司法受験生をしながら、出光の夜勤常駐スタッフ</dd>
        <dt>私立大学卒業（2010年3月）</dt>
        <dd>法律学部法律学科</dd>
        <dt>私立高校卒業（2006年3月）</dt>
        <dd>
          高校は進学校で有名でしたが野球部に所属し、<br />
          投打において元プロ注目選手だった監督の元で様々なことを学びたく勉強は二の次で野球一色で過ごしました。<br /><br />
          最後の夏の大会は早稲田実業のハンカチ王子と投げ合いの末破れ、東京の地区予選で敗退。<br />
          右投げ右打ち、主なポジションは投手。サイドスロー。
        </dd>
      </div>
    </div>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      ProductWordPressSites: [
        { name: 'みんくいナーサリー', link: 'https://mimcuoi-n.com/' },
        { name: '株式会社ラストワンマイル', link: 'https://lomgrp.co.jp/' },
        { name: 'まるっとシリーズ', link: 'https://marutto.co.jp/' },
        { name: '猫のteユニオン', link: 'https://nekonote.global/' },
        { name: '比較ざんまい', link: 'https://kurabering.com/' },
        { name: 'ナイトログ', link: 'https://style.potepan.com/' },
        {
          name: '【ポテパンキャンプ】- Webエンジニアになるためのプログラミングスクール',
          link: 'https://camp.potepan.com/',
        },
      ],
      ProductPHPSites: [
        {
          name: 'ダンボール通販 業界No.1【ダンボールワン】公式',
          link: 'https://www.notosiki.co.jp/',
        },
      ],
      ProductRailsSites: [
        {
          name: 'フリーエンジニアの案件・求人情報サイト【ポテパンフリーランス】',
          link: 'https://freelance.potepan.com/',
        },
        { name: 'クイックエージェント', link: 'https://quickagent.jp/' },
      ],
      ProductWebSites: [
        {
          name: '大手ゼネコンS建設 ニュースサイト',
          link: 'https://www.shimztechnonews.com/',
        },
        {
          name: '明治神宮歴史データベース',
          link: 'https://www.rekishidb.meijijingu.or.jp/chronology',
        },
      ],
      JointedProjects: [
        {
          name: 'サントリーグループのCSR',
          link: 'https://www.suntory.co.jp/company/csr/',
        },
        {
          name: 'サントリーのエコ活',
          link: 'https://www.suntory.co.jp/eco/teigen/',
        },
        { name: '大手航空会社 | ANA', link: 'https://www.ana.co.jp/' },
        {
          name: 'b→dash｜業界シェアNo.1 データマーケティングツール',
          link: 'https://bdash-marketing.com/',
        },
      ],
      AtlasProjects: [
        { name: '株式会社アトラス', link: 'https://www.atlas.jp/' },
        {
          name: 'アトラスジャーナルカフェ',
          link: 'https://journalcafe.atlas.jp/',
        },
        {
          name: '論文投稿・査読システム | Editorial Manager',
          link: 'https://www.editorialmanager.jp/',
        },
      ],
      UniontecProjects: [
        { name: 'ユニオンテック株式会社', link: 'https://www.union-tec.jp/' },
        { name: 'UT SPACE SHOP', link: 'https://service.union-tec.jp/shop/' },
        {
          name: 'UT SPACE OFFICE',
          link: 'https://service.union-tec.jp/office/',
        },
        {
          name: '【建設業界企業検索-SUSTINA】(現・Craft Bank)',
          link: 'https://craft-bank.com/',
        },
      ],
    }
  },
}
</script>
