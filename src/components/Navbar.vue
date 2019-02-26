<template>
  <nav class="site-nav">
    <div class="site-nav-left">
      <div v-if="logo">
        <a v-if="Admin.site.logo" class="site-nav-logo" :href="Admin.site.url">
          <img :src="Admin.site.logo" :alt="Admin.site.title">
        </a>
        <a v-else class="site-nav-logo" :href="Admin.site.url">{{ Admin.site.title }}</a>
      </div>
      <Navigation v-if="Admin.site.navigation"/>
    </div>
    <div class="site-nav-right">
      <div class="social-links">
        <a
          v-if="Admin.social_media.patreon"
          class="social-link social-link-p"
          :href="'https://www.patreon.com/' + Admin.social_media.patreon"
          title="Become My Patron"
          target="_blank"
          rel="noopener"
        >
          <Patreon/>
        </a>
        
        <a
          v-if="Admin.social_media.facebook"
          class="social-link social-link-fb"
          :href="'https://facebook.com/' + Admin.social_media.facebook"
          title="Facebook"
          target="_blank"
          rel="noopener"
        >
          <Facebook/>
        </a>
        
        <a
          v-if="Admin.social_media.twitter"
          class="social-link social-link-tw"
          :href="'https://twitter.com/' + Admin.social_media.twitter"
          title="Twitter"
          target="_blank"
          rel="noopener"
        >
          <Twitter/>
        </a>
      </div>
      <a v-if="Admin.site.subscribers" class="subscribe-button" href="#subscribe">Subscribe</a>
      <a v-else class="rss-button" href="/feed.xml" title="RSS" target="_blank" rel="noopener">
        <RSS/>
      </a>
    </div>
  </nav>
</template>

<script>
import Admin from "../../data/admin.yml";
import Navigation from "./Navigation";

// Icons
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Patreon from "./icons/Patreon";
import RSS from "./icons/RSS";

export default {
  props: {
    logo: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Navigation,
    Patreon,
    Facebook,
    Twitter,
    RSS
  },
  computed: {
    Admin() {
      return Admin;
    }
  }
};
</script>

<style lang="sass">
	.social-link > svg
		width: 1.8rem
</style>
