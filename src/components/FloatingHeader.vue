<template>
  <div class="floating-header">
    <div class="floating-header-logo">
      <a href="/">
        <img v-if="Admin.site.logo" :src="Admin.site.logo" :alt="Admin.site.title + ' icon'" />
        <span>{{ Admin.site.title }}</span>
      </a>
    </div>
    <span class="floating-header-divider">&mdash;</span>
    <div class="floating-header-title">{{ title }}</div>
    <div class="floating-header-share">
      <div class="floating-header-share-label">Share this <PointerIcon/></div>
      <!-- TODO Add Twitter share link -->
      <a class="floating-header-share-tw">
        <TwitterIcon/>
      </a>
      <!-- TODO Add Facebook share link -->
      <a class="floating-header-share-fb">
        <FacebookIcon/>
      </a>
    </div>
    <progress id="reading-progress" class="progress" value="0">
      <div class="progress-container">
        <span class="progress-bar"></span>
      </div>
    </progress>
  </div>
</template>

<script>
  import Admin from "../../data/admin.yml"
  import PointerIcon from './icons/Pointer';
  import FacebookIcon from './icons/Facebook'
	import TwitterIcon from './icons/Twitter'

  export default {
    components: {
      PointerIcon,
      FacebookIcon,
      TwitterIcon
    },
    comments: {
      Admin() {
        return Admin
      }
    }
  }
</script>