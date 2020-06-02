<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="d-flex" :class="{ 'on-hover': hover }" v-on:click="moveDown">
      <v-img
        :src="img"
        contain
        aspect-ratio="1"
        height="350"
        class="align-end"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="space-between">
            <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
          </v-row>
        </template>
      </v-img>
      <v-card-text v-show="hover" class="font-weight-bold">{{name}}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import EventBus from '../event-bus';
export default {
  mounted () {
    // console.log(this.$root)
  },
  methods: {
    moveDown: function() {
      EventBus.$emit('PROFILE_NAV_CLICK',this.index)
      // this.$root.navigateToSection(0)
      console.log(this.$root.$children[0])
      this.$root.$children[0].navigateToSection(7 + this.index) //this is not what anyone would recommend doing, but couldn't figure out an alternative
      // this.$emit('to-profile')
      // console.log('profile click')
      // this.$root.$refs.fullpage.api.moveTo(1);  
    // console.log(this.$parent.$parent.$parent.$options.name)
    // console.log(this.$root.$refs);
    }
  },
  data() {
    return {
    }
  },
  props: {
    index: {
      type: Number,
      default: -1
    },
    name:{
      type: String,
      default: "Profile Name"
    },
    img:{
      type: String,
      default: require('../assets/mariacolonsanchez.jpg')
    }
  },
};
</script>

<style scoped>
.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>