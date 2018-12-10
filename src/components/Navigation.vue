<template>
  <ul class="nav" role="menu">
    <li v-for="item in Admin.nav_home" :key="item.title" role="menuitem">
      <a :href="item.link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
  import Admin from '../../data/admin.yml'

  export default {
    computed: {
      Admin() {
        return Admin
      }
    }
  }
</script>
