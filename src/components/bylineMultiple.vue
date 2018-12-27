<template>
  <footer class="post-full-footer">
    <section class="post-full-authors">

      <div class="post-full-authors-content">
          <p>This post was a collaboration between</p>
          <p>
            <!-- FIXME Add comma after first name -->
            <a v-for="authorUsername in author" :key="authorUsername" :href="'/author/' + getAuthorData(authorUsername).username">{{ getAuthorData(authorUsername).name }}</a>
          </p>
      </div>

      <ul class="author-list" v-on:mouseleave="hideAuthorCard">
        <li v-on:mouseover="authorCardHovered = authorUsername" v-for="authorUsername in author" :key="authorUsername" class="author-list-item">

          <div :class="{'author-card': true, hovered: authorCardHovered === authorUsername }">
            <div class="basic-info">

              <img v-if="getAuthorData(authorUsername).image" class="author-profile-image" :src="getAuthorData(authorUsername).image" :alt="getAuthorData(authorUsername).name" />
              <div v-else class="author-profile-image">
                <Avatar />
              </div>

              <h2>{{ getAuthorData(authorUsername).name }}</h2>
            </div>

            <div class="bio">
              <div v-if="getAuthorData(authorUsername).bio">
                <p>{{ getAuthorData(authorUsername).bio }}</p>
                <p><a :href="'/author/' + getAuthorData(authorUsername).username">More posts</a> by {{ getAuthorData(authorUsername).name }}.</p>
              </div>
              <p v-else>Read <a :href="'/author/' + getAuthorData(authorUsername).username">more posts</a> by this author.</p>
            </div>
          </div>

          <a v-if="getAuthorData(authorUsername).image" :href="'/author/' + getAuthorData(authorUsername).username" class="moving-avatar">
            <img class="author-profile-image" :src="getAuthorData(authorUsername).image" :alt="getAuthorData(authorUsername).name" />
          </a>
          <a v-else :href="'/author/' + getAuthorData(authorUsername).username" class="moving-avatar author-profile-image">
            <Avatar />
          </a>

        </li>
      </ul>

    </section>
  </footer>
</template>

<script>
  import AllAuthorData from '../../data/author.yml';
  import Avatar from './icons/Avatar';

  export default {
    data: () => {
      return {
        authorCardHovered: ''
      }
    },
    props: {
      author: Array
    },
    components: {
      Avatar
    },
    methods: {
      getAuthorData: authorUsername => {
        for (var i = 0; i < AllAuthorData.length; i++) {
          const currentAuthorUsername = AllAuthorData[i].username;
          if (authorUsername === currentAuthorUsername) {
            return AllAuthorData[i];
          }
        }
      },
      hideAuthorCard() {
        setTimeout(() => {
          this.authorCardHovered = ''
        }, 800)
      }
    }
  }
</script>
