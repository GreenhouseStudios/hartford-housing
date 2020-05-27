<template>
  <div class="section">
    <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)">
      <div id="subtitle">
        <h1 class="display-4 font-weight-bold ma-2">{{subtitle.toUpperCase()}}</h1>
        <CardImage v-bind:image="slides[0].image" v-bind:offsetH="slides[0].offsetH" 
        v-bind:offsetV="slides[0].offsetV" v-bind:rotation="slides[0].rotation"
        v-bind:cardWidth="slides[0].cardWidth" v-bind:cardHeight="slides[0].cardHeight"
        v-bind:style="{top:slides[0].offsetV + 'px', left:slides[0].offsetH +'px'}">
        </CardImage>
      </div>
    </v-img>
  </div>
</template>

<script>
import CardImage from '@/components/CardImage'
export default {
  name: "Home",
  components:{
    CardImage
  },
  data() {
    return {
      subtitle: "Hartford Bound: Making Hartford Home",
      slides: [
        {
          image: require('../assets/pubhousingmap.jpg'),
          offsetH: "0",
          offsetV: "100",
          rotation: "-90",
          cardWidth: "400",
          cardHeight: "500"
        }
      ]
    }
  }
}
</script>

<style scoped>
.bod {
  max-width: 500px;
}
#subtitle {
  height: 100%;
  text-align: center;
  margin: auto;
  padding: 20px  0;
}
h1 {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(81, 159, 200, 0) 30%,
    rgb(81, 159, 200) 30%
  );
}
h1::after {
  content: "";
  background-color: rgb(81, 159, 200);
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.section{
  height: 500;
}
</style>