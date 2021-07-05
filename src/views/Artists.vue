

<template>
  <div class="container-fluid">
   <div class="gallery"> 
    <div class="frame" v-for="(artist, index) in artists" :key=index>
    <div class="artist">
 
    <div class=""><p>{{ artist.gsx$name.$t }}</p>
    <p>{{ artist.gsx$about.$t }}</p>
    </div>
    <div class=''>
    <div class="button-box">
    <button> <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'door-closed' }"/>Website{{ artist.gsx$website.$t }}</button>
    <button><font-awesome-icon :icon="{ prefix: 'far', iconName: 'paper-plane' }" />Email{{ artist.gsx$email.$t }}</button>
    <button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
{{ artist.gsx$facebook.$t }}</button>
    </div>
    </div>
   </div>
   </div>
   </div>
 </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Artists',
  components: {
    
  },

 data() {
    return {
      artists: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`https://spreadsheets.google.com/feeds/list/18kC36XlinBoxImrravjSceOXChOg4fOBW0_W0ECrWZw/1/public/full?alt=json`)
      this.artists = response.data.feed.entry
    } catch (error) {
      this.errors.push(error)
    }
  }
}
</script>