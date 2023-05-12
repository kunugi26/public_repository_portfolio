<template>
  <div class="products mainSite">
    <article>
      <section>
        <h2 class="center">Products</h2>
        <List />
      </section>
    </article>
  </div>
</template>

<script>
import List from '~/components/products/listCard.vue'

export default {
  name: 'IndexPage',
  components: {
    List
  },
  head() {
    return {
      title: 'Products'
    }
  }
}
</script>
