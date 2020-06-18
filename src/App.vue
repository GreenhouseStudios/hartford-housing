<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="sideNav">
      <v-list-item-content>
        <v-list dense>
          <v-list-item
            v-for="section in sections"
            :key="section.title"  
          >
          <v-list-item-title>{{ section.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-item-content>
    </v-navigation-drawer>-->

    <v-app-bar app color="darkBlack" dark>
      <router-link to="/" id="site-title">
        <v-toolbar-title>Hartford Bound</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-lg-block">
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

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon class="d-md-none ma-2" color="white" @click="drawer" v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(section,j) in sections"
            :key="section.title"
            @click="navigateToSection(j)"
          >
            <v-list-item-title>{{ section.title }}</v-list-item-title>
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

    <v-footer app color="darkBlack" class="font-weight-bold d-none d-lg-flex">
      <v-col>
        <router-link to="/People" class="pr-4">People</router-link>
        <router-link to="/Funders" class="pr-4">Funders</router-link>
        <router-link to="/Contact" class="pr-4">Contact</router-link>
        <router-link to="/Permissions" class="pr-4">Permissions</router-link>
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
      },
     
    ],
    menuItems: [
      { title: "Home", path: "/Home" },
      { title: "About", path: "/About" },
      { title: "Introduction", path: "/Introduction"},  
      { title: "Maps", path: "/Maps" },
      { title: "Settlement", path: "/Settlement" },
      { title: "Housing", path: "/Housing" },
      { title: "Timeline", path: "/Timeline"},
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
      autoScrolling: false,
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      controlArrows: false,
      anchors: [
        "Home",
        "About",
        "Introduction",
        "Maps",
        "Settlement",
        "Housing",
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
      if (this.$route.name == "Main") this.$refs.fullpage.api.moveTo(i + 1);
      else
        this.$router.push("/").then(() => {
          this.$refs.fullpage.api.moveTo(i + 1);
        });
    },
    navigateToSlide: function(i, index) {
      if (this.$route.name == "Main")
        this.$refs.fullpage.api.moveTo(i + 1, index);
      else
        this.$router.push("/").then(() => {
          this.$refs.fullpage.api.moveTo(i + 1, index);
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
v-application {
  font-family: "Gilroy Extrabold" !important;

}
.v-btn {
  font-weight: 800 !important;
}
v-footer {
  z-index: -1;
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
  bottom: 125px;
  margin: 0 auto;
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
.section-header{
  text-align: center;
}
html,body{
  overflow-x: hidden;
}
body {
  position: relative
}
</style>