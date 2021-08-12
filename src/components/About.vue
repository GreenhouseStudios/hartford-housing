<template>
  <div class="section nav-section">
    <v-sheet height="100vh" width="100vw" color="teal" class="background">
      <v-container fluid fill-height>
        <v-row justify="center">
          <v-col class="d-none d-md-block" md="6">
            <div id="about-heading" class="font-weight-bold">
              <span class="highlight-green">
              {{ heading }}
              </span>
            </div>
            <div id="about-body">{{ body }}</div>
          </v-col>
          <v-col class="d-md-none mx-5 px-5">
            <div id="m-heading">
              <span class="highlight-green">
                {{ heading }}
              </span>
            </div>
            <div>{{ body }}</div>
          </v-col>
          
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
      body: "Hartford, Connecticut attracted three waves of internal and transnational migrations of African American, Puerto Rican, and West Indian communities that transformed the city’s racial and ethnic landscape. These monumental shifts in mobilities unfolded in many other metropolitan areas in the United States like Chicago and Philadelphia, Harlem and San Francisco in the twentieth century. This project explores the history of migration, housing, settlement, community formation, and succession through the lens of Hartford, one of America’s wealthiest cities at the end of the Civil War.  ",
    };
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
};
</script>

<style scoped>
#about-heading{
  font-size: 4rem;
}
#about-body{
  font-size: 1.5rem;
}
#m-heading{
  font-weight: 800 !important;
  font-size: 2rem;
}
.v-sheet{
  border-radius: 0;
}
.background{
  background-image: url("~@/assets/skyline.png");
  background-repeat: no-repeat;
  background-position: center bottom; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100%;
}
</style>