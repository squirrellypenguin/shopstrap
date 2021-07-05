<template>
      <vue-tiny-slider v-bind="tinySliderOptions">
        <div><img class="responsive" src="http://placehold.jp/600x450.png" /></div>
        <div><img class="responsive" src="http://placehold.jp/600x450.png" /></div>
        <div><img class="responsive" src="http://placehold.jp/600x450.png" /></div>
        <div><img class="responsive" src="http://placehold.jp/600x450.png" /></div>
        <div><img class="responsive" src="http://placehold.jp/600x450.png" /></div>
      </vue-tiny-slider>

</template>
<script>
import VueTinySlider from 'vue-tiny-slider';
export default { 
    name: 'Media',
    components: {
      'vue-tiny-slider': VueTinySlider
    },
    data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 1,
        swipeAngle: 45,
        
        viewportMax: 600,
      },
    };
  },
}
</script>