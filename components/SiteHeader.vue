<template>
  <div>
    <header class="g_nav" :class="{ 'fixed': isHeaderFixed }">
      <h1 class="g_nav__ttl">
        <a href="/" title="TOPへ">
          <img src="img/title.webp" alt="Kunugi's Portfolio" />
        </a>
      </h1>
      <div class="g_nav__sp_nav_btn sp_nav_btn" @click="toggleMobileNav">
        <span>MENU</span>
      </div>
      <nav class="g_nav__page_links" :class="{ 'show': isMobileNavOpen }">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeaderFixed: false,
      isMobileNavOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleHeaderScroll);
  },
  methods: {
    handleHeaderScroll() {
      this.isHeaderFixed = window.scrollY > 1200;
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    openModal() {
      this.$refs.modal.classList.remove('hidden');
      this.$refs.mask.classList.remove('hidden');
    },
    closeModal() {
      this.$refs.modal.classList.add('hidden');
      this.$refs.mask.classList.add('hidden');
    },
  },
};
</script>
