<template>
  <div>
    <v-row v-if="showSlides || slidesOnly">
      <div class="slide" v-for="(obj, index) in imgSet" :key="index">
        <v-img :max-height="maxHeight" contain :src="obj.img"></v-img>
      </div>
    </v-row>
    <router-link to="/Map/1234">
      <v-row class="d-md-flex justify-center align-center">
        <v-col
          v-for="(obj, index) in imgSet"
          :key="index"
          :cols="12 / imgSet.length"
        >
          <v-card
            class="elevation-0 d-flex align-center"
            height="85vh"
            v-if="!showSlides && !slidesOnly"
          >
            <v-img contain :src="obj.img" :max-height="maxHeight"></v-img>
          </v-card> </v-col
      ></v-row>
    </router-link>
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