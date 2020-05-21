<template>
  <div>
    <h1 class="pa-5">Funders</h1>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-row v-for="(funder, index) in funders" v-bind:key="index" class="pa-5">
          <a class="font-weight-bold">{{funder}}</a>
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
        "AFRICANA STUDIES INSTITUTE (ASI)",
        "COLLEGE OF LIBERAL ARTS AND SCIENCES (CLAS), OFFICE OF THE DEAN",
        "EL INSTITUTO: INSTITUTE OF LATINA/O, CARIBBEAN, AND LATIN AMERICAN STUDIES (ELIN)",
        "HARTFORD STAGE HISTORY DEPARTMENT",
        "HUMAN RIGHTS INSTITUTE",
        "OFFICE OF DIVERSITY AND INCLUSION (ODI)",
        "PUERTO RICAN AND LATIN AMERICAN CULTURAL CENTER",
        "THE THOMAS J. DODD RESEARCH CENTER URBAN AND COMMUNITY STUDIES"
      ]
    };
  }
};
</script>

<style scoped>
</style>