<template>
  <v-card flat tile :style="{width:cardWidth + 'px'}" v-bind:color="myColor">
    <div class="outline">
      <v-card flat tile color="lightBlack" class="pa-5 innercard relative"
      :style="{height:cardHeight + 'px'}">
        <v-card-title class="white--text display-1 font-weight-bold">{{heading}}</v-card-title>
        <v-col cols="auto">
          <v-img
          class="align-image"
          :style="{top:offsetV + 'px',left:offsetH +'px', transform: 'rotate('+ rotation + 'deg)'}"
          v-bind:src="image">
          </v-img>
        </v-col>
      </v-card>
    </div>
  </v-card>
</template>


<script>
export default {
  name: "CardImage",
  data() {
    return {
      cardColors: ['green','teal','blue'],
      myColor: null,
    };
  },
  props: ["image", "bgColor", "offsetV", "offsetH", "rotation", "cardWidth", "cardHeight"],
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
  margin-top: 50px;
  outline-style: solid;
  outline-color: #72b591;
  outline-width: 3px;
}
.bcard{
  background-color: rgb(81, 159, 200);
  color:rgb(81, 159, 200);
}
.align-image{
  position: absolute;
  width: 500px;
}
.relative{
  position: relative;
}
</style>
