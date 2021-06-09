<template>
  <div class="section" id="intro-section">
    <v-sheet height="100vh" width="100vw" color="green">
    <v-container fluid fill-height pa-0>
      <v-row justify="center"
        ><h1
          class="d-none d-md-block display-3 font-weight-bold highlight-teal text-center mt-10"
          id="intro-title"
        >
          Introduction
        </h1>
        <h1 class="d-block d-md-none display-1 font-weight-bold highlight-teal text-center" id="intro-title">
          Introduction
        </h1></v-row
      >
      <v-row></v-row>
    
    </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
  name: "Introduction",
  components: {
    Card,
    CardImage,
  },

};
</script>
<style>
#intro-section {
  background-image: url("~@/assets/HHPHomeBackground.jpg");
  background-position: center center;
  background-size: cover;
    background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto;
}
#intro-title {
  color: white;
}
</style>