<template>
  <div class="animsition-overlay">
    <SiteHeader />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: {
    SiteHeader, // コンポーネントやデータ、メソッドなどを追加できます
  },
}
</script>
