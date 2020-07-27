<template>
  <v-responsive :max-width="cardMaxWidth" max-height="190vh">
    <v-card flat tile v-bind:color="myColor" class="ma-5">
      <!-- <div class="outline"> -->
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-title
          class="backgroundimg d-none d-md-block white--text display-1 font-weight-bold break-fix"
        >{{heading}}</v-card-title>
        <v-card-title class="d-md-none white--text font-weight-bold break-fix">{{heading}}</v-card-title>
        <v-card-text class="white--text font-weight-bold">{{body1}}</v-card-text>
        <!-- <v-img v-bind:src="image"></v-img> -->
      </v-card>
      <!-- </div> -->
    </v-card>
    <v-img v-if="body2" src="~@/assets/suitcasedotted.png"></v-img>
    <v-card v-if="body2" flat tile v-bind:color="myColor" class="ma-5">
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-text class="white--text font-weight-bold">{{body2}}</v-card-text>
      </v-card>
    </v-card>
    <v-img v-if="body3" src="~@/assets/traindotted.png"></v-img>
    <v-card v-if="body3" flat tile v-bind:color="myColor" class="ma-5">
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-text class="white--text font-weight-bold">{{body3}}</v-card-text>
      </v-card>
    </v-card>
  </v-responsive>

  
</template>


<script>
export default {
  name: "JourneyCard",
  data() {
    return {
      cardColors: ["green", "teal", "blue"],
      myColor: null
    };
  },
  props: ["heading", "body1", "body2", "body3", "bgColor", "image"],
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
.backgroundimg {
  background-image: url("~@/assets/plaindotted.png");
  background-position: center;
  background-size: cover;
}
.cardspace {
  margin-bottom: 40px;
  display: inline-block;
}
</style>