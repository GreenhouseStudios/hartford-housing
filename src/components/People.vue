<template>
  <div>
    <v-container fluid>
      <h1 class="section-header display-2 font-weight-bold mt-10">Funding</h1>
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-row
            v-for="(funder, index) in funders"
            v-bind:key="index"
            class="pa-5"
          >
            <a class="font-weight-bold" :href="funder.link">{{
              funder.name
            }}</a>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>

      <h1 class="section-header display-2 font-weight-bold mt-10">People</h1>
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-row
            v-for="(person, index) in people"
            v-bind:key="index"
            class="pa-5"
          >
            <a class="font-weight-bold" :href="person.link">{{
              person.name
            }}</a>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PEOPLE",
  data() {
    return {
      people: [
        {
          name: "DR. FIONA VERNAL",
          link: "https://greenhousestudios.uconn.edu/person/fiona-vernal//",
        },
        { name: "LAURA BEDOYA" },
        { name: "MALACHI BRIDGES" },
        { name: "GEORGIA BROWN" },
        { name: "AALIYAH CAMPBELL" },
        {
          name: "JAMES KOLB",
          link: "https://greenhousestudios.uconn.edu/person/james-kolb/",
        },
        { name: "STEPHANIE ORTS", link: "https://www.stephanieorts.com/" },
        {
          name: "TOM LEE",
          link: "https://greenhousestudios.uconn.edu/person/tom-lee/",
        },
        {
          name: "MACKENZIE FOX",
          link: "https://greenhousestudios.uconn.edu/person/mackenzie-fox/",
        },
        {
          name: "CARLY WANNER-HYDE",
          link: "https://greenhousestudios.uconn.edu/person/carly-wanner-hyde/",
        },
      ],
      funders: [
        {
          name: "GREENHOUSE STUDIOS",
          link: "http://www.greenhousestudios.uconn.edu",
        },
        {
          name: "AFRICANA STUDIES INSTITUTE (ASI)",
          link: "https://africana.uconn.edu/",
        },
        {
          name:
            "COLLEGE OF LIBERAL ARTS AND SCIENCES (CLAS), OFFICE OF THE DEAN",
          link: "https://clas.uconn.edu/",
        },
        {
          name:
            "EL INSTITUTO: INSTITUTE OF LATINA/O, CARIBBEAN, AND LATIN AMERICAN STUDIES (ELIN)",
          link: "https://elin.uconn.edu/",
        },
        {
          name: "HARTFORD STAGE HISTORY DEPARTMENT",
          link: "https://www.hartfordstage.org/",
        },
        {
          name: "HUMAN RIGHTS INSTITUTE",
          link: "https://humanrights.uconn.edu/",
        },
        {
          name: "OFFICE OF DIVERSITY AND INCLUSION (ODI)",
          link: "https://diversity.uconn.edu/",
        },
        {
          name: "PUERTO RICAN AND LATIN AMERICAN CULTURAL CENTER",
          link: "https://latinx.uconn.edu/",
        },
        {
          name:
            "THE THOMAS J. DODD RESEARCH CENTER URBAN AND COMMUNITY STUDIES",
          link: "https://dodd.uconn.edu/",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>