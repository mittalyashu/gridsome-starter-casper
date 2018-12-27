<template>
  <footer class="post-full-footer">
    <section class="author-card">
      <img v-if="getAuthorData.image" class="author-profile-image" :src="getAuthorData.image" :alt="getAuthorData.name" />
      <span v-else class="avatar-wrapper">
        <Avatar />
      </span>

      <section class="author-card-content">
        <h4 class="author-card-name">
          <a :href="'/author/' + getAuthorData.username">
            {{ getAuthorData.name }}
          </a>
        </h4>
        <p v-if="getAuthorData.tagline">{{ getAuthorData.tagline }}</p>
        <p v-else>Read <a :href="'/author/' + getAuthorData.username">more posts</a> by this author.</p>  
      </section>
    </section>
    <div class="post-full-footer-right">
        <a class="author-card-button" :href="'/author/' + getAuthorData.username">Read More</a>
    </div>
  </footer>
</template>

<script>
  import AuthorData from '../../data/author.yml';
  import Avatar from './icons/Avatar';

  export default {
    props: {
      author: String
    },
    components: {
      Avatar
    },
    computed: {
      getAuthorData() {
        console.log(AuthorData);
        for (var i = 0; i < AuthorData.length; i++) {
          const currentAuthorUsername = AuthorData[i].username; 
          const currentAuthorData = AuthorData[i]
          if (this.author = currentAuthorUsername) {
            return currentAuthorData
          }
        }
      }
    }
  }
</script>
