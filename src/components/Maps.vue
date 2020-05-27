<template>
  <div class="section">
    <!-- <h1>Maps</h1> -->
    <div class="ma-5">
      <div class="slide">
        <h2 class="ma-5">African American Population Percentage - 1940</h2>
        <Map jsonFile="pop1940" id="pop1940" v-bind:zoomLevel="13"></Map>
      </div>
      <div class="slide">
        <h2 class="ma-5">African American Population Percentage - 1960</h2>
        <Map jsonFile="pop1960" id="pop1960" v-bind:zoomLevel="13"></Map>
      </div>
      <div class="slide">
        <h2 class="ma-5">African American Population Percentage - 1980</h2>
        <Map jsonFile="pop1980" id="pop1980" v-bind:zoomLevel="13"></Map>
      </div>
      <div class="slide">
        <h2 class="ma-5">Bloomfield</h2>
        <Map v-bind:coordinates="[41.8,-72.73]" id="Bloomfield"></Map>
      </div>
      <div class="slide">
        <h2 class="ma-5">Places of Origin</h2>
        <v-img :src="require('../assets/PlacesofOriginUpdate.jpg')" contain max-height="80vh"></v-img>
      </div>
      <div class="slide">
        <h2 class="ma-5">Race and Ethnicity</h2>
        <v-img :src="require('../assets/Race_Ethnicity2.jpg')" contain max-height="80vh"></v-img>
      </div>
      <div class="slide">
        <h2 class="ma-5">Landmarks</h2>
        <v-img :src="require('../assets/landmarks.jpg')" contain max-height="80vh"></v-img>
      </div>
      <div class="slide">
        <h2 class="ma-5">Geographic Mobility of African Americans</h2>
        <v-img :src="require('../assets/GeographicMobility.jpg')" contain max-height="80vh"></v-img>
      </div>
      <div class="slide">
        <h2 class="ma-5">Ship Manifest</h2>
        <v-img :src="require('../assets/ShipManifest.jpg')" contain max-height="80vh"></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map";
export default {
  name: "Maps",
  components: {
    Map
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>