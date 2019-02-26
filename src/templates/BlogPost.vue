<template>
  <Layout>
    
    <header class="site-header outer">
      <div class="inner">
        <Navbar :logo=true />
      </div>
    </header>

    <main id="site-main" class="site-main outer">
      <div class="inner">

        <article :class=postClass>

          <header class="post-full-header">
            <section class="post-full-meta">
              <time class="post-full-meta-date" :datetime="$page.post.date">{{$page.post.date}}</time>
              <span class="date-divider">/</span>
              <a :href="'/tags/' + $page.post.tags.title">{{ $page.post.tags.title.replace('-', ' ') }}</a>
            </section>
            <h1 class="post-full-title">{{ $page.post.title }}</h1>
          </header>

          <figure v-if="$page.post.image" class="post-full-image">
            <g-image :src="$page.post.image" :alt="$page.post.title"/>
          </figure>

          <section class="post-full-content">
            <div class="post-content" v-html="$page.post.content">
            </div>
          </section>

          <!-- Email subscribe form at the bottom of the page -->
          <section v-if="Admin.site.subscribers" class="subscribe-form">
            <h3 class="subscribe-form-title">Subscribe to {{ Admin.site.title }}</h3>
            <p>Get the latest posts delivered right to your inbox</p>
            <subscribeForm placeholder="youremail@example.com" />
          </section>

          <bylineMultiple :author="$page.blogPost.authors" v-if="$page.blogPost.authors.length > 1"/>
          <bylineSingle :author="$page.blogPost.authors" v-else />

          <!-- NOTE Comment section -->
          <!-- <section class="post-full-comments">
            If you want to embed comments, this is a good place to do it!
          </section> -->

        </article>

      </div>
    </main>

  </Layout>
</template>

<script>
  import Admin from '../../data/admin.yml';
  import Navbar from '../components/Navbar';
  import subscribeForm from '../components/subscribeForm';
  import bylineMultiple from '../components/bylineMultiple';
  import bylineSingle from '../components/bylineSingle';

  export default {
    metaInfo()  {
      return {
        title: this.$page.post.title,
        bodyAttrs: {
          class: `post-template tag-${this.$page.post.tags.title}`
        }
      }
    },
    components: {
      Navbar, subscribeForm, bylineMultiple, bylineSingle
    },
    computed: {
      Admin() {
        return Admin
      },
      postClass() {
        let classes = ['post-full', 'post'];
        if (!this.$page.post.image) {
          classes.push('no-image')
        }
        const postTagClass = 'tag-' + this.$page.post.tags.title;
        classes.push(postTagClass);
        return classes
      }
    }
  }
</script>
<page-query>
  query BlogPost ($path: String!) {
    post (path: $path) {
      title
      date (format: "D MMMM YYYY")
      tags
      fields {
        image
      }
      authors
      content
    }
  }
</page-query>