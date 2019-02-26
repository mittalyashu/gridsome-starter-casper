<template>
  <Page>
    <article class="post-full post page" :class="pageClass">

      <header class="post-full-header">
        <h1 class="post-full-title">About us</h1>
      </header>

      <figure v-if="image" class="post-full-image">
        <g-image v-bind="image" src="" alt="" />
      </figure>

      <section class="post-full-content">
        <div class="post-content">
          <p>This is a Gridsome starter casper theme cloned from <a target="_blank" href="https://demo.ghost.io/">Casper</a>, I have input my time and effort in making this, consider <a target="_blank" href="https://patreon.com/mittalyashu">becoming my patreon</a> to help out.</p>
        </div>
      </section>

    </article>
  </Page>
</template>

<script>
import Page from "../layouts/Page";

export default {
  metaInfo() {
    return {
      title: 'About',
      bodyAttrs: {
        class: `page-about`
      }
    };
  },
  data() {
    return {
      image: ''
    }
  },
  computed: {
    pageClass() {
      if (this.image === '') {
        return 'no-image'
      }
    }
  },
  components: {
    Page
  }
};
</script>
