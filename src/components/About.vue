<template>
  <div class="section" id="about-section">
    <!-- <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)"> -->
    <v-container>
      <v-row>
        <v-col>
          <div id="subtitle">
            <h1
              class="d-none d-md-block display-2 font-weight-bold text-outline-offset"
            >{{subtitle | allCaps}}</h1>
            <h3
              class="d-md-none text-h1 font-weight-bold text-outline-offset"
            >{{subtitle | allCaps}}</h3>
            <h1 class="d-none d-md-block display-2 font-weight-bold">HOUSING STRUGGLES</h1>
            <h3 class="d-md-none font-weight-bold">HOUSING STRUGGLES</h3>
            <h3>IN HARTFORD COUNTY, CONNECTICUT</h3>
          </div>
          <Card class="align-center" v-bind:heading="heading" v-bind:body="body" id="trigger2"></Card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <CardImage class= "align-center"
      v-bind:image="slides[0].image"
      v-bind:offsetH="slides[0].offsetH"
      v-bind:offsetV="slides[0].offsetV"
      v-bind:rotation="slides[0].rotation"
      v-bind:cardWidth="slides[0].cardWidth"
      v-bind:cardHeight="slides[0].cardHeight"
      v-bind:style="{top:slides[0].offsetV + 'px', left:slides[0].offsetH +'px'}"
      id="reveal"
    ></CardImage>-->
    <!-- </v-img> -->
  </div>
</template>

<script>
import Card from "@/components/Card";
// import CardImage from "@/components/CardImage";

export default {
  name: "About",
  components: {
    Card
    // CardImage
  },
  data() {
    return {
      subtitle: "African Amerian, Puerto Rican and West Indian",
      heading: "About",
      body:
        "Hartford, Connecticut attracted three waves of internal and transnational migrations of African American, Puerto Rican, and West Indian communities that transformed the city’s racial and ethnic landscape. These monumental shifts in mobilities unfolded in many other metropolitan areas in the United States like Chicago and Philadelphia, Harlem and San Francisco in the twentieth century. This project explores the history of migration, housing, settlement, community formation, and succession through the lens of Hartford, one of America’s wealthiest cities at the end of the Civil War.  ",
      slides: [
        {
          image: require("../assets/eastside_men.png"),
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
  },
  mounted() {
    const scene2 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#trigger2",
        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.5,
        // Duration of animation
        duration: 450
      }) // Declaration of animation and attaching to element
      .setClassToggle("#reveal", "visible");
    // Helpful tags for orientation on the screen
    // .addIndicators({ name: "2 (duration: 300)" });
    // Add Scene to controller
    this.$scrollmagic.addScene(scene2);
  }
};
</script>

<style scoped>
.align-right {
  position: relative;
  float: right;
  margin: 20px;
}
.align-center {
  margin: auto;
}
.align-left {
  position: relative;
  float: left;
  margin: 20px;
}
.bod {
  max-width: 500px;
}
#subtitle {
  text-align: center;
}

.section {
  height: 4000px;
}
#reveal {
  opacity: 0;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#reveal.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
#about-section {
  background-image: url("~@/assets/PlacesofOriginUpdate.jpg");
}
</style>