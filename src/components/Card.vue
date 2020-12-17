<template>
  <v-responsive :max-width="cardMaxWidth" max-height="90vh">
    <v-card flat tile v-bind:color="myColor" class="ma-5">
      <!-- <div class="outline"> -->
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-title
          class="d-none d-md-block white--text display-1 font-weight-bold break-fix"
        >{{heading}}</v-card-title>
        <v-card-title class="d-md-none white--text font-weight-bold break-fix">{{heading}}</v-card-title>
        <v-card-text class="white--text font-weight-bold mr-5">{{body}}</v-card-text>
        <!-- <v-img v-bind:src="image"></v-img> -->
        <slot></slot>
      </v-card>
      <!-- </div> -->
    </v-card>
  </v-responsive>
</template>


<script>
export default {
  name: "Card",
  data() {
    return {
      cardColors: ["green", "teal", "blue"],
      myColor: null
    };
  },
  props: ["heading", "body", "bgColor", "image"],
  created() {
    var randomIndex = Math.floor(Math.random() * this.cardColors.length);
    this.myColor = this.cardColors[randomIndex];
  },
  computed: {
    cardMaxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "90vw";
        case "sm":
          return "60vw";
        case "md":
          return "35vw";
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
          return "90vw";
        case "sm":
          return "60vw";
        case "md":
          return "34vw";
        case "lg":
          return "25vw";
        case "xl":
          return "25vw";
      }
      return "25vw";
    }
  }
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
</style>