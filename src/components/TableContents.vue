<template>
  <div class="section nav-section">
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
          v-for="(item, i) in menuItems"
          :key="item"
          class="d-block"
          tile
          elevation="0"
          x-large
          :color="colors[i]"
          width="100%"
          @click="navigateToMapSection(i)"
          >{{ item }}</v-btn
        >
      </v-card>
   
    </v-row>

    <v-row class="d-flex justify-center">
      
      <v-col class="gallery">
        <v-hover
          v-slot="{ hover }"
          v-for="(tile, index) in tiles"
          :key="index"
          class="ma-2"
        >
            <div class="d-flex align-center justify-center">
              <v-card
                :elevation="hover ? 12 : 2"
                height="12em"
                width="12em"
                class="d-flex-column align-center justify-center"
                @click="navigateToMapSet(index)"
                style="overflow: hidden"
              >
                <v-img
                  :src="tile.img"
                  :title="tile.title"
                  height="12rem"
                ></v-img>
                <div
                  style="
                    position: absolute;
                    bottom: 0;
                    background-color: #111;
                    width: 100%;
                    height: 25%;
                  "
                  class="
                    pa-2
                    white--text
                    caption
                    text-center
                    d-flex
                    justify-center
                    align-center
                  "
                >
                  <h3>{{ tile.title }}</h3>
                </div>
              </v-card>
            </div>
        </v-hover>
      </v-col>
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
    menuItems: {
      type: Array,
      default: () => [
        "Hartford Through Time",
        "Routes and Roots",
        "Mobilities",
        "Neighborhood Clusters",
        "Housing",
      ],
    },
  },
  data() {
    return {
      colors: ["blue", "teal", "green", "blue", "teal", "green"],
    };
  },
  methods: {
    navigateToMapSection(i) {
      this.$root.$children[0].navigateToMapSection(i);
    },
    navigateToMapSet(i) {
      this.$root.$children[0].navigateToMapSet(i);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and(max-width: 600px) {
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  max-width: 90%;
  justify-content: center;
}  
}
@media only screen and(min-width: 600px) {
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  max-width: 50%;
  justify-content: center;
}  
}
</style>