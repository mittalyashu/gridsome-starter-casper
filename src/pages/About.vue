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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
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
