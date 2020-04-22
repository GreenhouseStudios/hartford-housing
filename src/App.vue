<template>
  <v-app class="myFont">
    <v-app-bar app color="darkBlack" dark>
      <v-toolbar-title>Making Hartford Home</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <!-- <li v-for="(section,index) in sections" v-bind:key="index" data-menuanchor="section.title">
          <a v-bind:href="tagPrefix + section.title">{{section.title}}</a>
        </li>-->
        <!-- <v-btn
          text
          @click="$refs.fullpage.api.moveTo(index + 1)"
          v-for="(section, index) in sections"
          :key="section.title"
        >{{section.title}}</v-btn>-->
        <v-menu
          v-for="(section,i) in sections"
          :open-on-hover="true"
          :offset-y="true"
          :key="section.title"
        >
          <template v-slot:activator="{ on }">
            <v-btn text @click="$refs.fullpage.api.moveTo(i + 1)" dark v-on="on">{{section.title}}</v-btn>
          </template>
          <v-list v-if="sections[i].slides.length">
            <v-list-item
              v-for="(item, index) in section.slides"
              @click="$refs.fullpage.api.moveTo(i + 1,index)"
              :key="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>



    <v-content>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <v-container fluid>
          <v-row>
            <v-col :cols="undefined"></v-col>
            <v-col :cols="10">
              <About></About>
              <Introduction></Introduction>
              <!-- <div v-for="(section,index) in sections" v-bind:key="index" class="section">
                <h3 class="display-3">{{section.title}}</h3>
                <div v-for="(slide,j) in section.slides" v-bind:key="j" class="slide">
                  <h3>{{slide}}</h3>
                  <p>{{fillerText}}</p>
                </div>
              </div>-->
            </v-col>
            <v-col :cols="undefined">
              
            </v-col>
          </v-row>
        </v-container>
      </full-page>
    </v-content>
    <v-footer app>
      <a href>Funders</a>
      <a href>Contact</a>
      <v-spacer></v-spacer>
      &copy; {{new Date().getFullYear()}}
    </v-footer>
  </v-app>
</template>

<script>
// import FullPageTest from "./components/FullPageTest";
import About from "./components/About";
import Introduction from "./components/Introduction";

export default {
  name: "App",

  components: {
    // FullPageTest
    About,
    Introduction,
  },

  data: () => ({
    fillerText:
      "Challenges and opportunities; collective impact incubator energize natural resources. Shared value; circular innovate social entrepreneur impact investing change-makers challenges and opportunities B-corp outcomes. Disrupt fairness empower, blended value framework. Boots on the ground; move the needle global, leverage improve the world milestones benefit corporation greenwashing ideate. But; save the world, her body her rights LGBTQ+ a efficient storytelling empower external partners. Framework society circular thought leadership expose the truth strategy strategy big data save the world. Replicable shared value mass incarceration, thought partnership, big data paradigm engaging granular. Grit change-makers triple bottom line energize LGBTQ+ low-hanging fruit thought leadership. Replicable overcome injustice thought partnership empathetic rubric when blended value synergy uplift. Thought provoking innovation thought provoking academic, effective altruism collaborative consumption indicators movements replicable. Shared unit of analysis empower communities innovate youth social enterprise expose the truth. Communities technology; compelling; communities inspiring transparent; social entrepreneurship. Inspirational framework collective impact efficient.",
    tagPrefix: "#",
    sections: [
      {
        title: "About",
        slides: []
      },
      {
        title: "Introduction",
        slides: ["Introduction: “And the Migrants Kept Coming”","African American Settlement","Puerto Rican Settlement","West Indian Settlement",]
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
          "Headlines"
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
        title: "Profiles",
        slides: ["Tenant Activists Profiles", "Historic Firsts"]
      }
    ],
    menuItems: [
      { title: "Home", path: "/Home" },
      { title: "About", path: "/About" },
      { title: "Maps", path: "/Maps" },
      { title: "Settlement", path: "/Settlement" },
      { title: "Housing", path: "/Housing" },
      { title: "Profiles", path: "/Profiles" }
    ],
    options: {
      licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
      // menu: "#menu",
      navigation: false,
      navigationPosition: "right",
      // sectionSelector: '.section',
      // slideSelector: '.fp-slide',
      autoScrolling: false,
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      controlArrows: false,
      anchors: [
        "About",
        "Introduction",
        "Maps",
        "Settlement",
        "Housing",
        "Profiles"
      ],

      // sectionsColor: [
      //   "#D6D93B",
      //   "#2EA1CC",
      //   "#5EBF99",
      //   "#D6D93B",
      //   "#2EA1CC",
      //   "#5EBF99",
      //   "#D6D93B",
      //   "#2EA1CC",
      //   "#5EBF99"
      // ],

      sectionsColor: [
        "#FFFFFF"
        // "#DEDEDE",
        // "#DEDEDE",
        // "#DEDEDE",
        // "#DEDEDE",
        // "#DEDEDE",
        // "#DEDEDE",
        // "#DEDEDE"
      ]
    }
  }),
  methods: {
    moveDown: function() {
      this.$refs.fullpage.api.moveSectionDown();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
html,
body {
  font-family: Georgia, "Times New Roman", Times, serif;
}
.v-applicaton {
  font-family: Georgia, "Times New Roman", Times, serif;
}
v-footer a {
  margin: 100px 100px;
  padding: 100px;
}
h3 {
  margin: 0 auto;
  top: 100px;
}
.fp-slidesNav.fp-bottom {
  bottom: 100px;
  left: 500px;
}
/* .myFont{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
} */
</style>