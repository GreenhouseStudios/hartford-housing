<template>
  <div>
    <h1 class="pa-5">Funders</h1>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-row v-for="(funder, index) in funders" v-bind:key="index" class="pa-5">
          <a class="font-weight-bold" :href="funder.link">{{funder.name}}</a>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Funders",
  data() {
    return {
      funders: [
        {name: "GREENHOUSE STUDIOS", link: "http://www.greenhousestudios.uconn.edu"},
        {name: "AFRICANA STUDIES INSTITUTE (ASI)", link: "https://africana.uconn.edu/"},
        {name: "COLLEGE OF LIBERAL ARTS AND SCIENCES (CLAS), OFFICE OF THE DEAN",link: "https://clas.uconn.edu/"},
        {name: "EL INSTITUTO: INSTITUTE OF LATINA/O, CARIBBEAN, AND LATIN AMERICAN STUDIES (ELIN)",link: "https://elin.uconn.edu/"},
        {name: "HARTFORD STAGE HISTORY DEPARTMENT",link: "https://www.hartfordstage.org/"},
        {name: "HUMAN RIGHTS INSTITUTE",link: "https://humanrights.uconn.edu/"},
        {name: "OFFICE OF DIVERSITY AND INCLUSION (ODI)",link: "https://diversity.uconn.edu/"},
        {name: "PUERTO RICAN AND LATIN AMERICAN CULTURAL CENTER",link: "https://latinx.uconn.edu/"},
        {name: "THE THOMAS J. DODD RESEARCH CENTER URBAN AND COMMUNITY STUDIES", link: "https://dodd.uconn.edu/"},
      ]
    };
  }
};
</script>

<style scoped>
</style>