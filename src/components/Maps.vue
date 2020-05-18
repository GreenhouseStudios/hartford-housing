<template>
  <div class="section">
    <!-- <h1>Maps</h1> -->
    <div class="ma-5">
      <div class="slide">
        <h2 class="ma-5">Hartford</h2>
        <Map></Map>
      </div>
      <div class="slide">
        <h2 class="ma-5">Bloomfield</h2>
        <Map v-bind:coordinates="[40.8,-74.18]" id="Bloomfield"></Map>
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