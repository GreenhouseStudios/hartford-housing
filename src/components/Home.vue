<template>
  <div class="section">
    <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)">
      <div id="subtitle">
        <h1 class="display-4 font-weight-bold ma-2">{{title.toUpperCase()}}</h1>
        <h1 class="display-4 font-weight-bold ma-2">{{subtitle.toUpperCase()}}</h1>
         <!-- <CardImage v-bind:image="slides[0].image" v-bind:offsetH="slides[0].offsetH" 
        v-bind:offsetV="slides[0].offsetV" v-bind:rotation="slides[0].rotation"
        v-bind:style="{top:slides[0].offsetV + 'px', left:slides[0].offsetH +'px'}">
        </CardImage> -->
      </div>
    </v-img>
  </div>
</template>

<script>
// import CardImage from '@/components/CardImage'
export default {
  name: "Home",
  components:{
    // CardImage
  },
  data() {
    return {
      title: "Hartford Bound: ",
      subtitle: "Making Hartford Home",
      slides: [
        {
          image: require('../assets/pubhousingmap.jpg'),
          offsetH: "300",
          offsetV: "25",
          rotation: "-45"
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
  padding: 250px  0;
}
h1 {
  position: relative;
  display: inline-block;
}
.section{
  height: 500;
}
</style>