<template>
  <div>
    <v-row class="px-5">
      <v-col cols="0" md="4"></v-col>
      <v-col cols="12" md="4">
        <h1 class="pa-4">{{ mapDetail.title }}</h1>
        <v-img
          class="my-5"
          max-width="30vh"
          :src="mapDetail.maps[0].url"
        ></v-img>
        <h3>Description</h3>
        <p>{{ mapDetail.description }}</p>

        <h3>Sources</h3>
        <p
          v-for="src in mapDetail.sources"
          :key="src.text"
          v-html="src.text"
        ></p>
      </v-col>
      <v-col cols="0" md="4"></v-col>
    </v-row>
  </div>
</template>

<script>
import { loremIpsum } from "lorem-ipsum";
import { MAP_DETAILS } from "../map-details";
export default {
  data() {
    return {
      sourcePlaceholder: loremIpsum({ count: 40, units: "words" }),
      mapDetail: MAP_DETAILS[this.$route.params.id - 1],
    };
  },
};
</script>

