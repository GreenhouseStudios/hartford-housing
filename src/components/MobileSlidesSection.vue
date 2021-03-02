<template>
  <div>
    <v-row v-if="showSlides || slidesOnly">
      <div class="slide" v-for="(obj,index) in imgSet" :key="index">
        <v-img :max-height="maxHeight" contain :src="obj.img"></v-img>
      </div>
    </v-row>
    <v-row class="d-none d-md-block" v-if="!showSlides && !slidesOnly">
      <v-col class="d-flex">
        <v-img
          v-for="(obj,index) in imgSet"
          :key="index"
          contain
          :src="obj.img"
          :max-height="maxHeight"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MobileSlidesSection",
  data() {
      return {
      }
  },
  props: {
    imgSet: {
      type: Array,
    },
    maxHeight: {
      type: String,
      default: "90vh",
    },
    slidesOnly:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    showSlides() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>