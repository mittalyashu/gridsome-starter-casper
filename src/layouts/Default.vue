<template>
  <div class="site-wrapper">
    <!-- All the main content gets inserted here, index.vue, blogPost.vue, etc -->
    <slot/>

    <!-- The footer at the very bottom of the screen -->
    <Footer/>

    <!-- TODO Showing upon clicking the button -->
    <!-- The big email subscribe modal content -->
    <div v-if="Admin.site.subscribers" id="subscribe" class="subscribe-overlay">
      <a class="subscribe-overlay-close" href="#"></a>
      <div class="subscribe-overlay-content">
        <img v-if="!Admin.site.logo" class="subscribe-overlay-logo" :src="Admin.site.logo" :alt="Admin.site.title" />
        <h1 class="subscribe-overlay-title">Subscribe to {{ Admin.site.title }}</h1>
        <p class="subscribe-overlay-description">Stay up to date! Get all the latest &amp; greatest posts delivered straight to your inbox</p>
        <subscribeForm placeholder="youremail@example.com" />
      </div>
    </div>

    <!-- TODO Add pagination -->
    <!-- <script v-if="Admin.site.pagination" src=""></script> -->
  </div>
</template>

<script>
  import Footer from '../components/Footer';
  import Admin from '../../data/admin.yml';
  import subscribeForm from '../components/subscribeForm'

  export default {
    components: {
      Footer, subscribeForm
    },
    computed: {
      Admin() {
        return Admin
      }
    }
  }
</script>