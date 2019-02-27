<template>
  <Layout>
    <header class="site-header outer no-image">
      <div class="inner">
        <Navbar :logo="true"/>
        <div class="site-header-content">
          <h1 class="site-title">{{ capitalize }}</h1>
          <h2 class="site-description">A collection of {{ $page.tag.belongsTo.edges.length }} posts</h2>
        </div>
      </div>
    </header>

    <main id="site-main" class="site-main outer">
      <div class="inner">
        <div class="post-feed">
          <Card v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id" :cardData="node"/>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Admin from "../../data/admin.yml";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import capitalizeFilter from "../filters/capitalize";
import capitalize from '../filters/capitalize';

export default {
  metaInfo() {
    return {
      title: this.capitalize,
      bodyAttrs: {
        class: `tag-template tag-${this.$page.tag.title}`
      }
    };
  },
  components: {
    Navbar,
    Card
  },
  computed: {
    Admin() {
      return Admin;
    },
    postClass() {
      let classes = ["post-full", "post"];
      if (!this.$page.post.image) {
        classes.push("no-image");
      }
      const postTagClass = "tag-" + this.$page.post.tags.title;
      classes.push(postTagClass);
      return classes;
    },
    capitalize() {
      return capitalizeFilter(this.$page.tag.title.replace('-', ' '))
    }
  }
};
</script>

<page-query>
  query Tags ($id: String!) {
    tag (id: $id) {
      title
      belongsTo {
        edges {
          node {
            ...on Post {
              id
              title
              path
              image
              author {
                id
                name
                image
              }
              content
              timeToRead
            }
          }
        }
      }
    }
  }
</page-query>