<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="d-flex card" :class="{ 'on-hover': hover }" v-on:click="moveDown" style="background-image: url(img)">
      <v-img v-if="!hover" :src="img" aspect-ratio="1" class="align end">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="space-between">
            <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
          </v-row>
        </template>
      </v-img>
      <v-img v-else :src="img" v-show="hover" aspect-ratio="1" class="picop">
        <span v-show="hover" class="imagetext">{{name}}</span>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import EventBus from "../event-bus";
export default {
  mounted() {
    // console.log(this.$root)
  },
  methods: {
    moveDown: function() {
      EventBus.$emit("PROFILE_NAV_CLICK", this.index);
      console.log(this.$root.$children[0]);
      this.$root.$children[0].navigateToSection(7 + this.index); //this is not what anyone would recommend doing, but couldn't figure out an alternative
    }
  },
  data() {
    return {};
  },
  props: {
    index: {
      type: Number,
      default: -1
    },
    name: {
      type: String,
      default: "Profile Name"
    },
    img: {
      type: String,
      default: require("../assets/mariacolonsanchez.jpg")
    }
  }
};
</script>

<style scoped>
.card:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.imagetext {
  color: black;
  font-weight: bold;
}
.picop {
  opacity: 0.5;
}
</style>