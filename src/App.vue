<template>
  <v-app>
    <Nav :sections="sections" v-on:move-to-section="moveToSection"></Nav>
    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
  },
  data: () => ({
    fillerText:
      "Challenges and opportunities; collective impact incubator energize natural resources. Shared value; circular innovate social entrepreneur impact investing change-makers challenges and opportunities B-corp outcomes. Disrupt fairness empower, blended value framework. Boots on the ground; move the needle global, leverage improve the world milestones benefit corporation greenwashing ideate. But; save the world, her body her rights LGBTQ+ a efficient storytelling empower external partners. Framework society circular thought leadership expose the truth strategy strategy big data save the world. Replicable shared value mass incarceration, thought partnership, big data paradigm engaging granular. Grit change-makers triple bottom line energize LGBTQ+ low-hanging fruit thought leadership. Replicable overcome injustice thought partnership empathetic rubric when blended value synergy uplift. Thought provoking innovation thought provoking academic, effective altruism collaborative consumption indicators movements replicable. Shared unit of analysis empower communities innovate youth social enterprise expose the truth. Communities technology; compelling; communities inspiring transparent; social entrepreneurship. Inspirational framework collective impact efficient.",
    tagPrefix: "#",
    sideNav: true,

    fpSections: null,
    navSects: null,
    navNums: [],
    mapNums: [],
    setNums: [],
    sections: [
      {
        title: "Home",
        slides: [],
      },
      {
        title: "About",
        slides: [],
      },
      {
        title: "Introduction",
        slides: [],
      },
      {
        title: "Maps",
        slides: [
          "Hartford Through Time",
          "Routes and Roots",
          "Mobilities",
          "Neighborhood Clusters",
        ],
      },
      {
        title: "Settlement",

        slides: [],
      },
      // {
      //   title: "Housing",
      //   slides: [],
      // },
      {
        title: "Timeline",
        slides: [],
      },
    ],
    menuItems: [
      { title: "Home", path: "/Home" },
      { title: "About", path: "/About" },
      { title: "Introduction", path: "/Introduction" },
      { title: "Maps", path: "/Maps" },
      { title: "Settlement", path: "/Settlement" },
      // { title: "Housing", path: "/Housing" },
      { title: "Timeline", path: "/Timeline" },
    ],
  }),
  methods: {
    moveToSection: function (i, j) {
      // console.log(i)
      if (this.$route.name == "Main") {
        this.move(i, j);
      } else
        this.$router.push("/").then(() => {
          this.move(i, j);
        });
    },
    move: function (i, j) {
      if (j) this.navigateToMapSection(j);
      else window.fullpage_api.moveTo(this.navNums[i] + 1);
    },
    navigateToSlide: function (i, slide) {
      if (this.$route.name == "Main")
        window.fullpage_api.moveTo(this.navNums[i] + 1, slide);
      else
        this.$router.push("/").then(() => {
          window.fullpage_api.moveTo(this.navNums[i] + 1, slide);
        });
    },
    navigateToMapSection: function (i) {
      var section = this.mapNums[i];
      console.log(section);
      window.fullpage_api.moveTo(section + 1);
    },
    navigateToMapSet: function (i) {
      console.log(this.setNums[i]);
      console.log(this.fpSections[this.setNums[i]]);
      window.fullpage_api.moveTo(this.setNums[i] + 1);
    },
  },
  mounted() {
    //List of divs with fullpagejs section class
    this.fpSections = Array.from(this.$el.querySelectorAll(".section"));

    //sections that should be reachable by clicking on the top nav buttons
    this.navSects = Array.from(this.$el.querySelectorAll(".nav-section"));
    //fullpage sections that are nav sections
    var matches = this.fpSections.filter((x) => this.navSects.includes(x));
    this.navNums = matches.map((x) => this.fpSections.indexOf(x));

    //divs marked with a class map-chapter
    var mapChapterDivs = Array.from(this.$el.querySelectorAll(".map-chapter"));
    //map-chapter divs that are also fullpage sections
    var fpMapChapters = this.fpSections.filter((x) =>
      mapChapterDivs.includes(x)
    );
    this.mapNums = fpMapChapters.map((x) => this.fpSections.indexOf(x));

    var mapSets = Array.from(this.$el.querySelectorAll(".map"));
    var fpMapSets = this.fpSections.filter((x) => mapSets.includes(x));
    this.setNums = fpMapSets.map((x) => this.fpSections.indexOf(x));
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
html {
  height: 100%;
  min-height: 100%;
}
body {
  min-height: 100%;
}
v-application {
  font-display: fallback;
  font-family: "Gilroy Extrabold" !important,
    // first choice font
    "Helvetica",
    // fallback font if gilroy is not downloaded yet
    "sans-serif"; // last resort, bottom of the barrel
  overflow-x: hidden !important;
}
v-app-bar {
  z-index: 10;
}
.v-btn {
  font-weight: 800 !important;
}
v-footer {
  z-index: 20;
}
v-footer a {
  margin: 100px 100px;
  padding: 100px;
}
.footer-link {
  text-decoration: none;
}
.inline-link {
  font-weight: bold;
  color: #72b591;
  text-decoration: none;
}
h3 {
  margin: 0 auto;
  top: 100px;
}
@media only screen and (max-width: 400px) {
  .fp-slidesNav.fp-bottom {
    bottom: 10px;
    margin: auto;
    width: 300px;
    z-index: 1;
    ul {
      text-align: center;
      width: 100%;
      padding-left: 0px !important;
    }
  }
}
@media only screen and (max-width: 600px) {
  .fp-slidesNav.fp-bottom {
    bottom: 30px;
    margin: auto;
    width: 300px;
    z-index: 1;
    ul {
      text-align: center;
      width: 100%;
      padding-left: 0px !important;
    }
  }
}
@media only screen and (min-width: 600px) {
  .fp-slidesNav.fp-bottom {
    bottom: 120px;
    margin: 0 auto;
    width: 400px;
    z-index: 1;
    ul {
      text-align: center;
      width: 100%;
      padding-left: 0px !important;
    }
  }
}
.fp-tableCell {
  vertical-align: top;
}
#site-title {
  text-decoration: none;
  color: white;
  font-weight: 800;
}

.text-outline {
  -webkit-text-stroke: 1px #72b591;
}

.text-outline-offset {
  text-shadow: -3px -3px black;
  -webkit-text-fill-color: rgb(0, 0, 0, 0);
  -webkit-text-stroke: 1px #72b591;
}

.section-header {
  text-align: center;
  top: -50px;
}
.centertext {
  width: 100%;
  text-align: center;
}

.highlight {
  position: relative;
}
.highlight:before,
.highlight:after {
  content: " ";
  display: block;
  height: 110%;
  width: 110%;
  margin-left: -5%;
  margin-right: -5%;
  position: absolute;
  transform: skew(-15deg);
}
.highlight:before {
  background: rgba(252, 130, 29, 1);
  z-index: -100;
}
.highlight-teal {
  @extend .highlight;
  background-color: #72b591;
}
.highlight-blue {
  @extend .highlight;
  background-color: #519ec8;
}
.highlight-green {
  @extend .highlight;
  background-color: #d1d35e;
}
.r-slant {
  @extend .highlight;
  background: rgba(81, 159, 200, 0);
  z-index: 1;
  &::before,
  ::after {
    content: " ";
    background-color: rgb(81, 159, 200);
    display: inline-block;
    height: 80%;
    width: 100%;
    margin: auto;
    margin-top: 3%;
    position: absolute;
    transform: skew(-1deg) rotate(-1deg);
  }
  &::before {
    z-index: -100;
  }
}
.r-slant-teal {
  @extend .r-slant;
  &::before,
  ::after {
    background-color: #72b591;
  }
}
.r-slant-green {
  @extend .r-slant;
  &::before,
  ::after {
    background-color: #d1d35e;
  }
}
.l-slant {
  @extend .r-slant;
  &::before,
  ::after {
    transform: skew(1deg) rotate(1deg);
  }
}
.l-slant-teal {
  @extend .l-slant;
  &::before,
  ::after {
    background-color: #72b591;
  }
}
.l-slant-green {
  @extend .l-slant;
  &::before,
  ::after {
    background-color: #d1d35e;
  }
}
//* Scrollmagic classes -------------------------------------//
#revealscale {
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
#revealscale.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
#revealrise {
  opacity: 0;
  -webkit-transform: translateY(40px);
  -moz-transform: translateY(40px);
  -ms-transform: translateY(40px);
  -o-transform: translateY(40px);
  transform: translateY(40px);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#revealrise.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
#revealslide {
  opacity: 0;
  -webkit-transform: translateX(-60px);
  -moz-transform: translateX(-60px);
  -ms-transform: translateX(-60px);
  -o-transform: translateX(-60px);
  transform: translateX(-60px);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#revealslide.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
#revealslide2 {
  opacity: 0;
  -webkit-transform: translateX(60px);
  -moz-transform: translateX(60px);
  -ms-transform: translateX(60px);
  -o-transform: translateX(60px);
  transform: translateX(60px);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#revealslide2.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
</style>

<style lang="scss">
@mixin text-outline-mixin($offsetx, $offsety) {
  text-shadow: $offsetx $offsety black;
  -webkit-text-fill-color: rgb(0, 0, 0, 0);
  -webkit-text-stroke: 1px #72b591;
}
.text-outline-bottomright {
  @include text-outline-mixin(-3px, -3px);
}
.text-outline-topright {
  @include text-outline-mixin(-3px, 3px);
}
.text-outline-topleft {
  @include text-outline-mixin(3px, 3px);
}
.text-outline-bottomleft {
  @include text-outline-mixin(3px, -3px);
}
.copyright {
  display: inline-flex;
}
.fp-controlArrow.fp-next {
  right: 15px;
  border-width: 38.5px 0 38.5px 34px;
  border-color: transparent transparent transparent #000;
}
.fp-controlArrow.fp-prev {
  left: 15px;
  width: 0;
  border-width: 38.5px 34px 38.5px 0;
  border-color: transparent #000 transparent transparent;
}
a {
  text-decoration: none;
}
</style>