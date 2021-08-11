<template>
  <div class="d-flex flex-column justify-center">
    <v-row v-if="showSlides || slidesOnly" class="d-flex">
      <div class="slide" v-for="(obj, index) in imgSet" :key="index">
        <div class="d-flex flex-column align-center">
          <v-img :max-height="maxHeight" contain :src="obj.img"></v-img>
        </div>
        
      </div>
      <router-link to="/Map/1" class="display-1 font-weight-bold mx-auto" style="position: absolute; bottom: 80px; right: 46.5vw;"><v-btn>Map Details</v-btn></router-link>
    </v-row>
    <v-row v-else>
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
        </v-card>
      </v-col>
    </v-row>
    <router-link to="/Map/1" class="display-1 font-weight-bold mx-auto"><v-btn>Map Details</v-btn></router-link>
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
      default: "80vh",
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