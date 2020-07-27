<template>
  <v-card flat tile :style="{width:cardWidth + 'px'}" v-bind:color="myColor">
    <div class="card-image">
      <v-card flat tile color="lightBlack" class="pa-5 innercard relative"
      :style="{height:cardHeight + 'px'}">
        <!-- <v-card-title class="white--text display-1 font-weight-bold">{{heading}}</v-card-title> -->
        <div class="item">
        <v-col cols="auto">
            <v-img
            class="align-image"
            :style="{top:offsetV + 'px',left:offsetH +'px', transform: 'rotate('+ rotation + 'deg)'}"
            v-bind:src="image">
            </v-img>
        </v-col>
        </div>
      </v-card>
      <v-card v-if="caption" flat tile color="lightBlack" class="pa-5 innercard relative">
        <!-- <v-card-title class="white--text display-1 font-weight-bold">{{heading}}</v-card-title> -->
        <v-card-text class="white--text font-weight-bold">{{caption}}</v-card-text>
      </v-card>
    </div>
  </v-card>
</template>


<script>
export default {
  name: "CardImage",
  data() {
    return {
      cardColors: ["green", "teal", "blue"],
      myColor: null
    };
  },
  props: {
    image: {
      type: String,
      default: "@/assets/logo.png"
    },
    bgColor: {
      type: String,
      default: "green"
    },
    offsetV: {
      type: Number,
      default: 0
    },
    offsetH: {
      type: Number,
      default: 0
    },
    rotation: {
      type: Number,
      default: 0
    },
    cardWidth: {
      type: Number,
      default: 500
    },
    cardHeight: {
      type: Number,
      default: 500
    },
    caption: {
      type: String,
      default: ''
    }
  },
  created() {
    var randomIndex = Math.floor(Math.random() * this.cardColors.length);
    this.myColor = this.cardColors[randomIndex];
  }
};
</script>

<style  scoped>
.card-image {
  margin-top: 30px;
}
.innercard {
  top: 25px;
  left: 25px;
}
.bcard {
  background-color: rgb(81, 159, 200);
  color: rgb(81, 159, 200);
}
.align-image {
  position: absolute;
  width: 500px;
}
.relative {
  position: relative;
}
div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 120px;
}
</style>
