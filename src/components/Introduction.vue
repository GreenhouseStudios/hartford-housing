<template>
  <div class="section" id="intro-section">
    <v-sheet height="100vh" width="100vw" color="green">
      <v-container fluid fill-height pa-0>
        <v-row justify="center"
          ><h1
            class="
              d-none d-md-block
              display-3
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
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-card class="pa-10">
              <v-card-title></v-card-title>
              <v-card-text>{{ lorem.generateParagraphs(3) }}</v-card-text>
              <v-card-text>{{ lorem.generateParagraphs(4) }}</v-card-text>
              <v-card-actions>
                <v-btn @click="$router.push({name:'Essay'})">Read the Full Essay</v-btn>
              </v-card-actions>
            </v-card>
            <!-- <Card></Card> -->
          </v-col>
          <v-col cols="3"></v-col>
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