<template>
  <div id="app">
    <div id="nav">
   
    <Header />
    
    </div>
    <router-view/>
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

#nav {


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