<template>
  <div>
    <v-row v-if="showSlides || slidesOnly">
      <div class="slide" v-for="(obj, index) in imgSet" :key="index">
        <v-img :max-height="maxHeight" contain :src="obj.img"></v-img>
      </div>
    </v-row>
    <router-link to="/Map/1234">
    <v-card
      class="d-none d-md-block elevation-0"
      height="100vh"
      width="100vw"
      align-content="center"
      justify-content="center"
      v-if="!showSlides && !slidesOnly"
    >
      <v-row>
        <v-col
          v-for="(obj, index) in imgSet"
          :key="index"
          class="d-flex my-auto"
          :cols="12 / imgSet.length"
        >
          <v-img contain :src="obj.img" :max-height="maxHeight"></v-img> </v-col
      ></v-row>
    </v-card>
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
      default: "90vh",
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