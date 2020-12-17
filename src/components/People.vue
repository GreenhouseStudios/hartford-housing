<template>
  <div>
    <h1 class="pa-5">PEOPLE</h1>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-row v-for="(person, index) in people" v-bind:key="index" class="pa-5">
          <a class="font-weight-bold" :href="person.link">{{person.name}}</a>
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
        { name: "DR. FIONA VERNAL", link: "https://greenhousestudios.uconn.edu/person/fiona-vernal//"},
        { name: "LAURA BEDOYA" },
        { name: "MALACHI BRIDGES" },
        { name: "GEORGIA BROWN" },
        { name: "AALIYAH CAMPBELL" },
        { name: "JAMES KOLB", link: "https://greenhousestudios.uconn.edu/person/james-kolb/"},
        { name: "STEPHANIE ORTS", link: "https://www.stephanieorts.com/"},
        { name: "TOM LEE", link: "https://greenhousestudios.uconn.edu/person/tom-lee/" },
        { name: "MACKENZIE FOX", link: "https://greenhousestudios.uconn.edu/person/mackenzie-fox/"}
      ]
    };
  }
};
</script>

<style scoped>
</style>