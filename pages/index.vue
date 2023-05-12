<template>
  <div id="top">
    <main class="mainSite top_page">
      <LogoAnimation />
      <FirstView />
      <Profile />
      <Skill />
      <Works />
      <Design />
    </main>
  </div>
</template>

<script>
import LogoAnimation from '~/components/top/LogoAnimation.vue'
import FirstView from '~/components/top/FirstView.vue'
import Profile from '~/components/top/MyProfile.vue'
import Skill from '~/components/top/MySkill.vue'
import Works from '~/components/top/MyWorks.vue'
import Design from '~/components/top/MyDesign.vue'

export default {
  name: 'IndexPage',
  components: {
    LogoAnimation,
    FirstView,
    Profile,
    Skill,
    Works,
    Design,
  },
  data() {
    return {
      pageTitle: '',
    }
  },
  head() {
    return {
      title: this.pageTitle
        ? `${this.pageTitle} | ${this.siteTitle}`
        : this.siteTitle,
      titleTemplate: '%s',
    }
  },
}
</script>
