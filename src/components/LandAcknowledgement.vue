<template>
  <div>
    <v-sheet height="100vh" width="100vw" color="blue">
      <v-container fluid fill-height>
        <v-row>
          <div id="trigger2"></div>
          <v-col cols="0" md="2"></v-col>
          <v-col class="d-none d-md-block">
            <div id="about-heading">{{ heading }}</div>
            <div id="about-body">{{ body }}</div>
            <p>
            The University of Connecticut’s Office for Diversity and Inclusion
            worked with the three co-founders of the <a style="color: white;" href="https://www.akomawt.org/">Akomawt Educational
            Initiative</a> to create a land acknowledgment that rightfully
            recognizes the history of Native peoples’ territories. </p>
            <p>
            Any exploration of how Hartford became home begins with acknowledging
            that the land on which we gather in Connecticut is the territory of
            the Mohegan, Mashantucket Pequot, Eastern Pequot, Schaghticoke,
            Golden Hill Paugussett,  Nipmuc, and Lenape Peoples, who have
            stewarded this land throughout the generations. We thank them for
            their strength and resilience in protecting this land and aspire to
            uphold our responsibilities according to their example
            </p>
          </v-col>
          <v-col class="d-md-none">
            <div id="m-heading">{{ heading }}</div>
               <p>
            The University of Connecticut’s Office for Diversity and Inclusion
            worked with the three co-founders of the <a style="color: white;" href="https://www.akomawt.org/">Akomawt Educational
            Initiative</a> to create a land acknowledgment that rightfully
            recognizes the history of Native peoples’ territories. </p>
            <p>
            Any exploration of how Hartford became home begins with acknowledging
            that the land on which we gather in Connecticut is the territory of
            the Mohegan, Mashantucket Pequot, Eastern Pequot, Schaghticoke,
            Golden Hill Paugussett,  Nipmuc, and Lenape Peoples, who have
            stewarded this land throughout the generations. We thank them for
            their strength and resilience in protecting this land and aspire to
            uphold our responsibilities according to their example
            </p>
          </v-col>
          <v-col cols="0" md="2"></v-col>
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
#about-heading {
  font-size: 5rem;
}
#about-body {
  font-size: 2rem;
}
#m-heading {
  font-weight: 800 !important;
  font-size: 2rem;
}
</style>