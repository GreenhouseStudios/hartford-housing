<template>
  <div>
    <v-sheet height="100vh" width="100vw" color="blue">
      <v-container fluid fill-height>
        <v-row>
          <div id="trigger2"></div>
          <v-col cols="2"></v-col>
          <v-col class="d-none d-md-block">
            <div id="about-heading">{{ heading }}</div>
            <div id="about-body">{{ body }}</div>
            <p><span>All land in the State of Connecticut was once Native territory, which is why it is our duty to acknowledge that the University of Connecticut a land grant institution, is existing on Native land. It is important to understand the long-standing history that has brought you to reside on the land and to seek to understand your place within that history. Land acknowledgments do not exist in the past tense or historical context: colonialism is a current ongoing process, and we need to build our mindfulness of our present participation. It is also worth noting that acknowledging the land is Indigenous protocol. <a href="http://www.lspirg.org/knowtheland" style="color: white" rel="noopener">http://www.lspirg.org/knowtheland<span></span></a></span></p>
            <p><span style="font-weight: 400;">The Office for Diversity and Inclusion worked with the three co-founders of the </span><a href="https://www.akomawt.org/" style="color: white" rel="noopener"><span style="font-weight: 400;">Akomawt Educational Initiative</span><span class="glyphicon glyphicon-new-window"></span></a><span style="font-weight: 400;"> to create a land acknowledgment that rightfully recognizes the history of the Native peoples territories. It is important to our office to work with members of the greater Connecticut community to continue our efforts of educating our campus on the value of diversity and inclusion. This initiative continues to fulfill the mission of the Office for Diversity and Inclusion to continue to build a more welcoming and inclusive community. </span></p>
          </v-col>
          <v-col class="d-md-none">
            <div id="m-heading">{{ heading }}</div>
            <div>{{ body }}</div>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      subtitle: "African Amerian, Puerto Rican and West Indian",
      heading: "Land Acknowledgement",
      body: "",
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
};
</script>

<style scoped>
#about-heading{
  font-size: 5rem;
}
#about-body{
  font-size: 2rem;
}
#m-heading{
  font-weight: 800 !important;
  font-size: 2rem;
}
</style>