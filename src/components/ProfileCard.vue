<template>
  <v-hover v-slot:default="{ hover }">
    <v-img :src="img" aspect-ratio="1" v-on:click="moveToProfile">
      <!-- <span style="background-color: #fefefe" class="h6 pa-1" justify="center">{{name}}</span> -->
      <v-row v-if="hover">
        <v-card tile style="background-color: #fefefe" class="to-bottom" min-width="100%" align-end>
          <v-card-title class="pa-2 h6 justify-center fix">{{ name }}</v-card-title>
        </v-card>
      </v-row>
    </v-img>
  </v-hover>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$root)
  },
  methods: {
    moveToProfile: function () {
      this.$root.$children[0].navigateToProfile(this.index); //this is not what anyone would recommend doing, but couldn't figure out an alternative
    },
  },
  data() {
    return {};
  },
  props: {
    index: {
      type: Number,
      default: -1,
    },
    name: {
      type: String,
      default: "Profile Name",
    },
    img: {
      type: String,
      default: require("../assets/mariacolonsanchez.jpg"),
    },
  },
};
</script>

<style scoped>
/* .card:after {
  content: "";
  display: block;
  padding-bottom: 100%;
} */
.imagetext {
  color: black;
  font-weight: bold;
}
.picop {
  opacity: 0.5;
}
.to-bottom {
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.fix {
    overflow-wrap: anywhere;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
}
</style>