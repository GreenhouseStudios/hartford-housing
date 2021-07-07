<template>
  <div>
    <v-row class="px-5">
        <v-col cols="4"></v-col>
      <v-col cols="4">
        <h1 class="pa-4">Map Set Detail</h1>
        <v-img class="my-5" max-width="30vh" :src="require('../assets/Maps/Final/BoundariesThroughTime/thumbnail_cityboundaries_labels.jpg')"></v-img>
        <h3>Description</h3>
        <p>{{ sourcePlaceholder }}</p>

        <h3>Sources</h3>
        <p>{{ sourcePlaceholder }}</p>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>

  </div>
</template>

<script>
import { loremIpsum } from "lorem-ipsum";
export default {
  data() {
    return {
      sourcePlaceholder: loremIpsum({ count: 40, units: "words" }),
    };
  },
};
</script>

