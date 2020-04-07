<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Making Hartford Home</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          text
          @click="$refs.fullpage.api.moveTo(index + 1)"
          v-for="(item, index) in menuItems"
          :key="item.title"
        >{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <full-page ref="fullpage" :options="options" id="fullpage">
      <v-content>
        <FullPageTest></FullPageTest>
      </v-content>
    </full-page>
  </v-app>
</template>

<script>
import FullPageTest from "./components/FullPageTest";

export default {
  name: "App",

  components: {
    FullPageTest
  },

  data: () => ({
    menuItems: [
      { title: "Home", path: "/Home" },
      { title: "About", path: "/About" },
      { title: "Maps", path: "/Maps" },
      { title: "Settlement", path: "/Settlement"},
      { title: "Housing", path: "/Housing"},
      { title: "Profiles", path: "/Profiles"},
    ],
    options: {
      licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
      menu: "#menu",
      navigation: true,
      navigationPosition: "left",
      anchors: ["Home", "About", "Maps","Settlement","Housing","Profiles"],
      sectionsColor: [
        "#D6D93B",
        "#2EA1CC",
        "#5EBF99",
        "#D6D93B",
        "#2EA1CC",
        "#5EBF99",
        "#D6D93B",
        "#2EA1CC",
        "#5EBF99"
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
