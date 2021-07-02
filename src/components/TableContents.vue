<template>
  <div class="section">
    <v-row justify="center" class="map-section-header py-5 text-outline-offset">
      <h1
        class="
          d-none d-md-block
          map-section-header
          section-header
          display-2
          font-weight-bold
          text-outline-offset
        "
      >
        Maps
      </h1>
      <h1 class="d-md-none section-header display-1 font-weight-bold">Maps</h1>
    </v-row>
    <v-row align="center">
      <v-card align-self="center" class="mx-auto ma-10" width="50vw">
        <v-btn
          class="d-block"
          tile
          elevation="0"
          x-large
          color="blue"
          width="100%"
          @click="navigateToMapSection(3)"
          >Hartford Through Time</v-btn
        >
        <v-btn
          class="d-block"
          tile
          elevation="0"
          x-large
          color="teal"
          width="100%"
          @click="navigateToMapSection(6)"
          >Routes and Roots</v-btn
        >
        <v-btn
          class="d-block"
          tile
          elevation="0"
          x-large
          color="green"
          width="100%"
          @click="navigateToMapSection(10)"
          >Mobilities</v-btn
        >
        <v-btn
          class="d-block"
          tile
          elevation="0"
          x-large
          color="blue"
          width="100%"
          @click="navigateToMapSection(15)"
          >Neighborhood Clusters</v-btn
        >
        <v-btn
          class="d-block"
          tile
          elevation="0"
          x-large
          color="teal"
          width="100%"
          @click="navigateToMapSection(20)"
          >Housing</v-btn
        >
      </v-card>
      <!-- <v-col class="mx-auto">
          
        </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6" class="gallery">
        <v-hover
          v-slot="{ hover }"
          v-for="(tile, index) in tiles"
          :key="index"
          class="ma-3"
        >
          <v-card
            :elevation="hover ? 12 : 2"
            aspect-ratio="1"
            height="12rem"
            width="12rem"
            class="pa-5"
          >
            <v-img :src="tile" contain max-width="10rem" max-height="10rem"></v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TableContents",
  props: {
    tiles: {
      type: Array,
      default: new Array(18).fill({
        img: require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg"),
        caption: "Hartford Through Time",
      }),
    },
  },
  data() {
    return {
      galleryTiles: new Array(18).fill({
        img: require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg"),
        caption: "Hartford Through Time",
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>