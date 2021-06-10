<template>
  <div id="slide-bg" v-bind:background-image="background">
    <v-responsive :max-width="cardMaxWidth" max-height="90vh">
      <!-- <div class="outline"> -->
      <v-card flat tile color="lightBlack" class="d-none d-md-block pa-3 mx-10">
        <v-card-title
          class="d-none d-md-block white--text display-1 font-weight-bold break-fix pa-4"
          >{{ heading }}</v-card-title
        >
        <v-card-text
          class="d-none d-sm-block white--text font-weight-bold pa-4"
          >{{ body }}</v-card-text
        >
        <v-card-actions> <v-btn tile @click="$root.$children[0].navigateToSources()">Sources</v-btn></v-card-actions>
      </v-card>
      <v-overlay :value="overlay" opacity="0.95" class="pa-3">
        <v-card @click="overlay = !overlay">
          <v-card-title
            class="d-block d-md-none white--text font-weight-bold break-fix pa-1"
            style="font-size: 18px; line-height: 6vw"
            >{{ heading }}</v-card-title
          >
          <v-card-text
            class="d-block d-sm-none white--text font-weight-bold pa-1"
            style="font-size: 12px; line-height: 5vw"
            >{{ body }}</v-card-text
          >
        </v-card>
      </v-overlay>
       <v-btn class="d-block d-md-none ml-5" @click="overlay = !overlay" icon
        ><v-icon>mdi-information</v-icon></v-btn
      >
    </v-responsive>
  </div>
</template>


<script>
import { loremIpsum } from "lorem-ipsum";
export default {
  name: "Caption",
  data() {
    return {
      overlay: false,
    };
  },
  props: {
    heading: {
      type: String,
      default: "Heading",
    },
    body: {
      type: String,
      default: loremIpsum({ count: 20 }),
    },
    image: {
      type: String,
      default: null,
    },
    background: {
      type: String,
      default: null,
    },
  },
  computed: {
    cardMaxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "98vw";
        case "sm":
          return "75vw";
        case "md":
          return "50vw";
        case "lg":
          return "35vw";
        case "xl":
          return "35vw";
      }
      return "25vw";
    },
    cardFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "50vw";
        case "sm":
          return "75vw";
        case "md":
          return "50vw";
        case "lg":
          return "25vw";
        case "xl":
          return "25vw";
      }
      return "25vw";
    },
  },
};
</script>

<style  scoped>
v-card {
  max-width: 20vw;
  max-height: 80vh;
  text-overflow: ellipsis;
}
v-card-title {
  word-break: keep-all;
}
v-card-text {
  text-overflow: ellipsis;
  word-break: keep-all;
}
.break-fix {
  word-break: keep-all;
}
.innercard {
  top: 2vh;
  left: 2vw;
  overflow: visible;
  padding: 5%;
}
.outline {
  outline-style: solid;
  outline-color: #72b591;
  outline-width: 3px;
}
.bcard {
  max-width: 80vw;
  max-height: 100vh;
  background-color: rgb(81, 159, 200);
  color: rgb(81, 159, 200);
}
v-card-text {
  font-size: 16pt;
}
#slide-bg {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>