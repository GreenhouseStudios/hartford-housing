<template>
  <div>
    <v-row v-if="showSlides || slidesOnly">
      <div class="slide" v-for="(obj, index) in imgSet" :key="index">
        <div class="d-flex flex-column align-center">
        <v-img :max-height="maxHeight" contain :src="obj.img"></v-img>
        <router-link to="/Map/1" class="display-1 font-weight-bold">Map Details</router-link>
        </div>
      </div>
    </v-row>
      <v-row class="d-md-flex">
        <v-col
          v-for="(obj, index) in imgSet"
          :key="index"
          :cols="12 / imgSet.length"
        >
          <v-card
            class="d-flex flex-column justify-center align-center"
            height="85vh"
            v-if="!showSlides && !slidesOnly"
            elevation="0"
          >
            <v-img contain :src="obj.img" :max-height="maxHeight"></v-img>
            <router-link to="/Map/1" class="display-1 font-weight-bold">Map Details</router-link>
          </v-card> </v-col
      >
      </v-row>
    
  </div>
</template>

<script>
export default {
  name: "MobileSlidesSection",
  data() {
    return {};
  },
  props: {
    imgSet: {
      type: Array,
    },
    maxHeight: {
      type: String,
      default: "70vh",
    },
    slidesOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSlides() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>