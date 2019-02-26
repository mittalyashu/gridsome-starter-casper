<template>
  <footer class="post-full-footer">
    <section class="author-card">
      <g-image v-if="authorData.image" class="author-profile-image" :src="authorData.image" :alt="authorData.name" />
      <span v-else class="avatar-wrapper">
        <Avatar />
      </span>

      <section class="author-card-content">
        <h4 class="author-card-name">
          <a :href="'/author/' + authorData.id">
            {{ authorData.name }}
          </a>
        </h4>
        <p v-if="authorData.tagline">{{ authorData.tagline }}</p>
        <p v-else>Read <a :href="'/author/' + authorData.id">more posts</a> by this author.</p>  
      </section>
    </section>
    <div class="post-full-footer-right">
      <a class="author-card-button" :href="'/author/' + authorData.id">Read More</a>
    </div>
  </footer>
</template>

<script>
  import Avatar from './icons/Avatar';

  export default {
    props: {
      author: Array
    },
    components: {
      Avatar
    },
    computed: {
      authorData() {
        return this.author[0]
      }
    }
  }
</script>
