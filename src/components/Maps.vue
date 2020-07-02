<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <h1 class="d-none d-md-block section-header display-2 font-weight-bold">Maps</h1>
      <h1 class="d-md-none section-header display-1 font-weight-bold">Maps</h1>
      <div class="section">
        <!-- <h2 class="ma-5">African American Population Percentage - 1940</h2> -->
        <Map
          jsonFile="pop1940"
          id="pop1940"
          v-bind:zoomLevel="13"
          title="African American Population Percentage - 1940"
        ></Map>

        <div class="section">
          <!-- <h2 class="ma-5">African American Population Percentage - 1960</h2> -->
          <Map
            jsonFile="pop1960"
            id="pop1960"
            v-bind:zoomLevel="13"
            title="African American Population Percentage - 1960"
          ></Map>
        </div>
        <div class="section">
          <!-- <h2 class="ma-5">African American Population Percentage - 1980</h2> -->
          <Map
            jsonFile="pop1980"
            id="pop1980"
            v-bind:zoomLevel="13"
            title="African American Population Percentage - 1980"
          ></Map>
        </div>
        <div class="section">
          <!-- <h2 class="ma-5">Bloomfield</h2> -->
          <Map v-bind:coordinates="[41.8,-72.73]" id="Bloomfield" title="Bloomfield"></Map>
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
    return {};
  },
  mounted() {
    var panZoomTiger = svgPanZoom("#demo-tiger");
    console.log(panZoomTiger);
  }
};
</script>

<style scoped>
#demo-tiger {
  max-height: 65vh;
  margin: 0 auto;
  width: 500px;
}
</style>