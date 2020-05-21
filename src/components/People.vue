<template>
  <div>
    <h1 class="pa-5">PEOPLE</h1>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-row v-for="(person, index) in people" v-bind:key="index" class="pa-5">
          <a class="font-weight-bold">{{person.name}}</a>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PEOPLE",
  data() {
    return {
      people: [
        { name: "DR. FIONA VERNAL" },
        { name: "LAURA BEDOYA" },
        { name: "MALACHI BRIDGES" },
        { name: "GEORGIA BROWN" },
        { name: "AALIYAH CAMPBELL" },
        { name: "JAMES KOLB"},
        { name: "STEPHANIE ORTS"},
        { name: "TOM LEE" },
        { name: "MACKENZIE FOX"}
      ]
    };
  }
};
</script>

<style scoped>
</style>