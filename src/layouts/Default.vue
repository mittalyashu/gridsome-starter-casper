<template>
  <div class="site-wrapper">
    <!-- All the main content gets inserted here, index.hbs, post.hbs, etc -->
    <slot/>

    <!-- The footer at the very bottom of the screen -->
    <Footer/>

  </div>
</template>

<script>
  import Footer from '~/components/Footer';
  
  export default {
    components: {
      Footer
    },
  }
</script>