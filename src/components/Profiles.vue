<template>
  <div class="section">
    <h1>Profiles</h1>
    <div v-for="slide in slides" v-bind:key="slide" class="slide">
      <h1>{{slide}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles",
  data() {
    return {
      slides: ["Tenant Activists Profiles", "Historic Firsts"]
    };
  }
};
</script>