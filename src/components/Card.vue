<template>
  <article :class=articleClass>
    <a v-if="cardData.fields.image" class="post-card-image-link" :href="cardData.path">
      <div class="post-card-image" :style="'background-image: url(' + cardData.fields.image.src + ')'"></div>
    </a>
    <div class="post-card-content">
      <a class="post-card-content-link" :href="cardData.path">
        <header class="post-card-header">
            <span v-if="cardData.tags" class="post-card-tags">
              {{ cardData.tags.replace('-', ' ') }}
            </span>
            <h2 class="post-card-title">
              {{ cardData.title }}
            </h2>
        </header>
        <section class="post-card-excerpt">
          <p>{{ cardData.content | stripHTML() | truncate(190, '...') }}</p>
        </section>
      </a>
      <footer class="post-card-meta">
        <ul class="author-list">
          <li v-for="author in cardData.authors" class="author-list-item" :key="author">              
            <div class="author-name-tooltip">
              {{ getAuthorData(author).name }}
            </div>

            <a v-if="getAuthorData(author).image" :href="'/author/' + getAuthorData(author).username" class="static-avatar">
              <img class="author-profile-image" :src="getAuthorData(author).image" :alt="getAuthorData(author).name" />
            </a>
            <a v-else :href="'/author/' + getAuthorData(author).username" class="static-avatar author-profile-image">
             <Avatar/>
            </a>
          </li>
        </ul>

        <span class="reading-time">
          {{ cardData.timeToRead }} MIN READ
        </span>
      </footer>
    </div>
  </article>
</template>

<script>
  import AuthorData from '../../data/author.yml';
  import Avatar from './icons/Avatar';
  
  export default {
    components: {
      Avatar
    },
    props: {
      cardData: Object
    },
    computed: {
      articleClass() {
        let classes = ['post-card', 'post'];
        if (this.cardData.fields === null) {
          classes.push('no-image')
        }
        const cardTagClass = 'post-' + this.cardData.tags;
        classes.push(cardTagClass);
        return classes
      }
    },
    methods: {
      getAuthorData: (authorName) => {
        const authorList = AuthorData;
        for (var i = 0; i < authorList.length; i++) {
          const currentAuthorUsername = authorList[i].username; 
          if (authorName === currentAuthorUsername) {
            return authorList[i]
          }
        }
      }
    },
    filters: {
      truncate: (text, length, suffix) => {
        return text.substring(0, length) + suffix;
      },
      stripHTML: text => {
        // FIXME document is not defined
        // Showing error while deploying on netlify.
        var tmp = document.createElement("DIV");
        tmp.innerHTML = text;
        return tmp.textContent || tmp.innerText || "";
      }
    }
  }
</script>
