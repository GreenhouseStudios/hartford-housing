<template>
  <div>
    <v-sheet height="100vh" width="100vw" color="blue">
      <v-container fluid fill-height>
        <v-row>
          <div id="trigger2"></div>
          <v-col class="d-block d-sm-none" cols="1"></v-col>
          <v-col class="d-none d-sm-block" cols="2"></v-col>
          <v-col class="d-none d-md-block">
            <div id="about-heading" class="font-weight-bold">
              <span class="highlight-teal">
                {{ heading }}
              </span>
            </div>
            <div id="about-body">{{ body }}</div>
            <div id="about-body">
              <p>
                The University of Connecticut’s Office for Diversity and
                Inclusion worked with the three co-founders of the
                <a style="color: white" href="https://www.akomawt.org/"
                  >Akomawt Educational Initiative</a
                >
                to create a land acknowledgment that rightfully recognizes the
                history of Native peoples’ territories.
              </p>
              <p>
                Any exploration of how Hartford became home begins with
                acknowledging that the land on which we gather in Connecticut is
                the territory of the Mohegan, Mashantucket Pequot, Eastern
                Pequot, Schaghticoke, Golden Hill Paugussett,  Nipmuc, and
                Lenape Peoples, who have stewarded this land throughout the
                generations. We thank them for their strength and resilience in
                protecting this land and aspire to uphold our responsibilities
                according to their example
              </p>
            </div>
          </v-col>
          <v-col class="d-md-none">
            <div id="m-heading">
              <span class="highlight-teal">
                {{ heading }}
              </span>
            </div>
            <p>
              The University of Connecticut’s Office for Diversity and Inclusion
              worked with the three co-founders of the
              <a style="color: white" href="https://www.akomawt.org/"
                >Akomawt Educational Initiative</a
              >
              to create a land acknowledgment that rightfully recognizes the
              history of Native peoples’ territories.
            </p>
            <p>
              Any exploration of how Hartford became home begins with
              acknowledging that the land on which we gather in Connecticut is
              the territory of the Mohegan, Mashantucket Pequot, Eastern Pequot,
              Schaghticoke, Golden Hill Paugussett,  Nipmuc, and Lenape Peoples,
              who have stewarded this land throughout the generations. We thank
              them for their strength and resilience in protecting this land and
              aspire to uphold our responsibilities according to their example
            </p>
          </v-col>
          <v-col class="d-block d-sm-none" cols="1"></v-col>
          <v-col class="d-none d-sm-block" cols="2"></v-col>
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
  font-size: 4rem;
}
#about-body {
  font-size: 1.5rem;
}
#m-heading {
  font-weight: 800 !important;
  font-size: 2rem;
}
.v-sheet{
  border-radius: 0;
}
@media only screen and(max-width: 600px) {
p{
  font-size: .9rem;
}
}
@media only screen and(min-width: 600px) {
p{
  font-size: 1.5rem;
}
}
</style>