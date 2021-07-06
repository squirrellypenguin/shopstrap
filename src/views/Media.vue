<template>
<div>


  <splide :options="options">
    <splide-slide>
      <p><img class="responsive" src="https://dummyimage.com/800x600/000/fff.png&text=1" /> </p>
    </splide-slide>
    <splide-slide>
      <p><img src="https://dummyimage.com/800x600/000/fff.png&text=2" /> </p>
    </splide-slide>
    <splide-slide>
      <p><img src="https://dummyimage.com/800x600/000/fff.png&text=3" /> </p>
    </splide-slide>
  </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  components: {
    Splide,
    SplideSlide,
  },
   data() {
      return {
        videoid: "nmsZRw-RWYI",
        options: {
          rewind : true,
          width: 800,
          cover: true,
          gap: '1rem',
          autoplay: true,
          pauseOnHover: false,
          type  : 'fade',
          breakpoints: {
            920: {
              width: 700,
            },
           
            690: {
              width: 580,
            },
           
          },
        },
      };
    },
}

</script>
