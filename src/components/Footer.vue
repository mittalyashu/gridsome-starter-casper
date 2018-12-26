<template>
  <!-- The footer at the very bottom of the screen -->
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a href="/">{{ Admin.site.title }}</a> &copy; {{ new Date().getFullYear() }}
        </section>
      <nav class="site-footer-nav">
          <g-link to="/">Latest Posts</g-link>
          <a v-if="Admin.social_media.facebook" :href="'https://facebook.com/' + Admin.social_media.facebook" target="_blank" rel="noopener">Facebook</a>
          <a v-if="Admin.social_media.twitter" :href="'https://twitter.com/' + Admin.social_media.twitter" target="_blank" rel="noopener">Twitter</a>
          <a v-if="Admin.social_media.coffee" :href="'https://buymeacoffee.com/' + Admin.social_media.coffee" target="_blank" rel="noopener">Buy Me A Coffee</a>
          <a href="https://gridsome.org" target="_blank" rel="noopener">Gridsome</a>
      </nav>
    </div>
  </footer>
</template>

<script>
  import Admin from '../../data/admin.yml'

  export default {
    computed: {
      Admin() {
        return Admin
      }
    }  
  }
</script>
