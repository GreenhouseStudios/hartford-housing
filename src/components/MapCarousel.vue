<template>
  <div>
    <v-carousel height="90vh" hide-delimiter-background>
      <v-carousel-item v-for="(img, i) in images" :src="img" :key="i" style="background-size: contain !important">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "MapCarousel",
  data() {
    return {
      model: 0,
    };
  },
  props: {
    images: {
      type: Array,
      default: [
        require("../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"),
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.v-image{
    background-size: contain !important;
}
</style>