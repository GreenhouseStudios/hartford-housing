<template>
  <div class="section" id="home-section">
    <v-container fluid fill-height>
      <v-row align="start" class="mb-12">
        <v-img
          :src="require('../assets/homelogo.png')"
          contain
          max-height="65vh"
        ></v-img>

        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-none d-md-block font-weight-bold pa-3 h2"
          max-width="40vw"
        >
          How
          <span class="r-slant">African Americans</span>,
          <span class="l-slant-teal">Puerto Ricans</span> and
          <span class="highlight-green">West Indians</span> Made Hartford Home
        </v-card>
        <v-card
          tile
          color="white"
          id="subtitle"
          class="d-block d-md-none font-weight-bold pa-2"
        >
          How
          <span class="r-slant">African Americans</span>,
          <span class="highlight-teal">Puerto Ricans</span> and
          <span class="l-slant-green">West Indians</span> Made Hartford Home
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import CardImage from '@/components/CardImage'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      subtitle:
        "How African Americans, Puerto Ricans and West Indians Made Hartford Home",
      slides: [
        {
          image: require("../assets/pubhousingmap.jpg"),
          offsetH: "0",
          offsetV: "100",
          rotation: "-90",
          cardWidth: "400",
          cardHeight: "500",
        },
      ],
    };
  },
};
</script>

<style scoped>
.align-right {
  position: relative;
  float: right;
  margin: 20px;
  margin-right: 40px;
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
  margin: auto;
}
#home-section {
  background-image: url("~@/assets/HomeBGFixed.png");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
}
/* h1 {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(81, 159, 200, 0) 30%,
    rgb(81, 159, 200) 30%
  );
} */
/* h1::after {
  content: "";
  background-color: rgb(81, 159, 200);
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
} */
/* .right-align{
  position: relative;
  right: 0;
} */
</style>