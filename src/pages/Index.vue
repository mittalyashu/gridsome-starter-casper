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
        <Navbar />
      </div>
    </header>
  </Layout>
</template>

<script>
  import Admin from '../../data/admin.yml';
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    },
    computed: {
      HomePage() {
        return true
      },
      Admin() {
        return Admin
      },
      HeroBgImage() {
        if (Admin.site.cover_image !== '') {
          return {
            backgroundImage: 'url(' + Admin.site.cover_image + ')'
          }
        }
      },
      HeroBgClass() {
        if (Admin.site.cover_image !== '') {
          return 'site-header outer'
        } else {
          return 'site-header outer no-cover'
        }
      }
    }   
  }
</script>