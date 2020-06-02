<template>
  <div class="section">
    <!-- <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)"> -->
      <div id="subtitle">
        <h1 class="display-2 font-weight-bold text-outline-offset">{{subtitle | allCaps}}</h1>
        <h1 class="display-2 font-weight-bold">HOUSING STRUGGLES</h1>
        <h3>IN HARTFORD COUNTY, CONNECTICUT</h3>
      </div>
      <Card v-bind:heading="heading" v-bind:body="body"></Card>
      <CardImage v-bind:image="slides[0].image" v-bind:offsetH="slides[0].offsetH" 
        v-bind:offsetV="slides[0].offsetV" v-bind:rotation="slides[0].rotation"
        v-bind:cardWidth="slides[0].cardWidth" v-bind:cardHeight="slides[0].cardHeight"
        v-bind:style="{top:slides[0].offsetV + 'px', left:slides[0].offsetH +'px'}">
        </CardImage>
    <!-- </v-img> -->
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";

export default {
  name: "About",
  components: {
    Card,
    CardImage
  },
  data() {
    return {
      subtitle: "African Amerian, Puerto Rican and West Indian",
      heading: "About",
      body:
        "Hartford, Connecticut attracted three waves of internal and transnational migrations of African American, Puerto Rican, and West Indian communities that transformed the city’s racial and ethnic landscape. These monumental shifts in mobilities unfolded in many other metropolitan areas in the United States like Chicago and Philadelphia, Harlem and San Francisco in the twentieth century. This project explores the history of migration, housing, settlement, community formation, and succession through the lens of Hartford, one of America’s wealthiest cities at the end of the Civil War.  ",
      slides:[
        {
          image: require('../assets/eastside_men.png'),
          offsetH: "25",
          offsetV: "25",
          rotation: "0",
          cardWidth: "550",
          cardHeight: "410"
        }
      ]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    allCaps: function(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
.bod {
  max-width: 500px;
}
#subtitle {
  text-align: center;
}
h1 {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(81, 159, 200, 0) 30%,
    rgb(81, 159, 200) 30%
  );
}
h1::after {
  content: "";
  background-color: rgb(81, 159, 200);
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
v-parallax{
  /* height: 2000px; */
}
.section{
  height: 4000px;
}
</style>