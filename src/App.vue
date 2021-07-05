<template>
<div>
  <div id="app">
      <div id="nav">
        <Header />
      </div>
      <router-view/>
  </div>
  <footer class="footer">
  <a href="https://www.facebook.com/Island-Craft-Shop-189477107771345/" alt="FB"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
  <a href="https://www.instagram.com/vtislandcraftshop" alt="insta"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></a>
  <a href="https://www.instagram.com/vtislandcraftshop" alt="twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></a>
  </footer>
  </div>
</template>

<style lang="scss">
@import '../src/assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>