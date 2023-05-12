<template>
  <main class="products__list">
    <!-- 記事出力ループ -->
    <ul>
      <li v-for="post in posts" :key="post.id" class="post">
        <a :href="post.acf.product_link" target="_blank">
          <div class="thumbnail">
            <div
              class="thumbnail__img"
              :style="{ backgroundImage: 'url(' + getThumbnailUrl(post) + ')' }"
            ></div>
          </div>
          <div class="text">
            <h3>{{ post.title.rendered }}</h3>
          </div>
        </a>
        <ol class="categories">
          <li v-for="categoryId in post.categories" :key="categoryId">
            {{ getCategoryNameById(categoryId) }}
          </li>
        </ol>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      categoriesById: {},
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/posts?_embed');
      this.posts = response.data;

      const uniqueCategoryIds = [...new Set(this.posts.flatMap((post) => post.categories))];
      const categoriesResponse = await this.$axios.get('/categories', {
        params: { include: uniqueCategoryIds.join(',') },
      });

      this.categoriesById = categoriesResponse.data.reduce((acc, category) => {
        acc[category.id] = category;
        return acc;
      }, {});
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('投稿取得エラー:', error);
    }
  },
  methods: {
    getThumbnailUrl(post) {
      return post._embedded['wp:featuredmedia']?.[0]?.source_url || '';
    },
    getCategoryNameById(categoryId) {
      return this.categoriesById[categoryId]?.name || '';
    },
  },
};
</script>
