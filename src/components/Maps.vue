<template>
  <div class="section">
    <h1>Maps</h1>
    <div class="ma-5">
      <div class="slide">
      <h2 class="ma-5">Hartford</h2>
      <Map></Map>
      </div>
      <div class="slide">
      <h2 class="ma-5">Bloomfield</h2>
      <Map v-bind:coordinates="[40.8,-74.18]" id="Bloomfield"></Map>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map";
export default {
  name: "Maps",
  components: {
    Map
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>