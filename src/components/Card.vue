<template>
  <article :class="articleClass">
    <a v-if="cardData.image" class="post-card-image-link" :href="cardData.path">
      <!-- FIXME Background size cover -->
      <div class="post-card-image" :style="'background-image: url(' + cardData.image + ')'"></div>
    </a>
    <div class="post-card-content">
      <a class="post-card-content-link" :href="cardData.path">
        <header class="post-card-header">
          <span
            v-if="cardData.tags"
            class="post-card-tags"
          >{{ cardData.tags.title.replace('-', ' ') }}</span>
          <h2 class="post-card-title">{{ cardData.title }}</h2>
        </header>
        <section class="post-card-excerpt">
          <p>{{ cardData.content | stripHTML() | truncate(190, '...') }}</p>
        </section>
      </a>
      <footer class="post-card-meta">
        <ul class="author-list">
          <li v-for="author in cardData.author" class="author-list-item" :key="author.name">
            <div class="author-name-tooltip">{{ author.name }}</div>
            <a v-if="author.image" :href="'/author/' + author.id" class="static-avatar">
              <img class="author-profile-image" :src="author.image" :alt="author.name" />
            </a>
            <a v-else :href="'/author/' + author.id" class="static-avatar author-profile-image">
             <Avatar/>
            </a>
          </li>
        </ul>

        <span class="reading-time">{{ cardData.timeToRead }} MIN READ</span>
      </footer>
    </div>
  </article>
</template>

<script>
import Avatar from "./icons/Avatar";

export default {
  components: {
    Avatar
  },
  props: {
    cardData: Object
  },
  computed: {
    articleClass() {
      let classes = ["post-card", "post"];
      if (this.cardData.fields === null) {
        classes.push("no-image");
      }
      const cardTagClass = "post-" + this.cardData.tags;
      classes.push(cardTagClass);
      return classes;
    }
  },
  filters: {
    truncate: (text, length, suffix) => {
      return text.substring(0, length) + suffix;
    },
    stripHTML: text => {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = text;
      return tmp.textContent || tmp.innerText || "";
    }
  }
};
</script>
