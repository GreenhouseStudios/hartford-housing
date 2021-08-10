<template>
  <div>
    <v-container fluid>
      <h1 class="section-header display-2 font-weight-bold mt-10">
        <span class="l-slant-green">Funding</span>
      </h1>
        <!-- <v-col>
          <v-row
            v-for="(funder, index) in funders"
            v-bind:key="index"
            class="pa-5"
          >
          <v-card tile class="foundercard pa-5" color="lightBlack">
            <v-img v-bind:src="funder.image"></v-img> 
            <div class="cardtext">
              <a class="font-weight-bold" :href="funder.link">
                {{ funder.name }}
              </a>
            </div>
          </v-card>
          </v-row>
        </v-col> -->
        <div>
          <div v-for="(funder, index) in funders"
            v-bind:key="index"
            class="pa-1 foundercard"
            style="display:inline-block;">
          <v-card tile class="pa-5" :color="tileColor()">
            <v-responsive :aspect-ratio="1">
            <a class="font-weight-bold" :href="funder.link">
              <v-img class="cardimg" v-bind:src="funder.image"></v-img>
            </a>
            <!-- <div class="cardtext">
              <a class="font-weight-bold" :href="funder.link">
                {{ funder.name }}
              </a>
            </div> -->
            </v-responsive>
          </v-card>
          </div>
        </div>

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
      colorIndex: 1,
      cardColors: ["green", "teal", "blue"],
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
          image: require('../assets/Logos/green_house_studios.png'),
          link: "http://www.greenhousestudios.uconn.edu",
        },
        {
          name: "AFRICANA STUDIES INSTITUTE (ASI)",
          image: require('../assets/Logos/africana_studies_institue.png'),
          link: "https://africana.uconn.edu/",
        },
        {
          name:
            "COLLEGE OF LIBERAL ARTS AND SCIENCES (CLAS), OFFICE OF THE DEAN",
          image: require('../assets/Logos/college_of_liberal_arts_and_sciences.png'),
          link: "https://clas.uconn.edu/",
        },
        {
          name:
            "EL INSTITUTO: INSTITUTE OF LATINA/O, CARIBBEAN, AND LATIN AMERICAN STUDIES (ELIN)",
          image: require('../assets/Logos/el_instituto.png'),
          link: "https://elin.uconn.edu/",
        },
        {
          name: "HARTFORD STAGE HISTORY DEPARTMENT",
          image: require('../assets/Logos/hartford_stage.png'),
          link: "https://www.hartfordstage.org/",
        },
        {
          name: "HUMAN RIGHTS INSTITUTE",
          image: require('../assets/Logos/human_rights_institute.png'),
          link: "https://humanrights.uconn.edu/",
        },
        {
          name: "OFFICE OF DIVERSITY AND INCLUSION (ODI)",
          image: require('../assets/Logos/diversity_and_inclusion.png'),
          link: "https://diversity.uconn.edu/",
        },
        {
          name: "PUERTO RICAN AND LATIN AMERICAN CULTURAL CENTER",
          image: require('../assets/Logos/prlacc.png'),
          link: "https://latinx.uconn.edu/",
        },
        {
          name:
            "THE THOMAS J. DODD RESEARCH CENTER URBAN AND COMMUNITY STUDIES",
          image: require('../assets/Logos/human_rights_dodd_impact.png'),
          link: "https://dodd.uconn.edu/",
        },
      ],
    };
  },
  methods: {
    tileColor(){
      if(this.colorIndex == 2){
        this.colorIndex = 1;
      }else{
      this.colorIndex++;
      }
      return this.cardColors[this.colorIndex];
    }
  },
};
</script>

<style scoped>
.foundercard{
  margin: auto;
  width:  33%;
  height: auto;
}
.cardtext{
  text-align: center;
  padding-top: 15px;
}
.outline {
  outline-style: solid;
  outline-color: #72b591;
  outline-width: 3px;
}
.cardimg {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>