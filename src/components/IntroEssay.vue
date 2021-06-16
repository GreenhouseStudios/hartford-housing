<template>
  <v-container class="px-10">
    <v-card>
      <v-card-title>Essay</v-card-title>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-spacer></v-spacer>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
      <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";
export default {
  data() {
    return {
      lorem: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>