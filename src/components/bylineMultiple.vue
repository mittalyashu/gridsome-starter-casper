<template>
  <footer class="post-full-footer">
    <section class="post-full-authors">
      <div class="post-full-authors-content">
        <p>This post was a collaboration between</p>
        <p>
          <!-- FIXME Add comma after first author -->
          <a
            v-for="author in author"
            :key="author.name"
            :href="'/author/' + author.id"
          >{{ author.name }}</a>
        </p>
      </div>

      <ul class="author-list" v-on:mouseleave="hideAuthorCard">
        <!-- FIXME Appear only single card on hover -->
        <li
          v-on:mouseover="authorCardHovered = authorUsername"
          v-for="author in author"
          :key="author.name"
          class="author-list-item"
        >
          <div :class="{'author-card': true, hovered: authorCardHovered === authorUsername }">
            <div class="basic-info">
              <img
                v-if="author.image"
                class="author-profile-image"
                :src="author.image"
                :alt="author.name"
              >
              <div v-else class="author-profile-image">
                <Avatar/>
              </div>

              <h2>{{ author.name }}</h2>
            </div>

            <div class="bio">
              <div v-if="author.bio">
                <p>{{ author.bio }}</p>
                <p>
                  <a :href="'/author/' + author.id">More posts</a>
                  by {{ author.name }}.
                </p>
              </div>
              <p v-else>
                Read
                <a :href="'/author/' + author.id">more posts</a> by this author.
              </p>
            </div>
          </div>

          <a v-if="author.image" :href="'/author/' + author.id" class="moving-avatar">
            <img class="author-profile-image" :src="author.image" :alt="author.name">
          </a>
          <a v-else :href="'/author/' + author.id" class="moving-avatar author-profile-image">
            <Avatar/>
          </a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
import Avatar from "./icons/Avatar";

export default {
  data: () => {
    return {
      authorCardHovered: ""
    };
  },
  props: {
    author: Array
  },
  components: {
    Avatar
  },
  methods: {
    hideAuthorCard() {
      setTimeout(() => {
        this.authorCardHovered = "";
      }, 800);
    }
  }
};
</script>
