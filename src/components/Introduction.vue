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
              >Introduction</v-card-title
            >
            <v-card-text style="font-size: large; line-height: 1.5em"
              >Hartford Bound recounts the history of three waves of
              transnational and internal migrations of African Americans, West
              Indians, and Puerto Ricans between the 1940s and 2020s. These
              three migration traditions coalesced in Hartford and molded the
              city into a majority-minority enclave. This demographic profile is
              significant for the kinds of histories that emerge about the
              origins of poverty, and the legacies of residential segregation,
              economic inequality, and educational inequities in urban hubs like
              Hartford. Hartford Bound uses an interdisciplinary framework for
              interrogating how and why Hartford became a terminus of not one,
              but three Great Migration traditions and what this period can tell
              us about urban history as well as African American and Caribbean
              history. Drawing on archival research, oral histories, and GIS
              methodologies, Hartford Bound offers new visual and spatial
              narratives for understanding the relationship between migration,
              mobility, urbanization, and community formation. In phase one
              (2020-2022), the primary focus of Hartford Bound is to create a
              platform for hosting 50 maps that will structure the overarching
              narrative. Through a series of 37 maps (50 are planned) and
              animations, the site explores how the decisions of potential
              neighbors, courts, banks, developers, municipal government,
              employers, and housing authorities shaped the places where people
              of color could live, work, and attend school. The maps demonstrate
              the historical connections between Hartford’s old colonial
              identity as a riverine city and its contemporary evolution of
              zoning, land use policies, urban planning, and residential
              segregation. As part of an intricate system designed to immobilize
              communities of color, particular blocks, streets, and
              neighborhoods in Hartford served as stages for a protracted
              struggle over the right of communities of color to live in certain
              sections of the city. In addition to capturing how the places
              where people live are connected to public policy and history,
              therefore, the maps will also explore how Caribbean and African
              American pastoral visions shaped the initial decision to relocate
              to Hartford. Phase two of the project will feature narratives
              drawn from African American, Puerto Rican and West Indians and
              examine the three main sites of origins of Hartford’s new
              majority: Georgia, Jamaica, and Puerto Rico. These places helped
              produce alternative ways of seeing Hartford and countering
              histories of urban decline and malaise, including narrative about
              claim-making, heritage, place-making and
              identity-formation.</v-card-text
            >
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
          <v-card max-width="90%">
            <v-card-title class="display-1 font-weight-bold"
              >Sample Title</v-card-title
            >
            <v-card-text
              class="card-text"
              style="font-size: small; line-height: 1.5em"
              >{{ lorem.generateParagraphs(2) }}</v-card-text
            >
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
#about-heading {
  font-size: 4rem;
}
#about-body {
  font-size: 1.5rem;
}
#m-heading {
  font-weight: 800 !important;
  font-size: 2rem;
}
.v-sheet {
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
.v-sheet {
  border-radius: 0;
}
</style>