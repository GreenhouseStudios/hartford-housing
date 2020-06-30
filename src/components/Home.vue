<template>
  <div class="section" id="home-section">
    <!-- <v-parallax :src="require('../assets/housegridtint.png')" height="110vh" id="home-background"> -->
    <v-container>
      <v-row>
        <v-col>
          <div id="title" style="z-index: 4"></div>
          <v-img :src="require('../assets/homelogo.png')" contain max-height="600" id="logo"></v-img>
          <div id="subtitle" style="z-index: 2">
            <h1 class="d-none d-md-block display-2 font-weight-bold">
              How
              <span class="highlight">African Americans</span>,
              <span class="highlight-teal">Puerto Ricans</span> and
              <span class="highlight-green">West Indians</span> Made Hartford Home
            </h1>
            <h2 class="d-md-none font-weight-bold">
              How
              <span class="highlight">African Americans</span>,
              <span class="highlight-teal">Puerto Ricans</span> and
              <span class="highlight-green">West Indians</span> Made Hartford Home
            </h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-parallax> -->
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
          cardHeight: "500"
        }
      ]
    };
  }
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
  position: relative;
  text-align: center;
  top: -130px;
  margin: auto;
  padding: 20px 0;
}
#title {
  position: relative;
  text-align: center;
  margin: auto;
  padding: 20px 0;
  height: 15vh;
  width: 100vw;
  font-size: 100rem;
}
#logo {
  top: -130px;
}
#home-section {
  background-image: url("~@/assets/housegridtint.png");
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