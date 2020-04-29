<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="d-flex" :class="{ 'on-hover': hover }" v-on:click="moveDown">
      <v-img
        :src="require('../assets/mariacolonsanchez.jpg')"
        contain
        aspect-ratio="1"
        height="200"
        class="align-end"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="space-between">
            <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
          </v-row>
        </template>
      </v-img>
      <v-card-text v-show="hover" class="font-weight-bold" v-on:click="moveDown">Maria Colon Sanchez</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>

export default {
  methods: {
    moveDown: function() {
      this.$emit('profileCardClicked')
    // console.log(this.$parent.$parent.$parent.$options.name)
    // console.log(this.$root.$refs);
    }
  }
};
</script>

<style scoped>
.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>