<template>
  <v-hover v-slot:default="{ hover }">
    <v-img :src="img" aspect-ratio="1" v-on:click="moveToProfile">
      <v-spacer></v-spacer>
      <v-card class="d-flex" tile v-if="hover" style="background-color: #FEFEFE">
        <v-card-text class="align-end">{{ name }}</v-card-text>
      </v-card>

    </v-img>
    <!-- <v-card tile :img="img" class="d-flex card" :class="{ 'on-hover': hover }" v-on:click="moveToProfile" style="background-image: url(img)"> -->
    <!-- <v-img :src="img" aspect-ratio="1"></v-img> -->
    <!-- <v-img v-if="!hover" :src="img" aspect-ratio="1" align="end">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="space-between">
          </v-row>
        </template>
      </v-img>
      <v-img v-else :src="img" v-show="hover" aspect-ratio="1" class="picop">
        <span v-show="hover" class="imagetext">{{name}}</span>
      </v-img> -->
    <!-- </v-card> -->
  </v-hover>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$root)
  },
  methods: {
    moveToProfile: function () {
      this.$root.$children[0].navigateToProfile(this.index); //this is not what anyone would recommend doing, but couldn't figure out an alternative
    },
  },
  data() {
    return {};
  },
  props: {
    index: {
      type: Number,
      default: -1,
    },
    name: {
      type: String,
      default: "Profile Name",
    },
    img: {
      type: String,
      default: require("../assets/mariacolonsanchez.jpg"),
    },
  },
};
</script>

<style scoped>
.card:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.imagetext {
  color: black;
  font-weight: bold;
}
.picop {
  opacity: 0.5;
}
</style>