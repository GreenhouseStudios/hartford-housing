<template>
  <v-app>
    <v-app-bar app fixed color="darkBlack" dark hide-on-scroll>
      <router-link to="/" id="site-title">
        <v-toolbar-title>Hartford Bound</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- Desktop nav -->
      <v-toolbar-items class="d-none d-md-block">
        <v-menu
          v-for="(section,i) in sections"
          :open-on-hover="true"
          :offset-y="true"
          :key="section.title"
        >
          <template v-slot:activator="{ on }">
            <v-btn text @click="navigateToSection(i)" dark v-on="on">{{section.title}}</v-btn>
          </template>
          <v-list v-if="sections[i].slides.length">
            <v-list-item
              v-for="(item, index) in section.slides"
              @click="navigateToSlide(i,index)"
              :key="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <!-- Mobile Nav -->
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            class="d-md-none ma-1"
            color="white"
            @click="drawer"
            v-bind="attrs"
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(section,j) in sections"
            :key="section.title"
            @click="navigateToSection(j)"
          >
            <v-list-item-title>{{ section.title }}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <router-link to="/People" class="pr-4 footer-link">People</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/Funders" class="pr-4 footer-link">Funders</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/Contact" class="pr-4 footer-link">Contact</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/Permissions" class="pr-4 footer-link">Permissions</router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <full-page ref="fullpage" :options="options" id="fullpage" v-if="$route.name == 'Main'">
        <router-view></router-view>
      </full-page>
      <!-- I mean, I guess this works... -->
      <router-view v-else></router-view>
    </v-content>

    <v-footer app color="darkBlack" class="font-weight-bold d-none d-lg-flex" id="footer">
      <v-col>
        <router-link to="/People" class="pr-4 footer-link">People</router-link>
        <router-link to="/Funders" class="pr-4 footer-link">Funders</router-link>
        <router-link to="/Contact" class="pr-4 footer-link">Contact</router-link>
        <router-link to="/Permissions" class="pr-4 footer-link">Permissions</router-link>
      </v-col>
      <v-spacer></v-spacer>
      <span class="white--text pr-4">&copy; {{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    fillerText:
      "Challenges and opportunities; collective impact incubator energize natural resources. Shared value; circular innovate social entrepreneur impact investing change-makers challenges and opportunities B-corp outcomes. Disrupt fairness empower, blended value framework. Boots on the ground; move the needle global, leverage improve the world milestones benefit corporation greenwashing ideate. But; save the world, her body her rights LGBTQ+ a efficient storytelling empower external partners. Framework society circular thought leadership expose the truth strategy strategy big data save the world. Replicable shared value mass incarceration, thought partnership, big data paradigm engaging granular. Grit change-makers triple bottom line energize LGBTQ+ low-hanging fruit thought leadership. Replicable overcome injustice thought partnership empathetic rubric when blended value synergy uplift. Thought provoking innovation thought provoking academic, effective altruism collaborative consumption indicators movements replicable. Shared unit of analysis empower communities innovate youth social enterprise expose the truth. Communities technology; compelling; communities inspiring transparent; social entrepreneurship. Inspirational framework collective impact efficient.",
    tagPrefix: "#",
    sideNav: true,
    drawer: false,
    sections: [
      {
        title: "Home",
        slides: []
      },
      {
        title: "About",
        slides: []
      },
      {
        title: "Introduction",
        slides: [
          "Introduction: “And the Migrants Kept Coming”",
          "African American Settlement",
          "Puerto Rican Settlement",
          "West Indian Settlement"
        ]
      },
      {
        title: "Maps",
        slides: []
      },
      {
        title: "Settlement",
        slides: [
          "Journeys",
          "Georgia,Puerto Rico, Jamaica",
          "African American Settlement",
          "West Indian Settlement",
          "Puerto Rican Settlement",
          "Headlines",
          "Juxtapose test"
        ]
      },
      {
        title: "Housing",
        slides: [
          "Post WWII Housing Crisis",
          "Public Housing",
          "Charter House Terrace",
          "Bellevue Square",
          "Redlining",
          "Home Ownership",
          "Slumlords Now, Slumlords Then",
          "Housing Code Violations",
          "The No More Slumlords Campaign"
        ]
      },
      {
        title: "Timeline",
        slides: []
      },
      {
        title: "Profiles",
        slides: ["Tenant Activists Profiles", "Historic Firsts"]
      }
    ],
    menuItems: [
      { title: "Home", path: "/Home" },
      { title: "About", path: "/About" },
      { title: "Introduction", path: "/Introduction" },
      { title: "Maps", path: "/Maps" },
      { title: "Settlement", path: "/Settlement" },
      { title: "Housing", path: "/Housing" },
      { title: "Timeline", path: "/Timeline" },
      { title: "Profiles", path: "/Profiles" }
    ],
    options: {
      licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
      // menu: "#menu",
      navigation: false,
      navigationPosition: "right",
      // sectionSelector: '.section',
      // slideSelector: '.fp-slide',
      fitToSection: false,
      autoScrolling: false, //this breaks app bar hiding
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      controlArrows: false,
      verticalCentered: true,
      parallax: true,
      anchors: [
        "Home",
        "About",
        "Introduction",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Maps",
        "Settlement",
        "Housing",
        "Timeline",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles",
        "Profiles"
      ],
      sectionsColor: ["#FFFFFF"]
    }
  }),
  methods: {
    moveDown: function() {
      this.$refs.fullpage.api.moveSectionDown();
    },
    navigateToSection: function(i) {
      if (i > 3) i += 9;
      if (this.$route.name == "Main") this.$refs.fullpage.api.moveTo(i + 1);
      else
        this.$router.push("/").then(() => {
          this.$refs.fullpage.api.moveTo(i + 1);
        });
    },
    navigateToSlide: function(i, index) {
      if (i > 3) i += 9;
      if (this.$route.name == "Main") {
        this.$refs.fullpage.api.moveTo(i + 1, index);
      } else
        this.$router.push("/").then(() => {
          this.$refs.fullpage.api.moveTo(i + 1, index);
        });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
v-application {
  font-family: "Gilroy Extrabold" !important;
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
h3 {
  margin: 0 auto;
  top: 100px;
}
@media only screen and (max-width: 400px) {
  .fp-slidesNav.fp-bottom {
    bottom: 10px;
    margin: auto;
    width: 600px;
    z-index: 1;
  }
}
@media only screen and (max-width: 600px) {
  .fp-slidesNav.fp-bottom {
    bottom: 30px;
    margin: auto;
    width: 600px;
    z-index: 1;
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
html,
body {
  max-width: 100vw;
  overflow-x: hidden !important;
}
body {
  position: relative;
}
.highlight {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(81, 159, 200, 0) 30%,
    rgb(81, 159, 200) 30%
  );
}
.highlight::after {
  content: "";
  background-color: rgb(81, 159, 200);
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.highlight-teal {
  @extend .highlight;
  background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #72b591 30%);
}
.highlight-teal {
  @extend .highlight;
  background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #72b591 30%);
}
.highlight-green {
  @extend .highlight;
  background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #d1d35e 30%);
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
    background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #72b591 30%);
    height: 100%;
    margin-top: -3%;
  }
}
.r-slant-green {
  @extend .r-slant;
  &::before,
  ::after {
    background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #d1d35e 30%);
    height: 100%;
    margin-top: -3%;
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
    background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #72b591 30%);
    height: 100%;
    margin-top: -3%;
  }
}
.l-slant-green {
  @extend .l-slant;
  &::before,
  ::after {
    background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #d1d35e 30%);
    height: 100%;
    margin-top: -3%;
  }
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
</style>