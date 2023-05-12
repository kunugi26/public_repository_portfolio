<template>
  <div class="prof">
    <article>
      <h1>Who I am</h1>
      <h2>Hiroyuki</h2>
      <section>
        <img src="img/profile/kunugi.webp" alt="プロフィール画像 : 愛猫ミー" />
        <Skill />
        <Career />
      </section>
      <section class="text">
        <ProfDetail />
        <Environment />
      </section>
    </article>
  </div>
</template>

<script>
import Skill from '~/components/profile/ProfSkill.vue'
import Career from '~/components/profile/ProfCareer.vue'
import ProfDetail from '~/components/profile/ProfDetail.vue'
import Environment from '~/components/profile/ProfEnvironment.vue'

export default {
  name: 'IndexPage',
  components: {
    Skill,
    Career,
    ProfDetail,
    Environment,
  },
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>
