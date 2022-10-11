<template>
  <div
    class="section nav-section"
    style="height: 100vh;"
    id="home-section"
    v-bind:style="{ 'background-image': bgImage }"
  >
    <div class="container">
      <v-img
        :src="require('../assets/homelogo.png')"
      max-height="60vh"
      min-height="400"
      contain
        class="d-none d-md-inline-block"
      >
      </v-img>
      <v-img
        :src="require('../assets/homelogo.png')"
        contain
        min-height="300"
        max-height="500"
        class="d-inline-block d-md-none"
      >
      </v-img>
      <div class="subtitle-container">
        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-none d-md-inline-block font-weight-bold pa-3 h1"
        >
          The story of
          <span class="r-slant">Race</span>,
          <span class="l-slant-teal">Migration</span> and
          <span class="highlight-green">Mobility</span> in Hartford
        </v-card>
        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-inline-block d-md-none font-weight-bold pa-2"
        >
          The story of
          <span class="r-slant">Race</span>,
          <span class="l-slant-teal">Migration</span> and
          <span class="highlight-green">Mobility</span> in Hartford
        </v-card>
        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-none d-md-inline-block font-weight-bold pa-3 display-2 mt-3"
        >
          By
          <span class="r-slant">Fiona Vernal</span> and
          <span class="l-slant-teal">James Kolb</span>
        </v-card>
        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-inline-block d-md-none font-weight-bold pa-3 mt-3"
        >
          By
          <span class="r-slant">Fiona Vernal</span> and
          <span class="l-slant-teal">James Kolb</span>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
// import CardImage from '@/components/CardImage'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      subtitle:
        "How African Americans, Puerto Ricans and West Indians Made Hartford Home",
    };
  },
  computed: {
    bgImage() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return `url(${require('@/assets/LongHomeBG.png')})`;
        case "sm":
          return `url(${require('@/assets/LongHomeBG.png')})`;
        default:
          return `url(${require('@/assets/HHPHomeBackground.jpg')})`;
      }
    },
  },
};
</script>

<style scoped>
#home-section {
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto;
}
.subtitle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 90vh;
}
</style>