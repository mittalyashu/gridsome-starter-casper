<template>
  <!-- Links to Previous/Next posts -->
  <aside class="read-next outer">
    <div class="inner">
      <div class="read-next-feed">
        <article
          class="read-next-card"
          :style="'background-image: url(' + Admin.site.cover_image + ')'"
        >
          <header class="read-next-card-header">
            <small class="read-next-card-header-sitetitle">&mdash; {{ Admin.site.title }} &mdash;</small>
            <h3 class="read-next-card-header-title">
              <a :href="'/tag/' + tag">{{ tag.replace('-', ' ') | capitalizeFilter }}</a>
            </h3>
          </header>
          <div class="read-next-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"
              ></path>
            </svg>
          </div>
          <div class="read-next-card-content">
            <ul>
              <li v-for="post in posts" :key="post.node.id">
                <a :href="post.node.path">{{ post.node.title }}</a>
              </li>
            </ul>
          </div>
          <footer class="read-next-card-footer">
            <a :href="'/tag/' + this.tag">See all {{ posts.length }} posts →</a>
          </footer>
        </article>
        <Card
          v-for="PreviousNexts in this.PreviousNexts"
          :key="PreviousNexts.id"
          :cardData="PreviousNexts"
        />
      </div>
    </div>
  </aside>
</template>

<script>
import Card from "./Card";
import Admin from "../../data/admin.yml";
import capitalizeFilter from "../filters/capitalize";

export default {
  data() {
    return {
      currentPostId: this.id,
      PreviousNexts: []
    };
  },
  props: {
    id: {
      type: String
    },
    tag: {
      type: String
		},
		posts: {
			type: Array
		}
  },
  components: {
    Card
  },
  filters: {
    capitalizeFilter
  },
  mounted() {
    this.getPreviousNext();
  },
  computed: {
    Admin() {
      return Admin;
    },
    tagPosts() {
      const allTagPosts = this.$static.allTag.edges;
      console.log(allTagPosts);
		}
  },
  methods: {
    getPreviousNext() {
      const allBlogs = this.$static.allPost.edges;
      for (let i = 0; i < allBlogs.length; i++) {
        if (allBlogs[i].node.id === this.currentPostId) {
          if (i > 0) {
            this.PreviousNexts.push(allBlogs[i - 1].node);
          }
          if (allBlogs.length > i) {
            this.PreviousNexts.push(allBlogs[i + 1].node);
          }
        }
      }
    }
  }
};
</script>

<static-query>
  query Blog {
    allPost(order: ASC) {
      edges {
        node {
          id
					title
					date
					tags {
						title
					}
					image
					author {
						id
						name
						image
					}
					content
        }
      }
    }
  }
</static-query>