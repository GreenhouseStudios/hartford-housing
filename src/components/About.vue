<template>
  <div class="section">
    <!-- <h1>About</h1>
    <div class="bod">
      <p>{{body}}</p>
    </div>-->
    <!-- <div class="outline">
      <v-card flat tile color="darkBlack" width="520" height="520">
        <v-card flat tile color="lightBlack" width="500" height="500" class="pa-5 innercard">
          <v-card-title class="white--text display-3 font-weight-bold">About</v-card-title>
          <v-card-text class="white--text body-1">{{body}}</v-card-text>
        </v-card>
      </v-card>
    </div>-->
    <Card v-bind:heading="heading" v-bind:body="body"></Card>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "About",
  components: {
    Card
  },
  data() {
    return {
      heading: "About",
      body:
        "Hartford, Connecticut attracted three waves of internal and transnational migrations of African American, Puerto Rican, and West Indian communities that transformed the city’s racial and ethnic landscape. These monumental shifts in mobilities unfolded in many other metropolitan areas in the United States like Chicago and Philadelphia, Harlem and San Francisco in the twentieth century. This project explores the history of migration, housing, settlement, community formation, and succession through the lens of Hartford, one of America’s wealthiest cities at the end of the Civil War.  "
    };
  }
};
</script>

<style scoped>
.bod {
  max-width: 500px;
}
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