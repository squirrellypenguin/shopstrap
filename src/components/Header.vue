<template>
    
<div>
<nav style="height:75px;" class="navbar navbar-expand-lg navbar-dark bg-primary">
   <router-link class="nav-brand" style="color:white" to="/">Home</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
     
      <router-link class="btn-secondary" to="/artists">Artists</router-link>
     <router-link class="btn-secondary" to="/about">About</router-link>
       <router-link class="btn-secondary" to="/images">Media</router-link>
      <router-link class="btn-secondary" to="/maps">Greet & Meet</router-link>
        

    </div>
  </div>
</nav>
</div>
</template>

<script>


export default {

        
    
}
</script>
