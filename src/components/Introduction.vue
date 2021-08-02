<template>
  <div class="section nav-section" id="intro-section">
    <v-sheet height="100vh" width="100vw" color="green">
      <v-row justify="center"
        ><h1
          class="
            d-none d-md-block
            display-4
            font-weight-bold
            highlight-teal
            text-center
          "
          id="intro-title"
        >
          Introduction
        </h1>
        <h1
          class="
            d-block d-md-none
            display-1
            font-weight-bold
            highlight-teal
            text-center
          "
          id="intro-title"
        >
          Introduction
        </h1></v-row
      >
      <v-row class="mt-10 d-none d-md-flex justify-center">
          <v-card class="pa-10 ma-10" max-width="45%">
            <v-card-title class="display-2 font-weight-bold"
              >Sample Title</v-card-title
            >
            <v-card-text style="font-size: x-large; line-height: 1.5em">{{
              lorem.generateParagraphs(3)
            }}</v-card-text>
            <v-card-actions>
              <a
                href="../assets/PDFs/sample.pdf"
                download
                class="font-weight-bold"
                style="text-decoration: none"
                >Read the Full Essay</a
              >
            </v-card-actions>
          </v-card>
        
      </v-row>
      
      <v-row class="d-flex d-md-none">
        <v-col cols="0" md="3"></v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="font-weight-bold">Sample Title</v-card-title>
            <v-card-text style="font-size: small; line-height: 1.5em">{{
              lorem.generateParagraphs(3)
            }}</v-card-text>
            <v-card-actions>
              <a
                href="../assets/PDFs/sample.pdf"
                download
                class="font-weight-bold"
                style="text-decoration: none"
                >Read the Full Essay</a
              >
            </v-card-actions>
          </v-card>
     
        </v-col>
        <v-col cols="" md="3"></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import { LoremIpsum } from "lorem-ipsum";
export default {
  name: "Introduction",
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