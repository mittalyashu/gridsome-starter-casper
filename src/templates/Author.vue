<template>
  <Layout>
    <header class="site-header outer no-image">
      <div class="inner">
        <Navbar :logo=true />
        <div class="site-header-content">
          <img v-if="$page.author.image" class="author-profile-image" :src="$page.author.image" :alt="$page.author.name" />
          <h1 class="site-title"> {{ $page.author.name }} </h1>
          <h2 v-if="bio = true" class="author-bio">{{ $page.author.bio }}</h2>
          <div class="author-meta">

            <div v-if="location = true" class="author-location">{{ $page.author.location }}
              <span class="bull">&bull;</span>
            </div>

            <div class="author-stats">
              {{ numberofPosts }}
              <span class="bull">&bull;</span>
            </div>

            <a v-if="$page.author.website" class="social-link social-link-wb" :href="$page.author.website" target="_blank" rel="noopener">
              <WebsiteIcon />
            </a>

            <a v-if="$page.author.twitter" class="social-link social-link-tw" :href="'https://www.twitter.com/' + $page.author.twitter" target="_blank" rel="noopener">
              <TwitterIcon />
            </a>

            <a v-if="$page.author.facebook" class="social-link social-link-fb" :href="'https://www.facebook.com/' + $page.author.facebook" target="_blank" rel="noopener">
              <FacebookIcon />
            </a>

            <!-- NOTE Gridsome doesn't support RSS feed yet -->
            <!-- <a class="social-link social-link-rss" href="" target="_blank" rel="noopener">
              <RSSIcon />
            </a> -->

          </div>
        </div>
      </div>
    </header>

    <!-- The main content area -->
    <main id="site-main" class="site-main outer">
      <div class="inner">

        <div class="post-feed">
          <!-- FIXME Filter posts based on author name -->
          <Card v-for="{ node } in $page.author.belongsTo.edges" :key="node.id" :cardData="node" />
        </div>

      </div>
    </main>

  </Layout>
</template>

<script>
  // Components
  import Navbar from '../components/Navbar';
  import Card from '../components/Card';

  // Icons
  import WebsiteIcon from '../components/icons/Website';
  import TwitterIcon from '../components/icons/Twitter';
  import FacebookIcon from '../components/icons/Facebook';
  import RSSIcon from '../components/icons/RSS';

  import { Pager } from 'gridsome'

  export default {
    metaInfo()  {
      return {
        title: this.$page.author.name,
        bodyAttrs: {
          class: `author-template`
        }
      }
    },
    components: {
      // Components
      Navbar, Card,
      // Icons
      WebsiteIcon, TwitterIcon, FacebookIcon, RSSIcon, Pager
    },
    computed: {
      numberofPosts() {
        let count = this.$page.author.belongsTo.edges.length
        if (count = 1) {
          return `${count} post`
        } else if (count <= 2) {
          return `${count} posts`
        } else {
          return 'No posts'
        }
      }
    }
  }
</script>

<style lang="css" scoped>

</style>

<page-query>
  query Author ($id: String!) {
    author (id: $id) {
      name
      image
      bio
      location
      website
      twitter
      facebook
      belongsTo {
        edges {
          node {
            ...on Post {
              id
              title
              date
              author {
                id
                name
                image
              }
              path
              image
              content
              timeToRead
            }
          }
        }
      }
    }
  }
</page-query>