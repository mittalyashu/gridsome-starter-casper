<template>
  <form method="post" action="/subscribe/" id="" class="">
    <div class="form-group">
      <input class="subscribe-email" type="email" name="email" :placeholder=placeholder>
    </div>

    <button id="" class="" type="submit">
      <span>Subscribe</span>
    </button>
  </form>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: "youremail@example.com"
      }
    }
  }
</script>
