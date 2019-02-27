<template>
  <Layout>
    <header :class=HeroBgClass :style=HeroBgImage>
      <div class="inner">
        <div class="site-header-content">
          <h1 class="site-title">
            <img v-if="Admin.site.logo != ''" class="site-logo" :src="Admin.site.logo" :alt="Admin.site.title" />
            <p v-if="Admin.site.logo === ''">
              {{ Admin.site.title }}
            </p>
          </h1>
          <h2 class="site-description">{{ Admin.site.description}}</h2>
        </div>
        <Navbar :logo=false />
      </div>
    </header>

    <!-- The main content area -->
    <main id="site-main" class="site-main outer">
      <div class="inner">
        <div class="post-feed">
          <Card v-for="{ node } in $page.allPost.edges" :key="node.id" :cardData="node" />
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
  import Admin from '../../data/admin.yml';
  import Navbar from '../components/Navbar'
  import Card from '../components/Card';

  export default {
    metaInfo: {
      bodyAttrs: {
        class: 'home-template'
      }
    },
    components: {
      Navbar, Card
    },
    computed: {
      Admin() {
        return Admin
      },
      HeroBgImage() {
        if (Admin.site.cover_image) {
          return {
            backgroundImage: 'url(' + Admin.site.cover_image + ')'
          }
        }
      },
      HeroBgClass() {
        if (Admin.site.cover_image) {
          return 'site-header outer'
        } else {
          return 'site-header outer no-cover'
        }
      }
    }   
  }
</script>

<page-query>
  query Home ($page: Int) {
    allPost (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
          tags {
            title
          }
          image
          content
          author {
            id
            name
            image
          }
          timeToRead
        }
      }
    }
  }
</page-query>