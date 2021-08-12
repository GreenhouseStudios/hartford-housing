<template>
  <div class="section nav-section" id="intro-section">
    <v-sheet height="100vh" width="100vw" color="green">
      <v-container fluid fill-height>
      <v-row justify="center">
        <h1
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
            display-3
            font-weight-bold
            highlight-teal
            text-center
          "
          id="intro-title"
        >
          Introduction
        </h1>
      </v-row>
      <v-row class="d-none d-md-flex justify-center">
          <v-card class="pa-5 ma-5" max-width="75%">
            <v-card-title class="display-1 font-weight-bold"
              >Sample Title</v-card-title
            >
            <v-card-text style="font-size: large; line-height: 1.5em">{{
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
      <v-row class="d-flex d-md-none justify-center">
          <v-card max-width="75%">
            <v-card-title class="display-1 font-weight-bold">Sample Title</v-card-title>
            <v-card-text style="font-size: medium; line-height: 1.5em">{{
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
        <v-col cols="" md="3"></v-col>
      </v-row>
      </v-container>
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
#about-heading{
  font-size: 4rem;
}
#about-body{
  font-size: 1.5rem;
}
#m-heading{
  font-weight: 800 !important;
  font-size: 2rem;
}
.v-sheet{
  border-radius: 0;
}
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
  font-size: 2rem;
}
.v-sheet{
  border-radius: 0;
}
</style>