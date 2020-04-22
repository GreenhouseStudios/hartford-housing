<template>
  <div class="outline">
    <v-card flat tile color="darkBlack" width="520" height="520">
      <v-card flat tile color="lightBlack" width="700" height="500" class="pa-5 innercard">
        <v-card-title class="white--text display-3 font-weight-bold">{{heading}}</v-card-title>
        <v-card-text class="white--text body-1">{{body}}</v-card-text>
      </v-card>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: ["heading", "body"]
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
  outline-width: 5px;
  width: 530px;
  height: 550px;
}
</style>