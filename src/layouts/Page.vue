<template>
  <Layout>
    <header class="site-header outer">
      <div class="inner">
        <Navbar :logo="true"/>
      </div>
    </header>
    <main id="site-main" class="site-main outer">
      <div class="inner">
        <slot/>
      </div>
    </main>
  </Layout>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  metaInfo() {
    return {
      bodyAttrs: {
        class: `page-template`
      }
    };
  },
  components: {
    Navbar
  }
};
</script>

