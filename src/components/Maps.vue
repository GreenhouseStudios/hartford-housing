<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <h1 class="d-none d-md-block section-header display-2 font-weight-bold">Maps</h1>
      <h1 class="d-md-none section-header display-1 font-weight-bold">Maps</h1>
      <div>

        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000; width: 100%; margin: auto;"
            fade
            controls
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="1940"
              img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="1960"
              img-src="https://picsum.photos/1024/480/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="1980"
              img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <!-- <h2 class="ma-5">African American Population Percentage - 1940</h2> -->
        <div id="trigger4"></div>
        <div class="section" id="revealslide">  
        <Map
          jsonFile="pop1940"
          id="pop1940"
          v-bind:zoomLevel="13"
          title="African American Population Percentage - 1940"
        ></Map></div>

        <div id="trigger5"></div>
        <div class="section" id="revealslide2">  
          <!-- <h2 class="ma-5">African American Population Percentage - 1960</h2> -->
          <Map
            jsonFile="pop1960"
            id="pop1960"
            v-bind:zoomLevel="13"
            title="African American Population Percentage - 1960"
          ></Map>
        </div>

        <div id="trigger6"></div>
        <div class="section" id="revealslide">  
          <!-- <h2 class="ma-5">African American Population Percentage - 1980</h2> -->
          <Map
            jsonFile="pop1980"
            id="pop1980"
            v-bind:zoomLevel="13"
            title="African American Population Percentage - 1980"
          ></Map>
        </div>

        <div id="trigger7"></div>
        <div class="section" id="revealslide2">  
          <!-- <h2 class="ma-5">Bloomfield</h2> -->
          <Map v-bind:coordinates="[41.8,-72.73]" 
            id="Bloomfield" 
          title="Bloomfield"></Map>
        </div>

        <div class="section">  
          <h2 class="ma-5">Places of Origin</h2>
          <v-img :src="require('../assets/PlacesofOriginUpdate.jpg')" contain max-height="65vh"></v-img>
        </div>

        <div class="section">  
          <h2 class="ma-5">Race and Ethnicity</h2>
          <v-img :src="require('../assets/Race_Ethnicity2.jpg')" contain max-height="65vh"></v-img>
        </div>

        <div class="section">  
          <h2 class="ma-5">Landmarks</h2>
          <v-img :src="require('../assets/landmarks.jpg')" contain max-height="65vh"></v-img>
        </div>

        <div class="section">  
          <h2 class="ma-5">Geographic Mobility of African Americans</h2>
          <v-img :src="require('../assets/GeographicMobility.jpg')" contain max-height="65vh"></v-img>
        </div>

        <div class="section"> 
          <h2 class="ma-5">Ship Manifest</h2>
          <v-img :src="require('../assets/ShipManifest.jpg')" contain max-height="65vh"></v-img>
        </div>

        <div class="section"> 
          <v-row justify="center">
            <h2 class="ma-5">SVG Test</h2>
            <!-- <v-img :src="require('../assets/Map_of_Connecticut.svg')" id="demo-tiger" contain max-height="80vh"></v-img> -->
            <!-- <img src="../assets/PublicHousingLocations.svg" id="demo-tiger" /> -->
            <PublicHousingLocations id="demo-tiger" />
          </v-row>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/components/Map";
import svgPanZoom from "svg-pan-zoom";
import PublicHousingLocations from "@/assets/PublicHousingLocations.svg";
export default {
  name: "Maps",
  components: {
    Map,
    PublicHousingLocations
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    },
  mounted() {
    var panZoomTiger = svgPanZoom("#demo-tiger");
    console.log(panZoomTiger);
    const scene4 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger4",
        triggerHook: 0.7,
        duration: 0,
        reverse: false
      })
      .setClassToggle("#revealslide", "visible");
    this.$scrollmagic.addScene(scene4);

    const scene5 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger5",
        triggerHook: 0.7,
        duration: 0,
        reverse: false
      })
      .setClassToggle("#revealslide2", "visible");
    this.$scrollmagic.addScene(scene5);

    const scene6 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger6",
        triggerHook: 0.7,
        duration: 0,
        reverse: false
      })
      .setClassToggle("#revealslide", "visible");
    this.$scrollmagic.addScene(scene6);

    const scene7 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger7",
        triggerHook: 0.7,
        duration: 0,
        reverse: false
      })
      .setClassToggle("#revealslide2", "visible");
    this.$scrollmagic.addScene(scene7);
  }
};
</script>

<style scoped>
#demo-tiger {
  max-height: 65vh;
  margin: 0 auto;
  width: 500px;
}
/* Crossfade gallery */
@keyframes fader {
  0% {background-image: url("~@/assets/GeographicMobility1.jpg")}
  10% {background-image: url("~@/assets/GeographicMobility1.jpg")}
  33% {background-image: url("h~@/assets/GeographicMobility2.jpg")}
  43% {background-image: url("~@/assets/GeographicMobility2.jpg")}
  66% {background-image: url("h~@/assets/GeographicMobility3.jpg")}
  76% {background-image: url("~@/assets/GeographicMobility3.jpg")}
  100% {background-image: url("~@/assets/GeographicMobility1.jpg")}
}
#wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
#gallery {
  max-width: 600px;
  margin: 0 auto;
  animation: fader 15s linear infinite;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#manualgallery {
  max-width: 600px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: fader 15s linear infinite;
  animation-play-state: paused;
}

</style>