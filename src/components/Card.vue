<template>
  <v-card flat tile max-width="800" v-bind:color="myColor">
    <!-- <div class="outline"> -->
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-title class="white--text display-1 font-weight-bold">{{heading}}</v-card-title>
        <v-card-text class="white--text font-weight-bold">{{body}}</v-card-text>
        <!-- <v-img v-bind:src="image"></v-img> -->
      </v-card>
    <!-- </div> -->
  </v-card>
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
  props: ["heading", "body", "bgColor","image"],
  created(){
    var randomIndex = Math.floor(Math.random()* this.cardColors.length);
    this.myColor = this.cardColors[randomIndex];
  }
  };
</script>

<style  scoped>
.innercard {
  top: 25px;
  left: 25px;
}
.outline {
  outline-style: solid;
  outline-color: #72b591;
  outline-width: 3px;
}
.bcard {
  background-color: rgb(81, 159, 200);
  color: rgb(81, 159, 200);
}
v-card-text{
  font-size: 27pt;
}
</style>