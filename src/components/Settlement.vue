<template>
  <div class="section">
    <h1>Settlement</h1>
    <div v-for="slide in slides" v-bind:key="slide" class="slide">
      <h1>{{slide}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settlement",
  data() {
    return {
      slides: [
        "Journeys",
        "Georgia,Puerto Rico, Jamaica",
        "African American Settlement",
        "West Indian Settlement",
        "Puerto Rican Settlement",
        "Headlines"
      ]
    };
  }
};
</script>

<style scoped>
.slide{
  background-color: rgb(81, 159, 200);
}
</style>