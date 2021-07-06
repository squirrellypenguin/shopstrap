<template>
  <div class="home">
 <div class="container">
  <Media />
  </div>
  <div class="caption" >
  <h1 class="title">Island Craft Shop</h1>
  <p class="lead">An artisan cooperative.</p>
  <hr class="my-4">
  <p>The Island Craft Shop at 329 US Route 2 in South Hero Village is the oldest artisan cooperative in Grand Isle County, Vermont</p>
  <p class="lead">
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  </div>
  <div class="notes">NOTES
  </div>

</div>

</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
import Media from './Media.vue'
export default {
  name: 'Home',
  components: {
          Media
  }
}
</script>
