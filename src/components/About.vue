<template>
  <div class="section" id="about-section">
    <v-sheet height="100vh" width="100vw" color="teal">
      <v-container fluid fill-height>
        <v-row>
          <div id="trigger2"></div>
          <Card
            class="align-center"
            v-bind:heading="heading"
            v-bind:body="body"
            id="revealrise"
          >
          </Card>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";

export default {
  name: "About",
  components: {
    Card,
    CardImage,
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
          cardHeight: "410",
        },
      ],
    };
  },
  methods: {
    navigateToSection() {
      this.$root.$children[0].navigateToSection(3);
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    allCaps: function (value) {
      return value.toUpperCase();
    },
  },
  mounted() {
    const scene2 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#trigger2",
        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.7,
        // Duration of animation
        duration: "99%",
      }) // Declaration of animation and attaching to element
      .setClassToggle("#revealrise", "visible");
    // Helpful tags for orientation on the screen
    // .addIndicators({ name: "2 (duration: 300)" });
    // Add Scene to controller
    this.$scrollmagic.addScene(scene2);
  },
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

#about-section {
  /* background-image: url("~@/assets/Maps/Final/Origins/NoLabelmod1.jpg"); */
  background-position: center center;
  background-size: 10%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>