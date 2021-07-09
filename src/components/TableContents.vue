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
          v-for="(item,i) in menuItems" :key="item"
          class="d-block"
          tile
          elevation="0"
          x-large
          :color="colors[i]"
          width="100%"
          @click="navigateToMapSection(i)"
          >{{item}}</v-btn
        >
      </v-card>
      <!-- <v-col class="mx-auto">
          
        </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="12" md="6" class="gallery">
        <v-hover
          v-slot="{ hover }"
          v-for="(tile, index) in tiles"
          :key="index"
          class="ma-2"
        >
        <v-responsive :aspect-ratio="1">
          <div class="d-flex-column align-center justify-center">
          <v-card
            :elevation="hover ? 12 : 2"
            height="200"
            width="200"
            class="pa-2 d-flex-column align-center justify-center"
            @click="navigateToMapSet(index)"
          >
            <v-img :src="tile.img" :title="tile.title" max-width="100%" max-height="100%"></v-img>
            <div style="position: absolute; bottom: 0; background-color:#FFF; width:100%;"  class="pa-2 text-center d-flex justify-center align-center">
              <h3>{{tile.title}}</h3>  
            </div>
          </v-card>
          </div>
          </v-responsive>
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
    menuItems: {
      type: Array,
      default: ['Hartford Through Time',
        'Routes and Roots',
        'Mobilities',
        'Neighborhood Clusters',
        'Housing'
      ]
    }
  },
  data() {
    return {
      colors: ["blue","teal","green","blue","teal","green"]
    };
  },
  methods: {
    navigateToMapSection(i) {
      this.$root.$children[0].navigateToMapSection(i);
    },
    navigateToMapSet(i){
      this.$root.$children[0].navigateToMapSet(i);
    }
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