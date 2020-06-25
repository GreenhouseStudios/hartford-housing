<template>
  <v-card flat tile max-width="500" v-bind:color="myColor">
    <!-- <div class="outline"> -->
      <v-card flat tile color="lightBlack" class="pa-5 innercard">
        <v-card-title class="white--text display-1 font-weight-bold">{{heading}}</v-card-title>
        <v-card-text v-if="!readMoreActivated" class="white--text font-weight-bold">{{body.split(" ").slice(0,75).join(' ') + "..."}}</v-card-text>
        <a class="" v-if="!readMoreActivated" @click="readMore" href = "javascript:void(0)"> Read more </a>
        <v-card-text v-if="readMoreActivated" class="white--text font-weight-bold">{{body}}</v-card-text>
        <a class="" v-if="readMoreActivated" @click="showLess" href = "javascript:void(0)"> Show less </a>
        <!-- <v-img v-bind:src="image"></v-img> -->
      </v-card>
    <!-- </div> -->
  </v-card>
</template>


<script>
export default {
  name: "ReadMoreCard",
  data() {
    return {
      cardColors: ["green", "teal", "blue"],
      myColor: null,
      readMoreActivated: false
    };
  },
  props: ["heading", "body", "bgColor","image"],
  created(){
    var randomIndex = Math.floor(Math.random()* this.cardColors.length);
    this.myColor = this.cardColors[randomIndex];
  },
  methods: {
    readMore(){
        this.readMoreActivated = true;
    },
    showLess(){
        this.readMoreActivated = false;
    },
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